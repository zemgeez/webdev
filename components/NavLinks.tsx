'use client'
import React from "react";
import { useState } from "react";

const NavLinks = () => {

    const links = [

    { label: 'Institute', menuItems: ['About NIT', 'Administration', 'KeyDocuments', 'Accrediation', 'MenuItem 3'] },
    { label: 'Academics', menuItems: ['Academics', 'Departments', 'Centers of Research', 'Facilities', 'Technical Servise Unit', 'Support Centers'] },
    { label: 'Student', menuItems: ['Peospective Student', '', 'Useul Links', 'Other Links'] },
    { label: 'Faculty Staff', menuItems: ['Prospective Employee', 'Existing Employee', 'Retired Employee'] },
    { label: 'Research', menuItems: ['Publication and Patent', 'Sponsered Projects', 'Consultancy Projects', 'Continuining Education', 'Conference', 'Workshop', 'Seminars'] },
    { label: 'Alumni', menuItems: ['Alumni Relation', 'Transcript', 'Directors Message to Alumni'] }

];



const [isOpen, setIsOpen] = useState(new Array(links.length).fill(false));

const toggleDropdown = (index : number ) => {
  const updatedIsOpen = [...isOpen];
  if(!updatedIsOpen[index]){
    updatedIsOpen.fill(false);
    updatedIsOpen[index] = true;
  }
  else updatedIsOpen[index] = !updatedIsOpen[index];

  setIsOpen(updatedIsOpen);
};


        return (
            <>






<div className="relative mt-4 lg:inline-block lg:mt-0">
        {links.map((Link,index) => (
          <div key={index} className="relative inline-block text-left">
            <button
              onClick={() => toggleDropdown(index)}
              className="text-black font-semibold hover:text-gray-500 mr-8 "
            >
              {Link.label}
            </button>
            {
                isOpen[index] ? 
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md overflow-hidden shadow-xl z-10}">
                        {Link.menuItems.map((menuItem, menuItemIndex) => (
                            <a key={index} href={`#${menuItem}`} className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                            {menuItem}
                            </a>
                        ))}
                    </div>
                    : <></>
            }
            
          </div>
        ))}
      </div>




{/*

<div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow">
          {links.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              {item}
            </a>
          ))}
          <div className="relative mt-4 lg:inline-block lg:mt-0">
            <button
              onClick={toggleDropdown}
              className="text-white font-semibold hover:text-gray-300 mr-4"
            >
              Dropdown
            </button>
            <div className={`absolute right-0 mt-2 w-48 bg-gray-800 rounded-md overflow-hidden shadow-xl z-10 ${isOpen ? 'block' : 'hidden'}`}>
              <a href="#menuitem1" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">MenuItem 1</a>
              <a href="#menuitem2" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">MenuItem 2</a>
              <a href="#menuitem3" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">MenuItem 3</a>
            </div>
          </div>
        </div>
    </div>





          */}







  {/*          {links.map((Link,index) => (
                <div>
                    <div>
                        <h1>{Link}</h1>
                    </div>
                </div>
            )
            
            )}


            */}
            </>


        );

};




export default NavLinks;
