"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let AccountSchema = new mongoose_1.default.Schema({
    identifiant: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    DateCreate: { type: Date, required: true, default: Date.now },
    Status: { type: Boolean, required: true, default: true },
});
AccountSchema.plugin(mongoose_paginate_1.default);
const Account = mongoose_1.default.model("Account", AccountSchema);
exports.default = Account;
