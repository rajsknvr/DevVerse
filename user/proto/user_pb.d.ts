// package: user
// file: user.proto

import * as jspb from "google-protobuf";

export class UserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    id: string,
  }
}

export class AllUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllUserRequest): AllUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllUserRequest;
  static deserializeBinaryFromReader(message: AllUserRequest, reader: jspb.BinaryReader): AllUserRequest;
}

export namespace AllUserRequest {
  export type AsObject = {
  }
}

export class AllUserResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<UserResponse>;
  setUsersList(value: Array<UserResponse>): void;
  addUsers(value?: UserResponse, index?: number): UserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllUserResponse): AllUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllUserResponse;
  static deserializeBinaryFromReader(message: AllUserResponse, reader: jspb.BinaryReader): AllUserResponse;
}

export namespace AllUserResponse {
  export type AsObject = {
    usersList: Array<UserResponse.AsObject>,
  }
}

export class UserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
  }
}

