import {Mails, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 py-8 md:py-16">
      <h2 className="text-3xl font-bold">Hi, I am Odeth Irankunda</h2>
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold text-[#ab9b60]">
          Frontend Developer
        </h2>
        <button className="flex items-center gap-2 px-4 py-2 border border-muted-foreground rounded-lg">
          <MapPin/>
          Uganda
        </button>
      </div>
      <p className="text-muted-foreground">
        Frontend developer and design system specialist focusing on user
        experience and design systems to create user-centered designs in SaaS
        products.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/about"
          className=" px-4 py-2 bg-[#ab9b60] rounded-lg text-white"
        >
          About
        </Link>
        <button className="flex items-center gap-2 px-4 py-2 border border-muted-foreground rounded-lg ">
          <Mails />
          Copy mail
        </button>
      </div>
    </div>
  );
}
