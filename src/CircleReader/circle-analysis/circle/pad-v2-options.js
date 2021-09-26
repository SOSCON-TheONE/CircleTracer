"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.PadV2Options = void 0;
var flatbuffers = require("flatbuffers");
var PadV2Options = /** @class */ (function () {
    function PadV2Options() {
        this.bb = null;
        this.bb_pos = 0;
    }
    PadV2Options.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    PadV2Options.getRootAsPadV2Options = function (bb, obj) {
        return (obj || new PadV2Options()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    PadV2Options.getSizePrefixedRootAsPadV2Options = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new PadV2Options()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    PadV2Options.startPadV2Options = function (builder) {
        builder.startObject(0);
    };
    PadV2Options.endPadV2Options = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    PadV2Options.createPadV2Options = function (builder) {
        PadV2Options.startPadV2Options(builder);
        return PadV2Options.endPadV2Options(builder);
    };
    return PadV2Options;
}());
exports.PadV2Options = PadV2Options;