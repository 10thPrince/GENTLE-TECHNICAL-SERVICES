import Image from 'next/image'
import React from 'react'
import { inherits } from 'util'

const Hero = () => {
  return (
    <section className="relative bg-slate-200 dark:bg-slate-900 h-[85vh] min-h-150 flex items-center">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-r from-slate-200 via-slate-200/80 to-slate-200/40 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900/40 z-10"></div>
            <Image alt="HVAC Technician" className="w-full h-full object-cover object-center"
                data-alt="Technician checking an air conditioning unit on a wall"
                fill
                src="/assets/Landing-Image.webp" />
        </div>
        <div className="relative z-10 w-full max-w-300 mx-auto px-4 md:px-10">
            <div className="max-w-3xl flex flex-col gap-8">
                <div
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 w-fit backdrop-blur-md">
                    <span className="relative flex h-3 w-3">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-black dark:text-white text-xs font-bold uppercase tracking-widest font-display">Ready to work in
                        Kigali</span>
                </div>
                <h2
                    className="text-black dark:text-white text-5xl md:text-6xl lg:text-7xl font-accent font-bold leading-none tracking-tight">
                    Reliable.<br />
                    <span className="text-primary">Affordable.</span><br />
                    Ready.
                </h2>
                <p
                    className="text-slate-800 dark:text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-xl border-l-4 border-primary pl-6">
                    Expert HVAC cooling, heating, and technical maintenance for homes, offices, and industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a className="flex items-center justify-center rounded-full h-14 px-10 bg-primary hover:bg-primary-dark dark:text-white text-black text-base font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
                        href="/contact">
                        Book Inspection
                    </a>
                    <a className="flex items-center justify-center rounded-full h-14 px-10 dark:bg-white bg-black dark:hover:bg-slate-100 hover:bg-slate-700 dark:text-slate-900 text-slate-200  text-base font-bold transition-all shadow-lg"
                        href="/services">
                        Our Services
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero