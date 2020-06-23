import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";


let circularSchema= new mongoose.Schema({

    Title:{type:String,required:true},
    Content:{type:String,required:true},
    Attachement:{type:String,required:true},
    ImageCover:{type:String,required:true},
    DateCreate:{type:Date,required:true},

});

circularSchema.plugin(mongoosePaginate);

const Circular=mongoose.model("Circular",circularSchema);

export  default  Circular;
