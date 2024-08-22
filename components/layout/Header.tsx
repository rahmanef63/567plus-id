// components/layout/Header.tsx

'use client';

import Image from 'next/image'
import React, { useContext } from 'react'
import Toggle from '../common/Toggle';
import { ThemeContext } from '../../context/ThemeContext';  // Pastikan ini mengarah ke ThemeContext Anda
import Link from 'next/link';

const Header = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext must be used within a ThemeProvider');
    }

    const { theme } = themeContext;
    return (
        <header>
            <div className="navbar relative ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm theme-controller dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href="/about">About</Link></li>
                            <li>
                                <Link href="/contact">Contact</Link>
                                <ul className="p-2">
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    {/* Ganti logo berdasarkan tema */}
                    <Link href="/">
                        {theme === 'hitam' ? (
                            <Image src="/567LogoPutih.svg" alt="logo" width={50} height={40} className="md:pl-4" />
                        ) : (
                            <Image src="/567LogoHitam.svg" alt="logo" width={50} height={40} className="md:pl-4" />
                        )}
                    </Link>
                </div>

                <div className="navbar-center theme-controller hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/about">About</Link></li>
                        <li>
                            <details>
                                <summary>
                                    <Link href="/contact">Contact</Link>
                                </summary>
                                <ul className="p-2">
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/cabang">Cabang</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 4</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4 pr-4">
                    <Toggle />
                </div>
            </div>
        </header>
    )
}

export default Header
