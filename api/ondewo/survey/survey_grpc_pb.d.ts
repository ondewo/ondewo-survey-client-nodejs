// package: ondewo.survey
// file: ondewo/survey/survey.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_survey_survey_pb from "../../ondewo/survey/survey_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

interface ISurveysService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createSurvey: ISurveysService_ICreateSurvey;
    getSurvey: ISurveysService_IGetSurvey;
    updateSurvey: ISurveysService_IUpdateSurvey;
    deleteSurvey: ISurveysService_IDeleteSurvey;
    listSurveys: ISurveysService_IListSurveys;
    getSurveyAnswers: ISurveysService_IGetSurveyAnswers;
    getAllSurveyAnswers: ISurveysService_IGetAllSurveyAnswers;
    createAgentSurvey: ISurveysService_ICreateAgentSurvey;
    updateAgentSurvey: ISurveysService_IUpdateAgentSurvey;
    deleteAgentSurvey: ISurveysService_IDeleteAgentSurvey;
}

interface ISurveysService_ICreateSurvey extends grpc.MethodDefinition<ondewo_survey_survey_pb.CreateSurveyRequest, ondewo_survey_survey_pb.Survey> {
    path: "/ondewo.survey.Surveys/CreateSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.CreateSurveyRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.CreateSurveyRequest>;
    responseSerialize: grpc.serialize<ondewo_survey_survey_pb.Survey>;
    responseDeserialize: grpc.deserialize<ondewo_survey_survey_pb.Survey>;
}
interface ISurveysService_IGetSurvey extends grpc.MethodDefinition<ondewo_survey_survey_pb.GetSurveyRequest, ondewo_survey_survey_pb.Survey> {
    path: "/ondewo.survey.Surveys/GetSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.GetSurveyRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.GetSurveyRequest>;
    responseSerialize: grpc.serialize<ondewo_survey_survey_pb.Survey>;
    responseDeserialize: grpc.deserialize<ondewo_survey_survey_pb.Survey>;
}
interface ISurveysService_IUpdateSurvey extends grpc.MethodDefinition<ondewo_survey_survey_pb.UpdateSurveyRequest, ondewo_survey_survey_pb.Survey> {
    path: "/ondewo.survey.Surveys/UpdateSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.UpdateSurveyRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.UpdateSurveyRequest>;
    responseSerialize: grpc.serialize<ondewo_survey_survey_pb.Survey>;
    responseDeserialize: grpc.deserialize<ondewo_survey_survey_pb.Survey>;
}
interface ISurveysService_IDeleteSurvey extends grpc.MethodDefinition<ondewo_survey_survey_pb.DeleteSurveyRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.survey.Surveys/DeleteSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.DeleteSurveyRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.DeleteSurveyRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISurveysService_IListSurveys extends grpc.MethodDefinition<ondewo_survey_survey_pb.ListSurveysRequest, ondewo_survey_survey_pb.ListSurveysResponse> {
    path: "/ondewo.survey.Surveys/ListSurveys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.ListSurveysRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.ListSurveysRequest>;
    responseSerialize: grpc.serialize<ondewo_survey_survey_pb.ListSurveysResponse>;
    responseDeserialize: grpc.deserialize<ondewo_survey_survey_pb.ListSurveysResponse>;
}
interface ISurveysService_IGetSurveyAnswers extends grpc.MethodDefinition<ondewo_survey_survey_pb.GetSurveyAnswersRequest, ondewo_survey_survey_pb.SurveyAnswersResponse> {
    path: "/ondewo.survey.Surveys/GetSurveyAnswers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.GetSurveyAnswersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.GetSurveyAnswersRequest>;
    responseSerialize: grpc.serialize<ondewo_survey_survey_pb.SurveyAnswersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_survey_survey_pb.SurveyAnswersResponse>;
}
interface ISurveysService_IGetAllSurveyAnswers extends grpc.MethodDefinition<ondewo_survey_survey_pb.GetAllSurveyAnswersRequest, ondewo_survey_survey_pb.SurveyAnswersResponse> {
    path: "/ondewo.survey.Surveys/GetAllSurveyAnswers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.GetAllSurveyAnswersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.GetAllSurveyAnswersRequest>;
    responseSerialize: grpc.serialize<ondewo_survey_survey_pb.SurveyAnswersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_survey_survey_pb.SurveyAnswersResponse>;
}
interface ISurveysService_ICreateAgentSurvey extends grpc.MethodDefinition<ondewo_survey_survey_pb.AgentSurveyRequest, ondewo_survey_survey_pb.AgentSurveyResponse> {
    path: "/ondewo.survey.Surveys/CreateAgentSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.AgentSurveyRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.AgentSurveyRequest>;
    responseSerialize: grpc.serialize<ondewo_survey_survey_pb.AgentSurveyResponse>;
    responseDeserialize: grpc.deserialize<ondewo_survey_survey_pb.AgentSurveyResponse>;
}
interface ISurveysService_IUpdateAgentSurvey extends grpc.MethodDefinition<ondewo_survey_survey_pb.AgentSurveyRequest, ondewo_survey_survey_pb.AgentSurveyResponse> {
    path: "/ondewo.survey.Surveys/UpdateAgentSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.AgentSurveyRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.AgentSurveyRequest>;
    responseSerialize: grpc.serialize<ondewo_survey_survey_pb.AgentSurveyResponse>;
    responseDeserialize: grpc.deserialize<ondewo_survey_survey_pb.AgentSurveyResponse>;
}
interface ISurveysService_IDeleteAgentSurvey extends grpc.MethodDefinition<ondewo_survey_survey_pb.AgentSurveyRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.survey.Surveys/DeleteAgentSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_survey_survey_pb.AgentSurveyRequest>;
    requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.AgentSurveyRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const SurveysService: ISurveysService;

