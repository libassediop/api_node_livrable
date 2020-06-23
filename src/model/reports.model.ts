
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let reportSchema= new mongoose.Schema({
    Name:{type:String,required:true},
    CreateDate:{type:Date,required:true},
    Activity:{type:String,required:true},
    LastActivityDate:{type:Date,required:true},
    ReportType:{type:mongoose.Types.ObjectId,ref:'ReportType'},
});

reportSchema.plugin(mongoosePaginate);

const Report=mongoose.model("Report",reportSchema);

export  default  Report;


