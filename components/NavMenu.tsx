'use client'
import Link from "next/link";
import React from "react";
import NavLinks from "@/components/NavLinks";


const NavMenu = () => {

        return (

            <nav className=" flex-col bg-white/30 w-full mx-8 ">
                <div className="font-medium ">
                    <ul className="flex uppercase items-center gap-3 font-[poppins] ">
                        <li>
                            <Link href ='/' className="py-7 px-3 incline-block">
                            <img className=" object-cover h-4 w-4 ml-10 " src="./homelg.jpg" alt="" />
                            </Link>
                        </li>
                        
                        <NavLinks/>
                    </ul>

                    
                </div>

            </nav>
    );

}

export default NavMenu;