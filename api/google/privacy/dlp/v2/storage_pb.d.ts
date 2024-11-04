// package: google.privacy.dlp.v2
// file: google/privacy/dlp/v2/storage.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class InfoType extends jspb.Message { 
    getName(): string;
    setName(value: string): InfoType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfoType.AsObject;
    static toObject(includeInstance: boolean, msg: InfoType): InfoType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfoType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfoType;
    static deserializeBinaryFromReader(message: InfoType, reader: jspb.BinaryReader): InfoType;
}

export namespace InfoType {
    export type AsObject = {
        name: string,
    }
}

export class StoredType extends jspb.Message { 
    getName(): string;
    setName(value: string): StoredType;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): StoredType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoredType.AsObject;
    static toObject(includeInstance: boolean, msg: StoredType): StoredType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoredType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoredType;
    static deserializeBinaryFromReader(message: StoredType, reader: jspb.BinaryReader): StoredType;
}

export namespace StoredType {
    export type AsObject = {
        name: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CustomInfoType extends jspb.Message { 

    hasInfoType(): boolean;
    clearInfoType(): void;
    getInfoType(): InfoType | undefined;
    setInfoType(value?: InfoType): CustomInfoType;
    getLikelihood(): Likelihood;
    setLikelihood(value: Likelihood): CustomInfoType;

    hasDictionary(): boolean;
    clearDictionary(): void;
    getDictionary(): CustomInfoType.Dictionary | undefined;
    setDictionary(value?: CustomInfoType.Dictionary): CustomInfoType;

    hasRegex(): boolean;
    clearRegex(): void;
    getRegex(): CustomInfoType.Regex | undefined;
    setRegex(value?: CustomInfoType.Regex): CustomInfoType;

    hasSurrogateType(): boolean;
    clearSurrogateType(): void;
    getSurrogateType(): CustomInfoType.SurrogateType | undefined;
    setSurrogateType(value?: CustomInfoType.SurrogateType): CustomInfoType;

    hasStoredType(): boolean;
    clearStoredType(): void;
    getStoredType(): StoredType | undefined;
    setStoredType(value?: StoredType): CustomInfoType;
    clearDetectionRulesList(): void;
    getDetectionRulesList(): Array<CustomInfoType.DetectionRule>;
    setDetectionRulesList(value: Array<CustomInfoType.DetectionRule>): CustomInfoType;
    addDetectionRules(value?: CustomInfoType.DetectionRule, index?: number): CustomInfoType.DetectionRule;

    getTypeCase(): CustomInfoType.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomInfoType.AsObject;
    static toObject(includeInstance: boolean, msg: CustomInfoType): CustomInfoType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomInfoType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomInfoType;
    static deserializeBinaryFromReader(message: CustomInfoType, reader: jspb.BinaryReader): CustomInfoType;
}

export namespace CustomInfoType {
    export type AsObject = {
        infoType?: InfoType.AsObject,
        likelihood: Likelihood,
        dictionary?: CustomInfoType.Dictionary.AsObject,
        regex?: CustomInfoType.Regex.AsObject,
        surrogateType?: CustomInfoType.SurrogateType.AsObject,
        storedType?: StoredType.AsObject,
        detectionRulesList: Array<CustomInfoType.DetectionRule.AsObject>,
    }


    export class Dictionary extends jspb.Message { 

        hasWordList(): boolean;
        clearWordList(): void;
        getWordList(): CustomInfoType.Dictionary.WordList | undefined;
        setWordList(value?: CustomInfoType.Dictionary.WordList): Dictionary;

        hasCloudStoragePath(): boolean;
        clearCloudStoragePath(): void;
        getCloudStoragePath(): CloudStoragePath | undefined;
        setCloudStoragePath(value?: CloudStoragePath): Dictionary;

        getSourceCase(): Dictionary.SourceCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Dictionary.AsObject;
        static toObject(includeInstance: boolean, msg: Dictionary): Dictionary.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Dictionary, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Dictionary;
        static deserializeBinaryFromReader(message: Dictionary, reader: jspb.BinaryReader): Dictionary;
    }

    export namespace Dictionary {
        export type AsObject = {
            wordList?: CustomInfoType.Dictionary.WordList.AsObject,
            cloudStoragePath?: CloudStoragePath.AsObject,
        }


        export class WordList extends jspb.Message { 
            clearWordsList(): void;
            getWordsList(): Array<string>;
            setWordsList(value: Array<string>): WordList;
            addWords(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): WordList.AsObject;
            static toObject(includeInstance: boolean, msg: WordList): WordList.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: WordList, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): WordList;
            static deserializeBinaryFromReader(message: WordList, reader: jspb.BinaryReader): WordList;
        }

        export namespace WordList {
            export type AsObject = {
                wordsList: Array<string>,
            }
        }


        export enum SourceCase {
            SOURCE_NOT_SET = 0,
            WORD_LIST = 1,
            CLOUD_STORAGE_PATH = 3,
        }

    }

    export class Regex extends jspb.Message { 
        getPattern(): string;
        setPattern(value: string): Regex;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Regex.AsObject;
        static toObject(includeInstance: boolean, msg: Regex): Regex.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Regex, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Regex;
        static deserializeBinaryFromReader(message: Regex, reader: jspb.BinaryReader): Regex;
    }

    export namespace Regex {
        export type AsObject = {
            pattern: string,
        }
    }

    export class SurrogateType extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SurrogateType.AsObject;
        static toObject(includeInstance: boolean, msg: SurrogateType): SurrogateType.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SurrogateType, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SurrogateType;
        static deserializeBinaryFromReader(message: SurrogateType, reader: jspb.BinaryReader): SurrogateType;
    }

