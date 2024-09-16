"use server"

import { resend } from "@/utils/resend"

export async function SendEmail(formData : FormData){
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const text = formData.get("text") as string;

    const {data, error} = await resend.emails.send({
      from: "pifilif@gmail.com",
      to: "delivered@resend.dev",
      subject: subject,
      text: text // can refractor to html with react component markdown
    })

    if(error){
        console.error(error)
        return {error: "Something went wrong"}
    }
    console.log(data)
    return {data: "Email sent!"}
}