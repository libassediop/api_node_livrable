import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let jobOfferSchema= new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    DateOfStart:{type:String,required:true},
    DateEndt:{type:String,required:true},
    Status:{type:String,required:true},
    Pretest:{type:mongoose.Types.ObjectId,ref:'Pretest'},
    Company:{type:mongoose.Types.ObjectId,ref:'Company'},
    Subdomain:{type:mongoose.Types.ObjectId,ref:'Subdomain'},
});

jobOfferSchema.plugin(mongoosePaginate);

const JobOffer=mongoose.model("JobOffer",jobOfferSchema);

export  default  JobOffer;