export interface ISurveysServer {
    createSurvey: grpc.handleUnaryCall<ondewo_survey_survey_pb.CreateSurveyRequest, ondewo_survey_survey_pb.Survey>;
    getSurvey: grpc.handleUnaryCall<ondewo_survey_survey_pb.GetSurveyRequest, ondewo_survey_survey_pb.Survey>;
    updateSurvey: grpc.handleUnaryCall<ondewo_survey_survey_pb.UpdateSurveyRequest, ondewo_survey_survey_pb.Survey>;
    deleteSurvey: grpc.handleUnaryCall<ondewo_survey_survey_pb.DeleteSurveyRequest, google_protobuf_empty_pb.Empty>;
    listSurveys: grpc.handleUnaryCall<ondewo_survey_survey_pb.ListSurveysRequest, ondewo_survey_survey_pb.ListSurveysResponse>;
    getSurveyAnswers: grpc.handleUnaryCall<ondewo_survey_survey_pb.GetSurveyAnswersRequest, ondewo_survey_survey_pb.SurveyAnswersResponse>;
    getAllSurveyAnswers: grpc.handleUnaryCall<ondewo_survey_survey_pb.GetAllSurveyAnswersRequest, ondewo_survey_survey_pb.SurveyAnswersResponse>;
    createAgentSurvey: grpc.handleUnaryCall<ondewo_survey_survey_pb.AgentSurveyRequest, ondewo_survey_survey_pb.AgentSurveyResponse>;
    updateAgentSurvey: grpc.handleUnaryCall<ondewo_survey_survey_pb.AgentSurveyRequest, ondewo_survey_survey_pb.AgentSurveyResponse>;
    deleteAgentSurvey: grpc.handleUnaryCall<ondewo_survey_survey_pb.AgentSurveyRequest, google_protobuf_empty_pb.Empty>;
}

