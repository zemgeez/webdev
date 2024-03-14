import { title } from "@/components/primitives";
import CardHover from "@/components/hovercard";

export default function DocsPage() {
	return (
		<div className="flex justify-end">
			<h1 className={title()}>Docs</h1>
			<CardHover/>
		</div>
	);
}
