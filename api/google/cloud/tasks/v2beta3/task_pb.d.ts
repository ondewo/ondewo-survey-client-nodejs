// package: google.cloud.tasks.v2beta3
// file: google/cloud/tasks/v2beta3/task.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_cloud_tasks_v2beta3_target_pb from "../../../../google/cloud/tasks/v2beta3/target_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class Task extends jspb.Message { 
    getName(): string;
    setName(value: string): Task;

    hasAppEngineHttpRequest(): boolean;
    clearAppEngineHttpRequest(): void;
    getAppEngineHttpRequest(): google_cloud_tasks_v2beta3_target_pb.AppEngineHttpRequest | undefined;
    setAppEngineHttpRequest(value?: google_cloud_tasks_v2beta3_target_pb.AppEngineHttpRequest): Task;

    hasScheduleTime(): boolean;
    clearScheduleTime(): void;
    getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): Task;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Task;
    getDispatchCount(): number;
    setDispatchCount(value: number): Task;
    getResponseCount(): number;
    setResponseCount(value: number): Task;

    hasFirstAttempt(): boolean;
    clearFirstAttempt(): void;
    getFirstAttempt(): Attempt | undefined;
    setFirstAttempt(value?: Attempt): Task;

    hasLastAttempt(): boolean;
    clearLastAttempt(): void;
    getLastAttempt(): Attempt | undefined;
    setLastAttempt(value?: Attempt): Task;
    getView(): Task.View;
    setView(value: Task.View): Task;

    getPayloadTypeCase(): Task.PayloadTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        name: string,
        appEngineHttpRequest?: google_cloud_tasks_v2beta3_target_pb.AppEngineHttpRequest.AsObject,
        scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dispatchCount: number,
        responseCount: number,
        firstAttempt?: Attempt.AsObject,
        lastAttempt?: Attempt.AsObject,
        view: Task.View,
    }

    export enum View {
    VIEW_UNSPECIFIED = 0,
    BASIC = 1,
    FULL = 2,
    }


    export enum PayloadTypeCase {
        PAYLOAD_TYPE_NOT_SET = 0,
        APP_ENGINE_HTTP_REQUEST = 3,
    }

}

export class Attempt extends jspb.Message { 

    hasScheduleTime(): boolean;
    clearScheduleTime(): void;
    getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): Attempt;

    hasDispatchTime(): boolean;
    clearDispatchTime(): void;
    getDispatchTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDispatchTime(value?: google_protobuf_timestamp_pb.Timestamp): Attempt;

    hasResponseTime(): boolean;
    clearResponseTime(): void;
    getResponseTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setResponseTime(value?: google_protobuf_timestamp_pb.Timestamp): Attempt;

    hasResponseStatus(): boolean;
    clearResponseStatus(): void;
    getResponseStatus(): google_rpc_status_pb.Status | undefined;
    setResponseStatus(value?: google_rpc_status_pb.Status): Attempt;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attempt.AsObject;
    static toObject(includeInstance: boolean, msg: Attempt): Attempt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attempt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attempt;
    static deserializeBinaryFromReader(message: Attempt, reader: jspb.BinaryReader): Attempt;
}

export namespace Attempt {
    export type AsObject = {
        scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dispatchTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        responseTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        responseStatus?: google_rpc_status_pb.Status.AsObject,
    }
}
