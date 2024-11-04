// package: google.cloud.websecurityscanner.v1alpha
// file: google/cloud/websecurityscanner/v1alpha/finding.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_cloud_websecurityscanner_v1alpha_finding_addon_pb from "../../../../google/cloud/websecurityscanner/v1alpha/finding_addon_pb";

export class Finding extends jspb.Message { 
    getName(): string;
    setName(value: string): Finding;
    getFindingType(): Finding.FindingType;
    setFindingType(value: Finding.FindingType): Finding;
    getHttpMethod(): string;
    setHttpMethod(value: string): Finding;
    getFuzzedUrl(): string;
    setFuzzedUrl(value: string): Finding;
    getBody(): string;
    setBody(value: string): Finding;
    getDescription(): string;
    setDescription(value: string): Finding;
    getReproductionUrl(): string;
    setReproductionUrl(value: string): Finding;
    getFrameUrl(): string;
    setFrameUrl(value: string): Finding;
    getFinalUrl(): string;
    setFinalUrl(value: string): Finding;
    getTrackingId(): string;
    setTrackingId(value: string): Finding;

    hasOutdatedLibrary(): boolean;
    clearOutdatedLibrary(): void;
    getOutdatedLibrary(): google_cloud_websecurityscanner_v1alpha_finding_addon_pb.OutdatedLibrary | undefined;
    setOutdatedLibrary(value?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.OutdatedLibrary): Finding;

    hasViolatingResource(): boolean;
    clearViolatingResource(): void;
    getViolatingResource(): google_cloud_websecurityscanner_v1alpha_finding_addon_pb.ViolatingResource | undefined;
    setViolatingResource(value?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.ViolatingResource): Finding;

    hasVulnerableParameters(): boolean;
    clearVulnerableParameters(): void;
    getVulnerableParameters(): google_cloud_websecurityscanner_v1alpha_finding_addon_pb.VulnerableParameters | undefined;
    setVulnerableParameters(value?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.VulnerableParameters): Finding;

    hasXss(): boolean;
    clearXss(): void;
    getXss(): google_cloud_websecurityscanner_v1alpha_finding_addon_pb.Xss | undefined;
    setXss(value?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.Xss): Finding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Finding.AsObject;
    static toObject(includeInstance: boolean, msg: Finding): Finding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Finding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Finding;
    static deserializeBinaryFromReader(message: Finding, reader: jspb.BinaryReader): Finding;
}

export namespace Finding {
    export type AsObject = {
        name: string,
        findingType: Finding.FindingType,
        httpMethod: string,
        fuzzedUrl: string,
        body: string,
        description: string,
        reproductionUrl: string,
        frameUrl: string,
        finalUrl: string,
        trackingId: string,
        outdatedLibrary?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.OutdatedLibrary.AsObject,
        violatingResource?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.ViolatingResource.AsObject,
        vulnerableParameters?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.VulnerableParameters.AsObject,
        xss?: google_cloud_websecurityscanner_v1alpha_finding_addon_pb.Xss.AsObject,
    }

    export enum FindingType {
    FINDING_TYPE_UNSPECIFIED = 0,
    MIXED_CONTENT = 1,
    OUTDATED_LIBRARY = 2,
    ROSETTA_FLASH = 5,
    XSS_CALLBACK = 3,
    XSS_ERROR = 4,
    CLEAR_TEXT_PASSWORD = 6,
    }

}
