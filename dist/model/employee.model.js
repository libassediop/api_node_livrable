"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let employeeSchema = new mongoose_1.default.Schema({
    Name: { type: String, required: true },
    FirstName: { type: String, required: true },
    Sex: { type: String, required: true },
    ImageProfile: { type: String, required: false },
    DateBirth: { type: Date, required: false },
    CityBirth: { type: String, required: true },
    State: { type: String, required: true },
    Adress: { type: String, required: true },
    City: { type: String, required: false },
    Zip: { type: String, required: false },
    Nationality: { type: String, required: false },
    Marital: { type: String, required: false },
    Synthesis: { type: String, required: false },
    Rank: { type: String, required: false },
    PhoneContact: { type: String, unique: true, required: false },
    MobileContact: { type: String, required: false },
    Fonction: { type: String, required: false },
    HireDate: { type: Date, required: false },
    AccessCode: { type: String, required: true, unique: true },
    // Compagny:{type:mongoose.Types.ObjectId,ref:'Compagny'},
    // User:{type:mongoose.Types.ObjectId,ref:'User'},
    Account: { type: mongoose_1.default.Types.ObjectId, ref: 'Account' },
    Contract: { type: mongoose_1.default.Types.ObjectId, ref: 'Contract' },
});
employeeSchema.plugin(mongoose_paginate_1.default);
const Employee = mongoose_1.default.model("Employee", employeeSchema);
exports.default = Employee;
