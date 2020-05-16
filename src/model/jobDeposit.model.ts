import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let jobDepositSchema= new mongoose.Schema({
    Date:{type:Date,required:true},
    Status:{type:String,required:true},
    JobOffer:{type:mongoose.Types.ObjectId,ref:'JobOffer'},
    User:{type:mongoose.Types.ObjectId,ref:'User'},
});

jobDepositSchema.plugin(mongoosePaginate);

const JobDeposit=mongoose.model("JobDeposit",jobDepositSchema);

export  default  JobDeposit;
