// package: google.cloud.runtimeconfig.v1beta1
// file: google/cloud/runtimeconfig/v1beta1/resources.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class RuntimeConfig extends jspb.Message { 
    getName(): string;
    setName(value: string): RuntimeConfig;
    getDescription(): string;
    setDescription(value: string): RuntimeConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeConfig): RuntimeConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeConfig;
    static deserializeBinaryFromReader(message: RuntimeConfig, reader: jspb.BinaryReader): RuntimeConfig;
}

export namespace RuntimeConfig {
    export type AsObject = {
        name: string,
        description: string,
    }
}

export class Variable extends jspb.Message { 
    getName(): string;
    setName(value: string): Variable;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Variable;

    hasText(): boolean;
    clearText(): void;
    getText(): string;
    setText(value: string): Variable;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Variable;
    getState(): VariableState;
    setState(value: VariableState): Variable;

    getContentsCase(): Variable.ContentsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Variable.AsObject;
    static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Variable;
    static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
    export type AsObject = {
        name: string,
        value: Uint8Array | string,
        text: string,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        state: VariableState,
    }

    export enum ContentsCase {
        CONTENTS_NOT_SET = 0,
        VALUE = 2,
        TEXT = 5,
    }

}

export class EndCondition extends jspb.Message { 

    hasCardinality(): boolean;
    clearCardinality(): void;
    getCardinality(): EndCondition.Cardinality | undefined;
    setCardinality(value?: EndCondition.Cardinality): EndCondition;

    getConditionCase(): EndCondition.ConditionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndCondition.AsObject;
    static toObject(includeInstance: boolean, msg: EndCondition): EndCondition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndCondition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndCondition;
    static deserializeBinaryFromReader(message: EndCondition, reader: jspb.BinaryReader): EndCondition;
}

export namespace EndCondition {
    export type AsObject = {
        cardinality?: EndCondition.Cardinality.AsObject,
    }


    export class Cardinality extends jspb.Message { 
        getPath(): string;
        setPath(value: string): Cardinality;
        getNumber(): number;
        setNumber(value: number): Cardinality;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Cardinality.AsObject;
        static toObject(includeInstance: boolean, msg: Cardinality): Cardinality.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Cardinality, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Cardinality;
        static deserializeBinaryFromReader(message: Cardinality, reader: jspb.BinaryReader): Cardinality;
    }

    export namespace Cardinality {
        export type AsObject = {
            path: string,
            number: number,
        }
    }


    export enum ConditionCase {
        CONDITION_NOT_SET = 0,
        CARDINALITY = 1,
    }

}

export class Waiter extends jspb.Message { 
    getName(): string;
    setName(value: string): Waiter;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setTimeout(value?: google_protobuf_duration_pb.Duration): Waiter;

    hasFailure(): boolean;
    clearFailure(): void;
    getFailure(): EndCondition | undefined;
    setFailure(value?: EndCondition): Waiter;

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): EndCondition | undefined;
    setSuccess(value?: EndCondition): Waiter;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Waiter;
    getDone(): boolean;
    setDone(value: boolean): Waiter;

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): Waiter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Waiter.AsObject;
    static toObject(includeInstance: boolean, msg: Waiter): Waiter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Waiter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Waiter;
    static deserializeBinaryFromReader(message: Waiter, reader: jspb.BinaryReader): Waiter;
}

export namespace Waiter {
    export type AsObject = {
        name: string,
        timeout?: google_protobuf_duration_pb.Duration.AsObject,
        failure?: EndCondition.AsObject,
        success?: EndCondition.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        done: boolean,
        error?: google_rpc_status_pb.Status.AsObject,
    }
}

export enum VariableState {
    VARIABLE_STATE_UNSPECIFIED = 0,
    UPDATED = 1,
    DELETED = 2,
}
