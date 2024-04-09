import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Footer from "@/components/footer";

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
					"min-h-screen  font-sans antialiased bg-white",
					fontSans.variable
				)}
			>
				
				
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-full">
						<Navbar />
						
						<main className="container mx-auto max-w-8xl pt-0 px-6 flex-grow bg-white ">
							{children}
						</main>
				
						<footer className="w-full flex items-center justify-center py-3 ">
						<Footer />

						
						</footer>
					</div>
				</Providers>
				
			</body>
		</html>
	);
}
