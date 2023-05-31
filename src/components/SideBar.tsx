"use client"
import React, { useState } from 'react'
import { useMobileChecker } from "../util";
import Link from 'next/link';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isMobile = useMobileChecker()
    console.log(isMobile)
    return (
        <div className="relative   md:flex" data-dev-hint="container">
            <input type="checkbox" id="menu-open" className="hidden" />
            <label

                htmlFor="menu-open"
                className="absolute right-2 bottom-2  z-[100] shadow-lg rounded-full p-2  text-gray-600 md:hidden"
                data-dev-hint="floating action button"
            >
                {!isOpen ? <svg onClick={() => setIsOpen(!isOpen)}
                    id="menu-open-icon"
                    className="h-6 w-6 transition duration-200 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg> :
                    <svg onClick={() => setIsOpen(!isOpen)}
                        id="menu-close-icon"
                        className="h-6 w-6 transition duration-200 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>}
            </label>
            <header
                className="bg-gray-900 text-gray-100 flex justify-between md:hidden"
                data-dev-hint="mobile menu bar"
            >
                <a
                    href="#"
                    className="block p-4 text-white font-bold whitespace-nowrap truncate"
                >
                    Contact Managment
                </a>
                <label
                    htmlFor="menu-open"
                    id="mobile-menu-button"
                    className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
                >
                    {!isOpen ? <svg onClick={() => setIsOpen(!isOpen)}
                        id="menu-open-icon"
                        className="h-6 w-6 transition duration-200 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg> :
                        <svg onClick={() => setIsOpen(!isOpen)}
                            id="menu-close-icon"
                            className="h-6 w-6 transition duration-200 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>}
                </label>
            </header>
            {!isMobile ?
                <aside
                    id="sidebar"
                    className="bg-gray-800  z-50 min-h-screen text-gray-100 md:w-64   w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
                    data-dev-hint="sidebar; px-0 for frameless;  px-2 for visually inset the navigation"
                >
                    <div
                        className="flex flex-col space-y-6"
                        data-dev-hint="optional div for having an extra footer navigation"
                    >
                        <a
                            href="#"
                            className="text-white flex items-center space-x-2 px-4"
                            title="Contact managment"
                        >

                            <span className="text-2xl font-extrabold  leading-snug text-center">
                                Contact Managment
                            </span>
                        </a>
                        <nav data-dev-hint="main navigation" className='flex flex-col gap-2'>
                            <a
                                href="/"
                                className="flex items-center space-x-3 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                                <span>Overview</span>
                            </a>
                            <a
                                href="/contact-list"
                                className="flex items-center space-x-3 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span className="ml-6">Contact list</span>
                            </a>
                            <a
                                href="/add-contact"
                                className="flex items-center space-x-3 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                                <span>Add contact</span>
                            </a>
                            <a
                                href="/charts"
                                className="flex items-center space-x-3 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>


                                <span>Charts</span>
                            </a>
                        </nav>
                    </div>

                </aside> : isOpen &&
                <aside
                    id="sidebar"
                    className="bg-gray-800 w-screen  z-50 min-h-screen text-gray-100 md:w-64  space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
                    data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
                >
                    <div
                        className="flex flex-col space-y-6"
                        data-dev-hint="optional div for having an extra footer navigation"
                    >
                        <a
                            href="#"
                            className="text-white flex items-center space-x-2 px-4"
                            title="Contact managment"
                        >

                            <span className="text-2xl font-extrabold  leading-snug text-center">
                                Contact Managment
                            </span>
                        </a>
                        <nav data-dev-hint="main navigation" className='flex flex-col gap-2'>
                            <a
                                href="/"
                                className="flex items-center space-x-3 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                                <span>Overview</span>
                            </a>
                            <a
                                href="/contact-list"
                                className="flex items-center space-x-3 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span className="ml-6">Contact list</span>
                            </a>
                            <Link
                                href="/add-contact"
                                className="flex items-center space-x-3 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                                <span>Add contact</span>
                            </Link>
                            <a
                                href="/charts"
                                className="flex items-center space-x-3 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>


                                <span>Charts</span>
                            </a>
                        </nav>
                    </div>

                </aside>}

        </div>

    )
}

export default Navbar