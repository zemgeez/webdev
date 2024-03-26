import { Accordion, AccordionItem } from "@nextui-org/react"
export default function Accord() {
        const defaultContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  "
    return (<>
        
        
        <Accordion variant="shadow" className="text-md  w-full px-3 py-5 h-full max-h-96 overflow-y-auto bg-transparent">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1 ">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 5">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="6" aria-label="Accordion 6" title="Accordion 6">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="7" aria-label="Accordion 7" title="Accordion 7">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="8" aria-label="Accordion 8" title="Accordion 8">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="9" aria-label="Accordion 9" title="Accordion 9">
                {defaultContent}
            </AccordionItem>
             <AccordionItem key="10" aria-label="Accordion 10" title="Accordion 10">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="11" aria-label="Accordion 11" title="Accordion 11">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="12" aria-label="Accordion 12" title="Accordion 12">
                {defaultContent}
            </AccordionItem>
              
               
        </Accordion>
        </>
    );
}