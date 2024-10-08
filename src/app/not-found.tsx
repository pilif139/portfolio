import {Metadata } from "next";

export const metadata : Metadata = {
    title: "Filip Kasperski - Error 404",
    description: "Error site of portfolio."
}
export default function NotFound(){
  return (
    <div className="flex flex-col items-center justify-center gap-4 m-auto text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-3xl">Page not found :(</p>
    </div>
  )
}