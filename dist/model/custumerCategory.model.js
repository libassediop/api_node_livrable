"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let custumerCategorySchema = new mongoose_1.default.Schema({
    Category: { type: String, required: true },
});
custumerCategorySchema.plugin(mongoose_paginate_1.default);
const CustumerCategory = mongoose_1.default.model("CustumerCategory", custumerCategorySchema);
exports.default = CustumerCategory;
