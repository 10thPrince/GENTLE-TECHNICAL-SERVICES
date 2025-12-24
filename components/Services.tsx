import { AirVent, ArrowBigRight, ArrowRight, Droplet, FunnelIcon, Pipette, Snowflake, Wind } from 'lucide-react'
import React from 'react'

const Services = () => {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark" id="services">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span
                        className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 block bg-white dark:bg-slate-800 py-2 px-4 rounded-full w-fit mx-auto border border-primary/20">What
                        We Do</span>
                    <h2 className="text-3xl md:text-5xl font-accent font-bold text-slate-900 dark:text-white mb-6">Professional
                        Technical Services</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">From residential installations to
                        large-scale industrial maintenance, we deliver excellence with a gentle touch.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        className="group flex flex-col bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-white dark:border-slate-700">
                        <div className="relative h-64 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10 mix-blend-multiply">
                            </div>
                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                data-alt="Split air conditioner unit on a white wall"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZgp9ESyOsbR-HnG7-ti6NHyUPuFtJ-ShW_Igly4v0p_F2Wtl35wPh0Ij7vrZF9OnH9fo67FCahHVNpglkeX9zcpYoJTwRGsNOHSU0B895Znvk-RgzLAlBU1mXO56JlbH1C7g6YexMXLlZ7HFwWgE6TUn_rEX3om7RFC0nmhTm8w2V5ipD4vzSOvvrfNQ_OdVypjLo0lUrWHl6fQ5zjKr12Si4lcxxQPXOXCvXxHoMwpKXSiVP_annOQDSyiq-PuiSkZiwgLaBJuTf" />
                            <div
                                className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-primary shadow-lg">
                                <span>
                                    <AirVent />
                                </span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                            <h3
                                className="text-2xl font-bold font-accent text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                AC Installation &amp; Repair</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 flex-1">
                                Professional installation of split and central AC units. Troubleshooting, gas refilling, and
                                deep cleaning for optimal performance.
                            </p>
                            <a className="inline-flex  items-center gap-2 text-primary font-bold text-sm group/link" href="/contact">
                                Learn more
                                <div className='flex items-center'>
                                    <ArrowRight size={20} className='text-sm ml-1 group-hover/link:translate-x-1 transition-transform' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="group flex flex-col bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-white dark:border-slate-700">
                        <div className="relative h-64 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10 mix-blend-multiply">
                            </div>
                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                data-alt="Industrial ceiling ventilation ducts in a factory"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByWjLCXk_Jw6QWOUOvkknwjsmURoKP-h4YlffEXCUY_6fyaESnsC5uMUiSDCPF5-Zgm04M4Sn1a4NPA0hX81BmPWKDQtjK-xnZzbF1mxUnttO_2NAkm7KSm34Rw8qt66rxHBRnm0eJAez7eqiiuz2zle4T4R_6uQFLILp1RzRgMo-kaJl3oxq3VwQR3wM-iS-T4Uk8sai2vhZHghRtMObzt0NBpuBUUcuVoknmRVcnLHUia4eRUdiuvRU8pUUpqMVIKsy0zZnmX0gJ" />
                            <div
                                className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-primary shadow-lg">
                                <span className="material-symbols-outlined">
                                    <Wind />
                                </span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                            <h3
                                className="text-2xl font-bold font-accent text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                Industrial Ventilation</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 flex-1">
                                Custom ventilation solutions for factories, warehouses, and commercial kitchens to ensure
                                safe air quality.
                            </p>
                            <a className="inline-flex gap-2 items-center text-primary font-bold text-sm group/link" href="/contact">
                                Learn more 
                                <div className='flex items-center'>
                                    <ArrowRight size={20} className='text-sm ml-1 group-hover/link:translate-x-1 transition-transform' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="group flex flex-col bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-white dark:border-slate-700">
                        <div className="relative h-64 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10 mix-blend-multiply">
                            </div>
                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                data-alt="Close up of pipes and valves in a mechanical room"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJpTn9q41cFTI_Z1HI0iHOCBnD4cjljHYksBmjKnlFELYQUrUFU4t72yJ_N2HvAPaEzdZtNdxQfQqF_YspQAYGTDrZtsRXo7iPhkolMZrROR32z8sVHWVIy1Zja63G7FAY8lhjIyYnEnhx1VsopzQedh4xAZGMbd1SXvl_q-rWTKwwVU-1JvUgmqhqp9lIq9MBKvNgbqqEnhjq3ecL7FYesWGEmY7J7rNX7N0gfBShnCK1KAn2ZC92G-XVu4Rz2BYp5z-SXJp6jWU" />
                            <div
                                className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-primary shadow-lg">
                                <span className="material-symbols-outlined">
                                    <Droplet />
                                </span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                            <h3
                                className="text-2xl font-bold font-accent text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                Plumbing &amp; Electrical</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 flex-1">
                                Comprehensive support for building systems including pipe repairs, water heaters, and
                                electrical control panels.
                            </p>
                            <a className="inline-flex gap-2 items-center text-primary font-bold text-sm group/link" href="/contact">
                                Learn more 
                                <div className='flex items-center'>
                                    <ArrowRight size={20} className='text-sm ml-1 group-hover/link:translate-x-1 transition-transform' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services