"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let privilegeSchema = new mongoose_1.default.Schema({
    Title: { type: Date, required: true },
});
privilegeSchema.plugin(mongoose_paginate_1.default);
const Privilege = mongoose_1.default.model("Privilege", privilegeSchema);
exports.default = Privilege;
