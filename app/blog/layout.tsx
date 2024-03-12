export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-start justify-start gap-4 mr-3 py-8 md:py-10 ">
			<div className="block max-w-lg text-start justify-start">
				{children}
			</div>
		</section>
	);
}
