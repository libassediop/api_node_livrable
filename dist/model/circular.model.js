"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let circularSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Content: { type: String, required: true },
    Attachement: { type: String, required: true },
    ImageCover: { type: String, required: true },
    DateCreate: { type: Date, required: true },
});
circularSchema.plugin(mongoose_paginate_1.default);
const Circular = mongoose_1.default.model("Circular", circularSchema);
exports.default = Circular;
