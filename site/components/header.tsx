'use client';

import { CircleEqual, CircleX } from "lucide-react";
import Nav from "./nav";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <header className="global-header">
            <div className="header-row">
                <a href="/">
                    <div className="logo">
                        <h1>Jayden</h1>
                    </div>
                </a>
        
                <button className="nav-opener" onClick={toggleMenu}>
                    {!isOpen ? (
                        <CircleEqual size={28}/>
                    ) : (
                        <CircleX size={28}/>
                    )}
                </button>
            </div>
            <div className="header-row">
                <Nav isOpen={isOpen} toggleMenu={toggleMenu}/>
            </div>
        </header>
    );
}