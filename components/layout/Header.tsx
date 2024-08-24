'use client';

import Image from 'next/image';
import Toggle from '../common/Toggle';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';
import ClickableWithParticles from '../common/ClickableWithParticles';

const Header = () => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Prevents server-side rendering mismatch
    }

    const currentTheme = theme === 'system' ? resolvedTheme : theme;

    return (
        <header className="sticky top-0 left-0 right-0 z-50">
            <div className={`navbar  z-[1]  shadow ${currentTheme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="{currentTheme === 'dark' ? 'white' : 'black'}"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${currentTheme === 'dark' ? 'bg-black' : 'bg-white'}`}
                        >
                            <ClickableWithParticles  >
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                                <ul className="p-2">
                                        <li>
                                            <Link href="/services">Services</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">Pricing</Link>
                                        </li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                            </ClickableWithParticles>
                        </ul>
                    </div>

                    {/* Ganti logo berdasarkan tema */}
                    <Link href="/">
                        <ClickableWithParticles  >
                            {currentTheme === 'dark' ? (
                                <Image
                                    src="/567LogoPutih.svg"
                                    alt="logo"
                                    width={50}
                                    height={40}
                                    className="md:pl-4"
                                />
                        ) : (
                                    <Image
                                        src="/567LogoHitam.svg"
                                        alt="logo"
                                        width={50}
                                        height={40}
                                        className="md:pl-4"
                                    />
                        )}
                        </ClickableWithParticles>
                    </Link>
                </div>
                <div className="navbar-center theme-controller hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/about">About</Link></li>
                        <li>
                            <details>
                                <summary><Link href="/contact">Contact</Link></summary>
                                <ul className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${currentTheme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/cabang">Cabang</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 4</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4 pr-4">
                    <ClickableWithParticles  >
                    <Toggle />
                    </ClickableWithParticles>
                </div>
            </div>
        </header>
    );
};

export default Header;
