import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let jobOffersLogSchema= new mongoose.Schema({
    Activity:{type:String,required:true},
    IpAdress:{type:String,required:true},
    Date:{type:String,required:true},
    JobOffer:{type:mongoose.Types.ObjectId,ref:'JobOffer'},
});

jobOffersLogSchema.plugin(mongoosePaginate);

const JobOffersLog=mongoose.model("JobOffersLog",jobOffersLogSchema);

export  default  JobOffersLog;
