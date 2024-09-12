export default function Contact(){


    const inputStyle = "rounded-xl p-1.5 focus:outline-none focus:bg-gray-500 focus:placeholder:text-white transition-colors duration-400";
    return (
       <main className="m-auto text-xl flex flex-col items-center gap-4 w-[35vw]">
            <h1 className="text-4xl">Contact Me!</h1>
            <form className="flex flex-col gap-3 w-full">
                <input type="email"
                       className={inputStyle+"w-[70%]"}
                       name="email"
                       placeholder="Your email..."
                       />
                <input type="text"
                       name="subject" 
                       placeholder="Subject..." 
                       className={inputStyle+"w-[70%]"}/>
                <textarea placeholder="Type here..."
                          name="text" 
                          className={inputStyle+ "h-40"}
                          />

            </form>
        </main>
    )
}