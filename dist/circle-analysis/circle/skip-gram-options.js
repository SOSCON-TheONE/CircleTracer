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
exports.SkipGramOptions = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var SkipGramOptions = /** @class */ (function () {
    function SkipGramOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    SkipGramOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    SkipGramOptions.getRootAsSkipGramOptions = function (bb, obj) {
        return (obj || new SkipGramOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SkipGramOptions.getSizePrefixedRootAsSkipGramOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new SkipGramOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SkipGramOptions.prototype.ngramSize = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    SkipGramOptions.prototype.maxSkipSize = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    SkipGramOptions.prototype.includeAllNgrams = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    SkipGramOptions.startSkipGramOptions = function (builder) {
        builder.startObject(3);
    };
    SkipGramOptions.addNgramSize = function (builder, ngramSize) {
        builder.addFieldInt32(0, ngramSize, 0);
    };
    SkipGramOptions.addMaxSkipSize = function (builder, maxSkipSize) {
        builder.addFieldInt32(1, maxSkipSize, 0);
    };
    SkipGramOptions.addIncludeAllNgrams = function (builder, includeAllNgrams) {
        builder.addFieldInt8(2, +includeAllNgrams, +false);
    };
    SkipGramOptions.endSkipGramOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    SkipGramOptions.createSkipGramOptions = function (builder, ngramSize, maxSkipSize, includeAllNgrams) {
        SkipGramOptions.startSkipGramOptions(builder);
        SkipGramOptions.addNgramSize(builder, ngramSize);
        SkipGramOptions.addMaxSkipSize(builder, maxSkipSize);
        SkipGramOptions.addIncludeAllNgrams(builder, includeAllNgrams);
        return SkipGramOptions.endSkipGramOptions(builder);
    };
    return SkipGramOptions;
}());
exports.SkipGramOptions = SkipGramOptions;
