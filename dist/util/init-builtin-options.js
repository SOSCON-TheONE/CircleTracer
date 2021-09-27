"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBuiltInOperator = void 0;
var builtin_operator_1 = require("../circle-analysis/circle/builtin-operator");
function initBuiltInOperator(model) {
    var builtinCodes = [];
    for (var opcode_idx = 0; opcode_idx < model.operatorCodesLength(); opcode_idx++) {
        builtinCodes[opcode_idx] = builtin_operator_1.BuiltinOperator[model.operatorCodes(opcode_idx).builtinCode()];
    }
    return builtinCodes;
}
exports.initBuiltInOperator = initBuiltInOperator;
