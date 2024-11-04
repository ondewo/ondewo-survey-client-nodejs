// package: google.api
// file: google/api/experimental/experimental.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_api_experimental_authorization_config_pb from "../../../google/api/experimental/authorization_config_pb";

export class Experimental extends jspb.Message { 

    hasAuthorization(): boolean;
    clearAuthorization(): void;
    getAuthorization(): google_api_experimental_authorization_config_pb.AuthorizationConfig | undefined;
    setAuthorization(value?: google_api_experimental_authorization_config_pb.AuthorizationConfig): Experimental;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Experimental.AsObject;
    static toObject(includeInstance: boolean, msg: Experimental): Experimental.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Experimental, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Experimental;
    static deserializeBinaryFromReader(message: Experimental, reader: jspb.BinaryReader): Experimental;
}

export namespace Experimental {
    export type AsObject = {
        authorization?: google_api_experimental_authorization_config_pb.AuthorizationConfig.AsObject,
    }
}
