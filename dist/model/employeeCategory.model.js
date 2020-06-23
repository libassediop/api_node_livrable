"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let employeeCategorySchema = new mongoose_1.default.Schema({
    category: { type: String, required: true },
});
employeeCategorySchema.plugin(mongoose_paginate_1.default);
const EmployeeCategory = mongoose_1.default.model("employeeCategory", employeeCategorySchema);
exports.default = EmployeeCategory;
