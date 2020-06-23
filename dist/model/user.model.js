"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let userSchema = new mongoose_1.default.Schema({
    Name: { type: String, required: true },
    FirstName: { type: String, required: false },
    Sex: { type: String, required: false },
    ImageProfile: { type: String, required: false },
    DateBirth: { type: Date, required: false },
    CityBirth: { type: String, required: false },
    State: { type: String, required: false },
    Adress: { type: String, required: false },
    City: { type: String, required: false },
    Zip: { type: String, required: false },
    Nationality: { type: String, required: false },
    Marital: { type: String, required: false },
    Synthesis: { type: String, required: false },
    Rank: { type: String, required: false },
    PhoneContact: { type: String, unique: true, required: false },
    MobileContact: { type: String, required: false },
    WhatsappNumber: { type: String, required: false },
    FacebookLink: { type: String, required: false },
    LinkdinLink: { type: String, required: false },
    Compagny: { type: mongoose_1.default.Types.ObjectId, ref: 'Compagny', required: false },
    Account: { type: mongoose_1.default.Types.ObjectId, ref: 'Account', required: false },
    Degree: { type: mongoose_1.default.Types.ObjectId, ref: 'Degree', required: false },
    Pratice: { type: mongoose_1.default.Types.ObjectId, ref: 'Pratice', required: false },
    SubscriptionPack: { type: mongoose_1.default.Types.ObjectId, ref: 'SubscriptionPack', required: false },
    Grade: { type: mongoose_1.default.Types.ObjectId, ref: 'Grade', required: false },
});
userSchema.plugin(mongoose_paginate_1.default);
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
