// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class SquaredDifferenceOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):SquaredDifferenceOptions {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSquaredDifferenceOptions(bb:flatbuffers.ByteBuffer, obj?:SquaredDifferenceOptions):SquaredDifferenceOptions {
  return (obj || new SquaredDifferenceOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSquaredDifferenceOptions(bb:flatbuffers.ByteBuffer, obj?:SquaredDifferenceOptions):SquaredDifferenceOptions {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SquaredDifferenceOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startSquaredDifferenceOptions(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endSquaredDifferenceOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSquaredDifferenceOptions(builder:flatbuffers.Builder):flatbuffers.Offset {
  SquaredDifferenceOptions.startSquaredDifferenceOptions(builder);
  return SquaredDifferenceOptions.endSquaredDifferenceOptions(builder);
}
}
