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
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bordered bg-transparent rounded-lg border-black-2",
				input: "text-lg",
			}}
			endContent={
				<Kbd className="hidden lg:block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);
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
    href: '/navitem2',
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
			<NavbarContent className="basis-1/5 sm:basis-full mt-10" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="http://www.nits.ac.in/">
						<Logo />
						<p className="font-bold text-inherit">NIT SILCHAR</p>
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

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex"></NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 block flex-row-reverse gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
