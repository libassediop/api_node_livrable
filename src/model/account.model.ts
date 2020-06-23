import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let AccountSchema= new mongoose.Schema({
    identifiant:{type:String,required:true,unique:true},
    motDePasse:{type:String,required:true},
    DateCreate:{type:Date,required:true,default:Date.now},
    Status:{type:Boolean,required:true,default:true},
});

AccountSchema.plugin(mongoosePaginate);

const Account=mongoose.model("Account",AccountSchema);

export  default  Account;
