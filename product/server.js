const fastify = require('fastify')({ logger: true });
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
var reflection = require('@grpc/reflection');

// Sample product data
const products = [
  { id: "1", name: 'Laptop', price: 1000 },
  { id: "2", name: 'Phone', price: 500 },
  { id: "3", name: 'Tablet', price: 300 },
];

// Fastify REST endpoints
fastify.get('/product/:id', async (request, reply) => {
  const productId = parseInt(request.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    return reply.send(product);
  } else {
    return reply.status(404).send({ error: 'Product not found' });
  }
});

fastify.get('/products', async (request, reply) => {
  return reply.send(products);
});

// gRPC Setup
const packageDefinition = protoLoader.loadSync('./protos/product.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const productProto = grpc.loadPackageDefinition(packageDefinition).product;

// gRPC service implementations
const getProduct = (call, callback) => {
  const productId = call.request.id;
  const product = products.find((p) => p.id === productId);

  if (product) {
    callback(null, product);
  } else {
    callback({
      code: grpc.status.NOT_FOUND,
      details: 'Product not found',
    });
  }
};

const getAllProducts = (_, callback) => {
  callback(null, { products });
};

// Create gRPC server
const grpcServer = new grpc.Server();

var reflection = new reflection.ReflectionService(packageDefinition);

reflection.addToServer(grpcServer);

// Register gRPC services
grpcServer.addService(productProto.ProductService.service, {
  GetProduct: getProduct,
  GetAllProducts: getAllProducts,
});


// Start gRPC server
grpcServer.bindAsync(
  '0.0.0.0:6001',
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(`Failed to start gRPC server: ${err.message}`);
      return;
    }
    console.log(`🚀 gRPC server running on port ${port}`);
    grpcServer.start();
  }
);

// Start Fastify server
const start = async () => {
  try {
    await fastify.listen({ port: 5001, host: '0.0.0.0' });
    fastify.log.info(`🚀 REST server running at http://localhost:5001`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();