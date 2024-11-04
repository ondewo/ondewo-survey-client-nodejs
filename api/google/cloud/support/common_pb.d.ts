// package: google.cloud.support.common
// file: google/cloud/support/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SupportAccount extends jspb.Message { 
    getName(): string;
    setName(value: string): SupportAccount;
    getAccountId(): string;
    setAccountId(value: string): SupportAccount;
    getCloudResource(): string;
    setCloudResource(value: string): SupportAccount;
    getDisplayName(): string;
    setDisplayName(value: string): SupportAccount;
    getState(): SupportAccount.State;
    setState(value: SupportAccount.State): SupportAccount;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): SupportAccount;
    getBillingAccountName(): string;
    setBillingAccountName(value: string): SupportAccount;
    getUnifyAccountId(): string;
    setUnifyAccountId(value: string): SupportAccount;
    getPricingModel(): SupportAccount.PricingModel;
    setPricingModel(value: SupportAccount.PricingModel): SupportAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupportAccount.AsObject;
    static toObject(includeInstance: boolean, msg: SupportAccount): SupportAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupportAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupportAccount;
    static deserializeBinaryFromReader(message: SupportAccount, reader: jspb.BinaryReader): SupportAccount;
}

export namespace SupportAccount {
    export type AsObject = {
        name: string,
        accountId: string,
        cloudResource: string,
        displayName: string,
        state: SupportAccount.State,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        billingAccountName: string,
        unifyAccountId: string,
        pricingModel: SupportAccount.PricingModel,
    }

    export enum State {
    STATE_UNSPECIFIED = 0,
    ACTIVE = 1,
    PENDING = 2,
    PENDING_DELETION = 3,
    }

    export enum PricingModel {
    PRICING_MODEL_UNKNOWN = 0,
    PACKAGES = 1,
    USER_ROLES = 2,
    }

}

export class Case extends jspb.Message { 
    getName(): string;
    setName(value: string): Case;
    getDisplayName(): string;
    setDisplayName(value: string): Case;
    getDescription(): string;
    setDescription(value: string): Case;
    getComponent(): string;
    setComponent(value: string): Case;
    getSubcomponent(): string;
    setSubcomponent(value: string): Case;
    getClientTimezone(): string;
    setClientTimezone(value: string): Case;
    clearCcAddressesList(): void;
    getCcAddressesList(): Array<string>;
    setCcAddressesList(value: Array<string>): Case;
    addCcAddresses(value: string, index?: number): string;
    getProjectId(): string;
    setProjectId(value: string): Case;
    clearIssuesList(): void;
    getIssuesList(): Array<CustomerIssue>;
    setIssuesList(value: Array<CustomerIssue>): Case;
    addIssues(value?: CustomerIssue, index?: number): CustomerIssue;
    getPriority(): Case.Priority;
    setPriority(value: Case.Priority): Case;
    getState(): Case.State;
    setState(value: Case.State): Case;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Case;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Case;
    getCreatorEmail(): string;
    setCreatorEmail(value: string): Case;
    getCategory(): string;
    setCategory(value: string): Case;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Case.AsObject;
    static toObject(includeInstance: boolean, msg: Case): Case.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Case, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Case;
    static deserializeBinaryFromReader(message: Case, reader: jspb.BinaryReader): Case;
}

export namespace Case {
    export type AsObject = {
        name: string,
        displayName: string,
        description: string,
        component: string,
        subcomponent: string,
        clientTimezone: string,
        ccAddressesList: Array<string>,
        projectId: string,
        issuesList: Array<CustomerIssue.AsObject>,
        priority: Case.Priority,
        state: Case.State,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        creatorEmail: string,
        category: string,
    }

    export enum Priority {
    PRIORITY_UNSPECIFIED = 0,
    P0 = 1,
    P1 = 2,
    P2 = 3,
    P3 = 4,
    P4 = 5,
    }

    export enum State {
    STATE_UNSPECIFIED = 0,
    NEW = 1,
    ASSIGNED = 2,
    IN_PROGRESS_GOOGLE_SUPPORT = 3,
    IN_PROGRESS_GOOGLE_ENG = 4,
    IN_PROGRESS_KNOWN_ISSUE = 5,
    WAITING_FOR_CUSTOMER_RESPONSE = 6,
    SOLUTION_OFFERED = 7,
    CLOSED = 8,
    }

}

