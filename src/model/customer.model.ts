import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let customerSchema= new mongoose.Schema({
    Name:{type:String,required:true},
    FistName:{type:String,required:true},
    Sex:{type:String,required:true},
    BirthDate:{type:Date,required:true},
    ImageProfile:{type:String,required:true},
    Adress:{type:String,required:true},
    Zip:{type:String,required:true},
    PhoneNumber:{type:String,required:true},
    MobilePhone:{type:String,required:true},
    Fax:{type:String,required:true},
    Email:{type:String,required:true},
    DateCreate:{type:Date,required:true},
    Status:{type:Date,required:true},
    CorporateName:{type:mongoose.Types.ObjectId,ref:'CorporateName'},
    Company:{type:mongoose.Types.ObjectId,ref:'Company'},
    CustumerCategory:{type:mongoose.Types.ObjectId,ref:'CustumerCategory'},
    CustumerType:{type:mongoose.Types.ObjectId,ref:'CustumerType'},
});

customerSchema.plugin(mongoosePaginate);

const Customer=mongoose.model("Customer",customerSchema);

export  default  Customer;
