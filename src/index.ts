import  express from "express";
import  mongoose from "mongoose";
import bodyParser from  "body-parser";
import cors from  "cors";

import SocialInstitut from "./model/socialInstitute.model";
import Circular from "./model/circular.model";
import User from "./model/user.model";
import Employe from "./model/employee.model";
import Account from "./model/account.model";
import Contract from "./model/contract.model";
import CorporateName from "./model/corporateName";
import EmployeeCategory from "./model/employeeCategory.model";


//instancier express
const  app=express();

//Middleware bodyparser pour parser le corps des requetes en Json
app.use(bodyParser.json());

//connection base de donnee mongodb
const uri= "mongodb+srv://limamou:limamou1@cluster0-cxm3i.mongodb.net/livrable?retryWrites=true&w=majority";
mongoose.connect(uri,(err)=>{
    if(err) console.log(err);
    else console.log("base de donne connecter");
});
// Middleware qui permet d'autoriser les requêtes Ajax provenant d'un autre domaine
app.use(cors());

// platform kie

///liste des Contract
app.get("/contract",(req,resp)=>{
    Contract.find((err,contract)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(contract);
    })
});
//listez un Contract par son id
app.get("/contract/:id",(req,resp)=>{
    Contract.findById(req.params.id,(err,contract)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(contract);
    })
});
//nbre de contract
app.get("/nbreContrat",(req,resp)=>{
    Contract.count( {}, function(err, result){

        if(err){
            resp.send(err)
        }
        else{
            resp.json(result)
        }
    })
});



//enregistrer des Contract
app.post("/contract",(req,resp)=>{
    let contract=new Contract(req.body);
    contract.save(err=>{
        if (err)resp.status(500).send(err);
        else resp.send(contract);
    })
});
//route user

app.post("/user",(req,resp)=>{
    let user=new User(req.body);
    user.save(err=>{
        if (err)resp.status(500).send(err);
        else resp.send(user);
    })
});

//route employe

app.post("/employe",(req,resp)=>{
    let employe=new Employe(req.body);
    employe.save(err=>{
        if (err)resp.status(500).send(err);
        else resp.send(employe);
    })
});

app.get("/employe",(req,resp)=>{
    Employe.find((err,employe,)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(employe,);
    })
});

//nbre de contract
app.get("/nbreEmploye",(req,resp)=>{
    Employe.count( {}, function(err, result){

        if(err){
            resp.send(err)
        }
        else{
            resp.json(result)
        }
    })
});
app.get("/employe/:id",(req,resp)=>{
    Employe.find({ Account: req.params.id },function (err,employe) {
        if (err) {resp.send("succes:false")}
        else  resp.send(employe);
    })

});
app.get("/employeByContrat/:id", (req, resp) => {
    Employe.find({ Contract: req.params.id }, function (err, employe) {
        if (err) {
            resp.send("succes:false");
        }
        else
            resp.send(employe);
    });
});
//route account
app.post("newAccount",(req,resp)=>{
    let account=new Account(req.body);
    account.save(err=>{
        if (err)resp.status(500).send(err);
        else resp.send(account);
    })
});

app.get("/account",(req,resp)=>{
    Account.find((err,account,)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(account,);
    })
});
app.post("/account",(req,resp)=>{
    Account.findOne({ identifiant: req.body.identifiant}, function(err, account) {
        console.log('User found ');
        // In case the user not found
        if(err) {
            console.log('THIS IS ERROR RESPONSE')
            resp.json(err)
        }
        // @ts-ignore
        if (account && account.motDePasse === req.body.motDePasse){
            console.log('User and password is correct')
            resp.json(account);
        } else {
            console.log("Credentials wrong");
            resp.json({data: "identifiant ou mot de passe incorrect"});
        }
    });
});


            /*Socialinstituts*/

//liste des Socialinstituts avec pagination
// app.get("/psocialinstitut",(req,resp)=>{
//     let p:number=parseInt(req.query.page || 1);
//     let size:number=parseInt(req.query.size || 5)
//     SocialInstitut.paginate({},{page:p,limit:size},function (err,result) {
//         if (err) resp.status(500).send(err)
//         else  resp.send(result);
//     })
// });
//liste des Socialinstituts

app.get("/socialinstitut",(req,resp)=>{
    SocialInstitut.find((err,socialInstitut)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(socialInstitut);
    })
});

//listez un Socialinstituts par son id
app.get("/socialinstitut/:id",(req,resp)=>{
    SocialInstitut.findById(req.params.id,(err,socialInstitut)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(socialInstitut);
    })
});
//enregistrer des Socialinstituts
app.post("/socialinstitut",(req,resp)=>{
   let socialInstitut=new SocialInstitut(req.body);
   socialInstitut.save(err=>{
       if (err)resp.status(500).send(err);
       else resp.send(socialInstitut);
   })
});