export class CustomerIssue extends jspb.Message { 
    getIssueId(): string;
    setIssueId(value: string): CustomerIssue;
    getState(): CustomerIssue.IssueState;
    setState(value: CustomerIssue.IssueState): CustomerIssue;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): CustomerIssue;

    hasResolveTime(): boolean;
    clearResolveTime(): void;
    getResolveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setResolveTime(value?: google_protobuf_timestamp_pb.Timestamp): CustomerIssue;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): CustomerIssue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerIssue.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerIssue): CustomerIssue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerIssue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerIssue;
    static deserializeBinaryFromReader(message: CustomerIssue, reader: jspb.BinaryReader): CustomerIssue;
}

export namespace CustomerIssue {
    export type AsObject = {
        issueId: string,
        state: CustomerIssue.IssueState,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        resolveTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum IssueState {
    ISSUE_STATE_UNSPECIFIED = 0,
    OPEN = 1,
    IN_PROGRESS = 2,
    FIXED = 3,
    WONT_FIX = 4,
    VERIFIED = 5,
    }

}

export class SupportRole extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): SupportRole;
    getRole(): SupportRole.Role;
    setRole(value: SupportRole.Role): SupportRole;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupportRole.AsObject;
    static toObject(includeInstance: boolean, msg: SupportRole): SupportRole.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupportRole, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupportRole;
    static deserializeBinaryFromReader(message: SupportRole, reader: jspb.BinaryReader): SupportRole;
}

export namespace SupportRole {
    export type AsObject = {
        email: string,
        role: SupportRole.Role,
    }

    export enum Role {
    ROLE_UNSPECIFIED = 0,
    BASIC = 1,
    DEVELOPER = 2,
    OPERATION = 3,
    SITE_RELIABILITY = 4,
    }

}

export class Comment extends jspb.Message { 
    getText(): string;
    setText(value: string): Comment;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Comment;
    getAuthor(): string;
    setAuthor(value: string): Comment;
    getName(): string;
    setName(value: string): Comment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Comment.AsObject;
    static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Comment;
    static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
    export type AsObject = {
        text: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        author: string,
        name: string,
    }
}

export class IssueTaxonomy extends jspb.Message { 

    getCategoriesMap(): jspb.Map<string, IssueTaxonomy.Category>;
    clearCategoriesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IssueTaxonomy.AsObject;
    static toObject(includeInstance: boolean, msg: IssueTaxonomy): IssueTaxonomy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IssueTaxonomy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IssueTaxonomy;
    static deserializeBinaryFromReader(message: IssueTaxonomy, reader: jspb.BinaryReader): IssueTaxonomy;
}

export namespace IssueTaxonomy {
    export type AsObject = {

        categoriesMap: Array<[string, IssueTaxonomy.Category.AsObject]>,
    }


    export class Component extends jspb.Message { 
        getDisplayName(): string;
        setDisplayName(value: string): Component;
        clearLanguagesList(): void;
        getLanguagesList(): Array<string>;
        setLanguagesList(value: Array<string>): Component;
        addLanguages(value: string, index?: number): string;
        getTemplate(): string;
        setTemplate(value: string): Component;
        clearSubcomponentsList(): void;
        getSubcomponentsList(): Array<IssueTaxonomy.Component>;
        setSubcomponentsList(value: Array<IssueTaxonomy.Component>): Component;
        addSubcomponents(value?: IssueTaxonomy.Component, index?: number): IssueTaxonomy.Component;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Component.AsObject;
        static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Component;
        static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
    }

    export namespace Component {
        export type AsObject = {
            displayName: string,
            languagesList: Array<string>,
            template: string,
            subcomponentsList: Array<IssueTaxonomy.Component.AsObject>,
        }
    }

    export class Category extends jspb.Message { 
        getDisplayName(): string;
        setDisplayName(value: string): Category;

        getComponentsMap(): jspb.Map<string, IssueTaxonomy.Component>;
        clearComponentsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Category.AsObject;
        static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Category;
        static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
    }

    export namespace Category {
        export type AsObject = {
            displayName: string,

            componentsMap: Array<[string, IssueTaxonomy.Component.AsObject]>,
        }
    }

}
