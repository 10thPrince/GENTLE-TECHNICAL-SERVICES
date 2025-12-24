import { SparklesIcon } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-12 md:px-10 lg:px-40 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="layout-content-container flex w-full max-w-[1200px] flex-col flex-1">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 px-4 py-1.5 transition-colors duration-300">
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300 tracking-wider uppercase font-display">
              Reliable • Affordable • Ready to Work
            </span>
          </div>
          <h1 className="text-gray-900 dark:text-white text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 font-medium">
            We are here to help with your AC & HVAC needs in Kigali. Whether it's a new installation, emergency repair, or routine maintenance, our team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* Phone Support */}
              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <span className="material-symbols-outlined text-[24px]">call</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Phone Support</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">24/7 Hotline for emergencies</p>
                  <a className="text-base font-bold text-blue-600 hover:underline" href="tel:+250788123456">
                    +250 788 123 456
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                  <span className="material-symbols-outlined text-[24px]">chat</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">WhatsApp</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Chat directly with an expert</p>
                  <a className="text-base font-bold text-green-600 hover:underline" href="#">Start Chat</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200">
                  <span className="material-symbols-outlined text-[24px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">For general inquiries & quotes</p>
                  <a className="text-base font-medium text-gray-900 dark:text-gray-200 hover:text-blue-600" href="mailto:support@gentletechnical.rw">
                    support@gentletechnical.rw
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Visit Our Office</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Main Workshop & Office</p>
                  <p className="text-base font-medium text-gray-900 dark:text-gray-200">Kicukiro, Kigali, Rwanda</p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="relative overflow-hidden rounded-2xl bg-blue-600 dark:bg-blue-800 p-8 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900 transition-colors duration-300">
              <div className="relative z-10 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Need a Quote Fast?</h3>
                <p className="text-blue-50 dark:text-blue-100 text-sm leading-relaxed">Don't wait! Request a free inspection or get an instant quote for your project.</p>
                <button className="mt-2 w-full rounded-full bg-white py-3.5 text-sm font-bold text-blue-600 hover:scale-[1.02] active:scale-95 shadow-md uppercase tracking-wide">
                  Request Free Inspection
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-2xl"></div>
              <div className="absolute top-10 right-10 opacity-10">
                <SparklesIcon className="w-24 h-24 text-current" />
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 lg:col-span-7 lg:p-10 shadow-lg transition-colors duration-300">
            <div className="mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">Fill out the form below and we'll get back to you within 2 hours.</p>
            </div>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 md:flex-row">
                <label className="flex flex-1 flex-col gap-2">
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-200">Your Name</span>
                  <input className="h-14 w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500 transition-colors duration-300" placeholder="Enter your full name" type="text" />
                </label>
                <label className="flex flex-1 flex-col gap-2">
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-200">Phone Number</span>
                  <input className="h-14 w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500 transition-colors duration-300" placeholder="+250 78..." type="tel" />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-gray-900 dark:text-gray-200">Email Address</span>
                <input className="h-14 w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500 transition-colors duration-300" placeholder="you@example.com" type="email" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-gray-900 dark:text-gray-200">Service Needed</span>
                <div className="relative">
                  <select className="h-14 w-full appearance-none rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500 transition-colors duration-300">
                    <option disabled value="">Select a service type</option>
                    <option value="installation">AC Installation</option>
                    <option value="repair">AC Repair</option>
                    <option value="maintenance">Maintenance Service</option>
                    <option value="inspection">Site Inspection</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-gray-900 dark:text-gray-200">How can we help?</span>
                <textarea className="min-h-[160px] w-full resize-y rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500 transition-colors duration-300" placeholder="Describe your issue or request here..."></textarea>
              </label>
              <button className="mt-4 flex h-14 w-full items-center justify-center rounded-full bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-all font-bold text-lg shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 flex w-full flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Find us on the Map</h3>
          </div>
          <div className="h-[300px] w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-2 shadow-sm md:h-[450px]">
            <div
              className="h-full w-full rounded-xl bg-cover bg-center"
              data-alt="Map showing location of Gentle Technical Services in Kigali, Rwanda"
              data-location="Kigali, Rwanda"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAde1LvH1Zb4rIwvYebIKL_2BWYbxO9TO3WvHGhflhlI3SRyRmBpf-XBk7zMmFt8TvmFKnxAwzsoXTymXTT6F1nwxzo0WNoZ5FhiQ_K9iwrcSAdCVnsVbRta5soDuMoGRdwaGnspKg-XhtKLXVFklLfPraBoH0rA3jkodBUihd4iH7-zAf-iXlP67utgLVZqu_9EfvVpYLudjxHK-cIX5c_bsSHaGSzRALkdFROzqhxjy8xtsD0nj7pxWYH0GgGcF6MllfzjA9NN4vR')" }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
