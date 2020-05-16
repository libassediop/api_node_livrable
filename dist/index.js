"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const socialInstitute_model_1 = __importDefault(require("./model/socialInstitute.model"));
//instancier express
const app = express_1.default();
//Middleware bodyparser pour parser le corps des requetes en Json
app.use(body_parser_1.default.json());
//connection base de donnee mongodb
const uri = "mongodb://localhost:27017/LIVRABLE";
mongoose_1.default.connect(uri, (err) => {
    if (err)
        console.log(err);
    else
        console.log("base de donne connecter");
});
//liste des Socialinstituts avec pagination
app.get("/psocialinstitut", (req, resp) => {
    let p = parseInt(req.query.page || 1);
    let size = parseInt(req.query.size || 5);
    socialInstitute_model_1.default.paginate({}, { page: p, limit: size }, function (err, result) {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(result);
    });
});
//liste des Socialinstituts
app.get("/socialinstitut", (req, resp) => {
    socialInstitute_model_1.default.find((err, socialInstitut) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(socialInstitut);
    });
});
//listez un Socialinstituts par son id
app.get("/socialinstitut/:id", (req, resp) => {
    socialInstitute_model_1.default.findById(req.params.id, (err, socialInstitut) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(socialInstitut);
    });
});
//enregistrer des Socialinstituts
app.post("/socialinstitut", (req, resp) => {
    let socialInstitut = new socialInstitute_model_1.default(req.body);
    socialInstitut.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(socialInstitut);
    });
});
//mises a jour d'un Socialinstituts
app.put("/socialinstitut/:id", (req, resp) => {
    socialInstitute_model_1.default.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("Successfuly updated socialinstitut");
    });
});
//suppression d'un Socialinstituts
app.delete("/socialinstitut/:id", (req, resp) => {
    socialInstitute_model_1.default.findByIdAndDelete(req.params.id, (err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send("Successfuly deleted socialinstitut");
    });
});
app.get("/", (req, resp) => {
    resp.send("hello zord");
});
app.listen(8085, () => {
    console.log("serveur strart");
});
