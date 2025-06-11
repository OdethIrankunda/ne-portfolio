import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Blog() {
  return (
    <div className="py-8 md:py-16" id="blog">
      <h2 className="text-3xl font-bold py-8">What Clients Say</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 md:w-[70%]">
          <p className="text-muted-foreground">21/06/2025</p>
          <h2 className="text-2xl font-semibold">
            How AI is Transforming Software Development
          </h2>
          <hr />
          <div className="flex gap-2 items-center text-[#AB9B60]">
            Read
            <ChevronRight />
          </div>
        </div>
        <Image
          width={400}
          height={300}
          src="/images/8.webp"
          className="rounded-2xl object-cover md:w-[30%] h-full"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 md:w-[70%]">
          <p className="text-muted-foreground">10/06/2025</p>
          <h2 className="text-2xl font-semibold">
            The Future of JavaScript: What is New in ES2025?
          </h2>
          <hr />
          <div className="flex gap-2 items-center text-[#AB9B60]">
            Read
            <ChevronRight />
          </div>
        </div>
        <Image
          width={400}
          height={300}
          src="/images/7.webp"
          className="rounded-2xl md:w-[30%] h-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 md:w-[70%]">
          <p className="text-muted-foreground">23/06/2025</p>
          <h2 className="text-2xl font-semibold">
            Top 5 Programming Languages for 2024
          </h2>
          <hr />
          <div className="flex gap-2 items-center text-[#AB9B60]">
            Read
            <ChevronRight />
          </div>
        </div>
        <Image
          width={400}
          height={300}
          src="/images/7.webp"
          className="rounded-2xl md:w-[30%] object-cover h-full"
          alt=""
        />
      </div>
    </div>
  );
}
