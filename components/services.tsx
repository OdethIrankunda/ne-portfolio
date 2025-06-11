import { CodeXml, Cookie, Trello } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <div className="py-8 md:py-16 flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Services</h2>
      <div className="flex items-center gap-4 md:gap-8">
        <Cookie className="w-16 h-16 rounded-full p-4 bg-[#f6f4ef] dark:bg-[#15130d]" />
        <div className="flex items-center gap-8 flex-col md:flex-row">
          <p>Product Design</p>
          <div className="h-[1px] w-xl bg-muted-foreground hidden md:block"></div>
          <p className="text-muted-foreground">
            from <span className="text-black dark:text-white">$50</span> per
            hour
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <CodeXml className="w-16 h-16 rounded-full p-4 bg-[#f6f4ef] dark:bg-[#15130d]" />
        <div className="flex items-center gap-8 flex-col md:flex-row">
          <p>Frontend Development</p>
          <div className="h-[1px] w-xl bg-muted-foreground hidden md:block"></div>
          <p className="text-muted-foreground">
            from <span className="text-black dark:text-white">$30</span> per
            hour
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <Trello className="w-16 h-16 rounded-full p-4 bg-[#f6f4ef] dark:bg-[#15130d]" />
        <div className="flex items-center gap-8 flex-col md:flex-row">
          <p>Branding</p>
          <div className="h-[1px] w-xl bg-muted-foreground hidden md:block"></div>
          <p className="text-muted-foreground">
            from <span className="text-black dark:text-white">$30</span> per
            hour
          </p>
        </div>
      </div>
    </div>
  );
}
