// package: ondewo.survey
// file: ondewo/survey/fhir.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as ondewo_survey_fhir_pb from '../../ondewo/survey/fhir_pb';
import * as ondewo_survey_survey_pb from '../../ondewo/survey/survey_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

interface IFHIRService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
	createFHIRSurvey: IFHIRService_ICreateFHIRSurvey;
	getFHIRSurveyAnswers: IFHIRService_IGetFHIRSurveyAnswers;
	getAllFHIRSurveyAnswers: IFHIRService_IGetAllFHIRSurveyAnswers;
}

interface IFHIRService_ICreateFHIRSurvey
	extends grpc.MethodDefinition<ondewo_survey_fhir_pb.CreateFHIRSurveyRequest, ondewo_survey_survey_pb.Survey> {
	path: '/ondewo.survey.FHIR/CreateFHIRSurvey';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_survey_fhir_pb.CreateFHIRSurveyRequest>;
	requestDeserialize: grpc.deserialize<ondewo_survey_fhir_pb.CreateFHIRSurveyRequest>;
	responseSerialize: grpc.serialize<ondewo_survey_survey_pb.Survey>;
	responseDeserialize: grpc.deserialize<ondewo_survey_survey_pb.Survey>;
}
interface IFHIRService_IGetFHIRSurveyAnswers
	extends grpc.MethodDefinition<
		ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse
	> {
	path: '/ondewo.survey.FHIR/GetFHIRSurveyAnswers';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_survey_survey_pb.GetSurveyAnswersRequest>;
	requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.GetSurveyAnswersRequest>;
	responseSerialize: grpc.serialize<ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse>;
	responseDeserialize: grpc.deserialize<ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse>;
}
interface IFHIRService_IGetAllFHIRSurveyAnswers
	extends grpc.MethodDefinition<
		ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse
	> {
	path: '/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_survey_survey_pb.GetAllSurveyAnswersRequest>;
	requestDeserialize: grpc.deserialize<ondewo_survey_survey_pb.GetAllSurveyAnswersRequest>;
	responseSerialize: grpc.serialize<ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse>;
	responseDeserialize: grpc.deserialize<ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse>;
}

export const FHIRService: IFHIRService;

export interface IFHIRServer {
	createFHIRSurvey: grpc.handleUnaryCall<ondewo_survey_fhir_pb.CreateFHIRSurveyRequest, ondewo_survey_survey_pb.Survey>;
	getFHIRSurveyAnswers: grpc.handleUnaryCall<
		ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse
	>;
	getAllFHIRSurveyAnswers: grpc.handleUnaryCall<
		ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse
	>;
}

export interface IFHIRClient {
	createFHIRSurvey(
		request: ondewo_survey_fhir_pb.CreateFHIRSurveyRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void
	): grpc.ClientUnaryCall;
	createFHIRSurvey(
		request: ondewo_survey_fhir_pb.CreateFHIRSurveyRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void
	): grpc.ClientUnaryCall;
	createFHIRSurvey(
		request: ondewo_survey_fhir_pb.CreateFHIRSurveyRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void
	): grpc.ClientUnaryCall;
	getFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	getFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	getFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	getAllFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	getAllFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	getAllFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
}

export class FHIRClient extends grpc.Client implements IFHIRClient {
	constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
	public createFHIRSurvey(
		request: ondewo_survey_fhir_pb.CreateFHIRSurveyRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void
	): grpc.ClientUnaryCall;
	public createFHIRSurvey(
		request: ondewo_survey_fhir_pb.CreateFHIRSurveyRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void
	): grpc.ClientUnaryCall;
	public createFHIRSurvey(
		request: ondewo_survey_fhir_pb.CreateFHIRSurveyRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_survey_pb.Survey) => void
	): grpc.ClientUnaryCall;
	public getFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	public getFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	public getFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	public getAllFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	public getAllFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
	public getAllFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpc.ClientUnaryCall;
}
