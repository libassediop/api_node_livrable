import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let PretestSchema= new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    Target:{type:String,required:true},
    Subdomain:{type:mongoose.Types.ObjectId,ref:'Subdomain'},
    JobOffer:{type:mongoose.Types.ObjectId,ref:'JobOffer'},

});

PretestSchema.plugin(mongoosePaginate);

const Pretest=mongoose.model("Pretest",PretestSchema);

export  default  Pretest;
