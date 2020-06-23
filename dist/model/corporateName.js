"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let corporateNameSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    WikiLink: { type: String, required: true },
    GLossaryLink: { type: String, required: true },
});
corporateNameSchema.plugin(mongoose_paginate_1.default);
const CorporateName = mongoose_1.default.model("CorporateName", corporateNameSchema);
exports.default = CorporateName;
