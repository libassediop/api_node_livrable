import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let planningLogSchema= new mongoose.Schema({
    JobOffer:{type:mongoose.Types.ObjectId,ref:'JobOffer'},
    Meeting:{type:mongoose.Types.ObjectId,ref:'Meeting'},
});

planningLogSchema.plugin(mongoosePaginate);

const PlanningLog=mongoose.model("PlanningLog",planningLogSchema);

export  default  PlanningLog;
