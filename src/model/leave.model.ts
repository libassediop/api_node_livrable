import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let leaveSchema= new mongoose.Schema({
    DateStart:{type:String,required:true},
    DateEnd:{type:String,required:true},
    LeaveType:{type:mongoose.Types.ObjectId,ref:'LeaveType'},
    Company:{type:mongoose.Types.ObjectId,ref:'Company'},

});

leaveSchema.plugin(mongoosePaginate);

const Leave=mongoose.model("Leave",leaveSchema);

export  default  Leave;
