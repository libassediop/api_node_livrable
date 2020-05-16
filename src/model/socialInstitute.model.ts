import  mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let socialInstitutSchema= new mongoose.Schema({
    Name:{type:String,required:true},
    Logo:{type:String,required:true},
    Adress:{type:String,required:true},
    State:{type:String,required:true},
    City:{type:String,required:true},
    PhoneNumber:{type:String,required:true},
    Fax:{type:String,required:true},
    Email:{type:String,required:true},
    Website:{type:String,required:true},
});

socialInstitutSchema.plugin(mongoosePaginate);

const SocialInstitut=mongoose.model("SocialInstitut",socialInstitutSchema);

export  default  SocialInstitut;
