export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-start justify-start gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-start">
				{children}
			</div>
		</section>
	);
}
