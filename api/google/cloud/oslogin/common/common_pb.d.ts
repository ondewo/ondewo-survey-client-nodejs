// package: google.cloud.oslogin.common
// file: google/cloud/oslogin/common/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PosixAccount extends jspb.Message { 
    getPrimary(): boolean;
    setPrimary(value: boolean): PosixAccount;
    getUsername(): string;
    setUsername(value: string): PosixAccount;
    getUid(): number;
    setUid(value: number): PosixAccount;
    getGid(): number;
    setGid(value: number): PosixAccount;
    getHomeDirectory(): string;
    setHomeDirectory(value: string): PosixAccount;
    getShell(): string;
    setShell(value: string): PosixAccount;
    getGecos(): string;
    setGecos(value: string): PosixAccount;
    getSystemId(): string;
    setSystemId(value: string): PosixAccount;
    getAccountId(): string;
    setAccountId(value: string): PosixAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PosixAccount.AsObject;
    static toObject(includeInstance: boolean, msg: PosixAccount): PosixAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PosixAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PosixAccount;
    static deserializeBinaryFromReader(message: PosixAccount, reader: jspb.BinaryReader): PosixAccount;
}

export namespace PosixAccount {
    export type AsObject = {
        primary: boolean,
        username: string,
        uid: number,
        gid: number,
        homeDirectory: string,
        shell: string,
        gecos: string,
        systemId: string,
        accountId: string,
    }
}

export class SshPublicKey extends jspb.Message { 
    getKey(): string;
    setKey(value: string): SshPublicKey;
    getExpirationTimeUsec(): number;
    setExpirationTimeUsec(value: number): SshPublicKey;
    getFingerprint(): string;
    setFingerprint(value: string): SshPublicKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SshPublicKey.AsObject;
    static toObject(includeInstance: boolean, msg: SshPublicKey): SshPublicKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SshPublicKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SshPublicKey;
    static deserializeBinaryFromReader(message: SshPublicKey, reader: jspb.BinaryReader): SshPublicKey;
}

export namespace SshPublicKey {
    export type AsObject = {
        key: string,
        expirationTimeUsec: number,
        fingerprint: string,
    }
}
