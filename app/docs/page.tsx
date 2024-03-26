import { title } from "@/components/primitives";
import CardHover from "@/components/hovercard";
import NewCard from "@/components/NewCard";
export default function DocsPage() {
	return (
		<div className="ml-80 mt-20 ">
			<h1 className={title()}>Docs</h1>
			<CardHover /><br/>
			<CardHover /><br/>
			<CardHover /><br/>
			
			
		</div>
	);
}
