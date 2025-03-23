// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');

function serialize_product_AllProductRequest(arg) {
  if (!(arg instanceof product_pb.AllProductRequest)) {
    throw new Error('Expected argument of type product.AllProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_AllProductRequest(buffer_arg) {
  return product_pb.AllProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_AllProductResponse(arg) {
  if (!(arg instanceof product_pb.AllProductResponse)) {
    throw new Error('Expected argument of type product.AllProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_AllProductResponse(buffer_arg) {
  return product_pb.AllProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductRequest(arg) {
  if (!(arg instanceof product_pb.ProductRequest)) {
    throw new Error('Expected argument of type product.ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductRequest(buffer_arg) {
  return product_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductResponse(arg) {
  if (!(arg instanceof product_pb.ProductResponse)) {
    throw new Error('Expected argument of type product.ProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductResponse(buffer_arg) {
  return product_pb.ProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  getProduct: {
    path: '/product.ProductService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.ProductRequest,
    responseType: product_pb.ProductResponse,
    requestSerialize: serialize_product_ProductRequest,
    requestDeserialize: deserialize_product_ProductRequest,
    responseSerialize: serialize_product_ProductResponse,
    responseDeserialize: deserialize_product_ProductResponse,
  },
  getAllProducts: {
    path: '/product.ProductService/GetAllProducts',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.AllProductRequest,
    responseType: product_pb.AllProductResponse,
    requestSerialize: serialize_product_AllProductRequest,
    requestDeserialize: deserialize_product_AllProductRequest,
    responseSerialize: serialize_product_AllProductResponse,
    responseDeserialize: deserialize_product_AllProductResponse,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService, 'ProductService');
