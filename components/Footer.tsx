import { Facebook, Instagram, LocateIcon, LocationEdit, Mail, MapPinIcon, Phone, Twitter, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-300 mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-white">
                        <img src={'/assets/gentle-main.png'}
                            className='w-[25%] ' alt='The GTS Logo' />
                        <span className="font-bold text-xl font-accent tracking-wide">GENTLE TECH</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                        Leading provider of HVAC and technical facility solutions in Rwanda. Dedicated to comfort and
                        reliability.
                    </p>
                    <div className="flex gap-4">
                        <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            href="#">
                            <Facebook />
                        </a>
                        <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            href="#">
                            <Instagram />
                        </a>
                        <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                            href="#">
                            <Twitter />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-bold font-accent text-lg">Quick Links</h4>
                    <div className="flex flex-col gap-3">
                        <a className="text-sm hover:text-primary transition-colors flex items-center gap-2" href="#"><span
                                className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Home</a>
                        <a className="text-sm hover:text-primary transition-colors flex items-center gap-2" href="#"><span
                                className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> About Us</a>
                        <a className="text-sm hover:text-primary transition-colors flex items-center gap-2" href="#"><span
                                className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Services</a>
                        <a className="text-sm hover:text-primary transition-colors flex items-center gap-2" href="#"><span
                                className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Contact</a>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-bold font-accent text-lg">Services</h4>
                    <div className="flex flex-col gap-3">
                        <a className="text-sm hover:text-primary transition-colors" href="#">AC Installation</a>
                        <a className="text-sm hover:text-primary transition-colors" href="#">Repair &amp; Maintenance</a>
                        <a className="text-sm hover:text-primary transition-colors" href="#">Ventilation Systems</a>
                        <a className="text-sm hover:text-primary transition-colors" href="#">Plumbing Works</a>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-bold font-accent text-lg">Contact Us</h4>
                    <div className="flex items-start gap-3 text-sm">
                        <MapPinIcon className='text-primary' />
                        <span className="text-slate-400">Kigali, Rwanda</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Phone className='text-primary'/>
                        <span className="text-slate-400">+250 788 123 456</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Mail className='text-primary'/>
                        <span className="text-slate-400">info@gentletech.rw</span>
                    </div>
                </div>
            </div>
            <div
                className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                <p>©  {new Date().getFullYear()}{" "} Gentle Technical Services. All rights reserved.</p>
                <div className="flex gap-6">
                    <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer