import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";


let bankSchema= new mongoose.Schema({
    Name:{type:String,required:true},
    Logo:{type:String,required:true},
    SwiftCode:{type:String,required:true},
    Bankcode:{type:String,required:true},
    BranchCode:{type:Date,required:true},

});

bankSchema.plugin(mongoosePaginate);

const Bank=mongoose.model("bank",bankSchema);

export  default  Bank;
