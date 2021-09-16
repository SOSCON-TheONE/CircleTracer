import { readFileSync } from 'fs';
import { HashNode, MODEL_OPERATOR, NODE_PROPERTIES, NODE_ATTRIBUTES, NODE_INPUT, NODE_OUTPUT } from './nodetypes'
import * as flatbuffers from 'flatbuffers';
import { Model } from './circle-analysis/circle/model';
import { BuiltinOperator } from './circle-analysis/circle/builtin-operator'
import { BuiltinOptions, unionToBuiltinOptions } from './circle-analysis/circle/builtin-options'
import { Conv2DOptions } from './circle-analysis/circle/conv2-d-options'
import { Pool2DOptions } from './circle-analysis/circle/pool2-d-options'
import { Padding } from './circle-analysis/circle/padding'
import { ActivationFunctionType } from './circle-analysis/circle/activation-function-type'
import { OptionsAttribute } from './options'
import { Operator } from './circle-analysis/circle/operator';


let result: Array<MODEL_OPERATOR> = [];

//circle 파일을 byte 형태로 변환
let file = readFileSync('./target/inception_v3.circle');
const buffer = file instanceof Uint8Array ? file : new Uint8Array(file);
let buf = new flatbuffers.ByteBuffer(buffer);
let model = Model.getRootAsModel(buf);
let subgraphsLength = model.subgraphsLength();

let builtin_code = [];
for(let opcode_idx=0; opcode_idx<model.operatorCodesLength();opcode_idx++){
    builtin_code[opcode_idx] = BuiltinOperator[model.operatorCodes(opcode_idx)!.builtinCode()];
}

//init subgraphs
let _subgraphs = model.subgraphs(0);
if(_subgraphs!=null)
for(var subgraph_idx = 0; subgraph_idx < subgraphsLength ; subgraph_idx++){
    //select subgraph을 해준다
    model.subgraphs(subgraph_idx,_subgraphs);
    console.log('sub_name: ',_subgraphs.name());
    for(var sub_inputs_idx = 0;sub_inputs_idx<_subgraphs.inputsLength();sub_inputs_idx++){ // subgraph의 inputs
        console.log('INPUTS');
        console.log('location: '+_subgraphs.inputsArray());
        console.log('OUTPUTS');
        console.log('location: '+_subgraphs.outputsArray());
    }    
    let _nodes: Array<HashNode> = []; // node를 담을 배열 생성
    let _tensors = null;
    
    for(var tensor_idx = 0; tensor_idx < _subgraphs.tensorsLength(); tensor_idx++){
        _tensors = _subgraphs.tensors(tensor_idx);
        let hashnode:HashNode;
        hashnode = {
            name: _tensors!.name()!,
            type: _tensors!.shapeArray()!
        }
        _nodes.push(hashnode);        
    }
    console.log('##OPERATOR##')
    //operator에서 나오는 inputs와 outputs는 tensor의 location을 의미한다.
    for (let operator_idx = 0; operator_idx < _subgraphs.operatorsLength(); operator_idx++){
        let operator = _subgraphs.operators(operator_idx)!;
        console.log('--'+operator_idx+'--');
        console.log('customOp: '+operator.customOptionsArray());
        console.log('NODE PROPERTIES');
        console.log('bb_pos: ' + operator.bb_pos);

        
        let prop_type = builtin_code[operator.opcodeIndex()];
        let prop_location = operator_idx;
        let model_prop:NODE_PROPERTIES = {type:prop_type, location:prop_location};

        console.log('\ttype: '+builtin_code[operator.opcodeIndex()]);
        console.log('\tlocation: ' + operator_idx);
        console.log('\tATTRIBUTE');

        //모델 Attribute 가져오는 부분
        let model_attribute: Array<NODE_ATTRIBUTES> = [];
        caseOptions(BuiltinOptions[operator.builtinOptionsType()], operator, model_attribute);
        
        console.log('\tINPUTS');
        let node_inputs:Array<NODE_INPUT>=[];
        let _inputs = operator.inputsArray()!;
        for(var inputs_idx = 0;inputs_idx<operator.inputsLength();inputs_idx++){
            console.log('\t\t*location:'+_inputs[inputs_idx]);
            console.log('\t\tname:'+_nodes[_inputs[inputs_idx]]['name']);
            console.log('\t\ttype:'+_nodes[_inputs[inputs_idx]]['type']);
            let node_input:NODE_INPUT = {
                location:_inputs[inputs_idx],
                name:_nodes[_inputs[inputs_idx]]['name'],
                type: _nodes[_inputs[inputs_idx]]['type']
            }
            node_inputs.push(node_input);
        }
        
        console.log('\tOUTPUTS');
        let _outputs = operator.outputsArray()!;
        let node_outputs:Array<NODE_OUTPUT>=[];
        for(var outputs_idx = 0;outputs_idx<operator.outputsLength();outputs_idx++){
            console.log('\t\t*location:'+_outputs[outputs_idx]);
            console.log('\t\tname:'+_nodes[_outputs[outputs_idx]]['name']);
             console.log('\t\ttype:'+_nodes[_outputs[outputs_idx]]['type']);     
             let node_output:NODE_OUTPUT = {
                 location:_outputs[outputs_idx],
                 name:_nodes[_outputs[outputs_idx]]['name'],
                 type: _nodes[_outputs[outputs_idx]]['type']
             }      
             node_outputs.push(node_output);       
        }
        let builtinoptions = BuiltinOptions[operator.builtinOptionsType()];
        console.log('BuiltinOption: '+BuiltinOptions[operator.builtinOptionsType()]);

        let model_oper:MODEL_OPERATOR = {
            builtinoptions:builtinoptions,
            properties: model_prop,
            attributes: model_attribute,
            inputs:node_inputs,
            outputs:node_outputs
        }
        result.push(model_oper);
    }
}

