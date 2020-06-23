"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let jobOfferSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    DateOfStart: { type: String, required: true },
    DateEndt: { type: String, required: true },
    Status: { type: String, required: true },
    Pretest: { type: mongoose_1.default.Types.ObjectId, ref: 'Pretest' },
    Company: { type: mongoose_1.default.Types.ObjectId, ref: 'Company' },
    Subdomain: { type: mongoose_1.default.Types.ObjectId, ref: 'Subdomain' },
});
jobOfferSchema.plugin(mongoose_paginate_1.default);
const JobOffer = mongoose_1.default.model("JobOffer", jobOfferSchema);
exports.default = JobOffer;
