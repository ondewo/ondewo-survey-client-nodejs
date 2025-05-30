// source: google/api/logging.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.api.Logging', null, global);
goog.exportSymbol('proto.google.api.Logging.LoggingDestination', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Logging = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Logging.repeatedFields_, null);
};
goog.inherits(proto.google.api.Logging, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Logging.displayName = 'proto.google.api.Logging';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Logging.LoggingDestination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Logging.LoggingDestination.repeatedFields_, null);
};
goog.inherits(proto.google.api.Logging.LoggingDestination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Logging.LoggingDestination.displayName = 'proto.google.api.Logging.LoggingDestination';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Logging.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Logging.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Logging.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Logging} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Logging.toObject = function(includeInstance, msg) {
  var f, obj = {
    producerDestinationsList: jspb.Message.toObjectList(msg.getProducerDestinationsList(),
    proto.google.api.Logging.LoggingDestination.toObject, includeInstance),
    consumerDestinationsList: jspb.Message.toObjectList(msg.getConsumerDestinationsList(),
    proto.google.api.Logging.LoggingDestination.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Logging}
 */
proto.google.api.Logging.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Logging;
  return proto.google.api.Logging.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Logging} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Logging}
 */
proto.google.api.Logging.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.api.Logging.LoggingDestination;
      reader.readMessage(value,proto.google.api.Logging.LoggingDestination.deserializeBinaryFromReader);
      msg.addProducerDestinations(value);
      break;
    case 2:
      var value = new proto.google.api.Logging.LoggingDestination;
      reader.readMessage(value,proto.google.api.Logging.LoggingDestination.deserializeBinaryFromReader);
      msg.addConsumerDestinations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Logging.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Logging.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Logging} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Logging.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProducerDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.api.Logging.LoggingDestination.serializeBinaryToWriter
    );
  }
  f = message.getConsumerDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.api.Logging.LoggingDestination.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Logging.LoggingDestination.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Logging.LoggingDestination.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Logging.LoggingDestination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Logging.LoggingDestination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Logging.LoggingDestination.toObject = function(includeInstance, msg) {
  var f, obj = {
    monitoredResource: jspb.Message.getFieldWithDefault(msg, 3, ""),
    logsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Logging.LoggingDestination}
 */
proto.google.api.Logging.LoggingDestination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Logging.LoggingDestination;
  return proto.google.api.Logging.LoggingDestination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Logging.LoggingDestination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Logging.LoggingDestination}
 */
proto.google.api.Logging.LoggingDestination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoredResource(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLogs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Logging.LoggingDestination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Logging.LoggingDestination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Logging.LoggingDestination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Logging.LoggingDestination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMonitoredResource();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * optional string monitored_resource = 3;
 * @return {string}
 */
proto.google.api.Logging.LoggingDestination.prototype.getMonitoredResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.Logging.LoggingDestination} returns this
 */
proto.google.api.Logging.LoggingDestination.prototype.setMonitoredResource = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string logs = 1;
 * @return {!Array<string>}
 */
proto.google.api.Logging.LoggingDestination.prototype.getLogsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.api.Logging.LoggingDestination} returns this
 */
proto.google.api.Logging.LoggingDestination.prototype.setLogsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.api.Logging.LoggingDestination} returns this
 */
proto.google.api.Logging.LoggingDestination.prototype.addLogs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Logging.LoggingDestination} returns this
 */
proto.google.api.Logging.LoggingDestination.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};


/**
 * repeated LoggingDestination producer_destinations = 1;
 * @return {!Array<!proto.google.api.Logging.LoggingDestination>}
 */
proto.google.api.Logging.prototype.getProducerDestinationsList = function() {
  return /** @type{!Array<!proto.google.api.Logging.LoggingDestination>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.Logging.LoggingDestination, 1));
};


/**
 * @param {!Array<!proto.google.api.Logging.LoggingDestination>} value
 * @return {!proto.google.api.Logging} returns this
*/
proto.google.api.Logging.prototype.setProducerDestinationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.api.Logging.LoggingDestination=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.Logging.LoggingDestination}
 */
proto.google.api.Logging.prototype.addProducerDestinations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.api.Logging.LoggingDestination, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Logging} returns this
 */
proto.google.api.Logging.prototype.clearProducerDestinationsList = function() {
  return this.setProducerDestinationsList([]);
};


/**
 * repeated LoggingDestination consumer_destinations = 2;
 * @return {!Array<!proto.google.api.Logging.LoggingDestination>}
 */
proto.google.api.Logging.prototype.getConsumerDestinationsList = function() {
  return /** @type{!Array<!proto.google.api.Logging.LoggingDestination>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.Logging.LoggingDestination, 2));
};


/**
 * @param {!Array<!proto.google.api.Logging.LoggingDestination>} value
 * @return {!proto.google.api.Logging} returns this
*/
proto.google.api.Logging.prototype.setConsumerDestinationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.api.Logging.LoggingDestination=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.Logging.LoggingDestination}
 */
proto.google.api.Logging.prototype.addConsumerDestinations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.api.Logging.LoggingDestination, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Logging} returns this
 */
proto.google.api.Logging.prototype.clearConsumerDestinationsList = function() {
  return this.setConsumerDestinationsList([]);
};


goog.object.extend(exports, proto.google.api);
