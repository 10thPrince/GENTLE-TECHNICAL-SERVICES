import { BadgeCheck, Headset, LifeBuoyIcon, Timer, Wrench } from 'lucide-react'
import React from 'react'

const Qualities = () => {
  return (
    <section className="relative z-20 -mt-10 mb-10 px-4 md:px-10">
        <div
            className="max-w-[1200px] mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 md:p-12">
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-700">
                <div className="flex flex-col items-center text-center gap-3 pt-4 md:pt-0 px-4">
                    <div
                        className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mb-2">
                        <span className="text-3xl">
                            <BadgeCheck />
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 font-accent">Certified Pros
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Licensed technicians with years of
                            experience.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 pt-4 md:pt-0 px-4">
                    <div
                        className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mb-2">
                        <span className="text-3xl">
                            <Timer />
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 font-accent">Fast Response</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Quick turnaround for emergencies.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 pt-4 md:pt-0 px-4">
                    <div
                        className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mb-2">
                        <span className="text-3xl">
                            <Wrench />
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 font-accent">Quality Parts</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Genuine and durable spare parts.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 pt-4 md:pt-0 px-4">
                    <div
                        className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mb-2">
                        <span className="material-symbols-outlined text-3xl">
                            <Headset />
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 font-accent">24/7 Support</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Always available for your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualities