"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let meetingSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Attachement: { type: String, required: true },
    Location: { type: String, required: true },
    Programmation: { type: String, required: true },
    Status: { type: Boolean, required: true },
});
meetingSchema.plugin(mongoose_paginate_1.default);
const Meeting = mongoose_1.default.model("meeting", meetingSchema);
exports.default = Meeting;
