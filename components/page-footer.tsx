import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PageFooter() {
  return (
    <div className="flex flex-col gap-8 p-8 border border-muted-foreground rounded-2xl">
      <h2 className="text-3xl font-bold pb-4">Got Questions?</h2>
      <p className="text-muted-foreground">
        I am always excited to collaborate on innovative and exciting projects!
      </p>
      <div className="flex items-center gap-16">
        <div className="flex gap-4 items-center">
          <Mail className="w-16 h-16 p-4 rounded-full bg-[#F6F4EF] dark:bg-[#15130D]" />
          <div className="">
            <p className="text-muted-foreground">E-mail</p>
            <Link href="#">contact@example.com</Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Phone className="w-16 h-16 p-4 rounded-full bg-[#F6F4EF] dark:bg-[#15130D]" />
          <div className="">
            <p className="text-muted-foreground">Phone</p>
            <Link href="#">+231-456723485</Link>
          </div>
        </div>
      </div>
      <Link
        href=""
        className="px-4 py-2 border border-muted-foreground rounded-xl w-40"
      >
        Schedule a call
      </Link>
    </div>
  );
}
