// package: google.api
// file: google/api/usage.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Usage extends jspb.Message { 
    clearRequirementsList(): void;
    getRequirementsList(): Array<string>;
    setRequirementsList(value: Array<string>): Usage;
    addRequirements(value: string, index?: number): string;
    clearRulesList(): void;
    getRulesList(): Array<UsageRule>;
    setRulesList(value: Array<UsageRule>): Usage;
    addRules(value?: UsageRule, index?: number): UsageRule;
    getProducerNotificationChannel(): string;
    setProducerNotificationChannel(value: string): Usage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Usage.AsObject;
    static toObject(includeInstance: boolean, msg: Usage): Usage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Usage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Usage;
    static deserializeBinaryFromReader(message: Usage, reader: jspb.BinaryReader): Usage;
}

export namespace Usage {
    export type AsObject = {
        requirementsList: Array<string>,
        rulesList: Array<UsageRule.AsObject>,
        producerNotificationChannel: string,
    }
}

export class UsageRule extends jspb.Message { 
    getSelector(): string;
    setSelector(value: string): UsageRule;
    getAllowUnregisteredCalls(): boolean;
    setAllowUnregisteredCalls(value: boolean): UsageRule;
    getSkipServiceControl(): boolean;
    setSkipServiceControl(value: boolean): UsageRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageRule.AsObject;
    static toObject(includeInstance: boolean, msg: UsageRule): UsageRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsageRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsageRule;
    static deserializeBinaryFromReader(message: UsageRule, reader: jspb.BinaryReader): UsageRule;
}

export namespace UsageRule {
    export type AsObject = {
        selector: string,
        allowUnregisteredCalls: boolean,
        skipServiceControl: boolean,
    }
}
