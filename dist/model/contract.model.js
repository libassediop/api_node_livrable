"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let contractSchema = new mongoose_1.default.Schema({
    Type: { type: String, required: true },
    Definition: { type: String, required: false },
});
contractSchema.plugin(mongoose_paginate_1.default);
const Contract = mongoose_1.default.model("Contract", contractSchema);
exports.default = Contract;