    export namespace SurrogateType {
        export type AsObject = {
        }
    }

    export class DetectionRule extends jspb.Message { 

        hasHotwordRule(): boolean;
        clearHotwordRule(): void;
        getHotwordRule(): CustomInfoType.DetectionRule.HotwordRule | undefined;
        setHotwordRule(value?: CustomInfoType.DetectionRule.HotwordRule): DetectionRule;

        getTypeCase(): DetectionRule.TypeCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DetectionRule.AsObject;
        static toObject(includeInstance: boolean, msg: DetectionRule): DetectionRule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DetectionRule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DetectionRule;
        static deserializeBinaryFromReader(message: DetectionRule, reader: jspb.BinaryReader): DetectionRule;
    }

    export namespace DetectionRule {
        export type AsObject = {
            hotwordRule?: CustomInfoType.DetectionRule.HotwordRule.AsObject,
        }


        export class Proximity extends jspb.Message { 
            getWindowBefore(): number;
            setWindowBefore(value: number): Proximity;
            getWindowAfter(): number;
            setWindowAfter(value: number): Proximity;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Proximity.AsObject;
            static toObject(includeInstance: boolean, msg: Proximity): Proximity.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Proximity, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Proximity;
            static deserializeBinaryFromReader(message: Proximity, reader: jspb.BinaryReader): Proximity;
        }

        export namespace Proximity {
            export type AsObject = {
                windowBefore: number,
                windowAfter: number,
            }
        }

        export class LikelihoodAdjustment extends jspb.Message { 

            hasFixedLikelihood(): boolean;
            clearFixedLikelihood(): void;
            getFixedLikelihood(): Likelihood;
            setFixedLikelihood(value: Likelihood): LikelihoodAdjustment;

            hasRelativeLikelihood(): boolean;
            clearRelativeLikelihood(): void;
            getRelativeLikelihood(): number;
            setRelativeLikelihood(value: number): LikelihoodAdjustment;

            getAdjustmentCase(): LikelihoodAdjustment.AdjustmentCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LikelihoodAdjustment.AsObject;
            static toObject(includeInstance: boolean, msg: LikelihoodAdjustment): LikelihoodAdjustment.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LikelihoodAdjustment, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LikelihoodAdjustment;
            static deserializeBinaryFromReader(message: LikelihoodAdjustment, reader: jspb.BinaryReader): LikelihoodAdjustment;
        }

        export namespace LikelihoodAdjustment {
            export type AsObject = {
                fixedLikelihood: Likelihood,
                relativeLikelihood: number,
            }

            export enum AdjustmentCase {
                ADJUSTMENT_NOT_SET = 0,
                FIXED_LIKELIHOOD = 1,
                RELATIVE_LIKELIHOOD = 2,
            }

        }

        export class HotwordRule extends jspb.Message { 

            hasHotwordRegex(): boolean;
            clearHotwordRegex(): void;
            getHotwordRegex(): CustomInfoType.Regex | undefined;
            setHotwordRegex(value?: CustomInfoType.Regex): HotwordRule;

