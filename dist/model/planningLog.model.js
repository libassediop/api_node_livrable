"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let planningLogSchema = new mongoose_1.default.Schema({
    JobOffer: { type: mongoose_1.default.Types.ObjectId, ref: 'JobOffer' },
    Meeting: { type: mongoose_1.default.Types.ObjectId, ref: 'Meeting' },
});
planningLogSchema.plugin(mongoose_paginate_1.default);
const PlanningLog = mongoose_1.default.model("PlanningLog", planningLogSchema);
exports.default = PlanningLog;
