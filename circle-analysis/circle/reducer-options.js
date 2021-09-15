"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.ReducerOptions = void 0;
var flatbuffers = require("flatbuffers");
var ReducerOptions = /** @class */ (function () {
    function ReducerOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    ReducerOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    ReducerOptions.getRootAsReducerOptions = function (bb, obj) {
        return (obj || new ReducerOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    ReducerOptions.getSizePrefixedRootAsReducerOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new ReducerOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    ReducerOptions.prototype.keepDims = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    ReducerOptions.startReducerOptions = function (builder) {
        builder.startObject(1);
    };
    ReducerOptions.addKeepDims = function (builder, keepDims) {
        builder.addFieldInt8(0, +keepDims, +false);
    };
    ReducerOptions.endReducerOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    ReducerOptions.createReducerOptions = function (builder, keepDims) {
        ReducerOptions.startReducerOptions(builder);
        ReducerOptions.addKeepDims(builder, keepDims);
        return ReducerOptions.endReducerOptions(builder);
    };
    return ReducerOptions;
}());
exports.ReducerOptions = ReducerOptions;
