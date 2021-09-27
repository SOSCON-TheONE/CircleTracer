// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class CustomQuantization {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):CustomQuantization {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCustomQuantization(bb:flatbuffers.ByteBuffer, obj?:CustomQuantization):CustomQuantization {
  return (obj || new CustomQuantization()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCustomQuantization(bb:flatbuffers.ByteBuffer, obj?:CustomQuantization):CustomQuantization {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CustomQuantization()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

custom(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

customLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

customArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startCustomQuantization(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addCustom(builder:flatbuffers.Builder, customOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, customOffset, 0);
}

static createCustomVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startCustomVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static endCustomQuantization(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCustomQuantization(builder:flatbuffers.Builder, customOffset:flatbuffers.Offset):flatbuffers.Offset {
  CustomQuantization.startCustomQuantization(builder);
  CustomQuantization.addCustom(builder, customOffset);
  return CustomQuantization.endCustomQuantization(builder);
}
}
