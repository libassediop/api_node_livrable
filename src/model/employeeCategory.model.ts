import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let employeeCategorySchema= new mongoose.Schema({
    category:{type:String,required:true},


});

employeeCategorySchema.plugin(mongoosePaginate);

const EmployeeCategory=mongoose.model("employeeCategory",employeeCategorySchema);

export  default  EmployeeCategory;
