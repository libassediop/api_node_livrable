import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let attestationSchema= new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    LastActivityDate:{type:Date,required:true},
    Activity:{type:String,required:true},
    DateCreate:{type:String,required:true},
    AttestationType:{type:mongoose.Types.ObjectId,ref:'AttestationType'},
    User:{type:mongoose.Types.ObjectId,ref:'User'},
    Compagny:{type:mongoose.Types.ObjectId,ref:'Compagny'},
});

attestationSchema.plugin(mongoosePaginate);

const Company=mongoose.model("Attestation",attestationSchema);

export  default  Attestation;
