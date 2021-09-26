"use strict";
exports.__esModule = true;
exports.caseOptions = void 0;
var options_attribute_1 = require("./options-attribute");
function caseOptions(opt_name, operator, model_attribute) {
    switch (opt_name) {
        case 'AddOptions':
            options_attribute_1.OptionsAttribute.getAddAttr(operator, model_attribute);
            break;
        case 'ArgMaxOptions':
            options_attribute_1.OptionsAttribute.getArgMaxAttr(operator, model_attribute);
            break;
        case 'ArgMinOptions':
            options_attribute_1.OptionsAttribute.getArgMinAttr(operator, model_attribute);
            break;
        case 'BCQFullyConnectedOptions':
            options_attribute_1.OptionsAttribute.getBCQFullyConnectedAttr(operator, model_attribute);
            break;
        case 'BCQGatherOptions':
            options_attribute_1.OptionsAttribute.getBCQGatherAttr(operator, model_attribute);
            break;
        case 'BatchMatMulOptions':
            options_attribute_1.OptionsAttribute.getBatchMatMulAttr(operator, model_attribute);
            break;
        case 'BidirectionalSequenceLSTMOptions':
            options_attribute_1.OptionsAttribute.getBidirectionalSequenceLSTMAttr(operator, model_attribute);
            break;
        case 'BidirectionalSequenceRNNOptions':
            options_attribute_1.OptionsAttribute.getBidirectionalSequenceRNNAttr(operator, model_attribute);
            break;
        case 'CallOptions':
            options_attribute_1.OptionsAttribute.getCallAttr(operator, model_attribute);
            break;
        case 'CastOptions':
            options_attribute_1.OptionsAttribute.getCastAttr(operator, model_attribute);
            break;
        case 'ConcatenationOptions':
            options_attribute_1.OptionsAttribute.getConcatenationAttr(operator, model_attribute);
            break;
        case 'Conv2DOptions':
            options_attribute_1.OptionsAttribute.getConv2DAttr(operator, model_attribute);
            break;
        case 'DepthToSpaceOptions':
            options_attribute_1.OptionsAttribute.getDepthToSpaceAttr(operator, model_attribute);
            break;
        case 'DepthwiseConv2DOptions':
            options_attribute_1.OptionsAttribute.getDepthWiseConv2DAttr(operator, model_attribute);
            break;
        case 'DivOptions':
            options_attribute_1.OptionsAttribute.getDivAttr(operator, model_attribute);
            break;
        case 'FakeQuantOptions':
            options_attribute_1.OptionsAttribute.getFakeQuantAttr(operator, model_attribute);
            break;
        case 'FullyConnectedOptions':
            options_attribute_1.OptionsAttribute.getFullyConnectedAttr(operator, model_attribute);
            break;
        case 'IfOptions':
            options_attribute_1.OptionsAttribute.getIFAttr(operator, model_attribute);
            break;
        case 'InstanceNormOptions':
            options_attribute_1.OptionsAttribute.getInstanceNormAttr(operator, model_attribute);
            break;
        case 'L2NormOptions':
            options_attribute_1.OptionsAttribute.getL2NormAttr(operator, model_attribute);
            break;
        case 'LSHProjectionOptions':
            options_attribute_1.OptionsAttribute.getLSHProjectionAttr(operator, model_attribute);
            break;
        case 'LSTMOptions':
            options_attribute_1.OptionsAttribute.getLSTMAttr(operator, model_attribute);
            break;
        case 'LeakyReluOptions':
            options_attribute_1.OptionsAttribute.getLeakyReluAttr(operator, model_attribute);
            break;
        case 'LocalResponseNormalizationOptions':
            options_attribute_1.OptionsAttribute.getLocalResponseNormalizationAttr(operator, model_attribute);
            break;
        case 'MirrorPadOptions':
            options_attribute_1.OptionsAttribute.getMirrorPadAttr(operator, model_attribute);
            break;
        case 'OneHotOptions':
            options_attribute_1.OptionsAttribute.getOneHotAttr(operator, model_attribute);
            break;
        case 'PackOptions':
            options_attribute_1.OptionsAttribute.getPackAttr(operator, model_attribute);
            break;
        case 'Pool2DOptions':
            options_attribute_1.OptionsAttribute.getPool2DAttr(operator, model_attribute);
            break;
        case 'RNNOptions':
            options_attribute_1.OptionsAttribute.getRNNAttr(operator, model_attribute);
            break;
        case 'ReducerOptions':
            options_attribute_1.OptionsAttribute.getReducerAttr(operator, model_attribute);
            break;
        case 'ReshapeOptions':
            options_attribute_1.OptionsAttribute.getReshapeAttr(operator, model_attribute);
            break;
        case 'ResizeBilinearOptions':
            options_attribute_1.OptionsAttribute.getResizeBilinearAttr(operator, model_attribute);
            break;
        case 'ResizeNearestNeighborOptions':
            options_attribute_1.OptionsAttribute.getResizeNearestNeighborAttr(operator, model_attribute);
            break;
        case 'ReverseSequenceOptions':
            options_attribute_1.OptionsAttribute.getReverseSequenceAttr(operator, model_attribute);
            break;
        case 'SVDFOptions':
            options_attribute_1.OptionsAttribute.getSVDFAttr(operator, model_attribute);
            break;
        case 'SequenceRNNOptions':
            options_attribute_1.OptionsAttribute.getSequenceRNNAttr(operator, model_attribute);
            break;
        case 'ShapeOptions':
            options_attribute_1.OptionsAttribute.getShapeAttr(operator, model_attribute);
            break;
        case 'SkipGramOptions':
            options_attribute_1.OptionsAttribute.getSkipGramAttr(operator, model_attribute);
            break;
        case 'SoftmaxOptions':
            options_attribute_1.OptionsAttribute.getSoftMaxAttr(operator, model_attribute);
            break;
        case 'SpaceToDepthOptions':
            options_attribute_1.OptionsAttribute.getSpaceToDepth(operator, model_attribute);
            break;
        case 'SparseToDenseOptions':
            options_attribute_1.OptionsAttribute.getSparseToDenseAttr(operator, model_attribute);
            break;
        case 'SplitOptions':
            options_attribute_1.OptionsAttribute.getSplitAttr(operator, model_attribute);
            break;
        case 'SqueezeOptions':
            options_attribute_1.OptionsAttribute.getSqueezeAttr(operator, model_attribute);
            break;
        case 'StridedSliceOptions':
            options_attribute_1.OptionsAttribute.getStridedSliceAttr(operator, model_attribute);
            break;
        case 'SubOptions':
            options_attribute_1.OptionsAttribute.getSubAttr(operator, model_attribute);
            break;
        case 'TransposeConvOptions':
            options_attribute_1.OptionsAttribute.getTransposeConvAttr(operator, model_attribute);
            break;
        case 'UnidirectionalSequenceLSTMOptions':
            options_attribute_1.OptionsAttribute.getUnidirectionalSequenceLSTMAttr(operator, model_attribute);
            break;
        case 'UniqueOptions':
            options_attribute_1.OptionsAttribute.getUniqueAttr(operator, model_attribute);
            break;
        case 'UnpackOptions':
            options_attribute_1.OptionsAttribute.getUnpackAttr(operator, model_attribute);
            break;
        case 'WhileOptions':
            options_attribute_1.OptionsAttribute.getWhileAttr(operator, model_attribute);
            break;
    }
}
exports.caseOptions = caseOptions;
