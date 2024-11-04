// package: google.cloud.ml.v1
// file: google/cloud/ml/v1/model_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as google_cloud_ml_v1_model_service_pb from "../../../../google/cloud/ml/v1/model_service_pb";
import * as google_api_auth_pb from "../../../../google/api/auth_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IModelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createModel: IModelServiceService_ICreateModel;
    listModels: IModelServiceService_IListModels;
    getModel: IModelServiceService_IGetModel;
    deleteModel: IModelServiceService_IDeleteModel;
    createVersion: IModelServiceService_ICreateVersion;
    listVersions: IModelServiceService_IListVersions;
    getVersion: IModelServiceService_IGetVersion;
    deleteVersion: IModelServiceService_IDeleteVersion;
    setDefaultVersion: IModelServiceService_ISetDefaultVersion;
}

interface IModelServiceService_ICreateModel extends grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.CreateModelRequest, google_cloud_ml_v1_model_service_pb.Model> {
    path: "/google.cloud.ml.v1.ModelService/CreateModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.CreateModelRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.CreateModelRequest>;
    responseSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.Model>;
    responseDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.Model>;
}
interface IModelServiceService_IListModels extends grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.ListModelsRequest, google_cloud_ml_v1_model_service_pb.ListModelsResponse> {
    path: "/google.cloud.ml.v1.ModelService/ListModels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.ListModelsRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.ListModelsRequest>;
    responseSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.ListModelsResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.ListModelsResponse>;
}
interface IModelServiceService_IGetModel extends grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.GetModelRequest, google_cloud_ml_v1_model_service_pb.Model> {
    path: "/google.cloud.ml.v1.ModelService/GetModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.GetModelRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.GetModelRequest>;
    responseSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.Model>;
    responseDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.Model>;
}
interface IModelServiceService_IDeleteModel extends grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.DeleteModelRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.ml.v1.ModelService/DeleteModel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.DeleteModelRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.DeleteModelRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IModelServiceService_ICreateVersion extends grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.CreateVersionRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.ml.v1.ModelService/CreateVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.CreateVersionRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.CreateVersionRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IModelServiceService_IListVersions extends grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.ListVersionsRequest, google_cloud_ml_v1_model_service_pb.ListVersionsResponse> {
    path: "/google.cloud.ml.v1.ModelService/ListVersions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.ListVersionsRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.ListVersionsRequest>;
    responseSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.ListVersionsResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.ListVersionsResponse>;
}
interface IModelServiceService_IGetVersion extends grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.GetVersionRequest, google_cloud_ml_v1_model_service_pb.Version> {
    path: "/google.cloud.ml.v1.ModelService/GetVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.GetVersionRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.GetVersionRequest>;
    responseSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.Version>;
    responseDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.Version>;
}
interface IModelServiceService_IDeleteVersion extends grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, google_longrunning_operations_pb.Operation> {
    path: "/google.cloud.ml.v1.ModelService/DeleteVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.DeleteVersionRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.DeleteVersionRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IModelServiceService_ISetDefaultVersion extends grpc.MethodDefinition<google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, google_cloud_ml_v1_model_service_pb.Version> {
    path: "/google.cloud.ml.v1.ModelService/SetDefaultVersion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest>;
    responseSerialize: grpc.serialize<google_cloud_ml_v1_model_service_pb.Version>;
    responseDeserialize: grpc.deserialize<google_cloud_ml_v1_model_service_pb.Version>;
}

export const ModelServiceService: IModelServiceService;

export interface IModelServiceServer {
    createModel: grpc.handleUnaryCall<google_cloud_ml_v1_model_service_pb.CreateModelRequest, google_cloud_ml_v1_model_service_pb.Model>;
    listModels: grpc.handleUnaryCall<google_cloud_ml_v1_model_service_pb.ListModelsRequest, google_cloud_ml_v1_model_service_pb.ListModelsResponse>;
    getModel: grpc.handleUnaryCall<google_cloud_ml_v1_model_service_pb.GetModelRequest, google_cloud_ml_v1_model_service_pb.Model>;
    deleteModel: grpc.handleUnaryCall<google_cloud_ml_v1_model_service_pb.DeleteModelRequest, google_longrunning_operations_pb.Operation>;
    createVersion: grpc.handleUnaryCall<google_cloud_ml_v1_model_service_pb.CreateVersionRequest, google_longrunning_operations_pb.Operation>;
    listVersions: grpc.handleUnaryCall<google_cloud_ml_v1_model_service_pb.ListVersionsRequest, google_cloud_ml_v1_model_service_pb.ListVersionsResponse>;
    getVersion: grpc.handleUnaryCall<google_cloud_ml_v1_model_service_pb.GetVersionRequest, google_cloud_ml_v1_model_service_pb.Version>;
    deleteVersion: grpc.handleUnaryCall<google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, google_longrunning_operations_pb.Operation>;
    setDefaultVersion: grpc.handleUnaryCall<google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, google_cloud_ml_v1_model_service_pb.Version>;
}

