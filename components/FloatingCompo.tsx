import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingCompo = () => {
    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center  bg-green-500/80 backdrop-blur-md p-1 md:p-2 rounded-full shadow-lg"
        >
            {/* Phone */}
            <a
                href="https://wa.me/250781884868"
                target="_blank"
                rel="noreferrer"
                className=" text-gray-300 hover:text-primary transition"
            >
                <FaWhatsapp size={28} />
            </a>
        </div>
    )
}

export default FloatingCompo