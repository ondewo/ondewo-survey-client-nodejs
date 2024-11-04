// package: google.api
// file: google/api/endpoint.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Endpoint extends jspb.Message { 
    getName(): string;
    setName(value: string): Endpoint;
    clearAliasesList(): void;
    getAliasesList(): Array<string>;
    setAliasesList(value: Array<string>): Endpoint;
    addAliases(value: string, index?: number): string;
    clearFeaturesList(): void;
    getFeaturesList(): Array<string>;
    setFeaturesList(value: Array<string>): Endpoint;
    addFeatures(value: string, index?: number): string;
    getTarget(): string;
    setTarget(value: string): Endpoint;
    getAllowCors(): boolean;
    setAllowCors(value: boolean): Endpoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Endpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Endpoint;
    static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
    export type AsObject = {
        name: string,
        aliasesList: Array<string>,
        featuresList: Array<string>,
        target: string,
        allowCors: boolean,
    }
}
