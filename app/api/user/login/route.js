import hydraUser from "@/app/model/hydraModel";
import connections from "@/dbconnection/connections";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
connections();

export async function POST(data){
    try{
        const reqBody = await data.json();
        console.log(reqBody)
        const { email, password } = reqBody;
        
        const user = await hydraUser.findOne({ email: email });
        
        if (!user) {
            return NextResponse.json({ message: "User not found" });
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid password" });
        }
        
        return NextResponse.json({status:true,  message: "Login successful", user: user });
    } catch(error) {
        console.error(error);
        return NextResponse.json({ message: "Server error" });
    }
}
