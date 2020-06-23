"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let leaveSchema = new mongoose_1.default.Schema({
    DateStart: { type: String, required: true },
    DateEnd: { type: String, required: true },
    LeaveType: { type: mongoose_1.default.Types.ObjectId, ref: 'LeaveType' },
    Company: { type: mongoose_1.default.Types.ObjectId, ref: 'Company' },
});
leaveSchema.plugin(mongoose_paginate_1.default);
const Leave = mongoose_1.default.model("Leave", leaveSchema);
exports.default = Leave;
