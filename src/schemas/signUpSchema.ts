import {z} from "zod"

export const usernameValidation =z
    .string()
    .min(2,"Username must of minimun two character")
    .max(20, "must not be more than 20 charecter")
    .regex(/^[a-zA-Z0-9_]+$/,"username must not contain any special charecter ")


export const signUpSchema= z.object({
    username:usernameValidation,
    email:z.string().email({message:"invalid email address"}),
    password:z.string().min(6,{message:"password me of atleast 6 character"})

})