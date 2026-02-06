import Image from 'next/image'
import ProjectDisplay from './ProjectDisplay'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HVAC & Engineering Projects in Rwanda | Gentle Technical Services",
  description:
    "Explore completed HVAC, air conditioning, ventilation and electrical engineering projects by Gentle Technical Services across Rwanda. Trusted by residential, commercial and industrial clients.",

  keywords: [
    "HVAC projects Rwanda",
    "air conditioning projects Kigali",
    "engineering projects Rwanda",
    "Gentle Technical Services projects",
    "ventilation installation Rwanda",
    "electrical works projects Kigali",
  ],

  alternates: {
    canonical: "https://www.gentletechnicalservices.com/projects",
  },

  openGraph: {
    title: "Our Projects | Gentle Technical Services Rwanda",
    description:
      "Discover HVAC, AC installation, ventilation and electrical engineering projects delivered by Gentle Technical Services across Rwanda.",
    url: "https://www.gentletechnicalservices.com/projects",
    siteName: "Gentle Technical Services",
    images: [
      {
        url: "/public/assets/gentle-main-2.png",
        width: 1200,
        height: 630,
        alt: "Gentle Technical Services HVAC and engineering projects",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "HVAC & Engineering Projects Rwanda | Gentle Technical Services",
    description:
      "Completed HVAC, air conditioning and electrical engineering projects across Kigali and Rwanda.",
    images: ["/public/assets/gentle-main-2.png"],
  },
};

const Projects = () => {
    

    return (
        <div className="bg-white dark:bg-slate-900">
            {/* Hero */}
            <section className="relative h-[50vh] lg:h-[70vh] flex items-center justify-center text-center">
                <Image src="/assets/about-two.jpg" alt="Projects" fill className="object-cover" />
                <div className="absolute inset-0 fdark:bg-black/50 bg-white/50" />
                <h1 className="relative z-10 dark:text-white text-black text-4xl md:text-5xl lg:text-6xl  font-bold">
                    Our HVAC &  Engineering <span className="text-glow">Projects</span>
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
