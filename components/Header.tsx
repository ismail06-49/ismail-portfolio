'use client';

import { useState, useEffect } from "react";
import { Code2, FolderCode, House, Info, Mail, Settings2 } from "lucide-react";
import Link from "next/link";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled past the "home" section
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav
            className={`${
            isScrolled
                ? "fixed top-0 right-1/2 translate-x-1/2 w-fit bg-[var(--card)]/10 shadow-lg rounded-lg z-50 justify-center"
                : "fixed top-6 right-1/2 translate-x-1/2 w-fit sm:w-[80%] bg-[var(--card)]/10 shadow-lg rounded-lg justify-between"
            } flex items-center p-4 animate-slide-in-left transition-all duration-300`}
        >
            <Code2  className={`${isScrolled ? 'hidden' : 'hidden sm:block'} text-[var(--primary)] animate-fade-in size-15`} />
            <ul className="flex space-x-10 text-[var(--foreground)] text-lg font-medium">
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#home'>
                        <House className={`${isScrolled ? 'block' : 'block md:hidden'}`} />
                        <span className={`${isScrolled ? 'hidden' : 'hidden md:block'}`}>Home</span>
                    </Link>
                </li>
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#about'>
                        <Info className={`${isScrolled ? 'block' : 'block md:hidden'}`} />
                        <span className={`${isScrolled ? 'hidden' : 'hidden md:block'}`}>About Me</span>
                    </Link>
                </li>
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#projects'>
                        <FolderCode className={`${isScrolled ? 'block' : 'block md:hidden'}`} />
                        <span className={`${isScrolled ? 'hidden' : 'hidden md:block'}`}>Projects</span>
                    </Link>
                </li>
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#skills'>
                        <Settings2 className={`${isScrolled ? 'block' : 'block md:hidden'}`} />
                        <span className={`${isScrolled ? 'hidden' : 'hidden md:block'}`}>Skills</span>
                    </Link>
                </li>
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#contact'>
                        <Mail className={`${isScrolled ? 'block' : 'block md:hidden'}`} />
                        <span className={`${isScrolled ? 'hidden' : 'hidden md:block'}`}>Contact Me</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
