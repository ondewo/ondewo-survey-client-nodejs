// package: google.logging.type
// file: google/logging/type/http_request.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class HttpRequest extends jspb.Message { 
    getRequestMethod(): string;
    setRequestMethod(value: string): HttpRequest;
    getRequestUrl(): string;
    setRequestUrl(value: string): HttpRequest;
    getRequestSize(): number;
    setRequestSize(value: number): HttpRequest;
    getStatus(): number;
    setStatus(value: number): HttpRequest;
    getResponseSize(): number;
    setResponseSize(value: number): HttpRequest;
    getUserAgent(): string;
    setUserAgent(value: string): HttpRequest;
    getRemoteIp(): string;
    setRemoteIp(value: string): HttpRequest;
    getServerIp(): string;
    setServerIp(value: string): HttpRequest;
    getReferer(): string;
    setReferer(value: string): HttpRequest;

    hasLatency(): boolean;
    clearLatency(): void;
    getLatency(): google_protobuf_duration_pb.Duration | undefined;
    setLatency(value?: google_protobuf_duration_pb.Duration): HttpRequest;
    getCacheLookup(): boolean;
    setCacheLookup(value: boolean): HttpRequest;
    getCacheHit(): boolean;
    setCacheHit(value: boolean): HttpRequest;
    getCacheValidatedWithOriginServer(): boolean;
    setCacheValidatedWithOriginServer(value: boolean): HttpRequest;
    getCacheFillBytes(): number;
    setCacheFillBytes(value: number): HttpRequest;
    getProtocol(): string;
    setProtocol(value: string): HttpRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HttpRequest): HttpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpRequest;
    static deserializeBinaryFromReader(message: HttpRequest, reader: jspb.BinaryReader): HttpRequest;
}

export namespace HttpRequest {
    export type AsObject = {
        requestMethod: string,
        requestUrl: string,
        requestSize: number,
        status: number,
        responseSize: number,
        userAgent: string,
        remoteIp: string,
        serverIp: string,
        referer: string,
        latency?: google_protobuf_duration_pb.Duration.AsObject,
        cacheLookup: boolean,
        cacheHit: boolean,
        cacheValidatedWithOriginServer: boolean,
        cacheFillBytes: number,
        protocol: string,
    }
}
