"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const projects = [
    {
        id: 1,
        title: 'Air Conditioning Installation',
        description: 'Professional installation of split, ducted, and central air conditioning systems.',
        images: ['/assets/landing-page-2.jpg', '/assets/about-two.jpg'],
    },
    {
        id: 2,
        title: 'Maintenance & Repair',
        description: 'Routine servicing, fault diagnosis, and repairs.',
        images: ['/assets/landing-page-2.jpg'],
    },
    {
        id: 3,
        title: 'Ventilation Systems',
        description: 'Mechanical ventilation for better indoor air quality.',
        images: ['/assets/about-two.jpg'],
    },
    {
        id: 4,
        title: 'Electrical Works',
        description: 'Safe installation and upgrading of electrical systems.',
        images: ['/assets/landing-page-2.jpg'],
    },
]
const ProjectDisplay = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState<any>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openModal = (project: any) => {
        setSelectedProject(project)
        setCurrentIndex(0)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setSelectedProject(null)
    }

    const nextImage = () =>
        setCurrentIndex((prev) =>
            prev === selectedProject.images.length - 1 ? 0 : prev + 1
        )

    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? selectedProject.images.length - 1 : prev - 1
        )
    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-xl cursor-pointer"
                        onClick={() => openModal(project)}
                    >
                        <Image
                            src={project.images[0]}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"

                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-red-500 text-3xl font-bold"
                        >
                            &times;
                        </button>

                        <div className="relative w-full flex justify-center">
                            <Image
                                src={selectedProject.images[currentIndex]}
                                alt=""
                                width={1000}
                                height={700}
                                className="object-contain max-h-[80vh] rounded-xl"
                            />

                            {selectedProject.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 top-1/2 text-white text-4xl"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 top-1/2 text-white text-4xl"
                                    >
                                        ›
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="mt-3 text-white text-center">
                            <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                            <p className="text-sm">{selectedProject.description}</p>
                        </div>

                        {selectedProject.images.length > 1 && (
                            <div className="flex justify-center gap-2 mt-4">
                                {selectedProject.images.map((img: string, i: number) => (
                                    <Image
                                        key={i}
                                        src={img}
                                        alt=""
                                        width={80}
                                        height={80}
                                        className={`rounded-lg cursor-pointer border-2 ${i === currentIndex ? 'border-primary' : 'border-transparent'
                                            }`}
                                        onClick={() => setCurrentIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectDisplay