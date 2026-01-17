import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-accent text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Column 1: Brand */}
                <div className="flex flex-col gap-6">
                    <span className="text-4xl font-bold font-display tracking-tight">CMRE</span>
                    <p className="text-[15px] font-semibold leading-relaxed opacity-90">
                        A fintech real estate and finance agency for individuals and businesses.
                        Providing innovative capital solutions for a changing world.
                    </p>
                    <div className="flex gap-4 items-center">
                        <a href="#" className="hover:opacity-75 transition-opacity"><Facebook size={20} /></a>
                        <a href="#" className="hover:opacity-75 transition-opacity"><Twitter size={20} /></a>
                        <a href="#" className="hover:opacity-75 transition-opacity"><Linkedin size={20} /></a>
                        <a href="#" className="hover:opacity-75 transition-opacity"><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-xl font-bold font-display mb-6 tracking-wide">Quick Links</h4>
                    <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider">
                        <li><Link href="/about" className="hover:underline underline-offset-4">About Us</Link></li>
                        <li><Link href="/residential" className="hover:underline underline-offset-4">Residential Loan</Link></li>
                        <li><Link href="/commercial" className="hover:underline underline-offset-4">Commercial Loan</Link></li>
                        <li><Link href="/testimonials" className="hover:underline underline-offset-4">Testimonial</Link></li>
                        <li><Link href="/updates" className="hover:underline underline-offset-4">Loan Updates</Link></li>
                        <li><Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Information */}
                <div>
                    <h4 className="text-xl font-bold font-display mb-6 tracking-wide">Information</h4>
                    <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider">
                        <li><Link href="/disclaimer" className="hover:underline underline-offset-4">Disclaimer</Link></li>
                        <li><Link href="/support" className="hover:underline underline-offset-4">Support</Link></li>
                        <li><Link href="/faq" className="hover:underline underline-offset-4">FAQ</Link></li>
                        <li><Link href="/terms" className="hover:underline underline-offset-4">Terms Of Service</Link></li>
                        <li><Link href="/privacy" className="hover:underline underline-offset-4">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Column 4: Compliance */}
                <div>
                    <h4 className="text-xl font-bold font-display mb-6 tracking-wide">Compliance</h4>
                    <div className="flex flex-col gap-4 text-xs font-semibold uppercase opacity-90 leading-tight">
                        <p>NMLS CONSUMER ACCESS #352345</p>
                        <p>DFPI LICENSE #123456789</p>
                        <div className="flex items-center gap-2 mt-2">
                            <img src="/equal-housing.png" alt="Equal Housing Lender" className="h-8 invert opacity-80" />
                            <span>Equal Housing Lender</span>
                        </div>
                        <p className="mt-4 opacity-75">
                            Copyright © 2024 Custom Mortgage & Real Estate. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
