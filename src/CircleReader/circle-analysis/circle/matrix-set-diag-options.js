"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.MatrixSetDiagOptions = void 0;
var flatbuffers = require("flatbuffers");
var MatrixSetDiagOptions = /** @class */ (function () {
    function MatrixSetDiagOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    MatrixSetDiagOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    MatrixSetDiagOptions.getRootAsMatrixSetDiagOptions = function (bb, obj) {
        return (obj || new MatrixSetDiagOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    MatrixSetDiagOptions.getSizePrefixedRootAsMatrixSetDiagOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new MatrixSetDiagOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    MatrixSetDiagOptions.startMatrixSetDiagOptions = function (builder) {
        builder.startObject(0);
    };
    MatrixSetDiagOptions.endMatrixSetDiagOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    MatrixSetDiagOptions.createMatrixSetDiagOptions = function (builder) {
        MatrixSetDiagOptions.startMatrixSetDiagOptions(builder);
        return MatrixSetDiagOptions.endMatrixSetDiagOptions(builder);
    };
    return MatrixSetDiagOptions;
}());
exports.MatrixSetDiagOptions = MatrixSetDiagOptions;