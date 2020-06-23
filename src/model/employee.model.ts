import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let employeeSchema= new mongoose.Schema({
    Name:{type:String,required:true},
    FirstName:{type:String,required:true},
    Sex:{type:String,required:true},
    ImageProfile:{type:String,required:false},
    DateBirth:{type:Date,required:false},
    CityBirth:{type:String,required:true},
    State:{type:String,required:true},
    Adress:{type:String,required:true},
    City:{type:String,required:false},
    Zip:{type:String,required:false},
    Nationality:{type:String,required:false},
    Marital:{type:String,required:false},
    Synthesis:{type:String,required:false},
    Rank:{type:String,required:false},
    PhoneContact:{type:String,unique:true, required:false},
    MobileContact:{type:String,required:false},
    Fonction:{type:String,required:false},
    HireDate:{type:Date,required:false},
    AccessCode:{type:String,required:true,unique:true},
   // Compagny:{type:mongoose.Types.ObjectId,ref:'Compagny'},
   // User:{type:mongoose.Types.ObjectId,ref:'User'},
    Account:{type:mongoose.Types.ObjectId,ref:'Account'},
    Contract:{type:mongoose.Types.ObjectId,ref:'Contract'},
    //Privilege:{type:mongoose.Types.ObjectId,ref:'Privilege'},
   // EmployeeCategory:{type:mongoose.Types.ObjectId,ref:'EmployeeCategory'},
});

employeeSchema.plugin(mongoosePaginate);

const Employee=mongoose.model("Employee",employeeSchema);

export  default  Employee;
