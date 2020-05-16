import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let chapterSchema= new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    Attachement:{type:String,required:true},
    ImageCover:{type:String,required:true},
    Duration:{type:String,required:true},
    Courses:{type:mongoose.Types.ObjectId,ref:'Courses'},

});

chapterSchema.plugin(mongoosePaginate);

const Chapter=mongoose.model("Chapter",chapterSchema);

export  default  Chapter;
