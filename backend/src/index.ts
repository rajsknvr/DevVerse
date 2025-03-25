import * as grpc from '@grpc/grpc-js';
import { ApolloServer, gql } from 'apollo-server-fastify';
import fastify from 'fastify';

import { ProductServiceClient } from './proto/product/product_grpc_pb'; 
import { UserServiceClient } from './proto/user/user_grpc_pb';
import { AllProductRequest, ProductRequest, ProductResponse } from './proto/product/product_pb'; 
import { AllUserRequest, UserRequest, UserResponse } from './proto/user/user_pb';


const addressProduct = 'product.default.svc.cluster.local:6001';  // can try with product:6001
const addressUser = 'user.default.svc.cluster.local:6002';  // can try with user:6002
const credentials = grpc.credentials.createInsecure(); 


const productClient = new ProductServiceClient(addressProduct, credentials);
const userClient = new UserServiceClient(addressUser, credentials);


const typeDefs = gql`
  type Product {
    id: String
    name: String
    price: Float
  }

  type User {
    id: String
    name: String
    email: String
  }

  type Query {
    getProduct(id: String!): Product
    getAllProducts: [Product]
    getUser(id: String!): User
    getAllUsers: [User]
  }
`;

const resolvers = {
  Query: {

    getProduct: async (_: any, { id }: { id: string }): Promise<ProductResponse.AsObject> => {
      try {

        const request = new ProductRequest();
        request.setId(id);


        const response = await new Promise<ProductResponse>((resolve, reject) => {
          productClient.getProduct(request, (error:any, response) => {
            if (error || !response) {
              reject(new Error(`Error fetching product with ID ${id}: ${error.message}`));
            } else {
              resolve(response);
            }
          });
        });

        return {
          id: response.getId(),
          name: response.getName(),
          price: response.getPrice(),
        } as ProductResponse.AsObject
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(`Error fetching product with ID ${id}: ${error.message}`);
        }
        throw new Error(`Unknown error fetching product with ID ${id}`);
      }
    },


    getAllProducts: async (): Promise<ProductResponse.AsObject[]> => {
      try {
        const request = new AllProductRequest();
        const response = await new Promise<ProductResponse[]>((resolve, reject) => {
          productClient.getAllProducts(request, (error:any, response) => {
            if (error || !response) {
              reject(new Error(`Error fetching all products: ${error.message}`));
            } else {
              resolve(response.getProductsList());
            }
          });
        });
        return response.map(product => ({
          id: product.getId(),
          name: product.getName(),
          price: product.getPrice(),
        }));
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(`Error fetching all products: ${error.message}`);
        }
        throw new Error(`Unknown error fetching all products`);
      }
    },


    getUser: async (_: any, { id }: { id: string }): Promise<UserResponse.AsObject> => {
      try {
       
        const request = new UserRequest();
        request.setId(id);


        const response = await new Promise<UserResponse>((resolve, reject) => {
          userClient.getUser(request, (error:any, response) => {
            if (error || !response) {
              reject(new Error(`Error fetching user with ID ${id}: ${error.message}`));
            } else {
              resolve(response);
            }
          });
        });

        return {
          id: response.getId(),
          name: response.getName(),
          email: response.getEmail(),
        } as UserResponse.AsObject
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(`Error fetching user with ID ${id}: ${error.message}`);
        }
        throw new Error(`Unknown error fetching user with ID ${id}`);
      }
    },


    getAllUsers: async (): Promise<UserResponse.AsObject[]> => {
      try {
        const request = new AllUserRequest();
        const response = await new Promise<UserResponse[]>((resolve, reject) => {
          userClient.getAllUsers(request, (error:any, response) => {
            if (error || !response) {
              reject(new Error(`Error fetching all users: ${error.message}`));
            } else {
              resolve(response.getUsersList());
            }
          });
        });
        return response.map(user => ({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
        }))
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(`Error fetching all users: ${error.message}`);
        }
        throw new Error(`Unknown error fetching all users`);
      }
    },
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const fastifyApp = fastify();



fastifyApp.get('/api/products', async (_, reply) => {
  try {
    const request = new AllProductRequest();
    const response = await new Promise<ProductResponse[]>((resolve, reject) => {
      productClient.getAllProducts(request, (error:any, response) => {
        if (error || !response) {
          reject(new Error(`Error fetching all products: ${error.message}`));
        } else {
          resolve(response.getProductsList());
        }
      });
    });

    reply.send(
      response.map(product => ({
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
      }))
    );
  } catch (error:any) {
    reply.status(500).send({ error: error.message });
  }
});

async function startServer() {
  await server.start();
  fastifyApp.register(server.createHandler());

  fastifyApp.listen({ port: 4001 }, (err: any, address: any) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`🚀 GraphQL server ready at ${address}/graphql`);
  });
}

startServer();
