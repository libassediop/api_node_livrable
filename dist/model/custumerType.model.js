"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let custumerTypeSchema = new mongoose_1.default.Schema({
    Type: { type: String, required: true },
});
custumerTypeSchema.plugin(mongoose_paginate_1.default);
const CustumerType = mongoose_1.default.model("CustumerType", custumerTypeSchema);
exports.default = CustumerType;
