"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let jobOffersLogSchema = new mongoose_1.default.Schema({
    Activity: { type: String, required: true },
    IpAdress: { type: String, required: true },
    Date: { type: String, required: true },
    JobOffer: { type: mongoose_1.default.Types.ObjectId, ref: 'JobOffer' },
});
jobOffersLogSchema.plugin(mongoose_paginate_1.default);
const JobOffersLog = mongoose_1.default.model("JobOffersLog", jobOffersLogSchema);
exports.default = JobOffersLog;
