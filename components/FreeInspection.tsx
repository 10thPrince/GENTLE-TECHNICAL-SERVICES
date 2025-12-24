import { Check } from 'lucide-react'
import React from 'react'

const FreeInspection = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900" id="quote">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
            <div
                className="flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
                <div
                    className="lg:w-5/12 bg-primary p-12 lg:p-16 flex flex-col justify-center text-white relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10">
                    </div>
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
                    <h3 className="text-4xl font-bold font-accent mb-6 relative z-10">Get a Free Inspection</h3>
                    <p className="text-blue-100 mb-10 text-lg leading-relaxed relative z-10">
                        Not sure what's wrong with your system? Our experts are ready to visit your location in Kigali
                        for a comprehensive check-up.
                    </p>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 relative z-10 border border-white/10">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <Check />
                                <span className="text-base font-medium">Transparent Pricing</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <Check />
                                <span className="text-base font-medium">Same-day service available</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <Check />
                                <span className="text-base font-medium">100% Satisfaction Guarantee</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-7/12 bg-slate-50 dark:bg-slate-800 p-10 lg:p-16">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide"
                                    >Full Name</label>
                                <input
                                    className="w-full h-14 px-5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white text-base"
                                    id="name" placeholder="John Doe" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide"
                                    >Phone Number</label>
                                <input
                                    className="w-full h-14 px-5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white text-base"
                                    id="phone" placeholder="+250 ..." type="tel" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide"
                                >Service Needed</label>
                            <select
                                className="w-full h-14 px-5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white text-base appearance-none"
                                id="service">
                                <option>Select a service...</option>
                                <option>AC Installation</option>
                                <option>AC Repair</option>
                                <option>General Maintenance</option>
                                <option>Industrial Ventilation</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide"
                                >Message</label>
                            <textarea
                                className="w-full p-5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white text-base"
                                id="message" placeholder="Describe your issue..." ></textarea>
                        </div>
                        <button
                            className="w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-base hover:shadow-xl hover:translate-y-[-2px] transition-all mt-4"
                            type="button">
                            Request Callback
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FreeInspection