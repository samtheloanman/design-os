"use client";

import Link from "next/link";
import { Phone, User, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full flex flex-col">
            {/* Top Utility Bar */}
            <div className="bg-accent py-2 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-white text-xs sm:text-sm font-bold tracking-wider">
                    <div className="flex items-center gap-4">
                        <a href="tel:877-976-5669" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Phone size={14} />
                            <span>877-976-5669</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/sign-in" className="flex items-center gap-2 hover:opacity-80 transition-opacity uppercase">
                            <User size={14} />
                            <span>Sign In</span>
                        </Link>
                        <Link href="/apply-now" className="hover:opacity-80 transition-opacity uppercase bg-white text-accent px-3 py-1 rounded-sm">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white border-b border-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-3xl font-bold text-primary tracking-tighter font-display">
                                CMRE
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8 text-[15px] font-bold text-primary uppercase tracking-wide">
                            <Link href="/residential" className="hover:text-accent transition-colors">Residential Mortgage</Link>
                            <Link href="/commercial" className="hover:text-accent transition-colors">Commercial Mortgage</Link>
                            <Link href="/non-qm" className="hover:text-accent transition-colors">NonQM Stated No Income</Link>
                            <Link href="/hard-money" className="hover:text-accent transition-colors">Hard Money Mortgage Loans</Link>
                            <Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
                        </div>

                        {/* CTA */}
                        <div className="hidden lg:block">
                            <button className="bg-accent text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-primary transition-all rounded-sm shadow-sm">
                                Request Call Back
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <button className="text-primary p-2">
                                <Search size={24} />
                            </button>
                            <button
                                className="text-primary p-2"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <Menu size={28} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar (Simplified) */}
                {isMenuOpen && (
                    <div className="lg:hidden fixed inset-0 z-50 bg-white">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-2xl font-bold text-primary font-display">CMRE</span>
                                <button onClick={() => setIsMenuOpen(false)} className="text-primary text-3xl">&times;</button>
                            </div>
                            <div className="flex flex-col gap-6 text-xl font-bold text-primary uppercase">
                                <Link href="/residential" onClick={() => setIsMenuOpen(false)}>Residential Mortgage</Link>
                                <Link href="/commercial" onClick={() => setIsMenuOpen(false)}>Commercial Mortgage</Link>
                                <Link href="/non-qm" onClick={() => setIsMenuOpen(false)}>NonQM Stated No Income</Link>
                                <Link href="/hard-money" onClick={() => setIsMenuOpen(false)}>Hard Money Mortgage Loans</Link>
                                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