export interface IModelServiceClient {
    createModel(request: google_cloud_ml_v1_model_service_pb.CreateModelRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    createModel(request: google_cloud_ml_v1_model_service_pb.CreateModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    createModel(request: google_cloud_ml_v1_model_service_pb.CreateModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    listModels(request: google_cloud_ml_v1_model_service_pb.ListModelsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    listModels(request: google_cloud_ml_v1_model_service_pb.ListModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    listModels(request: google_cloud_ml_v1_model_service_pb.ListModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    getModel(request: google_cloud_ml_v1_model_service_pb.GetModelRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    getModel(request: google_cloud_ml_v1_model_service_pb.GetModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    getModel(request: google_cloud_ml_v1_model_service_pb.GetModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    deleteModel(request: google_cloud_ml_v1_model_service_pb.DeleteModelRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteModel(request: google_cloud_ml_v1_model_service_pb.DeleteModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteModel(request: google_cloud_ml_v1_model_service_pb.DeleteModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createVersion(request: google_cloud_ml_v1_model_service_pb.CreateVersionRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createVersion(request: google_cloud_ml_v1_model_service_pb.CreateVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    createVersion(request: google_cloud_ml_v1_model_service_pb.CreateVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    listVersions(request: google_cloud_ml_v1_model_service_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: google_cloud_ml_v1_model_service_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    listVersions(request: google_cloud_ml_v1_model_service_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    getVersion(request: google_cloud_ml_v1_model_service_pb.GetVersionRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    getVersion(request: google_cloud_ml_v1_model_service_pb.GetVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    getVersion(request: google_cloud_ml_v1_model_service_pb.GetVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    deleteVersion(request: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteVersion(request: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteVersion(request: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    setDefaultVersion(request: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    setDefaultVersion(request: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    setDefaultVersion(request: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
}

export class ModelServiceClient extends grpc.Client implements IModelServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createModel(request: google_cloud_ml_v1_model_service_pb.CreateModelRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    public createModel(request: google_cloud_ml_v1_model_service_pb.CreateModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    public createModel(request: google_cloud_ml_v1_model_service_pb.CreateModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    public listModels(request: google_cloud_ml_v1_model_service_pb.ListModelsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    public listModels(request: google_cloud_ml_v1_model_service_pb.ListModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    public listModels(request: google_cloud_ml_v1_model_service_pb.ListModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    public getModel(request: google_cloud_ml_v1_model_service_pb.GetModelRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    public getModel(request: google_cloud_ml_v1_model_service_pb.GetModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    public getModel(request: google_cloud_ml_v1_model_service_pb.GetModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Model) => void): grpc.ClientUnaryCall;
    public deleteModel(request: google_cloud_ml_v1_model_service_pb.DeleteModelRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteModel(request: google_cloud_ml_v1_model_service_pb.DeleteModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteModel(request: google_cloud_ml_v1_model_service_pb.DeleteModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createVersion(request: google_cloud_ml_v1_model_service_pb.CreateVersionRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createVersion(request: google_cloud_ml_v1_model_service_pb.CreateVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public createVersion(request: google_cloud_ml_v1_model_service_pb.CreateVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public listVersions(request: google_cloud_ml_v1_model_service_pb.ListVersionsRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: google_cloud_ml_v1_model_service_pb.ListVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public listVersions(request: google_cloud_ml_v1_model_service_pb.ListVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.ListVersionsResponse) => void): grpc.ClientUnaryCall;
    public getVersion(request: google_cloud_ml_v1_model_service_pb.GetVersionRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    public getVersion(request: google_cloud_ml_v1_model_service_pb.GetVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    public getVersion(request: google_cloud_ml_v1_model_service_pb.GetVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    public deleteVersion(request: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteVersion(request: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteVersion(request: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public setDefaultVersion(request: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    public setDefaultVersion(request: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
    public setDefaultVersion(request: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_ml_v1_model_service_pb.Version) => void): grpc.ClientUnaryCall;
}
