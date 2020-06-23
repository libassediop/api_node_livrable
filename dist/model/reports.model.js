"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let reportSchema = new mongoose_1.default.Schema({
    Name: { type: String, required: true },
    CreateDate: { type: Date, required: true },
    Activity: { type: String, required: true },
    LastActivityDate: { type: Date, required: true },
    ReportType: { type: mongoose_1.default.Types.ObjectId, ref: 'ReportType' },
});
reportSchema.plugin(mongoose_paginate_1.default);
const Report = mongoose_1.default.model("Report", reportSchema);
exports.default = Report;
