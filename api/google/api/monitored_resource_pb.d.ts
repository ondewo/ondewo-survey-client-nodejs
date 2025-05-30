// package: google.api
// file: google/api/monitored_resource.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_api_label_pb from "../../google/api/label_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class MonitoredResourceDescriptor extends jspb.Message { 
    getName(): string;
    setName(value: string): MonitoredResourceDescriptor;
    getType(): string;
    setType(value: string): MonitoredResourceDescriptor;
    getDisplayName(): string;
    setDisplayName(value: string): MonitoredResourceDescriptor;
    getDescription(): string;
    setDescription(value: string): MonitoredResourceDescriptor;
    clearLabelsList(): void;
    getLabelsList(): Array<google_api_label_pb.LabelDescriptor>;
    setLabelsList(value: Array<google_api_label_pb.LabelDescriptor>): MonitoredResourceDescriptor;
    addLabels(value?: google_api_label_pb.LabelDescriptor, index?: number): google_api_label_pb.LabelDescriptor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonitoredResourceDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: MonitoredResourceDescriptor): MonitoredResourceDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonitoredResourceDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonitoredResourceDescriptor;
    static deserializeBinaryFromReader(message: MonitoredResourceDescriptor, reader: jspb.BinaryReader): MonitoredResourceDescriptor;
}

export namespace MonitoredResourceDescriptor {
    export type AsObject = {
        name: string,
        type: string,
        displayName: string,
        description: string,
        labelsList: Array<google_api_label_pb.LabelDescriptor.AsObject>,
    }
}

export class MonitoredResource extends jspb.Message { 
    getType(): string;
    setType(value: string): MonitoredResource;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonitoredResource.AsObject;
    static toObject(includeInstance: boolean, msg: MonitoredResource): MonitoredResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonitoredResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonitoredResource;
    static deserializeBinaryFromReader(message: MonitoredResource, reader: jspb.BinaryReader): MonitoredResource;
}

export namespace MonitoredResource {
    export type AsObject = {
        type: string,

        labelsMap: Array<[string, string]>,
    }
}

export class MonitoredResourceMetadata extends jspb.Message { 

    hasSystemLabels(): boolean;
    clearSystemLabels(): void;
    getSystemLabels(): google_protobuf_struct_pb.Struct | undefined;
    setSystemLabels(value?: google_protobuf_struct_pb.Struct): MonitoredResourceMetadata;

    getUserLabelsMap(): jspb.Map<string, string>;
    clearUserLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonitoredResourceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MonitoredResourceMetadata): MonitoredResourceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonitoredResourceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonitoredResourceMetadata;
    static deserializeBinaryFromReader(message: MonitoredResourceMetadata, reader: jspb.BinaryReader): MonitoredResourceMetadata;
}

export namespace MonitoredResourceMetadata {
    export type AsObject = {
        systemLabels?: google_protobuf_struct_pb.Struct.AsObject,

        userLabelsMap: Array<[string, string]>,
    }
}
