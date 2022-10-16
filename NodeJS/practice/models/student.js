import mongoose from "mongoose";
const studentScema = new mongoose.Schema({
     name:{type:String},
     age:{type:Number},
     fees:{type:mongoose.Decimal128},
     isactive:{type:Boolean},
     comments:{type:String}
})
const studentModel = mongoose.model('student',studentScema);

