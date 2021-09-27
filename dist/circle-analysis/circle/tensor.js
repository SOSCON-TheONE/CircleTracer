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
exports.Tensor = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var quantization_parameters_1 = require("../circle/quantization-parameters");
var sparsity_parameters_1 = require("../circle/sparsity-parameters");
var tensor_type_1 = require("../circle/tensor-type");
var Tensor = /** @class */ (function () {
    function Tensor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    Tensor.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    Tensor.getRootAsTensor = function (bb, obj) {
        return (obj || new Tensor()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    Tensor.getSizePrefixedRootAsTensor = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Tensor()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    Tensor.prototype.shape = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
    };
    Tensor.prototype.shapeLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    Tensor.prototype.shapeArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    Tensor.prototype.type = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : tensor_type_1.TensorType.FLOAT32;
    };
    Tensor.prototype.buffer = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    };
    Tensor.prototype.name = function (optionalEncoding) {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    };
    Tensor.prototype.quantization = function (obj) {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? (obj || new quantization_parameters_1.QuantizationParameters()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    };
    Tensor.prototype.isVariable = function () {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    Tensor.prototype.sparsity = function (obj) {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? (obj || new sparsity_parameters_1.SparsityParameters()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    };
    Tensor.prototype.shapeSignature = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
    };
    Tensor.prototype.shapeSignatureLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    Tensor.prototype.shapeSignatureArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    Tensor.startTensor = function (builder) {
        builder.startObject(8);
    };
    Tensor.addShape = function (builder, shapeOffset) {
        builder.addFieldOffset(0, shapeOffset, 0);
    };
    Tensor.createShapeVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
        }
        return builder.endVector();
    };
    Tensor.startShapeVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    Tensor.addType = function (builder, type) {
        builder.addFieldInt8(1, type, tensor_type_1.TensorType.FLOAT32);
    };
    Tensor.addBuffer = function (builder, buffer) {
        builder.addFieldInt32(2, buffer, 0);
    };
    Tensor.addName = function (builder, nameOffset) {
        builder.addFieldOffset(3, nameOffset, 0);
    };
    Tensor.addQuantization = function (builder, quantizationOffset) {
        builder.addFieldOffset(4, quantizationOffset, 0);
    };
    Tensor.addIsVariable = function (builder, isVariable) {
        builder.addFieldInt8(5, +isVariable, +false);
    };
    Tensor.addSparsity = function (builder, sparsityOffset) {
        builder.addFieldOffset(6, sparsityOffset, 0);
    };
    Tensor.addShapeSignature = function (builder, shapeSignatureOffset) {
        builder.addFieldOffset(7, shapeSignatureOffset, 0);
    };
    Tensor.createShapeSignatureVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
        }
        return builder.endVector();
    };
    Tensor.startShapeSignatureVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    Tensor.endTensor = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    return Tensor;
}());
exports.Tensor = Tensor;
