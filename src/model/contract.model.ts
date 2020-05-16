import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";


let contractSchema= new mongoose.Schema({
    Type:{type:String,required:true},
    Definition:{type:String,required:true},
});

contractSchema.plugin(mongoosePaginate);

const Contract=mongoose.model("Contract",contractSchema);

export  default  Contract;
