"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let socialInstitutSchema = new mongoose_1.default.Schema({
    Name: { type: String, required: true },
    Logo: { type: String, required: true },
    Adress: { type: String, required: true },
    State: { type: String, required: true },
    City: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    Fax: { type: String, required: true },
    Email: { type: String, required: true },
    Website: { type: String, required: true },
});
socialInstitutSchema.plugin(mongoose_paginate_1.default);
const SocialInstitut = mongoose_1.default.model("SocialInstitut", socialInstitutSchema);
exports.default = SocialInstitut;
