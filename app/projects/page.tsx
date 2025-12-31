'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ProjectDisplay from './ProjectDisplay'



const Projects = () => {
    

    return (
        <div className="bg-white dark:bg-slate-900">
            {/* Hero */}
            <section className="relative h-[50vh] lg:h-[70vh] flex items-center justify-center text-center">
                <Image src="/assets/about-two.jpg" alt="Projects" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <h1 className="relative z-10 text-white text-4xl md:text-5xl lg:text-6xl  font-bold">
                    Our Proven HVAC & Engineering <span className="text-glow">Projects</span>
                </h1>
            </section>

            {/* Projects Grid */}
            <section className="bg-gray-50 dark:bg-slate-900  py-16 px-6">
                <div className="max-w-6xl mx-auto text-center mb-10 ">
                    <h2 className="text-3xl font-bold text-primary mb-2">Recent Projects</h2>
                    <p className="text-gray-600  text-center dark:text-gray-300">
                        A snapshot of the systems we’ve designed, installed, and maintained for clients <br /> across residential, commercial, and industrial environments.
                    </p>
                </div>
                <ProjectDisplay />
                
            </section>

            {/* Modal */}
            
        </div>
    )
}

export default Projects
