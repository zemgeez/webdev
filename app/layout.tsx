
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Footer from "@/components/footer";
import { NavigationMenuDemo } from "@/components/Nav2";

import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';
const Ani = dynamic(() => import('../components/Ani.client'), { ssr: false });

 const sequence = ['National Institute of Technology', 'தேசிய தொழில்நுட்ப நிறுவனம்', 'राष्ट्रीय प्रौद्योगिकी संस्थान', 'ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਆਫ਼ ਟੈਕਨਾਲੋਜੀ'];
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},

	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "voilet" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

  
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
	}) {
	


	return (
    



		
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen  font-sans antialiased bg-amber-900",
					fontSans.variable
				)}
				
			>
				
		 
			
				
				<div className="flex flex-col min-h-screen">
					<p className="flex w-full z-10 relative top-5 justify-start items-center text-white font-light text-5xl px-4"> <a href="/"><Ani text={sequence} /> </a> </p>

    <p className='flex w-full z-10 relative top-10 justify-start items-center text-white font-light text-xl px-4'>An Institute Of National Importence</p>
					<nav className="flex w-full z-10 relative top-20 justify-center items-center ">
						<NavigationMenuDemo />
	</nav>

    <main className="container mx-auto pt-0 px-1 flex-grow">
        {children}
    </main>
<Footer/>
   
</div>
				

   

				
				
			</body>
		</html>
	);
}
