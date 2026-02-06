import { ChevronDown, Facebook, Instagram, Mail, MapPin, Phone, PinIcon, SparklesIcon, Twitter } from 'lucide-react';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <main className="flex flex-1 flex-col items-center px-4 py-12 md:px-10 lg:px-40 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="layout-content-container flex w-full max-w-[1200px] flex-col flex-1">
        <div className="mb-10 flex flex-col items-center text-center">
          
          <h1 className="text-gray-900 dark:text-white text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 font-medium">
            We are here to help with your AC & HVAC needs in Kigali. Whether it's a new installation, emergency repair, or routine maintenance, our team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Contact Info */}
          <div className="flex flex-col  my-auto lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* Phone Support */}
              <div className="flex items-start my-auto gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <Phone className='text-2xl' />
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
              <div className="flex items-start my-auto gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                  <FaWhatsapp className='text-2xl' />
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
                  <Mail className='text-2xl' />
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
                  <MapPin className='text-2xl' />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Visit Our Office</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Main Workshop & Office</p>
                  <p className="text-base font-medium text-gray-900 dark:text-gray-200">Kigali, Rwanda</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">

                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Follow Us</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">On different Platforms</p>
                  <div className='flex'>
                    <a href="https://www.instagram.com" target='blank' className=" text-gray-300 hover:text-primary transition m-2">
                      <Instagram size={22} />
                    </a>
                    <a href="https://www.x.com" target='blank' className=" text-gray-300 hover:text-primary transition m-2">
                      <Twitter size={22} />
                    </a>
                    <a href="https://www.facebook.com" target='blank' className=" text-gray-300 hover:text-primary transition m-2">
                      <Facebook size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Right Form */}
          <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 lg:col-span-7 lg:px-10 shadow-lg transition-colors duration-300">
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
              className="h-full w-full rounded-xl "
              data-alt="Map showing location of Gentle Technical Services in Kigali, Rwanda"
              data-location="Kigali, Rwanda"

            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006.0487285630024!2d30.132449655126457!3d-1.9181693759711749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca1fe231ba7f3%3A0xe2f963c26441ca8e!2sMASIZI%20SUPERMARKET!5e0!3m2!1sen!2srw!4v1767183557362!5m2!1sen!2srw" width="100%" height="100%" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactDetails;
