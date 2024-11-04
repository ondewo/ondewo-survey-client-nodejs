// package: google.cloud.websecurityscanner.v1alpha
// file: google/cloud/websecurityscanner/v1alpha/crawled_url.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CrawledUrl extends jspb.Message { 
    getHttpMethod(): string;
    setHttpMethod(value: string): CrawledUrl;
    getUrl(): string;
    setUrl(value: string): CrawledUrl;
    getBody(): string;
    setBody(value: string): CrawledUrl;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CrawledUrl.AsObject;
    static toObject(includeInstance: boolean, msg: CrawledUrl): CrawledUrl.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CrawledUrl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CrawledUrl;
    static deserializeBinaryFromReader(message: CrawledUrl, reader: jspb.BinaryReader): CrawledUrl;
}

export namespace CrawledUrl {
    export type AsObject = {
        httpMethod: string,
        url: string,
        body: string,
    }
}
