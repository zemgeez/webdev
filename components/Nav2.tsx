"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import next from "next"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Welcome to NIT",
    href: "/home/gallery",
    description:
      "Welcome to the National Institute of Technology, Kurukshetra.",
  },
  {
    title: "Vision and Mission",
    href: "/home",
    description:
      "The Vision and Mission of the National Institute of Technology, Kurukshetra.",
  },
  {
    title: "Ranking and Recognition",
    href: "/home/ranking",
    description:
      "NIRF Ranking and other recognition of the National Institute of Technology",
  },
  {
    title: "Campus Map",
    href: "/home/map",
    description: "Visually explore the Campus of the University.",
  },
  {
    title: "Former Directors",
    href: "/home/directors",
    description:
      "The list of Former Directors of the National Institute of Technology, Kurukshetra.",
  },
  {
    title: "Campus and Faculity",
    href: "/home/campus",
    description:
      " The Campus and Faculity of the National Institute of Technology, Kurukshetra.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu >
      <NavigationMenuList className="bg-white">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light text-xl space-x-2">Academic</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
          
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Adsmissions
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Dates On Addmissions in the University.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/acd/pgm" title="Academic Programmes">
                A List of Academic Programme Available.
              </ListItem>
              <ListItem href="/acd/cln" title="Academic Calander">
              University Academic Calander.
              </ListItem>
              <ListItem href="/acd/tt" title="Time Table">
                Time Table for Current Session.
              </ListItem>
            </ul>
          </NavigationMenuContent >
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light text-xl space-x-2">Institute</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light text-xl space-x-2">Student</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem href="student/rules" title="Rules and Regulation">
                The rules and regulation of the University.
              </ListItem>
              <ListItem href="student/fee" title="Fees">
                Submitting fees and other charges.
              </ListItem>
              <ListItem href="/student/calander" title="Academic Calander">
                The Academic Calander of the University.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light text-xl space-x-2" >Department</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem href="department/it" title="Information Technology">
                The Department of Information Technology.
              </ListItem>
              <ListItem href="department/cse" title="Computer Science">
                The Department of Computer Science.
              </ListItem>
              <ListItem href="department/ee" title="Electrical Engineering">
                The Department of Electrical Engineering.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-light text-xl space-x-2">Research</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem href="research/pnp" title=" Publication & Patent">
                <p>
                Publication and Patent </p> 
              </ListItem>
              <ListItem href="research/sp" title="Sponsered Project">
                Sponsers.
              </ListItem>
              <ListItem href="research/cp" title=" Consultancy Projects">
                Consultancy Projects .
              </ListItem>
              <ListItem href="research/cc" title="Confrences">
                Confrences .
              </ListItem>
              <ListItem href="research/ws" title=" Workshops">
                Workshops.
              </ListItem>
              <ListItem href="research/se" title="Seminar">
                Seminar .
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
