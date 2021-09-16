export declare type HashNode = {
    name: string;
    type: Int32Array;
}
export declare type  NODE_PROPERTIES = {
    type: string,
    location: number
}
export declare type  NODE_ATTRIBUTES = {
    attribute: string,
    value: string|number|boolean|null
}
export declare type  NODE_INPUT = {
    location: number,
    name: string,
    type: Int32Array
}
export declare type  NODE_OUTPUT = {
    location: number,
    name: string,
    type: Int32Array
}
// 최종 반환될 모델의 형태
export declare type  MODEL_OPERATOR = {
    builtinoptions: string,
    properties: NODE_PROPERTIES,
    attributes: Array<NODE_ATTRIBUTES>,
    inputs: Array<NODE_INPUT>,
    outputs: Array<NODE_OUTPUT>    
}