            hasProximity(): boolean;
            clearProximity(): void;
            getProximity(): CustomInfoType.DetectionRule.Proximity | undefined;
            setProximity(value?: CustomInfoType.DetectionRule.Proximity): HotwordRule;

            hasLikelihoodAdjustment(): boolean;
            clearLikelihoodAdjustment(): void;
            getLikelihoodAdjustment(): CustomInfoType.DetectionRule.LikelihoodAdjustment | undefined;
            setLikelihoodAdjustment(value?: CustomInfoType.DetectionRule.LikelihoodAdjustment): HotwordRule;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): HotwordRule.AsObject;
            static toObject(includeInstance: boolean, msg: HotwordRule): HotwordRule.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: HotwordRule, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): HotwordRule;
            static deserializeBinaryFromReader(message: HotwordRule, reader: jspb.BinaryReader): HotwordRule;
        }

        export namespace HotwordRule {
            export type AsObject = {
                hotwordRegex?: CustomInfoType.Regex.AsObject,
                proximity?: CustomInfoType.DetectionRule.Proximity.AsObject,
                likelihoodAdjustment?: CustomInfoType.DetectionRule.LikelihoodAdjustment.AsObject,
            }
        }


        export enum TypeCase {
            TYPE_NOT_SET = 0,
            HOTWORD_RULE = 1,
        }

    }


    export enum TypeCase {
        TYPE_NOT_SET = 0,
        DICTIONARY = 2,
        REGEX = 3,
        SURROGATE_TYPE = 4,
        STORED_TYPE = 5,
    }

}

export class FieldId extends jspb.Message { 
    getName(): string;
    setName(value: string): FieldId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldId.AsObject;
    static toObject(includeInstance: boolean, msg: FieldId): FieldId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldId;
    static deserializeBinaryFromReader(message: FieldId, reader: jspb.BinaryReader): FieldId;
}

export namespace FieldId {
    export type AsObject = {
        name: string,
    }
}

export class PartitionId extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): PartitionId;
    getNamespaceId(): string;
    setNamespaceId(value: string): PartitionId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartitionId.AsObject;
    static toObject(includeInstance: boolean, msg: PartitionId): PartitionId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartitionId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartitionId;
    static deserializeBinaryFromReader(message: PartitionId, reader: jspb.BinaryReader): PartitionId;
}

export namespace PartitionId {
    export type AsObject = {
        projectId: string,
        namespaceId: string,
    }
}

export class KindExpression extends jspb.Message { 
    getName(): string;
    setName(value: string): KindExpression;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KindExpression.AsObject;
    static toObject(includeInstance: boolean, msg: KindExpression): KindExpression.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KindExpression, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KindExpression;
    static deserializeBinaryFromReader(message: KindExpression, reader: jspb.BinaryReader): KindExpression;
}

export namespace KindExpression {
    export type AsObject = {
        name: string,
    }
}

export class DatastoreOptions extends jspb.Message { 

    hasPartitionId(): boolean;
    clearPartitionId(): void;
    getPartitionId(): PartitionId | undefined;
    setPartitionId(value?: PartitionId): DatastoreOptions;

    hasKind(): boolean;
    clearKind(): void;
    getKind(): KindExpression | undefined;
    setKind(value?: KindExpression): DatastoreOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatastoreOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DatastoreOptions): DatastoreOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatastoreOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatastoreOptions;
    static deserializeBinaryFromReader(message: DatastoreOptions, reader: jspb.BinaryReader): DatastoreOptions;
}

export namespace DatastoreOptions {
    export type AsObject = {
        partitionId?: PartitionId.AsObject,
        kind?: KindExpression.AsObject,
    }
}

export class CloudStorageOptions extends jspb.Message { 

    hasFileSet(): boolean;
    clearFileSet(): void;
    getFileSet(): CloudStorageOptions.FileSet | undefined;
    setFileSet(value?: CloudStorageOptions.FileSet): CloudStorageOptions;
    getBytesLimitPerFile(): number;
    setBytesLimitPerFile(value: number): CloudStorageOptions;
    getBytesLimitPerFilePercent(): number;
    setBytesLimitPerFilePercent(value: number): CloudStorageOptions;
    clearFileTypesList(): void;
    getFileTypesList(): Array<FileType>;
    setFileTypesList(value: Array<FileType>): CloudStorageOptions;
    addFileTypes(value: FileType, index?: number): FileType;
    getSampleMethod(): CloudStorageOptions.SampleMethod;
    setSampleMethod(value: CloudStorageOptions.SampleMethod): CloudStorageOptions;
    getFilesLimitPercent(): number;
    setFilesLimitPercent(value: number): CloudStorageOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudStorageOptions.AsObject;
    static toObject(includeInstance: boolean, msg: CloudStorageOptions): CloudStorageOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudStorageOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudStorageOptions;
    static deserializeBinaryFromReader(message: CloudStorageOptions, reader: jspb.BinaryReader): CloudStorageOptions;
}

