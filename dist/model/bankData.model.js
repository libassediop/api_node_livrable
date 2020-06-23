"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let BankDataSchema = new mongoose_1.default.Schema({
    AccountType: { type: String, required: true },
    AccountNumber: { type: String, required: true },
    Rib: { type: String, required: true },
    IBAN: { type: String, required: true },
    Bank: { type: mongoose_1.default.Types.ObjectId, ref: 'Bank' },
    Company: { type: mongoose_1.default.Types.ObjectId, ref: 'Company' },
});
BankDataSchema.plugin(mongoose_paginate_1.default);
const BankData = mongoose_1.default.model("bank", BankDataSchema);
exports.default = BankData;
