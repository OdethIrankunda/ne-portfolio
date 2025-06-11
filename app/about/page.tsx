import PageFooter from "@/components/page-footer";
import Services from "@/components/services";
import ToolsTechs from "@/components/tools-techs";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="rounded-2xl ml-70 md:ml-64 w-screen h-full bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">Hi, I am Odeth Irankunda</h2>
            <h2 className="text-3xl font-bold text-[#ab9b60]">
              Frontend Developer
            </h2>
            <p className="text-muted-foreground">
              Frontend developer and design system specialist focusing on user
              experience and design systems to create user-centered designs in
              SaaS products. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ipsum non vero esse quidem omnis fugiat quo, iste asperiores
              vel corrupti minima minus iure et dignissimos aspernatur unde
              culpa iusto
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, harum. Rerum molestiae quidem hic esse nisi alias
              distinctio consequatur reiciendis sed praesentium et neque autem
              facere molestias repudiandae odit asperiores, ratione fugit,
              nesciunt ab ipsum architecto eius ipsam? Recusandae, vero!
            </p>
          </div>
          <Image width={700} height={700} src="/images/odeth1.png" alt="" />
        </div>
        <Services />
        <ToolsTechs />

        <PageFooter />
      </div>
    </div>
  );
}
