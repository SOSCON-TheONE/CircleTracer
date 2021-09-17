export declare type Node = {
    name: String;
    type: Int32Array;
}
export declare type  NodeProperties = {
    type: String,
    location: Number
}
export declare type  NodeAttributes = {
    attribute: String,
    value: string|Number|Boolean|Int32Array|null
}
export declare type  NodeInput = {
    location: Number,
    name: String,
    type: Int32Array
}
export declare type  NodeOutput = {
    location: Number,
    name: String,
    type: Int32Array
}
// 최종 반환될 모델의 형태
export declare type  ModelOperator = {
    builtinoptions: String,
    properties: NODE_PROPERTIES,
    attributes: Array<NODE_ATTRIBUTES>,
    inputs: Array<NODE_INPUT>,
    outputs: Array<NODE_OUTPUT>    
}