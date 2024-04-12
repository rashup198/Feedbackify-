import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse> {
    try {

        await resend.emails.send({
            from: 'rashup198@gmail.com',
            to: email,
            subject: 'Verification Code',
            react: VerificationEmail({username,otp:verifyCode}),
          });

        return{
            success:false,
            message:"Failed to send the verification email"
        }
        
    } catch (emailErrror) {
        console.error("error sending the verification email",emailErrror);

        return{
            success:false,
            message:"Failed to send the verification email"
        }
        
    }
}