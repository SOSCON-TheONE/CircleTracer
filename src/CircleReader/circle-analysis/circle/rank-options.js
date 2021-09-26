"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.RankOptions = void 0;
var flatbuffers = require("flatbuffers");
var RankOptions = /** @class */ (function () {
    function RankOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    RankOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    RankOptions.getRootAsRankOptions = function (bb, obj) {
        return (obj || new RankOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    RankOptions.getSizePrefixedRootAsRankOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new RankOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    RankOptions.startRankOptions = function (builder) {
        builder.startObject(0);
    };
    RankOptions.endRankOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    RankOptions.createRankOptions = function (builder) {
        RankOptions.startRankOptions(builder);
        return RankOptions.endRankOptions(builder);
    };
    return RankOptions;
}());
exports.RankOptions = RankOptions;