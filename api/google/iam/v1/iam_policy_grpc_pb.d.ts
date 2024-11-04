// package: google.iam.v1
// file: google/iam/v1/iam_policy.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as google_iam_v1_iam_policy_pb from "../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../google/iam/v1/policy_pb";

interface IIAMPolicyService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setIamPolicy: IIAMPolicyService_ISetIamPolicy;
    getIamPolicy: IIAMPolicyService_IGetIamPolicy;
    testIamPermissions: IIAMPolicyService_ITestIamPermissions;
}

interface IIAMPolicyService_ISetIamPolicy extends grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy> {
    path: "/google.iam.v1.IAMPolicy/SetIamPolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_iam_v1_iam_policy_pb.SetIamPolicyRequest>;
    requestDeserialize: grpc.deserialize<google_iam_v1_iam_policy_pb.SetIamPolicyRequest>;
    responseSerialize: grpc.serialize<google_iam_v1_policy_pb.Policy>;
    responseDeserialize: grpc.deserialize<google_iam_v1_policy_pb.Policy>;
}
interface IIAMPolicyService_IGetIamPolicy extends grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy> {
    path: "/google.iam.v1.IAMPolicy/GetIamPolicy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_iam_v1_iam_policy_pb.GetIamPolicyRequest>;
    requestDeserialize: grpc.deserialize<google_iam_v1_iam_policy_pb.GetIamPolicyRequest>;
    responseSerialize: grpc.serialize<google_iam_v1_policy_pb.Policy>;
    responseDeserialize: grpc.deserialize<google_iam_v1_policy_pb.Policy>;
}
interface IIAMPolicyService_ITestIamPermissions extends grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse> {
    path: "/google.iam.v1.IAMPolicy/TestIamPermissions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest>;
    requestDeserialize: grpc.deserialize<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest>;
    responseSerialize: grpc.serialize<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
    responseDeserialize: grpc.deserialize<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export const IAMPolicyService: IIAMPolicyService;

export interface IIAMPolicyServer {
    setIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
    getIamPolicy: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
    testIamPermissions: grpc.handleUnaryCall<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
}

export interface IIAMPolicyClient {
    setIamPolicy(request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    setIamPolicy(request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    setIamPolicy(request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    getIamPolicy(request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    getIamPolicy(request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    getIamPolicy(request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    testIamPermissions(request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: (error: grpc.ServiceError | null, response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void): grpc.ClientUnaryCall;
    testIamPermissions(request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void): grpc.ClientUnaryCall;
    testIamPermissions(request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void): grpc.ClientUnaryCall;
}

export class IAMPolicyClient extends grpc.Client implements IIAMPolicyClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setIamPolicy(request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    public setIamPolicy(request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    public setIamPolicy(request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    public getIamPolicy(request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    public getIamPolicy(request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    public getIamPolicy(request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_iam_v1_policy_pb.Policy) => void): grpc.ClientUnaryCall;
    public testIamPermissions(request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: (error: grpc.ServiceError | null, response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void): grpc.ClientUnaryCall;
    public testIamPermissions(request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void): grpc.ClientUnaryCall;
    public testIamPermissions(request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void): grpc.ClientUnaryCall;
}
