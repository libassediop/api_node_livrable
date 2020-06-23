import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let gradeSchema= new mongoose.Schema({
    Type:{type:String,required:true},

});

gradeSchema.plugin(mongoosePaginate);

const Grade=mongoose.model("Grade",gradeSchema);

export  default  Grade;
