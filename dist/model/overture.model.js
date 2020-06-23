"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let ouvertureSchema = new mongoose_1.default.Schema({
    Date: { type: Date, required: true },
    OuvertureType: { type: mongoose_1.default.Types.ObjectId, ref: 'OuvertureType' },
    Company: { type: mongoose_1.default.Types.ObjectId, ref: 'Company' },
});
ouvertureSchema.plugin(mongoose_paginate_1.default);
const Ouverture = mongoose_1.default.model("Ouverture", ouvertureSchema);
exports.default = Ouverture;
