import { Star } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold font-accent text-center mb-16 text-slate-900 dark:text-white">
                Trusted by Kigali Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-white dark:border-slate-700 relative">
                    <span
                        className="absolute top-8 right-8 text-6xl font-serif text-slate-100 dark:text-slate-700 leading-none">"</span>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <Star className="w-6 h-6  text-yellow-400" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg font-light leading-relaxed relative z-10">
                        Gentle Technical Services completely revamped our office cooling system. The team was
                        professional, clean, and finished ahead of schedule.</p>
                    <div className="flex items-center gap-4">
                        <div
                            className="size-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-400">
                            EM</div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white text-base">Eric M.</p>
                            <p className="text-xs text-primary font-bold uppercase tracking-wide">Hotel Manager, Nyarutarama
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm border border-white dark:border-slate-700 relative">
                    <span
                        className="absolute top-8 right-8 text-6xl font-serif text-slate-100 dark:text-slate-700 leading-none">"</span>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg font-light leading-relaxed relative z-10">
                        Quick response when our AC broke down during the hottest week. Their technician arrived within 2
                        hours. Highly recommended.</p>
                    <div className="flex items-center gap-4">
                        <div
                            className="size-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-400">
                            SK</div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white text-base">Sarah K.</p>
                            <p className="text-xs text-primary font-bold uppercase tracking-wide">Homeowner, Kimihurura</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials