"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let bankSchema = new mongoose_1.default.Schema({
    Name: { type: String, required: true },
    Logo: { type: String, required: true },
    SwiftCode: { type: String, required: true },
    Bankcode: { type: String, required: true },
    BranchCode: { type: Date, required: true },
});
bankSchema.plugin(mongoose_paginate_1.default);
const Bank = mongoose_1.default.model("bank", bankSchema);
exports.default = Bank;
