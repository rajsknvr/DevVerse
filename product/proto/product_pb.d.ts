// package: product
// file: product.proto

import * as jspb from "google-protobuf";

export class ProductRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductRequest;
  static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
  export type AsObject = {
    id: string,
  }
}

export class AllProductRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllProductRequest): AllProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllProductRequest;
  static deserializeBinaryFromReader(message: AllProductRequest, reader: jspb.BinaryReader): AllProductRequest;
}

export namespace AllProductRequest {
  export type AsObject = {
  }
}

export class AllProductResponse extends jspb.Message {
  clearProductsList(): void;
  getProductsList(): Array<ProductResponse>;
  setProductsList(value: Array<ProductResponse>): void;
  addProducts(value?: ProductResponse, index?: number): ProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllProductResponse): AllProductResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllProductResponse;
  static deserializeBinaryFromReader(message: AllProductResponse, reader: jspb.BinaryReader): AllProductResponse;
}

export namespace AllProductResponse {
  export type AsObject = {
    productsList: Array<ProductResponse.AsObject>,
  }
}

export class ProductResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductResponse): ProductResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductResponse;
  static deserializeBinaryFromReader(message: ProductResponse, reader: jspb.BinaryReader): ProductResponse;
}

export namespace ProductResponse {
  export type AsObject = {
    id: string,
    name: string,
    price: number,
  }
}

