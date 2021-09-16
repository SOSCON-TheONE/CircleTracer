import * as flatbuffers from 'flatbuffers';
import { NODE_ATTRIBUTES } from './nodetypes';
import { Operator } from './circle-analysis/circle/operator';
import { AbsOptions } from './circle-analysis/circle/abs-options';
import { AddNOptions } from './circle-analysis/circle/add-n-options';
import { AddOptions } from './circle-analysis/circle/add-options';
import { ArgMaxOptions } from './circle-analysis/circle/arg-max-options';
import { ArgMinOptions } from './circle-analysis/circle/arg-min-options';
import { BCQFullyConnectedOptions } from './circle-analysis/circle/b-c-q-fully-connected-options';
import { BCQGatherOptions } from './circle-analysis/circle/b-c-q-gather-options';
import { BatchMatMulOptions } from './circle-analysis/circle/batch-mat-mul-options';
import { BatchToSpaceNDOptions } from './circle-analysis/circle/batch-to-space-n-d-options';
import { BidirectionalSequenceLSTMOptions } from './circle-analysis/circle/bidirectional-sequence-l-s-t-m-options';
import { BidirectionalSequenceRNNOptions } from './circle-analysis/circle/bidirectional-sequence-r-n-n-options';
import { CallOptions } from './circle-analysis/circle/call-options';
import { CastOptions } from './circle-analysis/circle/cast-options';
import { ConcatEmbeddingsOptions } from './circle-analysis/circle/concat-embeddings-options';
import { ConcatenationOptions } from './circle-analysis/circle/concatenation-options';
import { Conv2DOptions } from './circle-analysis/circle/conv2-d-options';
import { CosOptions } from './circle-analysis/circle/cos-options';
import { DensifyOptions } from './circle-analysis/circle/densify-options';
import { DepthToSpaceOptions } from './circle-analysis/circle/depth-to-space-options';
import { DepthwiseConv2DOptions } from './circle-analysis/circle/depthwise-conv2-d-options';
import { DequantizeOptions } from './circle-analysis/circle/dequantize-options';
import { DivOptions } from './circle-analysis/circle/div-options';
import { EmbeddingLookupSparseOptions } from './circle-analysis/circle/embedding-lookup-sparse-options';
import { EqualOptions } from './circle-analysis/circle/equal-options';
import { ExpOptions } from './circle-analysis/circle/exp-options';
import { ExpandDimsOptions } from './circle-analysis/circle/expand-dims-options';
import { FakeQuantOptions } from './circle-analysis/circle/fake-quant-options';
import { FillOptions } from './circle-analysis/circle/fill-options';
import { FloorDivOptions } from './circle-analysis/circle/floor-div-options';
import { FloorModOptions } from './circle-analysis/circle/floor-mod-options';
import { FullyConnectedOptions } from './circle-analysis/circle/fully-connected-options';
import { GatherNdOptions } from './circle-analysis/circle/gather-nd-options';
import { GatherOptions } from './circle-analysis/circle/gather-options';
import { GreaterEqualOptions } from './circle-analysis/circle/greater-equal-options';
import { GreaterOptions } from './circle-analysis/circle/greater-options';
import { HardSwishOptions } from './circle-analysis/circle/hard-swish-options';
import { IfOptions } from './circle-analysis/circle/if-options';
import { InstanceNormOptions } from './circle-analysis/circle/instance-norm-options';
import { L2NormOptions } from './circle-analysis/circle/l2-norm-options';
import { LSHProjectionOptions } from './circle-analysis/circle/l-s-h-projection-options';
import { LSTMOptions } from './circle-analysis/circle/l-s-t-m-options';
import { LeakyReluOptions } from './circle-analysis/circle/leaky-relu-options';
import { LessEqualOptions } from './circle-analysis/circle/less-equal-options';
import { LessOptions } from './circle-analysis/circle/less-options';
import { LocalResponseNormalizationOptions } from './circle-analysis/circle/local-response-normalization-options';
import { LogSoftmaxOptions } from './circle-analysis/circle/log-softmax-options';
import { LogicalAndOptions } from './circle-analysis/circle/logical-and-options';
import { LogicalNotOptions } from './circle-analysis/circle/logical-not-options';
import { LogicalOrOptions } from './circle-analysis/circle/logical-or-options';
import { MatrixDiagOptions } from './circle-analysis/circle/matrix-diag-options';
import { MatrixSetDiagOptions } from './circle-analysis/circle/matrix-set-diag-options';
import { MaximumMinimumOptions } from './circle-analysis/circle/maximum-minimum-options';
import { MirrorPadOptions } from './circle-analysis/circle/mirror-pad-options';
import { MulOptions } from './circle-analysis/circle/mul-options';
import { NegOptions } from './circle-analysis/circle/neg-options';
import { NonMaxSuppressionV4Options } from './circle-analysis/circle/non-max-suppression-v4-options';
import { NonMaxSuppressionV5Options } from './circle-analysis/circle/non-max-suppression-v5-options';
import { NotEqualOptions } from './circle-analysis/circle/not-equal-options';
import { OneHotOptions } from './circle-analysis/circle/one-hot-options';
import { PackOptions } from './circle-analysis/circle/pack-options';
import { PadOptions } from './circle-analysis/circle/pad-options';
import { PadV2Options } from './circle-analysis/circle/pad-v2-options';
import { Pool2DOptions } from './circle-analysis/circle/pool2-d-options';
import { PowOptions } from './circle-analysis/circle/pow-options';
import { QuantizeOptions } from './circle-analysis/circle/quantize-options';
import { RNNOptions } from './circle-analysis/circle/r-n-n-options';
import { RangeOptions } from './circle-analysis/circle/range-options';
import { RankOptions } from './circle-analysis/circle/rank-options';
import { ReducerOptions } from './circle-analysis/circle/reducer-options';
import { ReshapeOptions } from './circle-analysis/circle/reshape-options';
import { ResizeBilinearOptions } from './circle-analysis/circle/resize-bilinear-options';
import { ResizeNearestNeighborOptions } from './circle-analysis/circle/resize-nearest-neighbor-options';
import { ReverseSequenceOptions } from './circle-analysis/circle/reverse-sequence-options';
import { ReverseV2Options } from './circle-analysis/circle/reverse-v2-options';
import { SVDFOptions } from './circle-analysis/circle/s-v-d-f-options';
import { ScatterNdOptions } from './circle-analysis/circle/scatter-nd-options';
import { SegmentSumOptions } from './circle-analysis/circle/segment-sum-options';
import { SelectOptions } from './circle-analysis/circle/select-options';
import { SelectV2Options } from './circle-analysis/circle/select-v2-options';
import { SequenceRNNOptions } from './circle-analysis/circle/sequence-r-n-n-options';
import { ShapeOptions } from './circle-analysis/circle/shape-options';
import { SkipGramOptions } from './circle-analysis/circle/skip-gram-options';
import { SliceOptions } from './circle-analysis/circle/slice-options';
import { SoftmaxOptions } from './circle-analysis/circle/softmax-options';
import { SpaceToBatchNDOptions } from './circle-analysis/circle/space-to-batch-n-d-options';
import { SpaceToDepthOptions } from './circle-analysis/circle/space-to-depth-options';
import { SparseToDenseOptions } from './circle-analysis/circle/sparse-to-dense-options';
import { SplitOptions } from './circle-analysis/circle/split-options';
import { SplitVOptions } from './circle-analysis/circle/split-v-options';
import { SquareOptions } from './circle-analysis/circle/square-options';
import { SquaredDifferenceOptions } from './circle-analysis/circle/squared-difference-options';
import { SqueezeOptions } from './circle-analysis/circle/squeeze-options';
import { StridedSliceOptions } from './circle-analysis/circle/strided-slice-options';
import { SubOptions } from './circle-analysis/circle/sub-options';
import { TileOptions } from './circle-analysis/circle/tile-options';
import { TopKV2Options } from './circle-analysis/circle/top-k-v2-options';
import { TransposeConvOptions } from './circle-analysis/circle/transpose-conv-options';
import { TransposeOptions } from './circle-analysis/circle/transpose-options';
import { UnidirectionalSequenceLSTMOptions } from './circle-analysis/circle/unidirectional-sequence-l-s-t-m-options';
import { UniqueOptions } from './circle-analysis/circle/unique-options';
import { UnpackOptions } from './circle-analysis/circle/unpack-options';
import { WhereOptions } from './circle-analysis/circle/where-options';
import { WhileOptions } from './circle-analysis/circle/while-options';
import { ZerosLikeOptions } from './circle-analysis/circle/zeros-like-options';
import { Padding } from './circle-analysis/circle/padding'
import { ActivationFunctionType } from './circle-analysis/circle/activation-function-type'
import { LSHProjectionType } from './circle-analysis/circle/l-s-h-projection-type';
import { FullyConnectedOptionsWeightsFormat } from './circle-analysis/circle/fully-connected-options-weights-format'
import { LSTMKernelType } from './circle-analysis/circle/l-s-t-m-kernel-type';
import { TensorType } from './circle-analysis/circle/tensor-type';
import { MirrorPadMode } from './circle-analysis/circle/mirror-pad-mode';

