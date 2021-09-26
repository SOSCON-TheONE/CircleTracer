"use strict";
exports.__esModule = true;
exports.initSubgraphNodes = void 0;
function initSubgraphNodes(subgraph) {
    var nodesArr = [];
    for (var tensorIdx = 0; tensorIdx < subgraph.tensorsLength(); tensorIdx++) {
        var tensor = subgraph.tensors(tensorIdx);
        var hashnode = {
            name: tensor.name(),
            type: tensor.shapeArray()
        };
        nodesArr.push(hashnode);
    }
    return nodesArr;
}
exports.initSubgraphNodes = initSubgraphNodes;
