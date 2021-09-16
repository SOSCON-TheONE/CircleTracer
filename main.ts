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
        case 'Conv2DOptions':
            OptionsAttribute.getConv2DAttr(operator, model_attribute);
            break;
        case 'Pool2DOptions':
            OptionsAttribute.getPool2DAttr(operator, model_attribute);
            break;
        case 'ConcatenationOptions':
            break;
        case 'SoftMaxOptions':
            break;
        case 'ReshapeOptions':
            break;
    }
}