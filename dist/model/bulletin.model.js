"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let bulletinSchema = new mongoose_1.default.Schema({
    DateCreate: { type: String, required: true },
    User: { type: mongoose_1.default.Types.ObjectId, ref: 'User' },
    Compagny: { type: mongoose_1.default.Types.ObjectId, ref: 'Compagny' },
});
bulletinSchema.plugin(mongoose_paginate_1.default);
const Bulletin = mongoose_1.default.model("Bulletin", bulletinSchema);
exports.default = Bulletin;
