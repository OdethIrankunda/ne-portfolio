import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Testimonies() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold pb-4">What Clients Say</h2>
      <div className="flex flex-col gap-4 p-4 border border-muted-foreground rounded-2xl bg-[#F6F4EF] dark:bg-[#15130D]">
        <div className="flex items-center gap-4">
          <Image
            width={300}
            height={300}
            src="/images/3.jpg"
            className="h-16 w-16 rounded-full flex items-center justify-center"
            alt=""
          />
          <div className="">
            Robert Brown
            <p className="text-muted-foreground">Innovatx</p>
          </div>
        </div>
        <p>
          The attention to detail and expertise in design systems are unmatched.
          Our SaaS product now feels more polished than ever.
        </p>
        <div className="flex items-center gap-1 text-yellow-600">
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 border border-muted-foreground rounded-2xl bg-[#F6F4EF] dark:bg-[#15130D]">
        <div className="flex items-center gap-4">
          <Image
            width={300}
            height={300}
            src="/images/4.jpg"
            className="h-16 w-16 rounded-full flex items-center justify-center"
            alt=""
          />
          <div className="">
            Robert Brown
            <p className="text-muted-foreground">Innovatx</p>
          </div>
        </div>
        <p>
          The attention to detail and expertise in design systems are unmatched.
          Our SaaS product now feels more polished than ever.
        </p>
        <div className="flex items-center gap-1 text-yellow-600">
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 border border-muted-foreground rounded-2xl bg-[#F6F4EF] dark:bg-[#15130D]">
        <div className="flex items-center gap-4">
          <Image
            width={300}
            height={300}
            src="/images/5.jpg"
            className="h-16 w-16 rounded-full flex items-center justify-center"
            alt=""
          />
          <div className="">
            Robert Brown
            <p className="text-muted-foreground">Innovatx</p>
          </div>
        </div>
        <p>
          The attention to detail and expertise in design systems are unmatched.
          Our SaaS product now feels more polished than ever.
        </p>
        <div className="flex items-center gap-1 text-yellow-600">
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 border border-muted-foreground rounded-2xl bg-[#F6F4EF] dark:bg-[#15130D]">
        <div className="flex items-center gap-4">
          <Image
            width={300}
            height={300}
            src="/images/3.jpg"
            className="h-16 w-16 rounded-full flex items-center justify-center"
            alt=""
          />
          <div className="">
            Robert Brown
            <p className="text-muted-foreground">Innovatx</p>
          </div>
        </div>
        <p>
          The attention to detail and expertise in design systems are unmatched.
          Our SaaS product now feels more polished than ever.
        </p>
        <div className="flex items-center gap-1 text-yellow-600">
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 border border-muted-foreground rounded-2xl bg-[#F6F4EF] dark:bg-[#15130D]">
        <div className="flex items-center gap-4">
          <Image
            width={300}
            height={300}
            src="/images/6.jpg"
            className="h-16 w-16 rounded-full flex items-center justify-center"
            alt=""
          />
          <div className="">
            Robert Brown
            <p className="text-muted-foreground">Innovatx</p>
          </div>
        </div>
        <p>
          The attention to detail and expertise in design systems are unmatched.
          Our SaaS product now feels more polished than ever.
        </p>
        <div className="flex items-center gap-1 text-yellow-600">
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star />
        </div>
      </div>
    </div>
  );
}
