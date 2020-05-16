import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let overtureTypeSchema= new mongoose.Schema({
    Type:{type:String,required:true},
    Definition:{type:String,required:true},
    
});

overtureTypeSchema.plugin(mongoosePaginate);

const OvertureType=mongoose.model("OvertureType",overtureTypeSchema);

export  default  OvertureType;
