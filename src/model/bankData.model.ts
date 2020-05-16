import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";


let BankDataSchema= new mongoose.Schema({
    AccountType:{type:String,required:true},
    AccountNumber:{type:String,required:true},
    Rib:{type:String,required:true},
    IBAN:{type:String,required:true},
    Bank:{type:mongoose.Types.ObjectId,ref:'Bank'},
    Company:{type:mongoose.Types.ObjectId,ref:'Company'},

});

BankDataSchema.plugin(mongoosePaginate);

const BankData=mongoose.model("bank",BankDataSchema);

export  default  BankData;
