// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DataFormat } from '../circle/data-format';
import { Operator } from '../circle/operator';
import { Tensor } from '../circle/tensor';


export class SubGraph {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):SubGraph {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSubGraph(bb:flatbuffers.ByteBuffer, obj?:SubGraph):SubGraph {
  return (obj || new SubGraph()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSubGraph(bb:flatbuffers.ByteBuffer, obj?:SubGraph):SubGraph {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SubGraph()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

tensors(index: number, obj?:Tensor):Tensor|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Tensor()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

tensorsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

inputs(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

inputsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

inputsArray():Int32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Int32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

outputs(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

outputsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

outputsArray():Int32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Int32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

operators(index: number, obj?:Operator):Operator|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new Operator()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

operatorsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

dataFormat():DataFormat {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : DataFormat.CHANNELS_LAST;
}

static startSubGraph(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static addTensors(builder:flatbuffers.Builder, tensorsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, tensorsOffset, 0);
}

static createTensorsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startTensorsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addInputs(builder:flatbuffers.Builder, inputsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, inputsOffset, 0);
}

static createInputsVector(builder:flatbuffers.Builder, data:number[]|Int32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createInputsVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createInputsVector(builder:flatbuffers.Builder, data:number[]|Int32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startInputsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addOutputs(builder:flatbuffers.Builder, outputsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, outputsOffset, 0);
}

static createOutputsVector(builder:flatbuffers.Builder, data:number[]|Int32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createOutputsVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createOutputsVector(builder:flatbuffers.Builder, data:number[]|Int32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startOutputsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addOperators(builder:flatbuffers.Builder, operatorsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, operatorsOffset, 0);
}

static createOperatorsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startOperatorsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, nameOffset, 0);
}

static addDataFormat(builder:flatbuffers.Builder, dataFormat:DataFormat) {
  builder.addFieldInt8(5, dataFormat, DataFormat.CHANNELS_LAST);
}

static endSubGraph(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSubGraph(builder:flatbuffers.Builder, tensorsOffset:flatbuffers.Offset, inputsOffset:flatbuffers.Offset, outputsOffset:flatbuffers.Offset, operatorsOffset:flatbuffers.Offset, nameOffset:flatbuffers.Offset, dataFormat:DataFormat):flatbuffers.Offset {
  SubGraph.startSubGraph(builder);
  SubGraph.addTensors(builder, tensorsOffset);
  SubGraph.addInputs(builder, inputsOffset);
  SubGraph.addOutputs(builder, outputsOffset);
  SubGraph.addOperators(builder, operatorsOffset);
  SubGraph.addName(builder, nameOffset);
  SubGraph.addDataFormat(builder, dataFormat);
  return SubGraph.endSubGraph(builder);
}
}
