import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let privilegeSchema= new mongoose.Schema({
    Title:{type:Date,required:true},


});

privilegeSchema.plugin(mongoosePaginate);

const Privilege=mongoose.model("Privilege",privilegeSchema);

export  default  Privilege;
