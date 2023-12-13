import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (


        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="w-full max-w-screen-xl mx-auto container p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-12"
                            width={60}
                            height={60}
                            alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">M4rt1n</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="#about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        
                        <li>
                            <Link href="#contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/Martinvega17" target="_blanck" className="hover:underline">Martin Salvador Vega Perez</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );
};

export default Footer;