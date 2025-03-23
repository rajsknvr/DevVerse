// GENERATED CODE -- DO NOT EDIT!

// package: product
// file: product.proto

import * as product_pb from "./product_pb";
import * as grpc from "@grpc/grpc-js";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getProduct: grpc.MethodDefinition<product_pb.ProductRequest, product_pb.ProductResponse>;
  getAllProducts: grpc.MethodDefinition<product_pb.AllProductRequest, product_pb.AllProductResponse>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer extends grpc.UntypedServiceImplementation {
  getProduct: grpc.handleUnaryCall<product_pb.ProductRequest, product_pb.ProductResponse>;
  getAllProducts: grpc.handleUnaryCall<product_pb.AllProductRequest, product_pb.AllProductResponse>;
}

export class ProductServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getProduct(argument: product_pb.ProductRequest, callback: grpc.requestCallback<product_pb.ProductResponse>): grpc.ClientUnaryCall;
  getProduct(argument: product_pb.ProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ProductResponse>): grpc.ClientUnaryCall;
  getProduct(argument: product_pb.ProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ProductResponse>): grpc.ClientUnaryCall;
  getAllProducts(argument: product_pb.AllProductRequest, callback: grpc.requestCallback<product_pb.AllProductResponse>): grpc.ClientUnaryCall;
  getAllProducts(argument: product_pb.AllProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.AllProductResponse>): grpc.ClientUnaryCall;
  getAllProducts(argument: product_pb.AllProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.AllProductResponse>): grpc.ClientUnaryCall;
}
