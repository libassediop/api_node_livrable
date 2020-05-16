import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let companySchema= new mongoose.Schema({
    Name:{type:String,required:true},
    About:{type:String,required:true},
    Logo:{type:String,required:true},
    Adress:{type:String,required:true},
    State:{type:String,required:true},
    City:{type:String,required:true},
    Zip:{type:String,required:true},
    PhoneNumber:{type:String,required:true},
    Fax:{type:String,required:true},
    Email:{type:String,required:true},
    Website:{type:String,required:true},
    OfficePhone:{type:String,required:true},
    OfficeFax:{type:String,required:true},
    FacebookLink:{type:String,required:true},
    LinkdimLink:{type:String,required:true},
    Status:{type:Boolean,required:true},
    CorporateName:{type:mongoose.Types.ObjectId,ref:'CorporateName'},
    SubscriptionPacck:{type:mongoose.Types.ObjectId,ref:'SubscriptionPacck'},
    Reports:{type:mongoose.Types.ObjectId,ref:'Reports'},
    Domain:{type:mongoose.Types.ObjectId,ref:'Reports'},
});

companySchema.plugin(mongoosePaginate);

const Company=mongoose.model("Company",companySchema);

export  default  Company;
