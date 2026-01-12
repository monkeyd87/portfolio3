import {Schema,model,models} from 'mongoose'

const messageSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
    },
    message:{
        type:String,
        required:true
    }

},{
    toJSON:{
        virtuals:true
    },
    id:false
})

export const Message = models.Message || model("Message", messageSchema);
  