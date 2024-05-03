import hydraUser from "@/app/model/userModel";
import connections from "@/dbconnection/connections";
import { NextResponse } from "next/server";
connections()

export async function POST(data){
    try{
        const reqBody = await data.json()
    
        const {  userName, email, username, password} = reqBody
        console.log(reqBody);
        const user = await hydraUser.findOne({email: email})

    }
    catch(error){
        return NextResponse.json(error)  
    console.log(error)
    }
}
