export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-start justify-start gap-1 py- -60 md:py- 0 ">
			<div className="block max-w-full text-start justify-start" >
				{children}
			</div>
		</section>
	);
}
