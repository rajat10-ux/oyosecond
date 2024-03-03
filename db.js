import mongoose from "mongoose";
const URI="mongodb+srv://rajat:rajat12345@project.a4zzfbi.mongodb.net/OYO";
const connectDB=async ()=>{
await mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
});
console.log('db connect ......');
}
export default connectDB;