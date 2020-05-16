import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let bulletinSchema= new mongoose.Schema({
    DateCreate:{type:String,required:true},
    User:{type:mongoose.Types.ObjectId,ref:'User'},
    Compagny:{type:mongoose.Types.ObjectId,ref:'Compagny'},
});

bulletinSchema.plugin(mongoosePaginate);

const Bulletin=mongoose.model("Bulletin",bulletinSchema);

export  default  Bulletin;
