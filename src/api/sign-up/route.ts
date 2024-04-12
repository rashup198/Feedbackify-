import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/helpers/sendVerification";


export async function POST(request:Request) {
    await dbConnect();

    try {
        const {username,email,password}= await request.json()
        await
        
    } catch (error) {
        console.error("Error registring the user");
        return Response.json({
            success:false,
            message:"Error registering the user"
        },
        {
            status:500
        }
    )
        
    }
}