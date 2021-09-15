"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.ArgMaxOptions = void 0;
var flatbuffers = require("flatbuffers");
var tensor_type_1 = require("../circle/tensor-type");
var ArgMaxOptions = /** @class */ (function () {
    function ArgMaxOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    ArgMaxOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    ArgMaxOptions.getRootAsArgMaxOptions = function (bb, obj) {
        return (obj || new ArgMaxOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    ArgMaxOptions.getSizePrefixedRootAsArgMaxOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new ArgMaxOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    ArgMaxOptions.prototype.outputType = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : tensor_type_1.TensorType.FLOAT32;
    };
    ArgMaxOptions.startArgMaxOptions = function (builder) {
        builder.startObject(1);
    };
    ArgMaxOptions.addOutputType = function (builder, outputType) {
        builder.addFieldInt8(0, outputType, tensor_type_1.TensorType.FLOAT32);
    };
    ArgMaxOptions.endArgMaxOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    ArgMaxOptions.createArgMaxOptions = function (builder, outputType) {
        ArgMaxOptions.startArgMaxOptions(builder);
        ArgMaxOptions.addOutputType(builder, outputType);
        return ArgMaxOptions.endArgMaxOptions(builder);
    };
    return ArgMaxOptions;
}());
exports.ArgMaxOptions = ArgMaxOptions;
