import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let testSchema= new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    Target:{type:String,required:true},
    Course:{type:mongoose.Types.ObjectId,ref:'Company'},
    Subdomain:{type:mongoose.Types.ObjectId,ref:'Subdomain'},
});

testSchema.plugin(mongoosePaginate);

const Test=mongoose.model("Test",testSchema);

export  default  Test;
