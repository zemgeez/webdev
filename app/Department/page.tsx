'use client'
import React from "react"
import NavMenu from "@/components/NavMenu";
import NavLinks from "@/components/NavLinks";
import MediaC from "@/components/MediaC";
import MCover from "@/components/MCover";
import BasicExample from "@/components/CmOne";
import LastDiv from "@/components/LastDiv";

export default function DepartmentPage(){
    return( 
        <>
        <div className=" grid grid-rows-3">



        <div><NavMenu/></div>
       
{/* <div className="bg-white "><BasicExample/></div> */}
        

<div>
<LastDiv/>
</div>

<div>
<MediaC/>
</div>
<div>
<MCover/>
</div>


        </div>
       
       

       
        

        

        </>
    );
}