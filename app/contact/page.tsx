import PageFooter from "@/components/page-footer";
import React from "react";

export default function Contactpage() {
  return (
    <div>
      <div className="rounded-2xl ml-70 md:ml-64 w-screen h-full bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto py-8 md:py-16">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground pb-4">
            I am always excited to collaborate on innovative and exciting
            projects!
          </p>
          <PageFooter />
          <h2 className="text-3xl font-bold pt-10 md:pt-20">Send a Message </h2>
          <form
            action=""
            className="border border-muted-foreground p-8 rounded-2xl flex flex-col mb-8 md:mb-16 mt-8"
          >
            <label htmlFor="name" className="px-4">
              Name
            </label>
            <input
              type="text"
              className="py-3 bg-[#F6F4EF] dark:bg-[#15130D] border  dar:border-gray-800 rounded-sm mt-2 mb-4 outline-none"
            />
            <label htmlFor="email" className="px-4">
              Email
            </label>
            <input
              type="email"
              className="py-3 bg-[#F6F4EF] dark:bg-[#15130D] border  dar:border-gray-800 rounded-sm mt-2 mb-4 outline-none"
            />
            <label htmlFor="message" className="px-4">
              Message
            </label>
            <input
              type="text"
              className="py-3 bg-[#F6F4EF] dark:bg-[#15130D] border  dar:border-gray-800 rounded-sm mt-2 mb-4 h-20 outline-none"
            />
            <button className="flex items-center justify-center py-3 bg-[#AB9B60] text-white rounded-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
