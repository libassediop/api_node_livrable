"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let subdomainSchema = new mongoose_1.default.Schema({
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    WikiLink: { type: String, required: true },
    GlossaryLink: { type: String, required: true },
    Domain: { type: mongoose_1.default.Types.ObjectId, ref: 'Domain' },
});
subdomainSchema.plugin(mongoose_paginate_1.default);
const Subdomain = mongoose_1.default.model("Subdomain", subdomainSchema);
exports.default = Subdomain;
