// GENERATED CODE -- DO NOT EDIT!

// package: user
// file: user.proto

import * as user_pb from "./user_pb";
import * as grpc from "@grpc/grpc-js";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUser: grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserResponse>;
  getAllUsers: grpc.MethodDefinition<user_pb.AllUserRequest, user_pb.AllUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
  getUser: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserResponse>;
  getAllUsers: grpc.handleUnaryCall<user_pb.AllUserRequest, user_pb.AllUserResponse>;
}

export class UserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUser(argument: user_pb.UserRequest, callback: grpc.requestCallback<user_pb.UserResponse>): grpc.ClientUnaryCall;
  getUser(argument: user_pb.UserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.UserResponse>): grpc.ClientUnaryCall;
  getUser(argument: user_pb.UserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.UserResponse>): grpc.ClientUnaryCall;
  getAllUsers(argument: user_pb.AllUserRequest, callback: grpc.requestCallback<user_pb.AllUserResponse>): grpc.ClientUnaryCall;
  getAllUsers(argument: user_pb.AllUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.AllUserResponse>): grpc.ClientUnaryCall;
  getAllUsers(argument: user_pb.AllUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.AllUserResponse>): grpc.ClientUnaryCall;
}
