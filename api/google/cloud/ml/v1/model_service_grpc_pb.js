// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var google_cloud_ml_v1_model_service_pb = require('../../../../google/cloud/ml/v1/model_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_auth_pb = require('../../../../google/api/auth_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_ml_v1_CreateModelRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.CreateModelRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.CreateModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_CreateModelRequest(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.CreateModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_CreateVersionRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.CreateVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.CreateVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_CreateVersionRequest(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.CreateVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_DeleteModelRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.DeleteModelRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.DeleteModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_DeleteModelRequest(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.DeleteModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_DeleteVersionRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.DeleteVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.DeleteVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_DeleteVersionRequest(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.DeleteVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_GetModelRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.GetModelRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.GetModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_GetModelRequest(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.GetModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_GetVersionRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.GetVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.GetVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_GetVersionRequest(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.GetVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_ListModelsRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.ListModelsRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.ListModelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_ListModelsRequest(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.ListModelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_ListModelsResponse(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.ListModelsResponse)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.ListModelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_ListModelsResponse(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.ListModelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_ListVersionsRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.ListVersionsRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.ListVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_ListVersionsRequest(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.ListVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_ListVersionsResponse(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.ListVersionsResponse)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.ListVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_ListVersionsResponse(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.ListVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_Model(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.Model)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.Model');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_Model(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.Model.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_SetDefaultVersionRequest(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.SetDefaultVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_SetDefaultVersionRequest(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_ml_v1_Version(arg) {
  if (!(arg instanceof google_cloud_ml_v1_model_service_pb.Version)) {
    throw new Error('Expected argument of type google.cloud.ml.v1.Version');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_cloud_ml_v1_Version(buffer_arg) {
  return google_cloud_ml_v1_model_service_pb.Version.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Copyright 2017 Google Inc. All Rights Reserved.
//
// Proto file for the Google Cloud Machine Learning Engine.
// Describes the 'models service' to work with the 'model' and 'version'
// resources.
//
// Provides methods that create and manage machine learning models and their
// versions.
//
// A model in this context is a container for versions. The model can't provide
// predictions without first having a version created for it.
//
// Each version is a trained machine learning model, and each is assumed to be
// an iteration of the same machine learning problem as the other versions of
// the same model.
//
// Your project can define multiple models, each with multiple versions.
//
// The basic life cycle of a model is:
//
// *   Create and train the machine learning model and save it to a
//     Google Cloud Storage location.
// *   Use
//     [projects.models.create](/ml/reference/rest/v1/projects.models/create)
//     to make a new model in your project.
// *   Use
//     [projects.models.versions.create](/ml/reference/rest/v1/projects.models.versions/create)
//     to deploy your saved model.
// *   Use [projects.predict](/ml/reference/rest/v1/projects/predict to
//     request predictions of a version of your model, or use
//     [projects.jobs.create](/ml/reference/rest/v1/projects.jobs/create)
//     to start a batch prediction job.
var ModelServiceService = exports.ModelServiceService = {
  // Creates a model which will later contain one or more versions.
//
// You must add at least one version before you can request predictions from
// the model. Add versions by calling
// [projects.models.versions.create](/ml/reference/rest/v1/projects.models.versions/create).
createModel: {
    path: '/google.cloud.ml.v1.ModelService/CreateModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_model_service_pb.CreateModelRequest,
    responseType: google_cloud_ml_v1_model_service_pb.Model,
    requestSerialize: serialize_google_cloud_ml_v1_CreateModelRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_CreateModelRequest,
    responseSerialize: serialize_google_cloud_ml_v1_Model,
    responseDeserialize: deserialize_google_cloud_ml_v1_Model,
  },
  // Lists the models in a project.
//
// Each project can contain multiple models, and each model can have multiple
// versions.
listModels: {
    path: '/google.cloud.ml.v1.ModelService/ListModels',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_model_service_pb.ListModelsRequest,
    responseType: google_cloud_ml_v1_model_service_pb.ListModelsResponse,
    requestSerialize: serialize_google_cloud_ml_v1_ListModelsRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_ListModelsRequest,
    responseSerialize: serialize_google_cloud_ml_v1_ListModelsResponse,
    responseDeserialize: deserialize_google_cloud_ml_v1_ListModelsResponse,
  },
  // Gets information about a model, including its name, the description (if
// set), and the default version (if at least one version of the model has
// been deployed).
getModel: {
    path: '/google.cloud.ml.v1.ModelService/GetModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_model_service_pb.GetModelRequest,
    responseType: google_cloud_ml_v1_model_service_pb.Model,
    requestSerialize: serialize_google_cloud_ml_v1_GetModelRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_GetModelRequest,
    responseSerialize: serialize_google_cloud_ml_v1_Model,
    responseDeserialize: deserialize_google_cloud_ml_v1_Model,
  },
  // Deletes a model.
//
// You can only delete a model if there are no versions in it. You can delete
// versions by calling
// [projects.models.versions.delete](/ml/reference/rest/v1/projects.models.versions/delete).
deleteModel: {
    path: '/google.cloud.ml.v1.ModelService/DeleteModel',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_model_service_pb.DeleteModelRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_ml_v1_DeleteModelRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_DeleteModelRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Creates a new version of a model from a trained TensorFlow model.
//
// If the version created in the cloud by this call is the first deployed
// version of the specified model, it will be made the default version of the
// model. When you add a version to a model that already has one or more
// versions, the default version does not automatically change. If you want a
// new version to be the default, you must call
// [projects.models.versions.setDefault](/ml/reference/rest/v1/projects.models.versions/setDefault).
createVersion: {
    path: '/google.cloud.ml.v1.ModelService/CreateVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_model_service_pb.CreateVersionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_ml_v1_CreateVersionRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_CreateVersionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Gets basic information about all the versions of a model.
//
// If you expect that a model has a lot of versions, or if you need to handle
// only a limited number of results at a time, you can request that the list
// be retrieved in batches (called pages):
listVersions: {
    path: '/google.cloud.ml.v1.ModelService/ListVersions',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_model_service_pb.ListVersionsRequest,
    responseType: google_cloud_ml_v1_model_service_pb.ListVersionsResponse,
    requestSerialize: serialize_google_cloud_ml_v1_ListVersionsRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_ListVersionsRequest,
    responseSerialize: serialize_google_cloud_ml_v1_ListVersionsResponse,
    responseDeserialize: deserialize_google_cloud_ml_v1_ListVersionsResponse,
  },
  // Gets information about a model version.
//
// Models can have multiple versions. You can call
// [projects.models.versions.list](/ml/reference/rest/v1/projects.models.versions/list)
// to get the same information that this method returns for all of the
// versions of a model.
getVersion: {
    path: '/google.cloud.ml.v1.ModelService/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_model_service_pb.GetVersionRequest,
    responseType: google_cloud_ml_v1_model_service_pb.Version,
    requestSerialize: serialize_google_cloud_ml_v1_GetVersionRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_GetVersionRequest,
    responseSerialize: serialize_google_cloud_ml_v1_Version,
    responseDeserialize: deserialize_google_cloud_ml_v1_Version,
  },
  // Deletes a model version.
//
// Each model can have multiple versions deployed and in use at any given
// time. Use this method to remove a single version.
//
// Note: You cannot delete the version that is set as the default version
// of the model unless it is the only remaining version.
deleteVersion: {
    path: '/google.cloud.ml.v1.ModelService/DeleteVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_ml_v1_DeleteVersionRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_DeleteVersionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Designates a version to be the default for the model.
//
// The default version is used for prediction requests made against the model
// that don't specify a version.
//
// The first version to be created for a model is automatically set as the
// default. You must make any subsequent changes to the default version
// setting manually using this method.
setDefaultVersion: {
    path: '/google.cloud.ml.v1.ModelService/SetDefaultVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest,
    responseType: google_cloud_ml_v1_model_service_pb.Version,
    requestSerialize: serialize_google_cloud_ml_v1_SetDefaultVersionRequest,
    requestDeserialize: deserialize_google_cloud_ml_v1_SetDefaultVersionRequest,
    responseSerialize: serialize_google_cloud_ml_v1_Version,
    responseDeserialize: deserialize_google_cloud_ml_v1_Version,
  },
};

exports.ModelServiceClient = grpc.makeGenericClientConstructor(ModelServiceService);
