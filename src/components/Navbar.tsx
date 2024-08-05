'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/nav-bar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
       
        <MenuItem setActive={setActive} active={active} item="Our Courses"> 
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>

            <HoveredLink href="/guitar">Guitar Fundamentals</HoveredLink> 
            
            <HoveredLink href="/piano">Piano</HoveredLink> 
            
            <HoveredLink href="/vocalist">Vocal</HoveredLink> 
            
            <HoveredLink href="/drumming">Drumming</HoveredLink>

            <HoveredLink href="/jazz">Jazz</HoveredLink>  

            <HoveredLink href="/music">Music Production</HoveredLink> 

            <HoveredLink href="/songwriting">Song Writing</HoveredLink> 
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
        
      </Menu>
    </div>  
  )
}

export default Navbar