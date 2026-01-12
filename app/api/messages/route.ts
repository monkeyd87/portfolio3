import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import { Message } from "@/models/Message";


export async function GET() {
  try{
    const conn = await connectDB();
    console.log("Connected to:", Message.db.name);
    const messages =  await Message.find().lean()
    if( messages.length === 0) return NextResponse.json({message:'no message found'})
  
  
    return NextResponse.json(messages);

  }catch(err){
    console.log(err)
    return NextResponse.json({messae:'server error'})
  }
}


export async function POST(req:Request) {
  try{
    const conn = await connectDB()
    console.log("Connected to:", Message.db.name);
    const body = await req.json();
    console.log(body)
    const {name,title,message} = body
    const data = await Message.create({name,title,message})

    return NextResponse.json({data},{status:200})

  }catch(err){
    console.log(err)
      return NextResponse.json({message:'server error'},{status:500})
  }
}