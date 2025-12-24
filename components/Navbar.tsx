"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className='sticky top-0 z-50  bg-white/90 dark:bg-slate-900/95 border-slate-100 dark:border-slate-800'>
            <div className='max-w-300 mx-auto px-4 md:px-10 py-2 md:py-4 flex justify-between'>
                <div className='flex space-x-3'>
                    <Image src={'/assets/gentle-technical-services-top-logo-transparent.png'}
                        width={64}
                        height={64}
                        alt='The Main Logo' />

                    <div className='flex flex-col'>
                        <span className='text-xl font-bold text-primary'>GENTLE </span>
                        <span className='text-[11px] text-slate-500 font-bold uppercase mt-1 tracking-[0.2em] '>TECHNICAL SERVICES</span>
                    </div>

                </div>
                {/* Navgations */}
                <ul className='hidden lg:flex items-center gap-10'>
                    <Link href='/' >
                        <li className='text-slate-700 dark:text-slate-200 hover:text-primary transition-colors font-bold'>Home</li>
                    </Link>
                    <Link href='/services'>
                        <li className='text-slate-700 dark:text-slate-200 hover:text-primary transition-colors font-bold'>Services</li>
                    </Link>
                    <Link href='/about'>
                        <li className='text-slate-700 dark:text-slate-200 hover:text-primary transition-colors font-bold'>About Us</li>
                    </Link>
                    <Link href='/contact'>
                        <li className='text-slate-700 dark:text-slate-200 hover:text-primary transition-colors font-bold'>Contact</li>
                    </Link>

                </ul>
                {/* CTA button */}
                <div className='hidden lg:flex items-center'>
                    <Link href={'/quote'}
                        className='cursor-pointer text-slate-700 dark:text-white font-bold bg-primary hover:bg-primary-dark py-3 px-6 rounded-full hover:scale-105 transition-all'>

                        Get a Quote

                    </Link>
                </div>

                <div className='lg:hidden text-slate-700 dark:text-slate-200 items-center'
                onClick={() => setMenuOpen(!menuOpen)}>
                    <span className='text-lg font-bold cursor-pointer'>Menu</span>
                </div>

            </div>

            {
                menuOpen && (
                    <div className='lg:hidden w-full bg-slate-900 border-t border-slate-700'>
                        <div className='flex flex-col gap-6 px-6 py-6'>
                            <Link href={'/'} className='text-slate-700 dark:text-slate-200 font-bold hover:text-primary'>
                                Home
                            </Link>
                            <Link href={'/services'} className='text-slate-700 dark:text-slate-200 font-bold hover:text-primary'>
                                Services
                            </Link>
                            <Link href={'/about'} className='text-slate-700 dark:text-slate-200 font-bold hover:text-primary'>
                                About Us
                            </Link>
                            <Link href={'/contact'} className='text-slate-700 dark:text-slate-200 font-bold hover:text-primary'>
                                Contact
                            </Link>
                            <Link href={'/quote'} className='text-slate-200 bg-primary text-center font-bold py-4 rounded-full'>
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                )
            }


        </header>
    )
}

export default Navbar