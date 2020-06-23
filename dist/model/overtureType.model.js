"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let overtureTypeSchema = new mongoose_1.default.Schema({
    Type: { type: String, required: true },
    Definition: { type: String, required: true },
});
overtureTypeSchema.plugin(mongoose_paginate_1.default);
const OvertureType = mongoose_1.default.model("OvertureType", overtureTypeSchema);
exports.default = OvertureType;
