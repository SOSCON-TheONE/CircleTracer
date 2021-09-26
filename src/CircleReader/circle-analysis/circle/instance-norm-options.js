"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.InstanceNormOptions = void 0;
var flatbuffers = require("flatbuffers");
var activation_function_type_1 = require("../circle/activation-function-type");
var InstanceNormOptions = /** @class */ (function () {
    function InstanceNormOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    InstanceNormOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    InstanceNormOptions.getRootAsInstanceNormOptions = function (bb, obj) {
        return (obj || new InstanceNormOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    InstanceNormOptions.getSizePrefixedRootAsInstanceNormOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new InstanceNormOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    InstanceNormOptions.prototype.epsilon = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
    };
    InstanceNormOptions.prototype.fusedActivationFunction = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : activation_function_type_1.ActivationFunctionType.NONE;
    };
    InstanceNormOptions.startInstanceNormOptions = function (builder) {
        builder.startObject(2);
    };
    InstanceNormOptions.addEpsilon = function (builder, epsilon) {
        builder.addFieldFloat32(0, epsilon, 0.0);
    };
    InstanceNormOptions.addFusedActivationFunction = function (builder, fusedActivationFunction) {
        builder.addFieldInt8(1, fusedActivationFunction, activation_function_type_1.ActivationFunctionType.NONE);
    };
    InstanceNormOptions.endInstanceNormOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    InstanceNormOptions.createInstanceNormOptions = function (builder, epsilon, fusedActivationFunction) {
        InstanceNormOptions.startInstanceNormOptions(builder);
        InstanceNormOptions.addEpsilon(builder, epsilon);
        InstanceNormOptions.addFusedActivationFunction(builder, fusedActivationFunction);
        return InstanceNormOptions.endInstanceNormOptions(builder);
    };
    return InstanceNormOptions;
}());
exports.InstanceNormOptions = InstanceNormOptions;