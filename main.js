"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var flatbuffers = require("flatbuffers");
var model_1 = require("./circle-analysis/circle/model");
var builtin_operator_1 = require("./circle-analysis/circle/builtin-operator");
var builtin_options_1 = require("./circle-analysis/circle/builtin-options");
var result = [];
//circle 파일을 byte 형태로 변환
var file = (0, fs_1.readFileSync)('./target/inception_v3.circle');
var buffer = file instanceof Uint8Array ? file : new Uint8Array(file);
var buf = new flatbuffers.ByteBuffer(buffer);
var model = model_1.Model.getRootAsModel(buf);
var subgraphsLength = model.subgraphsLength();
var builtin_code = [];
for (var opcode_idx = 0; opcode_idx < model.operatorCodesLength(); opcode_idx++) {
    builtin_code[opcode_idx] = builtin_operator_1.BuiltinOperator[model.operatorCodes(opcode_idx).builtinCode()];
}
//init subgraphs
var _subgraphs = model.subgraphs(0);
if (_subgraphs != null)
    for (var subgraph_idx = 0; subgraph_idx < subgraphsLength; subgraph_idx++) {
        //select subgraph을 해준다
        model.subgraphs(subgraph_idx, _subgraphs);
        console.log('sub_name: ', _subgraphs.name());
        for (var sub_inputs_idx = 0; sub_inputs_idx < _subgraphs.inputsLength(); sub_inputs_idx++) { // subgraph의 inputs
            console.log('INPUTS');
            console.log('location: ' + _subgraphs.inputsArray());
            console.log('OUTPUTS');
            console.log('location: ' + _subgraphs.outputsArray());
        }
        var _nodes = []; // node를 담을 배열 생성
        var _tensors = null;
        for (var tensor_idx = 0; tensor_idx < _subgraphs.tensorsLength(); tensor_idx++) {
            _tensors = _subgraphs.tensors(tensor_idx);
            var hashnode = void 0;
            hashnode = {
                name: _tensors.name(),
                type: _tensors.shapeArray()
            };
            _nodes.push(hashnode);
        }
        console.log('##OPERATOR##');
        //operator에서 나오는 inputs와 outputs는 tensor의 location을 의미한다.
        for (var operator_idx = 0; operator_idx < _subgraphs.operatorsLength(); operator_idx++) {
            var operator = _subgraphs.operators(operator_idx);
            console.log('--' + operator_idx + '--');
            console.log('customOp: ' + operator.customOptionsArray());
            console.log('NODE PROPERTIES');
            var prop_type = builtin_code[operator.opcodeIndex()];
            var prop_location = operator_idx;
            var model_prop = { type: prop_type, location: prop_location };
            console.log('\ttype: ' + builtin_code[operator.opcodeIndex()]);
            console.log('\tlocation: ' + operator_idx);
            console.log('\tINPUTS');
            var node_inputs = [];
            var _inputs = operator.inputsArray();
            for (var inputs_idx = 0; inputs_idx < operator.inputsLength(); inputs_idx++) {
                console.log('\t\t*location:' + _inputs[inputs_idx]);
                console.log('\t\tname:' + _nodes[_inputs[inputs_idx]]['name']);
                console.log('\t\ttype:' + _nodes[_inputs[inputs_idx]]['type']);
                var node_input = {
                    location: _inputs[inputs_idx],
                    name: _nodes[_inputs[inputs_idx]]['name'],
                    type: _nodes[_inputs[inputs_idx]]['type']
                };
                node_inputs.push(node_input);
            }
            console.log('\tOUTPUTS');
            var _outputs = operator.outputsArray();
            var node_outputs = [];
            for (var outputs_idx = 0; outputs_idx < operator.outputsLength(); outputs_idx++) {
                console.log('\t\t*location:' + _outputs[outputs_idx]);
                console.log('\t\tname:' + _nodes[_outputs[outputs_idx]]['name']);
                console.log('\t\ttype:' + _nodes[_outputs[outputs_idx]]['type']);
                var node_output = {
                    location: _outputs[outputs_idx],
                    name: _nodes[_outputs[outputs_idx]]['name'],
                    type: _nodes[_outputs[outputs_idx]]['type']
                };
                node_outputs.push(node_output);
            }
            var builtinoptions = builtin_options_1.BuiltinOptions[operator.builtinOptionsType()];
            console.log('BuiltinOption: ' + builtin_options_1.BuiltinOptions[operator.builtinOptionsType()]);
            var model_oper = {
                builtinoptions: builtinoptions,
                properties: model_prop,
                inputs: node_inputs,
                outputs: node_outputs
            };
            result.push(model_oper);
        }
    }
