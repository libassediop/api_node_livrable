import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let userSchema= new mongoose.Schema({
    Name:{type:String,required:true},
    FirstName:{type:String,required:false},
    Sex:{type:String,required:false},
    ImageProfile:{type:String,required:false},
    DateBirth:{type:Date,required:false},
    CityBirth:{type:String,required:false},
    State:{type:String,required:false},
    Adress:{type:String,required:false},
    City:{type:String,required:false},
    Zip:{type:String,required:false},
    Nationality:{type:String,required:false},
    Marital:{type:String,required:false},
    Synthesis:{type:String,required:false},
    Rank:{type:String,required:false},
    PhoneContact:{type:String,unique:true, required:false},
    MobileContact:{type:String,required:false},
    WhatsappNumber:{type:String,required:false},
    FacebookLink:{type:String,required:false},
    LinkdinLink:{type:String,required:false},
    Compagny:{type:mongoose.Types.ObjectId,ref:'Compagny',required:false},
    Account:{type:mongoose.Types.ObjectId,ref:'Account',required:false},
    Degree:{type:mongoose.Types.ObjectId,ref:'Degree',required:false},
    Pratice:{type:mongoose.Types.ObjectId,ref:'Pratice',required:false},
    SubscriptionPack:{type:mongoose.Types.ObjectId,ref:'SubscriptionPack',required:false},
    Grade:{type:mongoose.Types.ObjectId,ref:'Grade',required:false},
});

userSchema.plugin(mongoosePaginate);

const User=mongoose.model("User",userSchema);

export  default  User;
