import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let custumerCategorySchema= new mongoose.Schema({
    Category:{type:String,required:true},

});

custumerCategorySchema.plugin(mongoosePaginate);

const CustumerCategory=mongoose.model("CustumerCategory",custumerCategorySchema);

export  default  CustumerCategory;
