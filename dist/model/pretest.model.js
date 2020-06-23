"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let PretestSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Target: { type: String, required: true },
    Subdomain: { type: mongoose_1.default.Types.ObjectId, ref: 'Subdomain' },
    JobOffer: { type: mongoose_1.default.Types.ObjectId, ref: 'JobOffer' },
});
PretestSchema.plugin(mongoose_paginate_1.default);
const Pretest = mongoose_1.default.model("Pretest", PretestSchema);
exports.default = Pretest;
