import Blog from "@/components/blog";
import Hero from "@/components/hero";
import PageFooter from "@/components/page-footer";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonies from "@/components/testimonies";
import React from "react";

export default function page() {
  return (
    <div className="rounded-2xl ml-70 md:ml-64 w-screen h-full bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <Hero />
        <Projects />
        <Services />
        <Testimonies />
        <Blog />
        <PageFooter />
      </div>
    </div>
  );
}
