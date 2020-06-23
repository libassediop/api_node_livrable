"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let attestationSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    LastActivityDate: { type: Date, required: true },
    Activity: { type: String, required: true },
    DateCreate: { type: String, required: true },
    AttestationType: { type: mongoose_1.default.Types.ObjectId, ref: 'AttestationType' },
    User: { type: mongoose_1.default.Types.ObjectId, ref: 'User' },
    Compagny: { type: mongoose_1.default.Types.ObjectId, ref: 'Compagny' },
});
attestationSchema.plugin(mongoose_paginate_1.default);
const Company = mongoose_1.default.model("Attestation", attestationSchema);
exports.default = Attestation;
