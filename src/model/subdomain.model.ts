import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let subdomainSchema= new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    WikiLink:{type:String,required:true},
    GlossaryLink:{type:String,required:true},
    Domain:{type:mongoose.Types.ObjectId,ref:'Domain'},
    
});

subdomainSchema.plugin(mongoosePaginate);

const Subdomain=mongoose.model("Subdomain",subdomainSchema);

export  default  Subdomain;
