import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <div className="py-8 md:py-16">
      <div className="flex items-center justify-between flex-col md:flex-row">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <Link
          href="/projects"
          className="text-[#ab9b60] flex items-centergap-3"
        >
          View All
          <ChevronRight />
        </Link>
      </div>
      <div className="flex items-center gap-4 flex-col md:flex-row pt-8">
        <Link
          href="itcompanyodeth.netlify.app"
          className="flex flex-col gap-2 rounded-2xl"
        >
          <Image
            width={500}
            height={500}
            src="/images/1.png"
            className="rounded-2xl"
            alt=""
          />
          <p className="font-semibold px-4">ItCompany Website</p>
          <p className="px-4 text-muted-foreground font-semibold">2025</p>
        </Link>
        <Link
          href="wondrous-kleicha-a890fc.netlify.app"
          className="flex flex-col gap-2 rounded-2xl"
        >
          <Image
            width={500}
            height={500}
            src="/images/2.png"
            className="rounded-2xl"
            alt=""
          />
          <p className="font-semibold px-4">Businesss Website</p>
          <p className="text-muted-foreground font-semibold px-4">2025</p>
        </Link>
      </div>
    </div>
  );
}
