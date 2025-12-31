import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-slate-900 h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10"></div>
            <img alt="HVAC Technician" className="w-full h-full object-cover object-center"
                data-alt="Technician checking an air conditioning unit on a wall"
                src="/assets/landing-page-2.jpg" />
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-10">
            <div className="max-w-3xl flex flex-col gap-8">
                <div
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/10 w-fit backdrop-blur-md">
                    <span className="relative flex h-3 w-3">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span className="text-white text-xs font-bold uppercase tracking-widest font-display">Ready to work in
                        Kigali</span>
                </div>
                <h2
                    className="text-white text-5xl md:text-6xl lg:text-7xl font-accent font-bold leading-none tracking-tight">
                    Reliable.<br />
                    <span className="text-primary">Affordable.</span><br />
                    Ready.
                </h2>
                <p
                    className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-xl border-l-4 border-primary pl-6">
                    Expert HVAC cooling, heating, and technical maintenance for homes, offices, and industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a className="flex items-center justify-center rounded-full h-14 px-10 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
                        href="/contact">
                        Book Inspection
                    </a>
                    <a className="flex items-center justify-center rounded-full h-14 px-10 bg-white hover:bg-slate-100 text-slate-900 text-base font-bold transition-all shadow-lg"
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