export namespace CloudStorageOptions {
    export type AsObject = {
        fileSet?: CloudStorageOptions.FileSet.AsObject,
        bytesLimitPerFile: number,
        bytesLimitPerFilePercent: number,
        fileTypesList: Array<FileType>,
        sampleMethod: CloudStorageOptions.SampleMethod,
        filesLimitPercent: number,
    }


    export class FileSet extends jspb.Message { 
        getUrl(): string;
        setUrl(value: string): FileSet;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FileSet.AsObject;
        static toObject(includeInstance: boolean, msg: FileSet): FileSet.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FileSet, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FileSet;
        static deserializeBinaryFromReader(message: FileSet, reader: jspb.BinaryReader): FileSet;
    }

    export namespace FileSet {
        export type AsObject = {
            url: string,
        }
    }


    export enum SampleMethod {
    SAMPLE_METHOD_UNSPECIFIED = 0,
    TOP = 1,
    RANDOM_START = 2,
    }

}

export class CloudStorageFileSet extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): CloudStorageFileSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudStorageFileSet.AsObject;
    static toObject(includeInstance: boolean, msg: CloudStorageFileSet): CloudStorageFileSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudStorageFileSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudStorageFileSet;
    static deserializeBinaryFromReader(message: CloudStorageFileSet, reader: jspb.BinaryReader): CloudStorageFileSet;
}

export namespace CloudStorageFileSet {
    export type AsObject = {
        url: string,
    }
}

export class CloudStoragePath extends jspb.Message { 
    getPath(): string;
    setPath(value: string): CloudStoragePath;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudStoragePath.AsObject;
    static toObject(includeInstance: boolean, msg: CloudStoragePath): CloudStoragePath.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudStoragePath, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudStoragePath;
    static deserializeBinaryFromReader(message: CloudStoragePath, reader: jspb.BinaryReader): CloudStoragePath;
}

export namespace CloudStoragePath {
    export type AsObject = {
        path: string,
    }
}

export class BigQueryOptions extends jspb.Message { 

    hasTableReference(): boolean;
    clearTableReference(): void;
    getTableReference(): BigQueryTable | undefined;
    setTableReference(value?: BigQueryTable): BigQueryOptions;
    clearIdentifyingFieldsList(): void;
    getIdentifyingFieldsList(): Array<FieldId>;
    setIdentifyingFieldsList(value: Array<FieldId>): BigQueryOptions;
    addIdentifyingFields(value?: FieldId, index?: number): FieldId;
    getRowsLimit(): number;
    setRowsLimit(value: number): BigQueryOptions;
    getRowsLimitPercent(): number;
    setRowsLimitPercent(value: number): BigQueryOptions;
    getSampleMethod(): BigQueryOptions.SampleMethod;
    setSampleMethod(value: BigQueryOptions.SampleMethod): BigQueryOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BigQueryOptions.AsObject;
    static toObject(includeInstance: boolean, msg: BigQueryOptions): BigQueryOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BigQueryOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BigQueryOptions;
    static deserializeBinaryFromReader(message: BigQueryOptions, reader: jspb.BinaryReader): BigQueryOptions;
}

export namespace BigQueryOptions {
    export type AsObject = {
        tableReference?: BigQueryTable.AsObject,
        identifyingFieldsList: Array<FieldId.AsObject>,
        rowsLimit: number,
        rowsLimitPercent: number,
        sampleMethod: BigQueryOptions.SampleMethod,
    }

    export enum SampleMethod {
    SAMPLE_METHOD_UNSPECIFIED = 0,
    TOP = 1,
    RANDOM_START = 2,
    }

}

export class StorageConfig extends jspb.Message { 

    hasDatastoreOptions(): boolean;
    clearDatastoreOptions(): void;
    getDatastoreOptions(): DatastoreOptions | undefined;
    setDatastoreOptions(value?: DatastoreOptions): StorageConfig;

