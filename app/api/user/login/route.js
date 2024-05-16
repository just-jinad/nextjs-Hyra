
import hydraModel from "@/app/models/hydramodel";
import connections from "@/dbconnection/connections";
import { NextResponse } from "next/server";
import bcryptjs from "bcrypt"
const jwt = require('jsonwebtoken')
connections();

export async function POST(data){
    try{
        const reqBody = await data.json();
        console.log(reqBody)
        const { email, password } = reqBody;
        
        const user = await hydraModel.findOne({ email: email });
        
        if (!user) {
            return NextResponse.json({ message: "User not found" });
        }
        
        const validPassword = await bcryptjs.compare
        (password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        const token = jwt.sign({email}, "secret", {expiresIn:"4h"})
        console.log(token);
        return NextResponse.json({status:true,  message: "Login successful", user: user });
    } catch(error) {
        console.error(error);
        return NextResponse.json({ message: "Server error" });
    }
}
