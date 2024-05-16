import hydraModel from "@/app/models/hydramodel";
import connections from "@/dbconnection/connections";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
connections();

export async function POST(data) {
  try {
    const reqBody = await data.json();

    const { name, email, userName, password } = reqBody;
    console.log(reqBody);
    const user = await hydraModel.findOne({ email: email });

    if (user) {
      return NextResponse.json({ status: 400, message: "user already exist" });
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new hydraModel({ userName, email, name,  password:hashedPassword });
    const savedUser = await newUser.save();
    if (savedUser) {
      return NextResponse.json({
        status: 200,
        message: "user saved successfully",
      });
    } else {
      return NextResponse.json({ status: 400, message: "not saved" });
    }
  } catch (error) {
    return NextResponse.json(error);
    console.log(error);
  }
}