export interface ISurveysClient {
    createSurvey(request: ondewo_survey_survey_pb.CreateSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    createSurvey(request: ondewo_survey_survey_pb.CreateSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    createSurvey(request: ondewo_survey_survey_pb.CreateSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    getSurvey(request: ondewo_survey_survey_pb.GetSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    getSurvey(request: ondewo_survey_survey_pb.GetSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    getSurvey(request: ondewo_survey_survey_pb.GetSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    updateSurvey(request: ondewo_survey_survey_pb.UpdateSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    updateSurvey(request: ondewo_survey_survey_pb.UpdateSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    updateSurvey(request: ondewo_survey_survey_pb.UpdateSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    deleteSurvey(request: ondewo_survey_survey_pb.DeleteSurveyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSurvey(request: ondewo_survey_survey_pb.DeleteSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSurvey(request: ondewo_survey_survey_pb.DeleteSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listSurveys(request: ondewo_survey_survey_pb.ListSurveysRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.ListSurveysResponse) => void): grpc.ClientUnaryCall;
    listSurveys(request: ondewo_survey_survey_pb.ListSurveysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.ListSurveysResponse) => void): grpc.ClientUnaryCall;
    listSurveys(request: ondewo_survey_survey_pb.ListSurveysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.ListSurveysResponse) => void): grpc.ClientUnaryCall;
    getSurveyAnswers(request: ondewo_survey_survey_pb.GetSurveyAnswersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    getSurveyAnswers(request: ondewo_survey_survey_pb.GetSurveyAnswersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    getSurveyAnswers(request: ondewo_survey_survey_pb.GetSurveyAnswersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    getAllSurveyAnswers(request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    getAllSurveyAnswers(request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    getAllSurveyAnswers(request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    createAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    createAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    createAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    updateAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    updateAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    updateAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    deleteAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class SurveysClient extends grpc.Client implements ISurveysClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createSurvey(request: ondewo_survey_survey_pb.CreateSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    public createSurvey(request: ondewo_survey_survey_pb.CreateSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    public createSurvey(request: ondewo_survey_survey_pb.CreateSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    public getSurvey(request: ondewo_survey_survey_pb.GetSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    public getSurvey(request: ondewo_survey_survey_pb.GetSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    public getSurvey(request: ondewo_survey_survey_pb.GetSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    public updateSurvey(request: ondewo_survey_survey_pb.UpdateSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    public updateSurvey(request: ondewo_survey_survey_pb.UpdateSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    public updateSurvey(request: ondewo_survey_survey_pb.UpdateSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void): grpc.ClientUnaryCall;
    public deleteSurvey(request: ondewo_survey_survey_pb.DeleteSurveyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSurvey(request: ondewo_survey_survey_pb.DeleteSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSurvey(request: ondewo_survey_survey_pb.DeleteSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listSurveys(request: ondewo_survey_survey_pb.ListSurveysRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.ListSurveysResponse) => void): grpc.ClientUnaryCall;
    public listSurveys(request: ondewo_survey_survey_pb.ListSurveysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.ListSurveysResponse) => void): grpc.ClientUnaryCall;
    public listSurveys(request: ondewo_survey_survey_pb.ListSurveysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.ListSurveysResponse) => void): grpc.ClientUnaryCall;
    public getSurveyAnswers(request: ondewo_survey_survey_pb.GetSurveyAnswersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    public getSurveyAnswers(request: ondewo_survey_survey_pb.GetSurveyAnswersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    public getSurveyAnswers(request: ondewo_survey_survey_pb.GetSurveyAnswersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    public getAllSurveyAnswers(request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    public getAllSurveyAnswers(request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    public getAllSurveyAnswers(request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void): grpc.ClientUnaryCall;
    public createAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    public createAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    public createAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    public updateAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    public updateAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    public updateAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void): grpc.ClientUnaryCall;
    public deleteAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAgentSurvey(request: ondewo_survey_survey_pb.AgentSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
