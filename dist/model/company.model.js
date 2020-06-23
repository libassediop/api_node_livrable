"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let companySchema = new mongoose_1.default.Schema({
    Name: { type: String, required: true },
    About: { type: String, required: true },
    Logo: { type: String, required: true },
    Adress: { type: String, required: true },
    State: { type: String, required: true },
    City: { type: String, required: true },
    Zip: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    Fax: { type: String, required: true },
    Email: { type: String, required: true },
    Website: { type: String, required: true },
    OfficePhone: { type: String, required: true },
    OfficeFax: { type: String, required: true },
    FacebookLink: { type: String, required: true },
    LinkdimLink: { type: String, required: true },
    Status: { type: Boolean, required: true },
    CorporateName: { type: mongoose_1.default.Types.ObjectId, ref: 'CorporateName' },
    SubscriptionPacck: { type: mongoose_1.default.Types.ObjectId, ref: 'SubscriptionPacck' },
    Reports: { type: mongoose_1.default.Types.ObjectId, ref: 'Reports' },
    Domain: { type: mongoose_1.default.Types.ObjectId, ref: 'Reports' },
});
companySchema.plugin(mongoose_paginate_1.default);
const Company = mongoose_1.default.model("Company", companySchema);
exports.default = Company;
