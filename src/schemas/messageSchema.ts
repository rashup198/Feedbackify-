import { Content } from "next/font/google"
import {z} from "zod"

export const MessageSchema= z.object({
    content:z.string()
    .min(10,{message:"content must be of atleast 10 characters"})
    .max(300, {message:"content must not be of longer than 300 characters"})
    
})