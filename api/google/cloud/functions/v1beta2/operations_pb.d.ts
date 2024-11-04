// package: google.cloud.functions.v1beta2
// file: google/cloud/functions/v1beta2/operations.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class OperationMetadataV1Beta2 extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): OperationMetadataV1Beta2;
    getType(): OperationType;
    setType(value: OperationType): OperationMetadataV1Beta2;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): google_protobuf_any_pb.Any | undefined;
    setRequest(value?: google_protobuf_any_pb.Any): OperationMetadataV1Beta2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationMetadataV1Beta2.AsObject;
    static toObject(includeInstance: boolean, msg: OperationMetadataV1Beta2): OperationMetadataV1Beta2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationMetadataV1Beta2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationMetadataV1Beta2;
    static deserializeBinaryFromReader(message: OperationMetadataV1Beta2, reader: jspb.BinaryReader): OperationMetadataV1Beta2;
}

export namespace OperationMetadataV1Beta2 {
    export type AsObject = {
        target: string,
        type: OperationType,
        request?: google_protobuf_any_pb.Any.AsObject,
    }
}

export enum OperationType {
    OPERATION_UNSPECIFIED = 0,
    CREATE_FUNCTION = 1,
    UPDATE_FUNCTION = 2,
    DELETE_FUNCTION = 3,
}