//mises a jour d'un Socialinstituts
app.put("/socialinstitut/:id",(req,resp)=>{
    SocialInstitut.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly updated socialinstitut");
    })
});
//suppression d'un Socialinstituts
app.delete("/socialinstitut/:id",(req,resp)=>{
    SocialInstitut.findByIdAndDelete(req.params.id,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly deleted socialinstitut");
    })
});

                    /*Circular*/


//liste des Circular
app.get("/circular",(req,resp)=>{
    Circular.find((err,circular)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(circular);
    })
});
//listez un Circular par son id
app.get("/circular/:id",(req,resp)=>{
    Circular.findById(req.params.id,(err,circular)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(circular);
    })
});
//enregistrer des Circular
app.post("/circular",(req,resp)=>{
    let circular=new Circular(req.body);
    circular.save(err=>{
        if (err)resp.status(500).send(err);
        else resp.send(circular);
    })
});
//mises a jour d'un Circular
app.put("/circular/:id",(req,resp)=>{
    Circular.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly updated circular");
    })
});
//suppression d'un Circular
app.delete("/circular/:id",(req,resp)=>{
    Circular.findByIdAndDelete(req.params.id,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly deleted circular");
    })
});

                /*Contract*/


//liste des Contract
app.get("/contract",(req,resp)=>{
    Contract.find((err,contract)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(contract);
    })
});
//listez un Contract par son id
app.get("/contract/:id",(req,resp)=>{
    Contract.findById(req.params.id,(err,contract)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(contract);
    })
});
//enregistrer des Contract
app.post("/contract",(req,resp)=>{
    let contract=new Contract(req.body);
    contract.save(err=>{
        if (err)resp.status(500).send(err);
        else resp.send(contract);
    })
});
//mises a jour d'un Contract
app.put("/contract/:id",(req,resp)=>{
    Contract.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly updated contract");
    })
});
//suppression d'un Contract
app.delete("/contract/:id",(req,resp)=>{
    Contract.findByIdAndDelete(req.params.id,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly deleted contract");
    })
});

                /*CorporateName*/


//liste des CorporateName
app.get("/corporateName",(req,resp)=>{
    CorporateName.find((err,corporateName)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(corporateName);
    })
});
//listez un CorporateName par son id
app.get("/corporateName/:id",(req,resp)=>{
    CorporateName.findById(req.params.id,(err,corporateName)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(corporateName);
    })
});
//enregistrer des CorporateName
app.post("/socialinstitut",(req,resp)=>{
    let corporateName=new CorporateName(req.body);
    corporateName.save(err=>{
        if (err)resp.status(500).send(err);
        else resp.send(corporateName);
    })
});
//mises a jour d'un CorporateName
app.put("/corporateName/:id",(req,resp)=>{
    CorporateName.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly updated corporateName");
    })
});
//suppression d'un CorporateName
app.delete("/corporateName/:id",(req,resp)=>{
    CorporateName.findByIdAndDelete(req.params.id,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly deleted corporateName");
    })
});


                    /*EmployeeCategory*/


//liste des EmployeeCategory
app.get("/employeeCategory",(req,resp)=>{
    EmployeeCategory.find((err,employeeCategory)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(employeeCategory);
    })
});
//listez un EmployeeCategory par son id
app.get("/employeeCategory/:id",(req,resp)=>{
    EmployeeCategory.findById(req.params.id,(err,employeeCategory)=>{
        if (err) resp.status(500).send(err)
        else  resp.send(employeeCategory);
    })
});
//enregistrer des EmployeeCategory
app.post("/socialinstitut",(req,resp)=>{
    let employeeCategory=new EmployeeCategory(req.body);
    employeeCategory.save(err=>{
        if (err)resp.status(500).send(err);
        else resp.send(employeeCategory);
    })
});
//mises a jour d'un EmployeeCategory
app.put("/employeeCategory/:id",(req,resp)=>{
    EmployeeCategory.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly updated EmployeeCategory");
    })
});
//suppression d'un EmployeeCategory
app.delete("/employeeCategory/:id",(req,resp)=>{
    EmployeeCategory.findByIdAndDelete(req.params.id,(err)=>{
        if (err) resp.status(500).send(err)
        else  resp.send("Successfuly deleted EmployeeCategory");
    })
});




app.get("/",(req,resp)=>{
    resp.send("hello zord");
});




app.listen(8085,()=>{
    console.log("serveur strart");
});
