// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_AllUserRequest(arg) {
  if (!(arg instanceof user_pb.AllUserRequest)) {
    throw new Error('Expected argument of type user.AllUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_AllUserRequest(buffer_arg) {
  return user_pb.AllUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_AllUserResponse(arg) {
  if (!(arg instanceof user_pb.AllUserResponse)) {
    throw new Error('Expected argument of type user.AllUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_AllUserResponse(buffer_arg) {
  return user_pb.AllUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserRequest(arg) {
  if (!(arg instanceof user_pb.UserRequest)) {
    throw new Error('Expected argument of type user.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserRequest(buffer_arg) {
  return user_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type user.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/user.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_UserRequest,
    requestDeserialize: deserialize_user_UserRequest,
    responseSerialize: serialize_user_UserResponse,
    responseDeserialize: deserialize_user_UserResponse,
  },
  getAllUsers: {
    path: '/user.UserService/GetAllUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.AllUserRequest,
    responseType: user_pb.AllUserResponse,
    requestSerialize: serialize_user_AllUserRequest,
    requestDeserialize: deserialize_user_AllUserRequest,
    responseSerialize: serialize_user_AllUserResponse,
    responseDeserialize: deserialize_user_AllUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService, 'UserService');
