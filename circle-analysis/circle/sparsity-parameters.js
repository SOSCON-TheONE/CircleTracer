"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.SparsityParameters = void 0;
var flatbuffers = require("flatbuffers");
var dimension_metadata_1 = require("../circle/dimension-metadata");
var SparsityParameters = /** @class */ (function () {
    function SparsityParameters() {
        this.bb = null;
        this.bb_pos = 0;
    }
    SparsityParameters.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    SparsityParameters.getRootAsSparsityParameters = function (bb, obj) {
        return (obj || new SparsityParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SparsityParameters.getSizePrefixedRootAsSparsityParameters = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new SparsityParameters()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SparsityParameters.prototype.traversalOrder = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
    };
    SparsityParameters.prototype.traversalOrderLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    SparsityParameters.prototype.traversalOrderArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    SparsityParameters.prototype.blockMap = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
    };
    SparsityParameters.prototype.blockMapLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    SparsityParameters.prototype.blockMapArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    SparsityParameters.prototype.dimMetadata = function (index, obj) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new dimension_metadata_1.DimensionMetadata()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    };
    SparsityParameters.prototype.dimMetadataLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    SparsityParameters.startSparsityParameters = function (builder) {
        builder.startObject(3);
    };
    SparsityParameters.addTraversalOrder = function (builder, traversalOrderOffset) {
        builder.addFieldOffset(0, traversalOrderOffset, 0);
    };
    SparsityParameters.createTraversalOrderVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
        }
        return builder.endVector();
    };
    SparsityParameters.startTraversalOrderVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    SparsityParameters.addBlockMap = function (builder, blockMapOffset) {
        builder.addFieldOffset(1, blockMapOffset, 0);
    };
    SparsityParameters.createBlockMapVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
        }
        return builder.endVector();
    };
    SparsityParameters.startBlockMapVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    SparsityParameters.addDimMetadata = function (builder, dimMetadataOffset) {
        builder.addFieldOffset(2, dimMetadataOffset, 0);
    };
    SparsityParameters.createDimMetadataVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    };
    SparsityParameters.startDimMetadataVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    SparsityParameters.endSparsityParameters = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    SparsityParameters.createSparsityParameters = function (builder, traversalOrderOffset, blockMapOffset, dimMetadataOffset) {
        SparsityParameters.startSparsityParameters(builder);
        SparsityParameters.addTraversalOrder(builder, traversalOrderOffset);
        SparsityParameters.addBlockMap(builder, blockMapOffset);
        SparsityParameters.addDimMetadata(builder, dimMetadataOffset);
        return SparsityParameters.endSparsityParameters(builder);
    };
    return SparsityParameters;
}());
exports.SparsityParameters = SparsityParameters;
