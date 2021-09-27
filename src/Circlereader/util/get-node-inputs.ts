import { Operator } from '../circle-analysis/circle/operator';
import { NodeInput, Node } from '../type/types';

export function getNodeInputs(operator: Operator, nodesArr: Array<Node>): Array<NodeInput> {
    let nodeInputs: Array<NodeInput> = [];
    let inputArr = operator.inputsArray()!;
    let inputLength = operator.inputsLength();

    for (let inputIdx = 0; inputIdx < inputLength; inputIdx++) {
        let node_input: NodeInput = {
            location: inputArr[inputIdx],
            name: nodesArr[inputArr[inputIdx]]['name'],
            type: nodesArr[inputArr[inputIdx]]['type']
        };

        nodeInputs.push(node_input);
    }

    return nodeInputs;
}