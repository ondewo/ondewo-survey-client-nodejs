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
var ondewo_survey_fhir_pb = require('../../ondewo/survey/fhir_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var ondewo_survey_survey_pb = require('../../ondewo/survey/survey_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_ondewo_survey_CreateFHIRSurveyRequest(arg) {
	if (!(arg instanceof ondewo_survey_fhir_pb.CreateFHIRSurveyRequest)) {
		throw new Error('Expected argument of type ondewo.survey.CreateFHIRSurveyRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_CreateFHIRSurveyRequest(buffer_arg) {
	return ondewo_survey_fhir_pb.CreateFHIRSurveyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_survey_Survey(arg) {
	if (!(arg instanceof ondewo_survey_survey_pb.Survey)) {
		throw new Error('Expected argument of type ondewo.survey.Survey');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_Survey(buffer_arg) {
	return ondewo_survey_survey_pb.Survey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_survey_SurveyFHIRAnswersResponse(arg) {
	if (!(arg instanceof ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse)) {
		throw new Error('Expected argument of type ondewo.survey.SurveyFHIRAnswersResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_survey_SurveyFHIRAnswersResponse(buffer_arg) {
	return ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

// ///// FHIR Services ///////
//
// The following servicer was designed to support the FHIR standard.
// Both Questionnaires and Responses will be detected and transformed for a simpler usage.
//
var FHIRService = (exports.FHIRService = {
	// Create a Survey from FHIR format and an empty NLU Agent for it
	createFHIRSurvey: {
		path: '/ondewo.survey.FHIR/CreateFHIRSurvey',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_survey_fhir_pb.CreateFHIRSurveyRequest,
		responseType: ondewo_survey_survey_pb.Survey,
		requestSerialize: serialize_ondewo_survey_CreateFHIRSurveyRequest,
		requestDeserialize: deserialize_ondewo_survey_CreateFHIRSurveyRequest,
		responseSerialize: serialize_ondewo_survey_Survey,
		responseDeserialize: deserialize_ondewo_survey_Survey
	},
	// Get Survey Answers on FHIR format
	getFHIRSurveyAnswers: {
		path: '/ondewo.survey.FHIR/GetFHIRSurveyAnswers',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		responseType: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse,
		requestSerialize: serialize_ondewo_survey_GetSurveyAnswersRequest,
		requestDeserialize: deserialize_ondewo_survey_GetSurveyAnswersRequest,
		responseSerialize: serialize_ondewo_survey_SurveyFHIRAnswersResponse,
		responseDeserialize: deserialize_ondewo_survey_SurveyFHIRAnswersResponse
	},
	// Get all Survey Answers on FHIR format
	getAllFHIRSurveyAnswers: {
		path: '/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		responseType: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse,
		requestSerialize: serialize_ondewo_survey_GetAllSurveyAnswersRequest,
		requestDeserialize: deserialize_ondewo_survey_GetAllSurveyAnswersRequest,
		responseSerialize: serialize_ondewo_survey_SurveyFHIRAnswersResponse,
		responseDeserialize: deserialize_ondewo_survey_SurveyFHIRAnswersResponse
	}
});

exports.FHIRClient = grpc.makeGenericClientConstructor(FHIRService);
