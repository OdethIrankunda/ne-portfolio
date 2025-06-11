import PageFooter from "@/components/page-footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const projects = [
    {
      image: "/images/1.png",
      date: "2025",
      title: "ItCompany Website",
      href: "itcompanyodeth.netlify.app",
    },
    {
      image: "/images/tt.png",
      date: "2025",
      title: "TotalEnergies Website clone",
      href: "https://totalenergies-eight.vercel.app/",
    },
    {
      image: "/images/qz.png",
      date: "2024",
      title: "Quiz app",
      href: "quizappodeth.netlify.app",
    },
    {
      image: "/images/opn.png",
      date: "2025",
      title: "OPNM website clone",
      href: "adorable-queijadas-85b0d8.netlify.app",
    },
    {
      image: "/images/2.png",
      date: "2025",
      title: "SAAS Business Website",
      href: "wondrous-kleicha-a890fc.netlify.app",
    },
  ];
  return (
    <div className="rounded-2xl ml-70 md:ml-64 w-screen h-full bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto py-8 md:py-16">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-muted-foreground pb-4">
          Explore cutting-edge design innovations that transform ideas into
          reality
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pb-16 md:pb-32">
          {projects.map((project) => {
            return (
              <Link
                key={project.title}
                href={project.href}
                className="flex flex-col gap-2 rounded-2xl"
              >
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  className="rounded-2xl"
                  alt=""
                />
                <p className="font-semibold px-4">{project.title}</p>
                <p className="px-4 text-muted-foreground font-semibold">
                  {project.date}
                </p>
              </Link>
            );
          })}
        </div>

        <PageFooter />
      </div>
    </div>
  );
}
