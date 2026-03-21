import { Facebook, Instagram, LocateIcon, LocationEdit, Mail, MapPinIcon, Phone, Twitter, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-secondary text-background-dark dark:bg-slate-900 dark:text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-300 mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-black dark:text-white">
                        <img src={'/assets/gentle-main-2.png'}
                            className='w-[25%] ' alt='The GTS Logo' />
                        <span className="font-bold text-xl font-accent tracking-wide">GENTLE TECH</span>
                    </div>
                    <p className="text-sm text-slate-800 dark:text-slate-400 leading-relaxed max-w-xs">
                        Leading provider of HVAC and technical facility solutions in Rwanda. Dedicated to comfort and
                        reliability.
                    </p>
                    {/* <div className="flex gap-4">
                        <a className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            href="#">
                            <Facebook />
                        </a>
                        <a className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            href="#">
                            <Instagram />
                        </a>
                        <a className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            href="#">
                            <Twitter />
                        </a>
                    </div> */}
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="text-black dark:text-white font-bold font-accent text-lg">Quick Links</h4>
                    <div className="flex flex-col gap-3">
                        <Link href={'/'} className='text-sm hover:text-primary transition-colors flex items-center gap-2'>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Home
                        </Link>
                        <Link href={'/about'} className='text-sm hover:text-primary transition-colors flex items-center gap-2'>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> About Us
                        </Link>
                        <Link href={'/services'} className='text-sm hover:text-primary transition-colors flex items-center gap-2'>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Services
                        </Link>
                        <Link href={'/contact'} className='text-sm hover:text-primary transition-colors flex items-center gap-2'>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Contact
                        </Link>
                        
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="text-black dark:text-white font-bold font-accent text-lg">Services</h4>
                    <div className="flex flex-col gap-3">
                        <Link className="text-sm hover:text-primary transition-colors" href="/services">AC Installation</Link>
                        {/* <a className="text-sm hover:text-primary transition-colors" href="#">Fire suppression</a> */}
                        <Link className="text-sm hover:text-primary transition-colors" href="/services">CCTV Surveillance</Link>
                        <Link className="text-sm hover:text-primary transition-colors" href="/services">Electrical Works</Link>
                        <Link className="text-sm hover:text-primary transition-colors" href="/services">Fire Suppression</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="text-black dark:text-white font-bold font-accent text-lg">Contact Us</h4>
                    <div className="flex items-start gap-3 text-sm">
                        <MapPinIcon className='text-primary' />
                        <span className="text-slate-800 dark:text-slate-400">Kigali, Rwanda</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Phone className='text-primary'/>
                        <span className="text-slate-800 dark:text-slate-400">+250 781 884 868</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Mail className='text-primary'/>
                        <span className="text-slate-800 dark:text-slate-400">cyusa@gentletechnical.com</span>
                    </div>
                </div>
            </div>
            <div
                className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>©  {new Date().getFullYear()}{" "} Gentle Technical Services. All rights reserved.</p>
                <div className="flex gap-6">
                    
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer