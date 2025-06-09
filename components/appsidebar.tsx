"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  Home,
  Linkedin,
  Moon,
  PanelsTopLeft,
  ShoppingCart,
  Sun,
  User,
  UserPen,
  Wifi,
  X,
  Youtube,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

const items = [
  {
    title: "Home Page",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: PanelsTopLeft,
  },
  {
    title: "Store",
    url: "/store",
    icon: ShoppingCart,
  },
  {
    title: "About",
    url: "/about",
    icon: User,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: Wifi,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: UserPen,
  },
];
const socialMediaHandles = [
  {
    title: "Twitter",
    url: "#",
    icon: X,
  },
  {
    title: "LinkedIn",
    url: "#",
    icon: Linkedin,
  },
  {
    title: "Youtube",
    url: "#",
    icon: Youtube,
  },
];

export default function AppSidebar() {
  const { setTheme } = useTheme();
  return (
    <div className="font-medium">
      <Sidebar>
        <SidebarHeader className="pt-8 pl-8">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/images/odeth1.png" />
              <AvatarFallback>IO</AvatarFallback>
            </Avatar>
            <div className="font-semibold">
              <h2>Odeth Irankunda</h2>
              <p className="text-muted-foreground">Frontend Webdeveloper</p>
            </div>
          </div>
        </SidebarHeader>
        <Separator />

        <ScrollArea className="h-[70%] w-full p-4">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon className="text-muted-foreground active:bg-white dark:active:bg-black" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel className="text-muted-foreground">
                SOCIAL
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {socialMediaHandles.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon className="text-muted-foreground" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </ScrollArea>

        <SidebarFooter>
          <Button
            className="dark:hidden"
            variant="outline"
            onClick={() => setTheme("dark")}
            size="icon"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />

            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            className="hidden dark:flex items-center justify-center"
            variant="outline"
            onClick={() => setTheme("light")}
            size="icon"
          >
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
