"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidirectionalSequenceRNNOptions = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var activation_function_type_1 = require("../circle/activation-function-type");
var BidirectionalSequenceRNNOptions = /** @class */ (function () {
    function BidirectionalSequenceRNNOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    BidirectionalSequenceRNNOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    BidirectionalSequenceRNNOptions.getRootAsBidirectionalSequenceRNNOptions = function (bb, obj) {
        return (obj || new BidirectionalSequenceRNNOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    BidirectionalSequenceRNNOptions.getSizePrefixedRootAsBidirectionalSequenceRNNOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new BidirectionalSequenceRNNOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    BidirectionalSequenceRNNOptions.prototype.timeMajor = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    BidirectionalSequenceRNNOptions.prototype.fusedActivationFunction = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : activation_function_type_1.ActivationFunctionType.NONE;
    };
    BidirectionalSequenceRNNOptions.prototype.mergeOutputs = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    BidirectionalSequenceRNNOptions.prototype.asymmetricQuantizeInputs = function () {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    BidirectionalSequenceRNNOptions.startBidirectionalSequenceRNNOptions = function (builder) {
        builder.startObject(4);
    };
    BidirectionalSequenceRNNOptions.addTimeMajor = function (builder, timeMajor) {
        builder.addFieldInt8(0, +timeMajor, +false);
    };
    BidirectionalSequenceRNNOptions.addFusedActivationFunction = function (builder, fusedActivationFunction) {
        builder.addFieldInt8(1, fusedActivationFunction, activation_function_type_1.ActivationFunctionType.NONE);
    };
    BidirectionalSequenceRNNOptions.addMergeOutputs = function (builder, mergeOutputs) {
        builder.addFieldInt8(2, +mergeOutputs, +false);
    };
    BidirectionalSequenceRNNOptions.addAsymmetricQuantizeInputs = function (builder, asymmetricQuantizeInputs) {
        builder.addFieldInt8(3, +asymmetricQuantizeInputs, +false);
    };
    BidirectionalSequenceRNNOptions.endBidirectionalSequenceRNNOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    BidirectionalSequenceRNNOptions.createBidirectionalSequenceRNNOptions = function (builder, timeMajor, fusedActivationFunction, mergeOutputs, asymmetricQuantizeInputs) {
        BidirectionalSequenceRNNOptions.startBidirectionalSequenceRNNOptions(builder);
        BidirectionalSequenceRNNOptions.addTimeMajor(builder, timeMajor);
        BidirectionalSequenceRNNOptions.addFusedActivationFunction(builder, fusedActivationFunction);
        BidirectionalSequenceRNNOptions.addMergeOutputs(builder, mergeOutputs);
        BidirectionalSequenceRNNOptions.addAsymmetricQuantizeInputs(builder, asymmetricQuantizeInputs);
        return BidirectionalSequenceRNNOptions.endBidirectionalSequenceRNNOptions(builder);
    };
    return BidirectionalSequenceRNNOptions;
}());
exports.BidirectionalSequenceRNNOptions = BidirectionalSequenceRNNOptions;
