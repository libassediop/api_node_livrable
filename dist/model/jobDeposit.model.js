"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let jobDepositSchema = new mongoose_1.default.Schema({
    Date: { type: Date, required: true },
    Status: { type: String, required: true },
    JobOffer: { type: mongoose_1.default.Types.ObjectId, ref: 'JobOffer' },
    User: { type: mongoose_1.default.Types.ObjectId, ref: 'User' },
});
jobDepositSchema.plugin(mongoose_paginate_1.default);
const JobDeposit = mongoose_1.default.model("JobDeposit", jobDepositSchema);
exports.default = JobDeposit;
