"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let customerSchema = new mongoose_1.default.Schema({
    Name: { type: String, required: true },
    FistName: { type: String, required: true },
    Sex: { type: String, required: true },
    BirthDate: { type: Date, required: true },
    ImageProfile: { type: String, required: true },
    Adress: { type: String, required: true },
    Zip: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    MobilePhone: { type: String, required: true },
    Fax: { type: String, required: true },
    Email: { type: String, required: true },
    DateCreate: { type: Date, required: true },
    Status: { type: Date, required: true },
    CorporateName: { type: mongoose_1.default.Types.ObjectId, ref: 'CorporateName' },
    Company: { type: mongoose_1.default.Types.ObjectId, ref: 'Company' },
    CustumerCategory: { type: mongoose_1.default.Types.ObjectId, ref: 'CustumerCategory' },
    CustumerType: { type: mongoose_1.default.Types.ObjectId, ref: 'CustumerType' },
});
customerSchema.plugin(mongoose_paginate_1.default);
const Customer = mongoose_1.default.model("Customer", customerSchema);
exports.default = Customer;
