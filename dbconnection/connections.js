import mongoose from 'mongoose'
require('dotenv').config()

const connections = async ()=>{
    mongoose.connect(process.env.URI)
    .then((data)=>{
        console.log("Connected");
    }).catch((err)=>{
        console.log(err);
    })
}

export default connections