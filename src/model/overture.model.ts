import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let ouvertureSchema= new mongoose.Schema({
    Date:{type:Date,required:true},
    OuvertureType:{type:mongoose.Types.ObjectId,ref:'OuvertureType'},
    Company:{type:mongoose.Types.ObjectId,ref:'Company'},

});

ouvertureSchema.plugin(mongoosePaginate);

const Ouverture=mongoose.model("Ouverture",ouvertureSchema);

export  default  Ouverture;
