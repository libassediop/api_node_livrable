"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let chapterSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Attachement: { type: String, required: true },
    ImageCover: { type: String, required: true },
    Duration: { type: String, required: true },
    Courses: { type: mongoose_1.default.Types.ObjectId, ref: 'Courses' },
});
chapterSchema.plugin(mongoose_paginate_1.default);
const Chapter = mongoose_1.default.model("Chapter", chapterSchema);
exports.default = Chapter;
