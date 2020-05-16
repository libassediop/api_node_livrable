import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let corporateNameSchema= new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    WikiLink:{type:String,required:true},
    GLossaryLink:{type:String,required:true},

});

corporateNameSchema.plugin(mongoosePaginate);

const CorporateName=mongoose.model("CorporateName",corporateNameSchema);

export  default  CorporateName;
