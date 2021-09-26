"use strict";
exports.__esModule = true;
exports.getNodeOutputs = void 0;
function getNodeOutputs(operator, nodesArr) {
    var nodeOutputs = [];
    var outputArr = operator.outputsArray();
    var outputLength = operator.outputsLength();
    for (var outputIdx = 0; outputIdx < outputLength; outputIdx++) {
        var node_input = {
            location: outputArr[outputIdx],
            name: nodesArr[outputArr[outputIdx]]['name'],
            type: nodesArr[outputArr[outputIdx]]['type']
        };
        nodeOutputs.push(node_input);
    }
    return nodeOutputs;
}
exports.getNodeOutputs = getNodeOutputs;
