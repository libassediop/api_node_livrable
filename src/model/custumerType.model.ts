import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let custumerTypeSchema= new mongoose.Schema({
    Type:{type:String,required:true},

});

custumerTypeSchema.plugin(mongoosePaginate);

const CustumerType=mongoose.model("CustumerType",custumerTypeSchema);

export  default  CustumerType;
