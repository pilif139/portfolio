import {SendEmail} from "@/app/contact/sendEmail";
import { notFound } from "next/navigation";

export default function Contact(){

    //not finished yet
    if(process.env.APP_ENV!=="development"){
      notFound();
    }

    const inputStyle = "rounded-xl p-1.5 focus:outline-none bg-gray-500 placeholder:text-white focus:bg-gray-700 focus:placeholder:text-gray-300 transition-colors duration-400";

    return (
       <main className="m-auto text-xl flex flex-col items-center gap-4 w-[40vw]">
            <h1 className="text-4xl">Contact Me!</h1>
            <form className="flex flex-col gap-3 w-full" action={SendEmail}>
              <div className="flex gap-4">
                <input type="email"
                       className={inputStyle + " w-[50%]"}
                       name="email"
                       placeholder="Your email..."
                />
                <input type="text"
                       name="subject"
                       placeholder="Subject..."
                       className={inputStyle + " w-[50%]"}/>
              </div>
              <textarea placeholder="Type here..."
                        name="text"
                        className={inputStyle + " h-36"}
              />
              <button type="submit" className="mr-auto bg-gray-800 px-8 py-2 text-2xl rounded-xl">Send</button>
            </form>
       </main>
    )
}