    hasCloudStorageOptions(): boolean;
    clearCloudStorageOptions(): void;
    getCloudStorageOptions(): CloudStorageOptions | undefined;
    setCloudStorageOptions(value?: CloudStorageOptions): StorageConfig;

    hasBigQueryOptions(): boolean;
    clearBigQueryOptions(): void;
    getBigQueryOptions(): BigQueryOptions | undefined;
    setBigQueryOptions(value?: BigQueryOptions): StorageConfig;

    hasTimespanConfig(): boolean;
    clearTimespanConfig(): void;
    getTimespanConfig(): StorageConfig.TimespanConfig | undefined;
    setTimespanConfig(value?: StorageConfig.TimespanConfig): StorageConfig;

    getTypeCase(): StorageConfig.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageConfig.AsObject;
    static toObject(includeInstance: boolean, msg: StorageConfig): StorageConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageConfig;
    static deserializeBinaryFromReader(message: StorageConfig, reader: jspb.BinaryReader): StorageConfig;
}

export namespace StorageConfig {
    export type AsObject = {
        datastoreOptions?: DatastoreOptions.AsObject,
        cloudStorageOptions?: CloudStorageOptions.AsObject,
        bigQueryOptions?: BigQueryOptions.AsObject,
        timespanConfig?: StorageConfig.TimespanConfig.AsObject,
    }


    export class TimespanConfig extends jspb.Message { 

        hasStartTime(): boolean;
        clearStartTime(): void;
        getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TimespanConfig;

        hasEndTime(): boolean;
        clearEndTime(): void;
        getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TimespanConfig;

        hasTimestampField(): boolean;
        clearTimestampField(): void;
        getTimestampField(): FieldId | undefined;
        setTimestampField(value?: FieldId): TimespanConfig;
        getEnableAutoPopulationOfTimespanConfig(): boolean;
        setEnableAutoPopulationOfTimespanConfig(value: boolean): TimespanConfig;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TimespanConfig.AsObject;
        static toObject(includeInstance: boolean, msg: TimespanConfig): TimespanConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TimespanConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TimespanConfig;
        static deserializeBinaryFromReader(message: TimespanConfig, reader: jspb.BinaryReader): TimespanConfig;
    }

    export namespace TimespanConfig {
        export type AsObject = {
            startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            timestampField?: FieldId.AsObject,
            enableAutoPopulationOfTimespanConfig: boolean,
        }
    }


    export enum TypeCase {
        TYPE_NOT_SET = 0,
        DATASTORE_OPTIONS = 2,
        CLOUD_STORAGE_OPTIONS = 3,
        BIG_QUERY_OPTIONS = 4,
    }

}

export class BigQueryKey extends jspb.Message { 

    hasTableReference(): boolean;
    clearTableReference(): void;
    getTableReference(): BigQueryTable | undefined;
    setTableReference(value?: BigQueryTable): BigQueryKey;
    getRowNumber(): number;
    setRowNumber(value: number): BigQueryKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BigQueryKey.AsObject;
    static toObject(includeInstance: boolean, msg: BigQueryKey): BigQueryKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BigQueryKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BigQueryKey;
    static deserializeBinaryFromReader(message: BigQueryKey, reader: jspb.BinaryReader): BigQueryKey;
}

export namespace BigQueryKey {
    export type AsObject = {
        tableReference?: BigQueryTable.AsObject,
        rowNumber: number,
    }
}

export class DatastoreKey extends jspb.Message { 

    hasEntityKey(): boolean;
    clearEntityKey(): void;
    getEntityKey(): Key | undefined;
    setEntityKey(value?: Key): DatastoreKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatastoreKey.AsObject;
    static toObject(includeInstance: boolean, msg: DatastoreKey): DatastoreKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatastoreKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatastoreKey;
    static deserializeBinaryFromReader(message: DatastoreKey, reader: jspb.BinaryReader): DatastoreKey;
}

export namespace DatastoreKey {
    export type AsObject = {
        entityKey?: Key.AsObject,
    }
}

export class Key extends jspb.Message { 

    hasPartitionId(): boolean;
    clearPartitionId(): void;
    getPartitionId(): PartitionId | undefined;
    setPartitionId(value?: PartitionId): Key;
    clearPathList(): void;
    getPathList(): Array<Key.PathElement>;
    setPathList(value: Array<Key.PathElement>): Key;
    addPath(value?: Key.PathElement, index?: number): Key.PathElement;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Key.AsObject;
    static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Key;
    static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
    export type AsObject = {
        partitionId?: PartitionId.AsObject,
        pathList: Array<Key.PathElement.AsObject>,
    }


