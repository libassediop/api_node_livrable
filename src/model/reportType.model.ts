import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let reportTypeSchema= new mongoose.Schema({
    ReportType:{type:String,required:true},

});

reportTypeSchema.plugin(mongoosePaginate);

const ReportType=mongoose.model("ReportType",reportTypeSchema);

export  default  ReportType;
