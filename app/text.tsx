import { Textarea } from "@nextui-org/react";
export default function Text() {
  return (
    <div>
      	 <Textarea 
      variant="underlined"
      value={"A Institute of National Importance under Ministry of Education, Government of India"}
        className="flex flex-col h-screen justify-end"
        data-hover color="secondary"
        
></Textarea>
    </div>
  );
}