    export class PathElement extends jspb.Message { 
        getKind(): string;
        setKind(value: string): PathElement;

        hasId(): boolean;
        clearId(): void;
        getId(): number;
        setId(value: number): PathElement;

        hasName(): boolean;
        clearName(): void;
        getName(): string;
        setName(value: string): PathElement;

        getIdTypeCase(): PathElement.IdTypeCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PathElement.AsObject;
        static toObject(includeInstance: boolean, msg: PathElement): PathElement.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PathElement, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PathElement;
        static deserializeBinaryFromReader(message: PathElement, reader: jspb.BinaryReader): PathElement;
    }

    export namespace PathElement {
        export type AsObject = {
            kind: string,
            id: number,
            name: string,
        }

        export enum IdTypeCase {
            ID_TYPE_NOT_SET = 0,
            ID = 2,
            NAME = 3,
        }

    }

}

export class RecordKey extends jspb.Message { 

    hasDatastoreKey(): boolean;
    clearDatastoreKey(): void;
    getDatastoreKey(): DatastoreKey | undefined;
    setDatastoreKey(value?: DatastoreKey): RecordKey;

    hasBigQueryKey(): boolean;
    clearBigQueryKey(): void;
    getBigQueryKey(): BigQueryKey | undefined;
    setBigQueryKey(value?: BigQueryKey): RecordKey;

    getTypeCase(): RecordKey.TypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordKey.AsObject;
    static toObject(includeInstance: boolean, msg: RecordKey): RecordKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordKey;
    static deserializeBinaryFromReader(message: RecordKey, reader: jspb.BinaryReader): RecordKey;
}

export namespace RecordKey {
    export type AsObject = {
        datastoreKey?: DatastoreKey.AsObject,
        bigQueryKey?: BigQueryKey.AsObject,
    }

    export enum TypeCase {
        TYPE_NOT_SET = 0,
        DATASTORE_KEY = 2,
        BIG_QUERY_KEY = 3,
    }

}

export class BigQueryTable extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): BigQueryTable;
    getDatasetId(): string;
    setDatasetId(value: string): BigQueryTable;
    getTableId(): string;
    setTableId(value: string): BigQueryTable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BigQueryTable.AsObject;
    static toObject(includeInstance: boolean, msg: BigQueryTable): BigQueryTable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BigQueryTable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BigQueryTable;
    static deserializeBinaryFromReader(message: BigQueryTable, reader: jspb.BinaryReader): BigQueryTable;
}

export namespace BigQueryTable {
    export type AsObject = {
        projectId: string,
        datasetId: string,
        tableId: string,
    }
}

export class BigQueryField extends jspb.Message { 

    hasTable(): boolean;
    clearTable(): void;
    getTable(): BigQueryTable | undefined;
    setTable(value?: BigQueryTable): BigQueryField;

    hasField(): boolean;
    clearField(): void;
    getField(): FieldId | undefined;
    setField(value?: FieldId): BigQueryField;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BigQueryField.AsObject;
    static toObject(includeInstance: boolean, msg: BigQueryField): BigQueryField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BigQueryField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BigQueryField;
    static deserializeBinaryFromReader(message: BigQueryField, reader: jspb.BinaryReader): BigQueryField;
}

export namespace BigQueryField {
    export type AsObject = {
        table?: BigQueryTable.AsObject,
        field?: FieldId.AsObject,
    }
}

export class EntityId extends jspb.Message { 

    hasField(): boolean;
    clearField(): void;
    getField(): FieldId | undefined;
    setField(value?: FieldId): EntityId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityId.AsObject;
    static toObject(includeInstance: boolean, msg: EntityId): EntityId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityId;
    static deserializeBinaryFromReader(message: EntityId, reader: jspb.BinaryReader): EntityId;
}

export namespace EntityId {
    export type AsObject = {
        field?: FieldId.AsObject,
    }
}

export enum Likelihood {
    LIKELIHOOD_UNSPECIFIED = 0,
    VERY_UNLIKELY = 1,
    UNLIKELY = 2,
    POSSIBLE = 3,
    LIKELY = 4,
    VERY_LIKELY = 5,
}

export enum FileType {
    FILE_TYPE_UNSPECIFIED = 0,
    BINARY_FILE = 1,
    TEXT_FILE = 2,
}
