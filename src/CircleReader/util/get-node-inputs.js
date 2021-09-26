"use strict";
exports.__esModule = true;
exports.getNodeInputs = void 0;
function getNodeInputs(operator, nodesArr) {
    var nodeInputs = [];
    var inputArr = operator.inputsArray();
    var inputLength = operator.inputsLength();
    for (var inputIdx = 0; inputIdx < inputLength; inputIdx++) {
        var node_input = {
            location: inputArr[inputIdx],
            name: nodesArr[inputArr[inputIdx]]['name'],
            type: nodesArr[inputArr[inputIdx]]['type']
        };
        nodeInputs.push(node_input);
    }
    return nodeInputs;
}
exports.getNodeInputs = getNodeInputs;
