'use client';
import { useState } from "react";
import Link from "next/link";
import Logo from '../imgs/logo.png';
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for toggler

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the menu open or close
    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="nav flex flex-row items-center py-8 px-16 relative">
            {/* Logo */}
            <Image src={Logo} alt="logo" style={{ width: '200px', height: '100%' }} />

            {/* Navigation items for large screens */}
            <ul className={`flex flex-row ml-4 gap-10 text-text cursor-pointer hidden md:flex`}>
                <li>Products</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Blog</li>
            </ul>

            {/* Sign in / Sign up for large screens */}
            <div className="ml-auto hidden md:flex flex-row gap-6 items-center">
                <p>Sign in</p>
                <button style={{ border: '1px solid #8794BA', borderRadius: '64px' }} className="py-2 px-10 hover:bg-pink hover:border-pink  duration-300">Sign up</button>
            </div>

            {/* Toggler for mobile screens */}
            <button className="md:hidden text-2xl ml-auto" onClick={handleToggle}>
                {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <ul className="absolute top-full left-0 w-full bg-blue-950 flex flex-col gap-6 p-8 z-50 items-center">
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                    <li>Blog</li>

                    {/* Sign in / Sign up for mobile screens */}
                    <div className="flex flex-col gap-6 items-center">
                        <p>Sign in</p>
                        <button style={{ border: '1px solid #8794BA', borderRadius: '64px' }} className="py-2 px-10 hover:bg-pink hover:border-pink  duration-300">Sign up</button>
                    </div>
                </ul>
            )}
        </div>
    );
}

export default Nav;
