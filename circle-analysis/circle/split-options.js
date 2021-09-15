"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.SplitOptions = void 0;
var flatbuffers = require("flatbuffers");
var SplitOptions = /** @class */ (function () {
    function SplitOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    SplitOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    SplitOptions.getRootAsSplitOptions = function (bb, obj) {
        return (obj || new SplitOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SplitOptions.getSizePrefixedRootAsSplitOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new SplitOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SplitOptions.prototype.numSplits = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    SplitOptions.startSplitOptions = function (builder) {
        builder.startObject(1);
    };
    SplitOptions.addNumSplits = function (builder, numSplits) {
        builder.addFieldInt32(0, numSplits, 0);
    };
    SplitOptions.endSplitOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    SplitOptions.createSplitOptions = function (builder, numSplits) {
        SplitOptions.startSplitOptions(builder);
        SplitOptions.addNumSplits(builder, numSplits);
        return SplitOptions.endSplitOptions(builder);
    };
    return SplitOptions;
}());
exports.SplitOptions = SplitOptions;
