// package: ondewo.survey
// file: ondewo/survey/fhir.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as ondewo_survey_survey_pb from "../../ondewo/survey/survey_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class CreateFHIRSurveyRequest extends jspb.Message { 

    hasFhirQuestionnaire(): boolean;
    clearFhirQuestionnaire(): void;
    getFhirQuestionnaire(): google_protobuf_struct_pb.Struct | undefined;
    setFhirQuestionnaire(value?: google_protobuf_struct_pb.Struct): CreateFHIRSurveyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFHIRSurveyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFHIRSurveyRequest): CreateFHIRSurveyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFHIRSurveyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFHIRSurveyRequest;
    static deserializeBinaryFromReader(message: CreateFHIRSurveyRequest, reader: jspb.BinaryReader): CreateFHIRSurveyRequest;
}

export namespace CreateFHIRSurveyRequest {
    export type AsObject = {
        fhirQuestionnaire?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class SurveyFHIRAnswersResponse extends jspb.Message { 
    getSurveyId(): string;
    setSurveyId(value: string): SurveyFHIRAnswersResponse;
    clearFhirQuestionnaireResponsesList(): void;
    getFhirQuestionnaireResponsesList(): Array<google_protobuf_struct_pb.Struct>;
    setFhirQuestionnaireResponsesList(value: Array<google_protobuf_struct_pb.Struct>): SurveyFHIRAnswersResponse;
    addFhirQuestionnaireResponses(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyFHIRAnswersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyFHIRAnswersResponse): SurveyFHIRAnswersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyFHIRAnswersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyFHIRAnswersResponse;
    static deserializeBinaryFromReader(message: SurveyFHIRAnswersResponse, reader: jspb.BinaryReader): SurveyFHIRAnswersResponse;
}

export namespace SurveyFHIRAnswersResponse {
    export type AsObject = {
        surveyId: string,
        fhirQuestionnaireResponsesList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    }
}
