"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let testSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Target: { type: String, required: true },
    Course: { type: mongoose_1.default.Types.ObjectId, ref: 'Company' },
    Subdomain: { type: mongoose_1.default.Types.ObjectId, ref: 'Subdomain' },
});
testSchema.plugin(mongoose_paginate_1.default);
const Test = mongoose_1.default.model("Test", testSchema);
exports.default = Test;
