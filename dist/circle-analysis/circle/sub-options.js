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
exports.SubOptions = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var activation_function_type_1 = require("../circle/activation-function-type");
var SubOptions = /** @class */ (function () {
    function SubOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    SubOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    SubOptions.getRootAsSubOptions = function (bb, obj) {
        return (obj || new SubOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SubOptions.getSizePrefixedRootAsSubOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new SubOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SubOptions.prototype.fusedActivationFunction = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : activation_function_type_1.ActivationFunctionType.NONE;
    };
    SubOptions.startSubOptions = function (builder) {
        builder.startObject(1);
    };
    SubOptions.addFusedActivationFunction = function (builder, fusedActivationFunction) {
        builder.addFieldInt8(0, fusedActivationFunction, activation_function_type_1.ActivationFunctionType.NONE);
    };
    SubOptions.endSubOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    SubOptions.createSubOptions = function (builder, fusedActivationFunction) {
        SubOptions.startSubOptions(builder);
        SubOptions.addFusedActivationFunction(builder, fusedActivationFunction);
        return SubOptions.endSubOptions(builder);
    };
    return SubOptions;
}());
exports.SubOptions = SubOptions;