function caseOptions(opt_name: string, operator:Operator, model_attribute: Array<NODE_ATTRIBUTES>) {
    //Operator에 사용된 OptionType을 이용해서 처리
    switch (opt_name) {
        case 'AddOptions':
            OptionsAttribute.getAddAttr(operator, model_attribute);
            break;
        case 'ArgMaxOptions':
            OptionsAttribute.getArgMaxAttr(operator, model_attribute);
            break;
        case 'ArgMinOptions':
            OptionsAttribute.getArgMinAttr(operator, model_attribute);
            break;
        case 'BCQFullyConnectedOptions':
            OptionsAttribute.getBCQFullyConnectedAttr(operator, model_attribute);
            break;
        case 'BCQGatherOptions':
            OptionsAttribute.getBCQGatherAttr(operator, model_attribute);
            break;
        case 'BatchMatMulOptions':
            OptionsAttribute.getBatchMatMulAttr(operator, model_attribute);
            break;
        case 'BidirectionalSequenceLSTMOptions':
            OptionsAttribute.getBidirectionalSequenceLSTMAttr(operator, model_attribute);
            break;
        case 'BidirectionalSequenceRNNOptions':
            OptionsAttribute.getBidirectionalSequenceRNNAttr(operator, model_attribute);
            break;
        case 'CallOptions':
            OptionsAttribute.getCallAttr(operator, model_attribute);
            break;
        case 'CastOptions':
            OptionsAttribute.getCastAttr(operator, model_attribute);
            break;
        case 'ConcatenationOptions':
            OptionsAttribute.getConcatenationAttr(operator, model_attribute);
            break;
        case 'Conv2DOptions':
            OptionsAttribute.getConv2DAttr(operator, model_attribute);
            break;
        case 'DepthToSpaceOptions':
            OptionsAttribute.getDepthToSpaceAttr(operator, model_attribute);
            break;
        case 'DepthwiseConv2DOptions':
            OptionsAttribute.getDepthWiseConv2DAttr(operator, model_attribute);
            break;
        case 'DivOptions':
            OptionsAttribute.getDivAttr(operator, model_attribute);
            break;
        case 'FakeQuantOptions':
            OptionsAttribute.getFakeQuantAttr(operator, model_attribute);
            break;
        case 'FullyConnectedOptions':
            OptionsAttribute.getFullyConnectedAttr(operator, model_attribute);
            break;
        case 'IfOptions':
            OptionsAttribute.getIFAttr(operator, model_attribute);
            break;
        case 'InstanceNormOptions':
            OptionsAttribute.getInstanceNormAttr(operator, model_attribute);
            break;
        case 'L2NormOptions':
            OptionsAttribute.getL2NormAttr(operator, model_attribute);
            break;
        case 'LSHProjectionOptions':
            OptionsAttribute.getLSHProjectionAttr(operator, model_attribute);
            break;
        case 'LSTMOptions':
            OptionsAttribute.getLSTMAttr(operator, model_attribute);
            break;
        case 'LeakyReluOptions':
            OptionsAttribute.getLeakyReluAttr(operator, model_attribute);
            break;
        case 'LocalResponseNormalizationOptions':
            OptionsAttribute.getLocalResponseNormalizationAttr(operator, model_attribute);
            break;
        case 'MirrorPadOptions':
            OptionsAttribute.getMirrorPadAttr(operator, model_attribute);
            break;
        case 'OneHotOptions':
            OptionsAttribute.getOneHotAttr(operator, model_attribute);
            break;
        case 'PackOptions':
            OptionsAttribute.getPackAttr(operator, model_attribute);
            break;
        case 'Pool2DOptions':
            OptionsAttribute.getPool2DAttr(operator, model_attribute);
            break;
        case 'RNNOptions':
            OptionsAttribute.getRNNAttr(operator, model_attribute);
            break;
        case 'ReducerOptions':
            OptionsAttribute.getReducerAttr(operator, model_attribute);
            break;
        case 'ReshapeOptions':
            OptionsAttribute.getReshapeAttr(operator, model_attribute);
            break;
        case 'ResizeBilinearOptions':
            OptionsAttribute.getResizeBilinearAttr(operator, model_attribute);
            break;
        case 'ResizeNearestNeighborOptions':
            OptionsAttribute.getResizeNearestNeighborAttr(operator, model_attribute);
            break;
        case 'ReverseSequenceOptions':
            OptionsAttribute.getReverseSequenceAttr(operator, model_attribute);
            break;
        case 'SVDFOptions':
            OptionsAttribute.getSVDFAttr(operator, model_attribute);
            break;
        case 'SequenceRNNOptions':
            OptionsAttribute.getSequenceRNNAttr(operator, model_attribute);
            break;
        case 'ShapeOptions':
            OptionsAttribute.getShapeAttr(operator, model_attribute);
            break;
        case 'SkipGramOptions':
            OptionsAttribute.getSkipGramAttr(operator, model_attribute);
            break;
        case 'SoftmaxOptions':
            OptionsAttribute.getSoftMaxAttr(operator, model_attribute);
            break;
        case 'SpaceToDepthOptions':
            OptionsAttribute.getSpaceToDepth(operator, model_attribute);
            break;
        case 'SparseToDenseOptions':
            OptionsAttribute.getSparseToDenseAttr(operator, model_attribute);
            break;
        case 'SplitOptions':
            OptionsAttribute.getSplitAttr(operator, model_attribute);
            break;
        case 'SqueezeOptions':
            OptionsAttribute.getSqueezeAttr(operator, model_attribute);
            break;
        case 'StridedSliceOptions':
            OptionsAttribute.getStridedSliceAttr(operator, model_attribute);
            break;
        case 'SubOptions':
            OptionsAttribute.getSubAttr(operator, model_attribute);
            break;
        case 'TransposeConvOptions':
            OptionsAttribute.getTransposeConvAttr(operator, model_attribute);
            break;
        case 'UnidirectionalSequenceLSTMOptions':
            OptionsAttribute.getUnidirectionalSequenceLSTMAttr(operator, model_attribute);
            break;
        case 'UniqueOptions':
            OptionsAttribute.getUniqueAttr(operator, model_attribute);
            break;
        case 'UnpackOptions':
            OptionsAttribute.getUnpackAttr(operator, model_attribute);
            break;
        case 'WhileOptions':
            OptionsAttribute.getWhileAttr(operator, model_attribute);
            break;
    }
}