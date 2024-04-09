import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	
	const navItems = [
  {
    label: 'Home',
    href: './',
    dropdown: [
      { label: 'Dropdown 1', href: '/blog' },
      { label: 'Dropdown 2', href: '/dropdown2' },
    ],
  },
  {
    label: 'Department',
    href: '/Department',
    dropdown: [
      { label: 'Dropdown 3', href: '/dropdown3' },
      { label: 'Dropdown 4', href: '/dropdown4' },
    ],
		},
  
   {
    label: 'Academics',
    href: '/study',
    dropdown: [
      { label: 'Acedmic Section', href: '/dropdown3' },
		{ label: 'Fee Structure (UG & PG)', href: '/dropdown4' },
		{ label: 'Acedmic Notice', href: '/dropdown4' },
		{ label: 'Acedmic Forms', href: '/dropdown4' },
	  { label: 'Result', href: '/dropdown4' },
    ],
		},
    {
    label: 'Events',
    href: '/blog',
    dropdown: [
      { label: 'Dropdown 3', href: '/dropdown3' },
      { label: 'Dropdown 4', href: '/dropdown4' },
    ],
  },
  // Add more nav items as needed
];

	return (
		<NextUINavbar maxWidth="xl" position="sticky" >
			<NavbarContent className="basis-1/3 sm:basis-full  pt-10" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="http://www.nits.ac.in/">
						<Logo />
						<p className="font-medium text-2xl">NIT SILCHAR</p>
					</NextLink>
				</NavbarBrand>
				
				
				<ul className="hidden lg:flex gap-4 justify-start ml-1">
					
					

					
					
					{navItems.map((item) => (
						<div className="group relative" key={item.href}>
							<NavbarItem>
								<NextLink
									className={clsx(
										linkStyles({ color: "foreground" }),
										"data-[active=true]:text-primary data-[active=true]:font-medium"
									)}
									color="foreground"
									href={item.href}
								>
									{item.label}
								</NextLink>
							</NavbarItem>

							
						    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {item.dropdown.map((dropdownItem) => (
          <NextLink href={dropdownItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            {dropdownItem.label}
			</NextLink>		
		))}
      </div>
    </div>
			</div>
					))}
					
				</ul>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex basis-1/3 pt-5  sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					
					<ThemeSwitch />
				</NavbarItem>
				<br />
				<NavbarItem className="block lg:flex  "></NavbarItem>
				<NavbarItem className="hidden md:flex"></NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
<br />
			
		</NextUINavbar>
	);
};
