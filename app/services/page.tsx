import React from "react"
import Image from "next/image"
import { ShieldCheck, Headset, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Air Conditioning Installation",
      description:
        "Professional installation of split, ducted, and central air conditioning systems for residential and commercial buildings.",
      image: "/assets/landing-page-2.jpg",
    },
    {
      id: 2,
      title: "Air Conditioning Maintenance & Repair",
      description:
        "Routine servicing, fault diagnosis, and repair of air conditioning systems to ensure efficiency, reliability, and long equipment life.",
      image: "/assets/landing-page-2.jpg",
    },
    {
      id: 3,
      title: "Ventilation Systems",
      description:
        "Design and installation of mechanical ventilation systems to improve indoor air quality and airflow in homes, offices, and industrial spaces.",
      image: "/assets/landing-page-2.jpg",
    },
    {
      id: 4,
      title: "Electrical Works",
      description:
        "Safe installation, upgrading, and maintenance of electrical wiring, lighting, panels, and power systems in buildings.",
      image: "/assets/landing-page-2.jpg",
    },
  ]

  return (
    <div className="flex flex-col dark:bg-slate-900">
      {/* Landing Section */}
      <div className="relative h-[50vh] lg:h-[70vh]">
        <Image
          src='/assets/landing-page-2.jpg'
          alt="Services background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70 dark:bg-black/50"></div>
        <div className="relative flex flex-col z-10 justify-center h-full items-center gap-4 text-white lg:text-5xl font-bold">
          <div className="flex gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span>Expert Technical </span>
            <span className="text-primary">Services In Rwanda</span>
          </div>
          <p className="text-lg w-[80%] md:w-[50%] font-semibold text-slate-300 text-center tracking-widest">
            Providing top-tier HVAC, electrical and solar for homes, offices and
            Industries across Rwanda.
          </p>
        </div>
      </div>

      {/* Our Core Services */}
      <section id="services" className="w-full px-4 py-10 border-b border-primary md:px-20">
        <div className="mb-10 w-full text-center">
          <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white font-bold">
            Our Core Services
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
            We specialize in comprehensive technical services tailored for
            residential, commercial and industrial clients.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row w-full items-start md:items-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm gap-4 md:gap-0"
            >
              {/* Image */}
              <div className="w-full md:w-[30%] h-48 md:h-32 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title & Description */}
              <div className="md:w-[50%]">
                <div className="w-full md:px-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="w-full md:px-6">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="w-full md:w-[20%]">
                <a
                  href="tel:+250780394768"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex gap-3 items-center justify-center md:w-auto rounded-lg bg-black dark:bg-primary md:px-1 lg:px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 hover:border hover:border-primary"
                >
                  Learn More <ArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-display font-black leading-tight tracking-tight uppercase">
                Why Choose Gentle <br />Technical Services?
              </h2>
              <p className="text-slate-500 dark:text-gray-300 text-lg font-normal leading-relaxed">
                We bring professionalism, certification, and deep local expertise
                to every project in Kigali and beyond.
              </p>

              <div className="mt-2 flex flex-col gap-8">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ededed] dark:bg-gray-700 text-primary border border-blue-100">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#0d141b] dark:text-white uppercase mb-1">
                      Certified Technicians
                    </h3>
                    <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed">
                      Our team consists of highly trained and certified
                      professionals vetted for quality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ededed] dark:bg-gray-700 text-primary border border-blue-100">
                    <Headset className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#0d141b] dark:text-white uppercase mb-1">
                      24/7 Support
                    </h3>
                    <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed">
                      We are available around the clock for emergency repairs for
                      critical infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ededed] dark:bg-gray-700 text-primary border border-blue-100">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#0d141b] dark:text-white uppercase mb-1">
                      Rwanda-wide Service
                    </h3>
                    <p className="text-slate-500 dark:text-gray-300 text-sm leading-relaxed">
                      Serving Kigali and extending our reliable services across the
                      entire country.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] w-full rounded-2xl bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-2xl shadow-blue-50">
              <div
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000"

              >
                <Image src='/assets/landing-page-2.jpg'
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="w-full h-full" />
              </div>
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-10 px-4 py-16 md:flex-row md:px-10 md:py-24 relative overflow-hidden">

          {/* Gradient Blobs */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px]"></div>

          {/* Text Section */}
          <div className="flex flex-col gap-4 md:max-w-xl relative z-10">
            <h2 className="text-3xl font-display font-black leading-tight tracking-tight md:text-4xl uppercase">
              Ready to upgrade your comfort?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg font-light">
              Contact us today for a free inspection or quotation. Our team is
              ready to assist you with your technical needs.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row relative z-10 font-display">
            
            <Link href={'/contact'} className="flex h-14 items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 bg-transparent px-10 text-gray-900 dark:text-white text-base font-bold transition hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
