import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let meetingSchema= new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    Attachement:{type:String,required:true},
    Location:{type:String,required:true},
    Programmation:{type:String,required:true},
    Status:{type:Boolean,required:true},
});

meetingSchema.plugin(mongoosePaginate);

const Meeting=mongoose.model("meeting",meetingSchema);

export  default  Meeting;
