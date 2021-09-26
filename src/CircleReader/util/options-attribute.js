"use strict";
exports.__esModule = true;
exports.OptionsAttribute = void 0;
var add_options_1 = require("../circle-analysis/circle/add-options");
var arg_max_options_1 = require("../circle-analysis/circle/arg-max-options");
var arg_min_options_1 = require("../circle-analysis/circle/arg-min-options");
var b_c_q_fully_connected_options_1 = require("../circle-analysis/circle/b-c-q-fully-connected-options");
var b_c_q_gather_options_1 = require("../circle-analysis/circle/b-c-q-gather-options");
var batch_mat_mul_options_1 = require("../circle-analysis/circle/batch-mat-mul-options");
var bidirectional_sequence_l_s_t_m_options_1 = require("../circle-analysis/circle/bidirectional-sequence-l-s-t-m-options");
var bidirectional_sequence_r_n_n_options_1 = require("../circle-analysis/circle/bidirectional-sequence-r-n-n-options");
var call_options_1 = require("../circle-analysis/circle/call-options");
var cast_options_1 = require("../circle-analysis/circle/cast-options");
var concatenation_options_1 = require("../circle-analysis/circle/concatenation-options");
var concat_embeddings_options_1 = require("../circle-analysis/circle/concat-embeddings-options");
var conv2_d_options_1 = require("../circle-analysis/circle/conv2-d-options");
var depth_to_space_options_1 = require("../circle-analysis/circle/depth-to-space-options");
var depthwise_conv2_d_options_1 = require("../circle-analysis/circle/depthwise-conv2-d-options");
var div_options_1 = require("../circle-analysis/circle/div-options");
var fake_quant_options_1 = require("../circle-analysis/circle/fake-quant-options");
var fully_connected_options_1 = require("../circle-analysis/circle/fully-connected-options");
var if_options_1 = require("../circle-analysis/circle/if-options");
var instance_norm_options_1 = require("../circle-analysis/circle/instance-norm-options");
var l2_norm_options_1 = require("../circle-analysis/circle/l2-norm-options");
var l_s_h_projection_options_1 = require("../circle-analysis/circle/l-s-h-projection-options");
var l_s_t_m_options_1 = require("../circle-analysis/circle/l-s-t-m-options");
var leaky_relu_options_1 = require("../circle-analysis/circle/leaky-relu-options");
var local_response_normalization_options_1 = require("../circle-analysis/circle/local-response-normalization-options");
var mirror_pad_options_1 = require("../circle-analysis/circle/mirror-pad-options");
var one_hot_options_1 = require("../circle-analysis/circle/one-hot-options");
var pack_options_1 = require("../circle-analysis/circle/pack-options");
var pool2_d_options_1 = require("../circle-analysis/circle/pool2-d-options");
var r_n_n_options_1 = require("../circle-analysis/circle/r-n-n-options");
var reducer_options_1 = require("../circle-analysis/circle/reducer-options");
var reshape_options_1 = require("../circle-analysis/circle/reshape-options");
var resize_bilinear_options_1 = require("../circle-analysis/circle/resize-bilinear-options");
var resize_nearest_neighbor_options_1 = require("../circle-analysis/circle/resize-nearest-neighbor-options");
var reverse_sequence_options_1 = require("../circle-analysis/circle/reverse-sequence-options");
var s_v_d_f_options_1 = require("../circle-analysis/circle/s-v-d-f-options");
var sequence_r_n_n_options_1 = require("../circle-analysis/circle/sequence-r-n-n-options");
var shape_options_1 = require("../circle-analysis/circle/shape-options");
var skip_gram_options_1 = require("../circle-analysis/circle/skip-gram-options");
var softmax_options_1 = require("../circle-analysis/circle/softmax-options");
var space_to_depth_options_1 = require("../circle-analysis/circle/space-to-depth-options");
var sparse_to_dense_options_1 = require("../circle-analysis/circle/sparse-to-dense-options");
var split_options_1 = require("../circle-analysis/circle/split-options");
var squeeze_options_1 = require("../circle-analysis/circle/squeeze-options");
var strided_slice_options_1 = require("../circle-analysis/circle/strided-slice-options");
var sub_options_1 = require("../circle-analysis/circle/sub-options");
var transpose_conv_options_1 = require("../circle-analysis/circle/transpose-conv-options");
var unidirectional_sequence_l_s_t_m_options_1 = require("../circle-analysis/circle/unidirectional-sequence-l-s-t-m-options");
var unique_options_1 = require("../circle-analysis/circle/unique-options");
var unpack_options_1 = require("../circle-analysis/circle/unpack-options");
var while_options_1 = require("../circle-analysis/circle/while-options");
var padding_1 = require("../circle-analysis/circle/padding");
var activation_function_type_1 = require("../circle-analysis/circle/activation-function-type");
var l_s_h_projection_type_1 = require("../circle-analysis/circle/l-s-h-projection-type");
var fully_connected_options_weights_format_1 = require("../circle-analysis/circle/fully-connected-options-weights-format");
var l_s_t_m_kernel_type_1 = require("../circle-analysis/circle/l-s-t-m-kernel-type");
var tensor_type_1 = require("../circle-analysis/circle/tensor-type");
var mirror_pad_mode_1 = require("../circle-analysis/circle/mirror-pad-mode");
var OptionsAttribute = /** @class */ (function () {
    function OptionsAttribute() {
    }
    OptionsAttribute.getConv2DAttr = function (operator, attributes) {
        var conv2DOpt = new conv2_d_options_1.Conv2DOptions();
        conv2DOpt = operator.builtinOptions(conv2DOpt);
        attributes.push({ attribute: 'dialtaion_h_factor', value: conv2DOpt.dilationHFactor() });
        attributes.push({ attribute: 'dialtaion_w_factor', value: conv2DOpt.dilationWFactor() });
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[conv2DOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'padding', value: padding_1.Padding[conv2DOpt.padding()] });
        attributes.push({ attribute: 'stride_h', value: conv2DOpt.strideH() });
        attributes.push({ attribute: 'stride_w', value: conv2DOpt.strideW() });
    };
    OptionsAttribute.getDepthWiseConv2DAttr = function (operator, attributes) {
        var depthWiseConv2DOpt = new depthwise_conv2_d_options_1.DepthwiseConv2DOptions();
        depthWiseConv2DOpt = operator.builtinOptions(depthWiseConv2DOpt);
        attributes.push({ attribute: 'dialtaion_h_factor', value: depthWiseConv2DOpt.dilationHFactor() });
        attributes.push({ attribute: 'dialtaion_w_factor', value: depthWiseConv2DOpt.dilationWFactor() });
        attributes.push({ attribute: 'depth_multiplier', value: depthWiseConv2DOpt.depthMultiplier() });
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[depthWiseConv2DOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'padding', value: padding_1.Padding[depthWiseConv2DOpt.padding()] });
        attributes.push({ attribute: 'stride_h', value: depthWiseConv2DOpt.strideH() });
        attributes.push({ attribute: 'stride_w', value: depthWiseConv2DOpt.strideW() });
    };
    OptionsAttribute.getConcatEmbeddingAttr = function (operator, attributes) {
        var concatEmbaddingOpt = new concat_embeddings_options_1.ConcatEmbeddingsOptions();
        concatEmbaddingOpt = operator.builtinOptions(concatEmbaddingOpt);
        var numChannelLength = concatEmbaddingOpt.numChannels();
        var embeddingDimPerChannelLength = concatEmbaddingOpt.embeddingDimPerChannelLength();
        attributes.push({ attribute: 'num_channel_length', value: numChannelLength });
        for (var i = 0; i < numChannelLength; i++) {
            attributes.push({ attribute: 'num_column_per_channel_' + i, value: concatEmbaddingOpt.numColumnsPerChannel(i) });
        }
        attributes.push({ attribute: 'num_columns_per_channel_array', value: concatEmbaddingOpt.numColumnsPerChannelArray() });
        attributes.push({ attribute: 'embedding_dim_per_channel_length', value: embeddingDimPerChannelLength });
        for (var i = 0; i < embeddingDimPerChannelLength; i++) {
            attributes.push({ attribute: 'embedding_dim_per_channel_' + i, value: concatEmbaddingOpt.embeddingDimPerChannel(i) });
        }
        attributes.push({ attribute: 'embedding_dim_per_channel_array', value: concatEmbaddingOpt.embeddingDimPerChannelArray() });
    };
    OptionsAttribute.getLSHProjectionAttr = function (operator, attributes) {
        var LSHProjectionOpt = new l_s_h_projection_options_1.LSHProjectionOptions();
        LSHProjectionOpt = operator.builtinOptions(LSHProjectionOpt);
        attributes.push({ attribute: 'filter_height', value: l_s_h_projection_type_1.LSHProjectionType[LSHProjectionOpt.type()] });
    };
    OptionsAttribute.getPool2DAttr = function (operator, attributes) {
        var pool2DOpt = new pool2_d_options_1.Pool2DOptions();
        pool2DOpt = operator.builtinOptions(pool2DOpt);
        attributes.push({ attribute: 'filter_height', value: pool2DOpt.filterHeight() });
        attributes.push({ attribute: 'filter_width', value: pool2DOpt.filterWidth() });
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[pool2DOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'padding', value: padding_1.Padding[pool2DOpt.padding()] });
        attributes.push({ attribute: 'stride_h', value: pool2DOpt.strideH() });
        attributes.push({ attribute: 'stride_w', value: pool2DOpt.strideW() });
    };
    OptionsAttribute.getSVDFAttr = function (operator, attributes) {
        var SVDFOpt = new s_v_d_f_options_1.SVDFOptions();
        SVDFOpt = operator.builtinOptions(SVDFOpt);
        attributes.push({ attribute: 'rank', value: SVDFOpt.rank() });
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[SVDFOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'asymmetric_quantize_input', value: SVDFOpt.asymmetricQuantizeInputs() });
    };
    OptionsAttribute.getRNNAttr = function (operator, attributes) {
        var RNNOpt = new r_n_n_options_1.RNNOptions();
        RNNOpt = operator.builtinOptions(RNNOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[RNNOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'asymmetric_quantize_input', value: RNNOpt.asymmetricQuantizeInputs() });
    };
    OptionsAttribute.getFullyConnectedAttr = function (operator, attributes) {
        var fullyConnectedOpt = new fully_connected_options_1.FullyConnectedOptions();
        fullyConnectedOpt = operator.builtinOptions(fullyConnectedOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[fullyConnectedOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'fully_connected_options_weights_format', value: fully_connected_options_weights_format_1.FullyConnectedOptionsWeightsFormat[fullyConnectedOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'keep_num_dims', value: fullyConnectedOpt.keepNumDims() });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: fullyConnectedOpt.asymmetricQuantizeInputs() });
    };
    OptionsAttribute.getSoftMaxAttr = function (operator, attributes) {
        var softMaxOpt = new softmax_options_1.SoftmaxOptions();
        softMaxOpt = operator.builtinOptions(softMaxOpt);
        attributes.push({ attribute: 'beta', value: softMaxOpt.beta() });
    };
    OptionsAttribute.getConcatenationAttr = function (operator, attributes) {
        var concatenationOpt = new concatenation_options_1.ConcatenationOptions();
        concatenationOpt = operator.builtinOptions(concatenationOpt);
        attributes.push({ attribute: 'axis', value: concatenationOpt.axis() });
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[concatenationOpt.fusedActivationFunction()] });
    };
    OptionsAttribute.getAddAttr = function (operator, attributes) {
        var addOpt = new add_options_1.AddOptions();
        addOpt = operator.builtinOptions(addOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[addOpt.fusedActivationFunction()] });
    };
    OptionsAttribute.getL2NormAttr = function (operator, attributes) {
        var L2NormOpt = new l2_norm_options_1.L2NormOptions();
        L2NormOpt = operator.builtinOptions(L2NormOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[L2NormOpt.fusedActivationFunction()] });
    };
    OptionsAttribute.getLocalResponseNormalizationAttr = function (operator, attributes) {
        var localResponseNomalizationOpt = new local_response_normalization_options_1.LocalResponseNormalizationOptions();
        localResponseNomalizationOpt = operator.builtinOptions(localResponseNomalizationOpt);
        attributes.push({ attribute: 'radius', value: localResponseNomalizationOpt.radius() });
        attributes.push({ attribute: 'bias', value: localResponseNomalizationOpt.bias() });
        attributes.push({ attribute: 'alpha', value: localResponseNomalizationOpt.alpha() });
        attributes.push({ attribute: 'beta', value: localResponseNomalizationOpt.beta() });
    };
    OptionsAttribute.getLSTMAttr = function (operator, attributes) {
        var LSTMOpt = new l_s_t_m_options_1.LSTMOptions();
        LSTMOpt = operator.builtinOptions(LSTMOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[LSTMOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'cell_clip', value: LSTMOpt.cellClip() });
        attributes.push({ attribute: 'proj_clip', value: LSTMOpt.projClip() });
        attributes.push({ attribute: 'kernel_type', value: l_s_t_m_kernel_type_1.LSTMKernelType[LSTMOpt.projClip()] });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: LSTMOpt.asymmetricQuantizeInputs() });
    };
    OptionsAttribute.getResizeBilinearAttr = function (operator, attributes) {
        var resizeBilinearOpt = new resize_bilinear_options_1.ResizeBilinearOptions();
        resizeBilinearOpt = operator.builtinOptions(resizeBilinearOpt);
        attributes.push({ attribute: 'align_corners', value: resizeBilinearOpt.alignCorners() });
        attributes.push({ attribute: 'half_pixel_centers', value: resizeBilinearOpt.halfPixelCenters() });
    };
    OptionsAttribute.getCallAttr = function (operator, attributes) {
        var callOpt = new call_options_1.CallOptions();
        callOpt = operator.builtinOptions(callOpt);
        attributes.push({ attribute: 'subgraph', value: callOpt.subgraph() });
    };
    OptionsAttribute.getReshapeAttr = function (operator, attributes) {
        var reshapeOpt = new reshape_options_1.ReshapeOptions();
        reshapeOpt = operator.builtinOptions(reshapeOpt);
        var newShapeLength = reshapeOpt.newShapeLength();
        attributes.push({ attribute: 'new_shape_length', value: newShapeLength });
        for (var i = 0; i < newShapeLength; i++) {
            attributes.push({ attribute: 'new_shape_' + i, value: reshapeOpt.newShape(i) });
        }
        attributes.push({ attribute: 'new_shape_array', value: reshapeOpt.newShapeArray() });
    };
    OptionsAttribute.getSkipGramAttr = function (operator, attributes) {
        var skipGramOpt = new skip_gram_options_1.SkipGramOptions();
        skipGramOpt = operator.builtinOptions(skipGramOpt);
        attributes.push({ attribute: 'ngram_size', value: skipGramOpt.ngramSize() });
        attributes.push({ attribute: 'max_skip_size', value: skipGramOpt.maxSkipSize() });
        attributes.push({ attribute: 'include_all_ngrams', value: skipGramOpt.includeAllNgrams() });
    };
    OptionsAttribute.getSpaceToDepth = function (operator, attributes) {
        var spaceToDepthOpt = new space_to_depth_options_1.SpaceToDepthOptions();
        spaceToDepthOpt = operator.builtinOptions(spaceToDepthOpt);
        attributes.push({ attribute: 'block_size', value: spaceToDepthOpt.blockSize() });
    };
    OptionsAttribute.getReducerAttr = function (operator, attributes) {
        var reducerOpt = new reducer_options_1.ReducerOptions();
        reducerOpt = operator.builtinOptions(reducerOpt);
        attributes.push({ attribute: 'keep_dims', value: reducerOpt.keepDims() });
    };
    OptionsAttribute.getSubAttr = function (operator, attributes) {
        var subOpt = new sub_options_1.SubOptions();
        subOpt = operator.builtinOptions(subOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[subOpt.fusedActivationFunction()] });
    };
    OptionsAttribute.getDivAttr = function (operator, attributes) {
        var divOpt = new div_options_1.DivOptions();
        divOpt = operator.builtinOptions(divOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[divOpt.fusedActivationFunction()] });
    };
    OptionsAttribute.getSqueezeAttr = function (operator, attributes) {
        var squeezeOpt = new squeeze_options_1.SqueezeOptions();
        squeezeOpt = operator.builtinOptions(squeezeOpt);
        var squeezeDimsLength = squeezeOpt.squeezeDimsLength();
        attributes.push({ attribute: 'squeeze_dims_length', value: squeezeDimsLength });
        for (var i = 0; i < squeezeDimsLength; i++) {
            attributes.push({ attribute: 'squeeze_dims_' + i, value: squeezeOpt.squeezeDims(i) });
        }
        attributes.push({ attribute: 'squeeze_dims_array', value: squeezeOpt.squeezeDimsArray() });
    };
    OptionsAttribute.getSequenceRNNAttr = function (operator, attributes) {
        var sequenceRNNOpt = new sequence_r_n_n_options_1.SequenceRNNOptions();
        sequenceRNNOpt = operator.builtinOptions(sequenceRNNOpt);
        attributes.push({ attribute: 'time_major', value: sequenceRNNOpt.timeMajor() });
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[sequenceRNNOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: sequenceRNNOpt.asymmetricQuantizeInputs() });
    };
    OptionsAttribute.getStridedSliceAttr = function (operator, attributes) {
        var strideSliceOpt = new strided_slice_options_1.StridedSliceOptions();
        strideSliceOpt = operator.builtinOptions(strideSliceOpt);
        attributes.push({ attribute: 'begin_mask', value: strideSliceOpt.beginMask() });
        attributes.push({ attribute: 'end_mask', value: strideSliceOpt.endMask() });
        attributes.push({ attribute: 'ellipsis_mask', value: strideSliceOpt.ellipsisMask() });
        attributes.push({ attribute: 'new_axis_mask', value: strideSliceOpt.newAxisMask() });
        attributes.push({ attribute: 'shrink_axis_mask', value: strideSliceOpt.shrinkAxisMask() });
    };
    OptionsAttribute.getSplitAttr = function (operator, attributes) {
        var splitOptions = new split_options_1.SplitOptions();
        splitOptions = operator.builtinOptions(splitOptions);
        attributes.push({ attribute: 'num_splits', value: splitOptions.numSplits() });
    };
    OptionsAttribute.getCastAttr = function (operator, attributes) {
        var castOpt = new cast_options_1.CastOptions();
        castOpt = operator.builtinOptions(castOpt);
        attributes.push({ attribute: 'in_data_type', value: tensor_type_1.TensorType[castOpt.inDataType()] });
        attributes.push({ attribute: 'out_data_type', value: tensor_type_1.TensorType[castOpt.outDataType()] });
    };
    OptionsAttribute.getArgMaxAttr = function (operator, attributes) {
        var argMaxOpt = new arg_max_options_1.ArgMaxOptions();
        argMaxOpt = operator.builtinOptions(argMaxOpt);
        attributes.push({ attribute: 'output_type', value: tensor_type_1.TensorType[argMaxOpt.outputType()] });
    };
    OptionsAttribute.getTransposeConvAttr = function (operator, attributes) {
        var transposeConvOpt = new transpose_conv_options_1.TransposeConvOptions();
        transposeConvOpt = operator.builtinOptions(transposeConvOpt);
        attributes.push({ attribute: 'padding', value: padding_1.Padding[transposeConvOpt.padding()] });
        attributes.push({ attribute: 'stride_h', value: transposeConvOpt.strideH() });
        attributes.push({ attribute: 'stride_w', value: transposeConvOpt.strideW() });
    };
    OptionsAttribute.getSparseToDenseAttr = function (operator, attributes) {
        var sparseToDenseOpt = new sparse_to_dense_options_1.SparseToDenseOptions();
        sparseToDenseOpt = operator.builtinOptions(sparseToDenseOpt);
        attributes.push({ attribute: 'validate_indices', value: sparseToDenseOpt.validateIndices() });
    };
    OptionsAttribute.getShapeAttr = function (operator, attributes) {
        var shapeOpt = new shape_options_1.ShapeOptions();
        shapeOpt = operator.builtinOptions(shapeOpt);
        attributes.push({ attribute: 'out_type', value: tensor_type_1.TensorType[shapeOpt.outType()] });
    };
    OptionsAttribute.getArgMinAttr = function (operator, attributes) {
        var argMinOpt = new arg_min_options_1.ArgMinOptions();
        argMinOpt = operator.builtinOptions(argMinOpt);
        attributes.push({ attribute: 'output_type', value: tensor_type_1.TensorType[argMinOpt.outputType()] });
    };
    OptionsAttribute.getFakeQuantAttr = function (operator, attributes) {
        var fakeQuanOpt = new fake_quant_options_1.FakeQuantOptions();
        fakeQuanOpt = operator.builtinOptions(fakeQuanOpt);
        attributes.push({ attribute: 'min', value: fakeQuanOpt.min() });
        attributes.push({ attribute: 'max', value: fakeQuanOpt.max() });
        attributes.push({ attribute: 'num_bits', value: fakeQuanOpt.numBits() });
        attributes.push({ attribute: 'narrow_range', value: fakeQuanOpt.narrowRange() });
    };
    OptionsAttribute.getPackAttr = function (operator, attributes) {
        var packOpt = new pack_options_1.PackOptions();
        packOpt = operator.builtinOptions(packOpt);
        attributes.push({ attribute: 'values_count', value: packOpt.valuesCount() });
        attributes.push({ attribute: 'axis', value: packOpt.axis() });
    };
    OptionsAttribute.getOneHotAttr = function (operator, attributes) {
        var oneHotOpt = new one_hot_options_1.OneHotOptions();
        oneHotOpt = operator.builtinOptions(oneHotOpt);
        attributes.push({ attribute: 'axis', value: oneHotOpt.axis() });
    };
    OptionsAttribute.getUnpackAttr = function (operator, attributes) {
        var unpackOpt = new unpack_options_1.UnpackOptions();
        unpackOpt = operator.builtinOptions(unpackOpt);
        attributes.push({ attribute: 'num', value: unpackOpt.num() });
        attributes.push({ attribute: 'axis', value: unpackOpt.axis() });
    };
    OptionsAttribute.getBidirectionalSequenceLSTMAttr = function (operator, attributes) {
        var bidirectionalSequenceLSTMOpt = new bidirectional_sequence_l_s_t_m_options_1.BidirectionalSequenceLSTMOptions();
        bidirectionalSequenceLSTMOpt = operator.builtinOptions(bidirectionalSequenceLSTMOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[bidirectionalSequenceLSTMOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'cell_clip', value: bidirectionalSequenceLSTMOpt.cellClip() });
        attributes.push({ attribute: 'proj_clip', value: bidirectionalSequenceLSTMOpt.projClip() });
        attributes.push({ attribute: 'merge_outputs', value: bidirectionalSequenceLSTMOpt.mergeOutputs() });
        attributes.push({ attribute: 'time_major', value: bidirectionalSequenceLSTMOpt.timeMajor() });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: bidirectionalSequenceLSTMOpt.asymmetricQuantizeInputs() });
    };
    OptionsAttribute.getBidirectionalSequenceRNNAttr = function (operator, attributes) {
        var bidirectionalSequenceRNNOpt = new bidirectional_sequence_r_n_n_options_1.BidirectionalSequenceRNNOptions();
        bidirectionalSequenceRNNOpt = operator.builtinOptions(bidirectionalSequenceRNNOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[bidirectionalSequenceRNNOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'merge_outputs', value: bidirectionalSequenceRNNOpt.mergeOutputs() });
        attributes.push({ attribute: 'time_major', value: bidirectionalSequenceRNNOpt.timeMajor() });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: bidirectionalSequenceRNNOpt.asymmetricQuantizeInputs() });
    };
    OptionsAttribute.getUnidirectionalSequenceLSTMAttr = function (operator, attributes) {
        var unidirectionalSequenceLSTMOpt = new unidirectional_sequence_l_s_t_m_options_1.UnidirectionalSequenceLSTMOptions();
        unidirectionalSequenceLSTMOpt = operator.builtinOptions(unidirectionalSequenceLSTMOpt);
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[unidirectionalSequenceLSTMOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'cell_clip', value: unidirectionalSequenceLSTMOpt.cellClip() });
        attributes.push({ attribute: 'proj_clip', value: unidirectionalSequenceLSTMOpt.projClip() });
        attributes.push({ attribute: 'time_major', value: unidirectionalSequenceLSTMOpt.timeMajor() });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: unidirectionalSequenceLSTMOpt.asymmetricQuantizeInputs() });
    };
    OptionsAttribute.getResizeNearestNeighborAttr = function (operator, attributes) {
        var resizeNearesNeighborOpt = new resize_nearest_neighbor_options_1.ResizeNearestNeighborOptions();
        resizeNearesNeighborOpt = operator.builtinOptions(resizeNearesNeighborOpt);
        attributes.push({ attribute: 'align_corners', value: resizeNearesNeighborOpt.alignCorners() });
    };
    OptionsAttribute.getLeakyReluAttr = function (operator, attributes) {
        var leakyReluOpt = new leaky_relu_options_1.LeakyReluOptions();
        leakyReluOpt = operator.builtinOptions(leakyReluOpt);
        attributes.push({ attribute: 'alpha', value: leakyReluOpt.alpha() });
    };
    OptionsAttribute.getMirrorPadAttr = function (operator, attributes) {
        var mirrorPadOpt = new mirror_pad_options_1.MirrorPadOptions();
        mirrorPadOpt = operator.builtinOptions(mirrorPadOpt);
        attributes.push({ attribute: 'mode', value: mirror_pad_mode_1.MirrorPadMode[mirrorPadOpt.mode()] });
    };
    OptionsAttribute.getUniqueAttr = function (operator, attributes) {
        var uniqueOpt = new unique_options_1.UniqueOptions();
        uniqueOpt = operator.builtinOptions(uniqueOpt);
        attributes.push({ attribute: 'idx_out_type', value: uniqueOpt.idxOutType() });
    };
    OptionsAttribute.getReverseSequenceAttr = function (operator, attributes) {
        var reverseSequenceOpt = new reverse_sequence_options_1.ReverseSequenceOptions();
        reverseSequenceOpt = operator.builtinOptions(reverseSequenceOpt);
        attributes.push({ attribute: 'seq_dim', value: reverseSequenceOpt.seqDim() });
        attributes.push({ attribute: 'batch_bim', value: reverseSequenceOpt.batchDim() });
    };
    OptionsAttribute.getIFAttr = function (operator, attributes) {
        var ifOpt = new if_options_1.IfOptions();
        ifOpt = operator.builtinOptions(ifOpt);
        attributes.push({ attribute: 'then_subgraph_index', value: ifOpt.thenSubgraphIndex() });
        attributes.push({ attribute: 'else_subgraph_index', value: ifOpt.elseSubgraphIndex() });
    };
    OptionsAttribute.getWhileAttr = function (operator, attributes) {
        var whileOpt = new while_options_1.WhileOptions();
        whileOpt = operator.builtinOptions(whileOpt);
        attributes.push({ attribute: 'cond_subgraph_index', value: whileOpt.condSubgraphIndex() });
        attributes.push({ attribute: 'body_subgraph_index', value: whileOpt.bodySubgraphIndex() });
    };
    OptionsAttribute.getDepthToSpaceAttr = function (operator, attributes) {
        var depthToSpaceOpt = new depth_to_space_options_1.DepthToSpaceOptions();
        depthToSpaceOpt = operator.builtinOptions(depthToSpaceOpt);
        attributes.push({ attribute: 'block_size', value: depthToSpaceOpt.blockSize() });
    };
    OptionsAttribute.getBatchMatMulAttr = function (operator, attributes) {
        var batchMatMulOpt = new batch_mat_mul_options_1.BatchMatMulOptions();
        batchMatMulOpt = operator.builtinOptions(batchMatMulOpt);
        attributes.push({ attribute: 'adjoint_lhs', value: batchMatMulOpt.adjointLhs() });
        attributes.push({ attribute: 'adjoint_rhs', value: batchMatMulOpt.adjointRhs() });
    };
    OptionsAttribute.getBCQGatherAttr = function (operator, attributes) {
        var BCQGatherOpt = new b_c_q_gather_options_1.BCQGatherOptions();
        BCQGatherOpt = operator.builtinOptions(BCQGatherOpt);
        attributes.push({ attribute: 'input_hidden_size', value: BCQGatherOpt.inputHiddenSize() });
        attributes.push({ attribute: 'axis', value: BCQGatherOpt.axis() });
    };
    OptionsAttribute.getBCQFullyConnectedAttr = function (operator, attributes) {
        var BCQFullyConnectedOpt = new b_c_q_fully_connected_options_1.BCQFullyConnectedOptions();
        BCQFullyConnectedOpt = operator.builtinOptions(BCQFullyConnectedOpt);
        attributes.push({ attribute: 'weights_hidden_size', value: BCQFullyConnectedOpt.weightsHiddenSize() });
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[BCQFullyConnectedOpt.fusedActivationFunction()] });
    };
    OptionsAttribute.getInstanceNormAttr = function (operator, attributes) {
        var instanceNormOpt = new instance_norm_options_1.InstanceNormOptions();
        instanceNormOpt = operator.builtinOptions(instanceNormOpt);
        attributes.push({ attribute: 'epsilon', value: instanceNormOpt.epsilon() });
        attributes.push({ attribute: 'fused_activation_function', value: activation_function_type_1.ActivationFunctionType[instanceNormOpt.fusedActivationFunction()] });
    };
    return OptionsAttribute;
}());
exports.OptionsAttribute = OptionsAttribute;
