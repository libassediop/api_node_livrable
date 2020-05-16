import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let leaveTypeSchema= new mongoose.Schema({
    Type:{type:String,required:true},
    Definition:{type:String,required:true},

});

leaveTypeSchema.plugin(mongoosePaginate);

const LeaveType=mongoose.model("LeaveType",leaveTypeSchema);

export  default  LeaveType;
