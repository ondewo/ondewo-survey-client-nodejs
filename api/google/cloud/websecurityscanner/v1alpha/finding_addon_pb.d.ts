// package: google.cloud.websecurityscanner.v1alpha
// file: google/cloud/websecurityscanner/v1alpha/finding_addon.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OutdatedLibrary extends jspb.Message { 
    getLibraryName(): string;
    setLibraryName(value: string): OutdatedLibrary;
    getVersion(): string;
    setVersion(value: string): OutdatedLibrary;
    clearLearnMoreUrlsList(): void;
    getLearnMoreUrlsList(): Array<string>;
    setLearnMoreUrlsList(value: Array<string>): OutdatedLibrary;
    addLearnMoreUrls(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutdatedLibrary.AsObject;
    static toObject(includeInstance: boolean, msg: OutdatedLibrary): OutdatedLibrary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutdatedLibrary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutdatedLibrary;
    static deserializeBinaryFromReader(message: OutdatedLibrary, reader: jspb.BinaryReader): OutdatedLibrary;
}

export namespace OutdatedLibrary {
    export type AsObject = {
        libraryName: string,
        version: string,
        learnMoreUrlsList: Array<string>,
    }
}

export class ViolatingResource extends jspb.Message { 
    getContentType(): string;
    setContentType(value: string): ViolatingResource;
    getResourceUrl(): string;
    setResourceUrl(value: string): ViolatingResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViolatingResource.AsObject;
    static toObject(includeInstance: boolean, msg: ViolatingResource): ViolatingResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViolatingResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViolatingResource;
    static deserializeBinaryFromReader(message: ViolatingResource, reader: jspb.BinaryReader): ViolatingResource;
}

export namespace ViolatingResource {
    export type AsObject = {
        contentType: string,
        resourceUrl: string,
    }
}

export class VulnerableParameters extends jspb.Message { 
    clearParameterNamesList(): void;
    getParameterNamesList(): Array<string>;
    setParameterNamesList(value: Array<string>): VulnerableParameters;
    addParameterNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VulnerableParameters.AsObject;
    static toObject(includeInstance: boolean, msg: VulnerableParameters): VulnerableParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VulnerableParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VulnerableParameters;
    static deserializeBinaryFromReader(message: VulnerableParameters, reader: jspb.BinaryReader): VulnerableParameters;
}

export namespace VulnerableParameters {
    export type AsObject = {
        parameterNamesList: Array<string>,
    }
}

export class Xss extends jspb.Message { 
    clearStackTracesList(): void;
    getStackTracesList(): Array<string>;
    setStackTracesList(value: Array<string>): Xss;
    addStackTraces(value: string, index?: number): string;
    getErrorMessage(): string;
    setErrorMessage(value: string): Xss;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Xss.AsObject;
    static toObject(includeInstance: boolean, msg: Xss): Xss.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Xss, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Xss;
    static deserializeBinaryFromReader(message: Xss, reader: jspb.BinaryReader): Xss;
}

export namespace Xss {
    export type AsObject = {
        stackTracesList: Array<string>,
        errorMessage: string,
    }
}
