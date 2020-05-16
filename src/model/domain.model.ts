import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let domainSchema= new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    WikiLink:{type:String,required:true},
    GlossaryLink:{type:String,required:true},

});

domainSchema.plugin(mongoosePaginate);

const Domain=mongoose.model("Domain",domainSchema);

export  default  Domain;
