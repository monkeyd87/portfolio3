
import { connectDB } from "@/lib/mongoose";
import { Message } from "@/models/Message";


export async function GET(req:Request,{params}:{params:Promise<{id:string}>}) {
    try{
        const conn = await connectDB()
        const {id} = await params
        console.log(id)
        const message = await Message.findById(id)
        if(!message) return Response.json({message:'message not found'},{status:400})
       return Response.json(message,{status:200})

    }catch(err){
        console.log(err)
        return Response.json({message:'server error'},{status:500})
    }
}

export async function DELETE(req:Request,{params}:{params:Promise<{id:string}>}) {
    try{
        const conn = await connectDB()
        const {id} = await params
        console.log(id)
        const message = await Message.findByIdAndDelete(id)
        if(!message) return Response.json({message:'message not found'},{status:400})
       return Response.json(message,{status:200})

    }catch(err){
        console.log(err)
        return Response.json({message:'server error'},{status:500})
    }
}