"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let reportTypeSchema = new mongoose_1.default.Schema({
    ReportType: { type: String, required: true },
});
reportTypeSchema.plugin(mongoose_paginate_1.default);
const ReportType = mongoose_1.default.model("ReportType", reportTypeSchema);
exports.default = ReportType;
