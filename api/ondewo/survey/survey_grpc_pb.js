// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020 ONDEWO GmbH
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
// limitations under the License. (editesyntax = "proto3";
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_survey_survey_pb = require('../../ondewo/survey/survey_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_AgentSurveyRequest(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.AgentSurveyRequest)) {
    throw new Error('Expected argument of type ondewo.survey.AgentSurveyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_AgentSurveyRequest(buffer_arg) {
  return ondewo_survey_survey_pb.AgentSurveyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_AgentSurveyResponse(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.AgentSurveyResponse)) {
    throw new Error('Expected argument of type ondewo.survey.AgentSurveyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_AgentSurveyResponse(buffer_arg) {
  return ondewo_survey_survey_pb.AgentSurveyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_CreateSurveyRequest(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.CreateSurveyRequest)) {
    throw new Error('Expected argument of type ondewo.survey.CreateSurveyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_CreateSurveyRequest(buffer_arg) {
  return ondewo_survey_survey_pb.CreateSurveyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_DeleteSurveyRequest(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.DeleteSurveyRequest)) {
    throw new Error('Expected argument of type ondewo.survey.DeleteSurveyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_DeleteSurveyRequest(buffer_arg) {
  return ondewo_survey_survey_pb.DeleteSurveyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_GetAllSurveyAnswersRequest(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.GetAllSurveyAnswersRequest)) {
    throw new Error('Expected argument of type ondewo.survey.GetAllSurveyAnswersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_GetAllSurveyAnswersRequest(buffer_arg) {
  return ondewo_survey_survey_pb.GetAllSurveyAnswersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_GetSurveyAnswersRequest(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.GetSurveyAnswersRequest)) {
    throw new Error('Expected argument of type ondewo.survey.GetSurveyAnswersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_GetSurveyAnswersRequest(buffer_arg) {
  return ondewo_survey_survey_pb.GetSurveyAnswersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_GetSurveyRequest(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.GetSurveyRequest)) {
    throw new Error('Expected argument of type ondewo.survey.GetSurveyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_GetSurveyRequest(buffer_arg) {
  return ondewo_survey_survey_pb.GetSurveyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_ListSurveysRequest(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.ListSurveysRequest)) {
    throw new Error('Expected argument of type ondewo.survey.ListSurveysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_ListSurveysRequest(buffer_arg) {
  return ondewo_survey_survey_pb.ListSurveysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_ListSurveysResponse(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.ListSurveysResponse)) {
    throw new Error('Expected argument of type ondewo.survey.ListSurveysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_ListSurveysResponse(buffer_arg) {
  return ondewo_survey_survey_pb.ListSurveysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_Survey(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.Survey)) {
    throw new Error('Expected argument of type ondewo.survey.Survey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_Survey(buffer_arg) {
  return ondewo_survey_survey_pb.Survey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_SurveyAnswersResponse(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.SurveyAnswersResponse)) {
    throw new Error('Expected argument of type ondewo.survey.SurveyAnswersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_SurveyAnswersResponse(buffer_arg) {
  return ondewo_survey_survey_pb.SurveyAnswersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_UpdateSurveyRequest(arg) {
  if (!(arg instanceof ondewo_survey_survey_pb.UpdateSurveyRequest)) {
    throw new Error('Expected argument of type ondewo.survey.UpdateSurveyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_UpdateSurveyRequest(buffer_arg) {
  return ondewo_survey_survey_pb.UpdateSurveyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// ///// Services ///////
//
var SurveysService = exports.SurveysService = {
  // Create a Survey and an empty NLU Agent for it
createSurvey: {
    path: '/ondewo.survey.Surveys/CreateSurvey',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.CreateSurveyRequest,
    responseType: ondewo_survey_survey_pb.Survey,
    requestSerialize: serialize_ondewo_survey_CreateSurveyRequest,
    requestDeserialize: deserialize_ondewo_survey_CreateSurveyRequest,
    responseSerialize: serialize_ondewo_survey_Survey,
    responseDeserialize: deserialize_ondewo_survey_Survey,
  },
  // Retrieve a Survey message from the Database and return it
getSurvey: {
    path: '/ondewo.survey.Surveys/GetSurvey',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.GetSurveyRequest,
    responseType: ondewo_survey_survey_pb.Survey,
    requestSerialize: serialize_ondewo_survey_GetSurveyRequest,
    requestDeserialize: deserialize_ondewo_survey_GetSurveyRequest,
    responseSerialize: serialize_ondewo_survey_Survey,
    responseDeserialize: deserialize_ondewo_survey_Survey,
  },
  // Update an existing Survey message from the Database and return it
updateSurvey: {
    path: '/ondewo.survey.Surveys/UpdateSurvey',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.UpdateSurveyRequest,
    responseType: ondewo_survey_survey_pb.Survey,
    requestSerialize: serialize_ondewo_survey_UpdateSurveyRequest,
    requestDeserialize: deserialize_ondewo_survey_UpdateSurveyRequest,
    responseSerialize: serialize_ondewo_survey_Survey,
    responseDeserialize: deserialize_ondewo_survey_Survey,
  },
  // Delete a survey and its associated agent (if existent)
deleteSurvey: {
    path: '/ondewo.survey.Surveys/DeleteSurvey',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.DeleteSurveyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_survey_DeleteSurveyRequest,
    requestDeserialize: deserialize_ondewo_survey_DeleteSurveyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns the list of all surveys in the server
listSurveys: {
    path: '/ondewo.survey.Surveys/ListSurveys',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.ListSurveysRequest,
    responseType: ondewo_survey_survey_pb.ListSurveysResponse,
    requestSerialize: serialize_ondewo_survey_ListSurveysRequest,
    requestDeserialize: deserialize_ondewo_survey_ListSurveysRequest,
    responseSerialize: serialize_ondewo_survey_ListSurveysResponse,
    responseDeserialize: deserialize_ondewo_survey_ListSurveysResponse,
  },
  // Retrieve answers to survey questions collected in interactions with a survey agent for a specific session
getSurveyAnswers: {
    path: '/ondewo.survey.Surveys/GetSurveyAnswers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
    responseType: ondewo_survey_survey_pb.SurveyAnswersResponse,
    requestSerialize: serialize_ondewo_survey_GetSurveyAnswersRequest,
    requestDeserialize: deserialize_ondewo_survey_GetSurveyAnswersRequest,
    responseSerialize: serialize_ondewo_survey_SurveyAnswersResponse,
    responseDeserialize: deserialize_ondewo_survey_SurveyAnswersResponse,
  },
  // Retrieve all answers to survey questions collected in interactions with a survey agent in any session
getAllSurveyAnswers: {
    path: '/ondewo.survey.Surveys/GetAllSurveyAnswers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
    responseType: ondewo_survey_survey_pb.SurveyAnswersResponse,
    requestSerialize: serialize_ondewo_survey_GetAllSurveyAnswersRequest,
    requestDeserialize: deserialize_ondewo_survey_GetAllSurveyAnswersRequest,
    responseSerialize: serialize_ondewo_survey_SurveyAnswersResponse,
    responseDeserialize: deserialize_ondewo_survey_SurveyAnswersResponse,
  },
  // Populate and configures an NLU Agent from a Survey
createAgentSurvey: {
    path: '/ondewo.survey.Surveys/CreateAgentSurvey',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.AgentSurveyRequest,
    responseType: ondewo_survey_survey_pb.AgentSurveyResponse,
    requestSerialize: serialize_ondewo_survey_AgentSurveyRequest,
    requestDeserialize: deserialize_ondewo_survey_AgentSurveyRequest,
    responseSerialize: serialize_ondewo_survey_AgentSurveyResponse,
    responseDeserialize: deserialize_ondewo_survey_AgentSurveyResponse,
  },
  // Update an NLU agent from a survey
updateAgentSurvey: {
    path: '/ondewo.survey.Surveys/UpdateAgentSurvey',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.AgentSurveyRequest,
    responseType: ondewo_survey_survey_pb.AgentSurveyResponse,
    requestSerialize: serialize_ondewo_survey_AgentSurveyRequest,
    requestDeserialize: deserialize_ondewo_survey_AgentSurveyRequest,
    responseSerialize: serialize_ondewo_survey_AgentSurveyResponse,
    responseDeserialize: deserialize_ondewo_survey_AgentSurveyResponse,
  },
  // Deletes all data of an NLU agent associated to a survey
deleteAgentSurvey: {
    path: '/ondewo.survey.Surveys/DeleteAgentSurvey',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_survey_survey_pb.AgentSurveyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_survey_AgentSurveyRequest,
    requestDeserialize: deserialize_ondewo_survey_AgentSurveyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.SurveysClient = grpc.makeGenericClientConstructor(SurveysService);