export class OptionsAttribute {
    
    static getConv2DAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let conv2DOpt = new Conv2DOptions(); //해당 옵션 처리를 담을 객체 생성
        conv2DOpt = operator.builtinOptions<flatbuffers.Table>(conv2DOpt); //그 객체의 bb, bb_pos를 현재 접근하려는 버퍼와 인덱스로 수정, 얘를 기반으로 정보들 추출
        
        attributes.push({ attribute: 'dialtaion_h_factor', value: conv2DOpt.dilationHFactor() });
        attributes.push({ attribute: 'dialtaion_w_factor', value: conv2DOpt.dilationWFactor() });
        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[conv2DOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'padding', value: Padding[conv2DOpt.padding()] });
        attributes.push({ attribute: 'stride_h', value: conv2DOpt.strideH() });
        attributes.push({ attribute: 'stride_w', value: conv2DOpt.strideW() });
    }

    static getDepthWiseConv2DAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let depthWiseConv2DOpt = new DepthwiseConv2DOptions();
        depthWiseConv2DOpt = operator.builtinOptions<flatbuffers.Table>(depthWiseConv2DOpt);

        attributes.push({ attribute: 'dialtaion_h_factor', value: depthWiseConv2DOpt.dilationHFactor() });
        attributes.push({ attribute: 'dialtaion_w_factor', value: depthWiseConv2DOpt.dilationWFactor() });
        attributes.push({ attribute: 'depth_multiplier', value: depthWiseConv2DOpt.depthMultiplier() });
        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[depthWiseConv2DOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'padding', value: Padding[depthWiseConv2DOpt.padding()] });
        attributes.push({ attribute: 'stride_h', value: depthWiseConv2DOpt.strideH() });
        attributes.push({ attribute: 'stride_w', value: depthWiseConv2DOpt.strideW() });
    }

    static getConcatEmbeddingAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        // let concatEmbaddingOpt = new ConcatEmbeddingsOptions();
        // concatEmbaddingOpt = operator.builtinOptions<flatbuffers.Table>(concatEmbaddingOpt);
        
        // let channel_length = concatEmbaddingOpt.numChannels();

        // attributes.push({ attribute: 'num_channels', value: channel_length });


        // attributes.push({ attribute: 'num_columns_per_channel', value: concatEmbaddingOpt.numColumnsPerChannel() });
        // attributes.push({ attribute: 'num_columns_per_channel_length', value: concatEmbaddingOpt.depthMultiplier() });
        // attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[concatEmbaddingOpt.fusedActivationFunction()] });
        // attributes.push({ attribute: 'padding', value: Padding[concatEmbaddingOpt.padding()] });
        // attributes.push({ attribute: 'stride_h', value: concatEmbaddingOpt.strideH() });
        // attributes.push({ attribute: 'stride_w', value: concatEmbaddingOpt.strideW() });
    }

    static getLSHProjectionAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let LSHProjectionOpt = new LSHProjectionOptions();
        LSHProjectionOpt = operator.builtinOptions<flatbuffers.Table>(LSHProjectionOpt);

        attributes.push({ attribute: 'filter_height', value: LSHProjectionType[LSHProjectionOpt.type()] });
    }

    static getPool2DAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let pool2DOpt = new Pool2DOptions();
        pool2DOpt = operator.builtinOptions<flatbuffers.Table>(pool2DOpt);

        attributes.push({ attribute: 'filter_height', value: pool2DOpt.filterHeight() });
        attributes.push({ attribute: 'filter_width', value: pool2DOpt.filterWidth() });
        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[pool2DOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'padding', value: Padding[pool2DOpt.padding()] });
        attributes.push({ attribute: 'stride_h', value: pool2DOpt.strideH() });
        attributes.push({ attribute: 'stride_w', value: pool2DOpt.strideW() });
    }

    static getSVDFAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let SVDFOpt = new SVDFOptions();
        SVDFOpt = operator.builtinOptions<flatbuffers.Table>(SVDFOpt);

        attributes.push({ attribute: 'rank', value: SVDFOpt.rank() });
        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[SVDFOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'asymmetric_quantize_input', value: SVDFOpt.asymmetricQuantizeInputs() });
    }

    static getRNNAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let RNNOpt = new RNNOptions();
        RNNOpt = operator.builtinOptions<flatbuffers.Table>(RNNOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[RNNOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'asymmetric_quantize_input', value: RNNOpt.asymmetricQuantizeInputs() });
    }

    static getFullyConnectedAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let fullyConnectedOpt = new FullyConnectedOptions();
        fullyConnectedOpt = operator.builtinOptions<flatbuffers.Table>(fullyConnectedOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[fullyConnectedOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'fully_connected_options_weights_format', value: FullyConnectedOptionsWeightsFormat[fullyConnectedOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'keep_num_dims', value: fullyConnectedOpt.keepNumDims() });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: fullyConnectedOpt.asymmetricQuantizeInputs() });
    }

    static getSoftMaxAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let softMaxOpt = new SoftmaxOptions();
        softMaxOpt = operator.builtinOptions<flatbuffers.Table>(softMaxOpt);

        attributes.push({ attribute: 'beta', value: softMaxOpt.beta() });
    }

    static getConcatenationAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let concatenationOpt = new ConcatenationOptions();
        concatenationOpt = operator.builtinOptions<flatbuffers.Table>(concatenationOpt);

        attributes.push({ attribute: 'axis', value: concatenationOpt.axis() });
        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[concatenationOpt.fusedActivationFunction()] });
    }

    static getAddAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let addOpt = new AddOptions();
        addOpt = operator.builtinOptions<flatbuffers.Table>(addOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[addOpt.fusedActivationFunction()] });
    }

    static getL2NormAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let L2NormOpt = new L2NormOptions();
        L2NormOpt = operator.builtinOptions<flatbuffers.Table>(L2NormOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[L2NormOpt.fusedActivationFunction()] });
    }

    static getLocalResponseNormalizationAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let localResponseNomalizationOpt = new LocalResponseNormalizationOptions();
        localResponseNomalizationOpt = operator.builtinOptions<flatbuffers.Table>(localResponseNomalizationOpt);

        attributes.push({ attribute: 'radius', value: localResponseNomalizationOpt.radius() });
        attributes.push({ attribute: 'bias', value: localResponseNomalizationOpt.bias() });
        attributes.push({ attribute: 'alpha', value: localResponseNomalizationOpt.alpha() });
        attributes.push({ attribute: 'beta', value: localResponseNomalizationOpt.beta() });
    }

    static getLSTMAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let LSTMOpt = new LSTMOptions();
        LSTMOpt = operator.builtinOptions<flatbuffers.Table>(LSTMOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[LSTMOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'cell_clip', value: LSTMOpt.cellClip() });
        attributes.push({ attribute: 'proj_clip', value: LSTMOpt.projClip() });
        attributes.push({ attribute: 'kernel_type', value: LSTMKernelType[LSTMOpt.projClip()] });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: LSTMOpt.asymmetricQuantizeInputs() });
    }

    static getResizeBilinearAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let resizeBilinearOpt = new ResizeBilinearOptions();
        resizeBilinearOpt = operator.builtinOptions<flatbuffers.Table>(resizeBilinearOpt);
        
        attributes.push({ attribute: 'align_corners', value: resizeBilinearOpt.alignCorners() });
        attributes.push({ attribute: 'half_pixel_centers', value: resizeBilinearOpt.halfPixelCenters() });
    }

    static getCallAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let callOpt = new CallOptions();
        callOpt = operator.builtinOptions<flatbuffers.Table>(callOpt);

        attributes.push({ attribute: 'subgraph', value: callOpt.subgraph() });
    }

    static getReshapeAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let reshapeOpt = new ReshapeOptions();
        reshapeOpt = operator.builtinOptions<flatbuffers.Table>(reshapeOpt);

        let newShapeLength = reshapeOpt.newShapeLength();
        attributes.push({ attribute: 'new_shape_length', value: newShapeLength });

        for (let i = 0; i < newShapeLength; i++) {
            attributes.push({ attribute: 'new_shape_' + i, value: reshapeOpt.newShape(i) });
        }

        attributes.push({ attribute: 'new_shape_array', value: reshapeOpt.newShapeArray() })
    }

    static getSkipGramAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let skipGramOpt = new SkipGramOptions();
        skipGramOpt = operator.builtinOptions<flatbuffers.Table>(skipGramOpt);

        attributes.push({ attribute: 'ngram_size', value: skipGramOpt.ngramSize() });
        attributes.push({ attribute: 'max_skip_size', value: skipGramOpt.maxSkipSize() });
        attributes.push({ attribute: 'include_all_ngrams', value: skipGramOpt.includeAllNgrams() });
    }
    
    static getSpaceToDepth(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let spaceToDepthOpt = new SpaceToDepthOptions();
        spaceToDepthOpt = operator.builtinOptions<flatbuffers.Table>(spaceToDepthOpt);

        attributes.push({ attribute: 'block_size', value: spaceToDepthOpt.blockSize() });
    }

    static getTransposeAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getReducerAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let reducerOpt = new ReducerOptions();
        reducerOpt = operator.builtinOptions<flatbuffers.Table>(reducerOpt);

        attributes.push({ attribute: 'keep_dims', value: reducerOpt.keepDims() });
    }

    static getSubAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let subOpt = new SubOptions();
        subOpt = operator.builtinOptions<flatbuffers.Table>(subOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[subOpt.fusedActivationFunction()] });
    }

    static getDivAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let divOpt = new DivOptions();
        divOpt = operator.builtinOptions<flatbuffers.Table>(divOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[divOpt.fusedActivationFunction()] });
    }

    static getSqueezeAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let squeezeOpt = new SqueezeOptions();
        squeezeOpt = operator.builtinOptions<flatbuffers.Table>(squeezeOpt);

        let squeezeDimsLength = squeezeOpt.squeezeDimsLength();
        attributes.push({ attribute: 'squeeze_dims_length', value: squeezeDimsLength });

        for (let i = 0; i < squeezeDimsLength; i++) {
            attributes.push({ attribute: 'squeeze_dims_' + i, value: squeezeOpt.squeezeDims(i) });
        }

        attributes.push({ attribute: 'squeeze_dims_array', value: squeezeOpt.squeezeDimsArray() })
    }

    static getSequenceRNNAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let sequenceRNNOpt = new SequenceRNNOptions();
        sequenceRNNOpt = operator.builtinOptions<flatbuffers.Table>(sequenceRNNOpt);

        attributes.push({ attribute: 'time_major', value: sequenceRNNOpt.timeMajor() });
        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[sequenceRNNOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: sequenceRNNOpt.asymmetricQuantizeInputs() });
    }

    static getStridedSliceAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let strideSliceOpt = new StridedSliceOptions();
        strideSliceOpt = operator.builtinOptions<flatbuffers.Table>(strideSliceOpt);

        attributes.push({ attribute: 'begin_mask', value: strideSliceOpt.beginMask() });
        attributes.push({ attribute: 'end_mask', value: strideSliceOpt.endMask() });
        attributes.push({ attribute: 'ellipsis_mask', value: strideSliceOpt.ellipsisMask() });
        attributes.push({ attribute: 'new_axis_mask', value: strideSliceOpt.newAxisMask() });
        attributes.push({ attribute: 'shrink_axis_mask', value: strideSliceOpt.shrinkAxisMask() });
    }

    static getExpAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        
    }

    static getTopKV2Attr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getSplitAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let splitOptions = new SplitOptions();
        splitOptions = operator.builtinOptions<flatbuffers.Table>(splitOptions);

        attributes.push({ attribute: 'num_splits', value: splitOptions.numSplits() });
    }

    static getLogSoftmaxAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getCastAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let castOpt = new CastOptions();
        castOpt = operator.builtinOptions<flatbuffers.Table>(castOpt);

        attributes.push({ attribute: 'in_data_type', value: TensorType[castOpt.inDataType()] });
        attributes.push({ attribute: 'out_data_type', value: TensorType[castOpt.outDataType()] });
    }

    static getDequantizeAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getMaximumMinimumAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
       
    }

    static getArgMaxAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let argMaxOpt = new ArgMaxOptions();
        argMaxOpt = operator.builtinOptions<flatbuffers.Table>(argMaxOpt);

        attributes.push({ attribute: 'output_type', value: TensorType[argMaxOpt.outputType()] });
    }

    static getLessAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getNegAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getPadV2Attr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getGreaterAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }
    
    static getGreaterEqualAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getLessEqualAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getSelectAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getSliceAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getTransposeConvAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let transposeConvOpt = new TransposeConvOptions();
        transposeConvOpt = operator.builtinOptions<flatbuffers.Table>(transposeConvOpt);

        attributes.push({ attribute: 'padding', value: Padding[transposeConvOpt.padding()] });
        attributes.push({ attribute: 'stride_h', value: transposeConvOpt.strideH() });
        attributes.push({ attribute: 'stride_w', value: transposeConvOpt.strideW() });
    }

    static getSparseToDenseAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let sparseToDenseOpt = new SparseToDenseOptions();
        sparseToDenseOpt = operator.builtinOptions<flatbuffers.Table>(sparseToDenseOpt);

        attributes.push({ attribute: 'validate_indices', value: sparseToDenseOpt.validateIndices() });
    }

    static getTileAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getExpandDimsAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getEqualAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getNotEqualAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getShapeAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let shapeOpt = new ShapeOptions();
        shapeOpt = operator.builtinOptions<flatbuffers.Table>(shapeOpt);

        attributes.push({ attribute: 'out_type', value: TensorType[shapeOpt.outType()] });
    }

    static getPowAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getArgMinAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let argMinOpt = new ArgMinOptions();
        argMinOpt = operator.builtinOptions<flatbuffers.Table>(argMinOpt);

        attributes.push({ attribute: 'output_type', value: TensorType[argMinOpt.outputType()] });
    }

    static getFakeQuantAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        let fakeQuanOpt = new FakeQuantOptions();
        fakeQuanOpt = operator.builtinOptions<flatbuffers.Table>(fakeQuanOpt);

        attributes.push({ attribute: 'min', value: fakeQuanOpt.min() });
        attributes.push({ attribute: 'max', value: fakeQuanOpt.max() });
        attributes.push({ attribute: 'num_bits', value: fakeQuanOpt.numBits() });
        attributes.push({ attribute: 'narrow_range', value: fakeQuanOpt.narrowRange() });
    }

    static getPackAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let packOpt = new PackOptions();
        packOpt = operator.builtinOptions<flatbuffers.Table>(packOpt);

        attributes.push({ attribute: 'values_count', value: packOpt.valuesCount() });
        attributes.push({ attribute: 'axis', value: packOpt.axis() });
    }

    static getLogicalOrAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getOneHotAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let oneHotOpt = new OneHotOptions();
        oneHotOpt = operator.builtinOptions<flatbuffers.Table>(oneHotOpt);

        attributes.push({ attribute: 'axis', value: oneHotOpt.axis() });
    }

    static getLogicalAndAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getLogicalNotAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getUnpackAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let unpackOpt = new UnpackOptions();
        unpackOpt = operator.builtinOptions<flatbuffers.Table>(unpackOpt);

        attributes.push({ attribute: 'num', value: unpackOpt.num() });
        attributes.push({ attribute: 'axis', value: unpackOpt.axis() });
    }

    static getFloorDivAttr(operator: Operator, attributes: Array<NODE_ATTRIBUTES>) {
        
    }

    static getSquareAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getZerosLikeAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getFillAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getBidirectionalSequenceLSTMAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let bidirectionalSequenceLSTMOpt = new BidirectionalSequenceLSTMOptions();
        bidirectionalSequenceLSTMOpt = operator.builtinOptions<flatbuffers.Table>(bidirectionalSequenceLSTMOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[bidirectionalSequenceLSTMOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'cell_clip', value: bidirectionalSequenceLSTMOpt.cellClip() });
        attributes.push({ attribute: 'proj_clip', value: bidirectionalSequenceLSTMOpt.projClip() });
        attributes.push({ attribute: 'merge_outputs', value: bidirectionalSequenceLSTMOpt.mergeOutputs() });
        attributes.push({ attribute: 'time_major', value: bidirectionalSequenceLSTMOpt.timeMajor() });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: bidirectionalSequenceLSTMOpt.asymmetricQuantizeInputs() });
    }

    static getBidirectionalSequenceRNNAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let bidirectionalSequenceRNNOpt = new BidirectionalSequenceRNNOptions();
        bidirectionalSequenceRNNOpt = operator.builtinOptions<flatbuffers.Table>(bidirectionalSequenceRNNOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[bidirectionalSequenceRNNOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'merge_outputs', value: bidirectionalSequenceRNNOpt.mergeOutputs() });
        attributes.push({ attribute: 'time_major', value: bidirectionalSequenceRNNOpt.timeMajor() });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: bidirectionalSequenceRNNOpt.asymmetricQuantizeInputs() });
    }

    static getUnidirectionalSequenceLSTMAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let unidirectionalSequenceLSTMOpt = new UnidirectionalSequenceLSTMOptions();
        unidirectionalSequenceLSTMOpt = operator.builtinOptions<flatbuffers.Table>(unidirectionalSequenceLSTMOpt);

        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[unidirectionalSequenceLSTMOpt.fusedActivationFunction()] });
        attributes.push({ attribute: 'cell_clip', value: unidirectionalSequenceLSTMOpt.cellClip() });
        attributes.push({ attribute: 'proj_clip', value: unidirectionalSequenceLSTMOpt.projClip() });
        attributes.push({ attribute: 'time_major', value: unidirectionalSequenceLSTMOpt.timeMajor() });
        attributes.push({ attribute: 'asymmetric_quantize_inputs', value: unidirectionalSequenceLSTMOpt.asymmetricQuantizeInputs() });
    }

    static getFloorModAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getRangeAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getResizeNearestNeighborAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let resizeNearesNeighborOpt = new ResizeNearestNeighborOptions();
        resizeNearesNeighborOpt = operator.builtinOptions<flatbuffers.Table>(resizeNearesNeighborOpt);

        attributes.push({ attribute: 'align_corners', value: resizeNearesNeighborOpt.alignCorners() });
    }

    static getLeakyReluAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let leakyReluOpt = new LeakyReluOptions();
        leakyReluOpt = operator.builtinOptions<flatbuffers.Table>(leakyReluOpt);

        attributes.push({ attribute: 'alpha', value: leakyReluOpt.alpha() });
    }

    static getSquareDifferenceAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getMirrorPadAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let mirrorPadOpt = new MirrorPadOptions();
        mirrorPadOpt = operator.builtinOptions<flatbuffers.Table>(mirrorPadOpt);

        attributes.push({ attribute: 'mode', value: MirrorPadMode[mirrorPadOpt.mode()] });
    }

    static getAbsAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getSplitVAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let splitOpt = new SplitOptions();
        splitOpt = operator.builtinOptions<flatbuffers.Table>(splitOpt);

        attributes.push({ attribute: 'num_splits', value: splitOpt.numSplits() });
    }

    static getUniqueAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let uniqueOpt = new UniqueOptions();
        uniqueOpt = operator.builtinOptions<flatbuffers.Table>(uniqueOpt);

        attributes.push({ attribute: 'idx_out_type', value: uniqueOpt.idxOutType() });
    }

    static getReverseV2Attr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getAddNAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getGatherNdAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getCosAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getWhereAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getRankAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }
    
    static getReverseSequenceAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let reverseSequenceOpt = new ReverseSequenceOptions();
        reverseSequenceOpt = operator.builtinOptions<flatbuffers.Table>(reverseSequenceOpt);

        attributes.push({ attribute: 'seq_dim', value: reverseSequenceOpt.seqDim() });
        attributes.push({ attribute: 'batch_bim', value: reverseSequenceOpt.batchDim() });
    }

    static getMatrixDiagAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getQuantizeAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        
    }

    static getMatrixSetDiagAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getHardSwishAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getIFAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let ifOpt = new IfOptions();
        ifOpt = operator.builtinOptions<flatbuffers.Table>(ifOpt);

        attributes.push({ attribute: 'then_subgraph_index', value: ifOpt.thenSubgraphIndex() });
        attributes.push({ attribute: 'else_subgraph_index', value: ifOpt.elseSubgraphIndex() });
    }

    static getWhileAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let whileOpt = new WhileOptions();
        whileOpt = operator.builtinOptions<flatbuffers.Table>(whileOpt);

        attributes.push({ attribute: 'cond_subgraph_index', value: whileOpt.condSubgraphIndex() });
        attributes.push({ attribute: 'body_subgraph_index', value: whileOpt.bodySubgraphIndex() });
    }

    static getDepthToSpaceAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let depthToSpaceOpt = new DepthToSpaceOptions();
        depthToSpaceOpt = operator.builtinOptions<flatbuffers.Table>(depthToSpaceOpt);

        attributes.push({ attribute: 'block_size', value: depthToSpaceOpt.blockSize() });
    }

    static getNonMaxSuppressionV4Attr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getNonMaxSuppressionV5Attr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getScatterNdAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getSelectV2Attr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getDensifyAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getSegmentSumAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {

    }

    static getBatchMatMulAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let batchMatMulOpt = new BatchMatMulOptions();
        batchMatMulOpt = operator.builtinOptions<flatbuffers.Table>(batchMatMulOpt);

        attributes.push({ attribute: 'adjoint_lhs', value: batchMatMulOpt.adjointLhs() });
        attributes.push({ attribute: 'adjoint_rhs', value: batchMatMulOpt.adjointRhs() });
    }

    static getBCQGatherAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let BCQGatherOpt = new BCQGatherOptions();
        BCQGatherOpt = operator.builtinOptions<flatbuffers.Table>(BCQGatherOpt);

        attributes.push({ attribute: 'input_hidden_size', value: BCQGatherOpt.inputHiddenSize() });
        attributes.push({ attribute: 'axis', value: BCQGatherOpt.axis() });
    }

    static getBCQFullyConnectedAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let BCQFullyConnectedOpt = new BCQFullyConnectedOptions();
        BCQFullyConnectedOpt = operator.builtinOptions<flatbuffers.Table>(BCQFullyConnectedOpt);

        attributes.push({ attribute: 'weights_hidden_size', value: BCQFullyConnectedOpt.weightsHiddenSize() });
        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[BCQFullyConnectedOpt.fusedActivationFunction()] });
    }

    static getInstanceNormAttr(operator: Operator , attributes: Array<NODE_ATTRIBUTES>) {
        let instanceNormOpt = new InstanceNormOptions();
        instanceNormOpt = operator.builtinOptions<flatbuffers.Table>(instanceNormOpt);

        attributes.push({ attribute: 'epsilon', value: instanceNormOpt.epsilon() });
        attributes.push({ attribute: 'fused_activation_function', value: ActivationFunctionType[instanceNormOpt.fusedActivationFunction()] });
    }
}