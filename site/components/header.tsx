'use client';

import { CircleEqual, CircleX } from "lucide-react";
import { useState } from "react";
import Nav from "./nav";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
        <header className="global-header">
            <a href="/">
                <div className="logo">
                    <span>jdn.dev</span>
                </div>
            </a>
    
            <button className="nav-opener" onClick={toggleMenu}>
                {!isOpen ? (
                    <CircleEqual size={28} strokeWidth={1.5}/>
                ) : (
                    <CircleX size={28} strokeWidth={1.5}/>
                )}
            </button>
        </header>
        <Nav isOpen={isOpen}/>
        </>
    );
}