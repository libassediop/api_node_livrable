"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const socialInstitute_model_1 = __importDefault(require("../model/socialInstitute.model"));
const app = express_1.default();
const uri = "mongodb://localhost:27017/LIVRABLE";
mongoose_1.default.connect(uri, (err) => {
    if (err)
        console.log(err);
    else
        console.log("base de donne connecter");
});
app.get("/socialinstitut", (req, resp) => {
    socialInstitute_model_1.default.find((err, socialInstitut) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(socialInstitut);
    });
});
app.get("/", (req, resp) => {
    resp.send("hello zord");
});
app.listen(8085, () => {
    console.log("serveur strart");
});
