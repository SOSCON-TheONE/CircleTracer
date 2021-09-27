"use strict";
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
var fs_1 = require("fs");
var flatbuffers = __importStar(require("flatbuffers"));
var model_1 = require("./circle-analysis/circle/model");
var builtin_options_1 = require("./circle-analysis/circle/builtin-options");
var case_options_1 = require("./util/case-options");
var init_builtin_options_1 = require("./util/init-builtin-options");
var init_subgraph_nodes_1 = require("./util/init-subgraph-nodes");
var get_node_inputs_1 = require("./util/get-node-inputs");
var get_node_outputs_1 = require("./util/get-node-outputs");
var file = (0, fs_1.readFileSync)('./target/inception_v3.circle');
var buffer = file instanceof Uint8Array ? file : new Uint8Array(file);
var bb = new flatbuffers.ByteBuffer(buffer);
var model = model_1.Model.getRootAsModel(bb);
var subgraphsLength = model.subgraphsLength();
var resultArr = [];
var builtInOperatorArr = (0, init_builtin_options_1.initBuiltInOperator)(model);
//init subgraphs
var subgraph = model.subgraphs(0);
if (subgraph != null) {
    for (var subgraphIdx = 0; subgraphIdx < subgraphsLength; subgraphIdx++) {
        //indirect bb_pos to next subgraph index
        model.subgraphs(subgraphIdx, subgraph);
        var nodesArr = (0, init_subgraph_nodes_1.initSubgraphNodes)(subgraph); // init node array
        //operator에서 나오는 inputs와 outputs는 tensor의 location을 의미한다.
        for (var operatorIdx = 0; operatorIdx < subgraph.operatorsLength(); operatorIdx++) {
            var operator = subgraph.operators(operatorIdx);
            var modelType = builtInOperatorArr[operator.opcodeIndex()];
            var modelLocation = operatorIdx;
            var modelProp = { type: modelType, location: modelLocation };
            //get node attribute
            var option = builtin_options_1.BuiltinOptions[operator.builtinOptionsType()];
            var modelAttribute = [];
            (0, case_options_1.caseOptions)(option, operator, modelAttribute);
            //get node inputs
            var nodeInputs = (0, get_node_inputs_1.getNodeInputs)(operator, nodesArr);
            //get node outputs
            var nodeOutputs = (0, get_node_outputs_1.getNodeOutputs)(operator, nodesArr);
            //get builtin-option of node
            var builtinoptions = builtin_options_1.BuiltinOptions[operator.builtinOptionsType()];
            var modelOper = {
                builtinoptions: builtinoptions,
                properties: modelProp,
                attributes: modelAttribute,
                inputs: nodeInputs,
                outputs: nodeOutputs
            };
            resultArr.push(modelOper);
        }
    }
}
exports.default = resultArr;
