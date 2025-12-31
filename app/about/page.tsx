import { Eye, Flag, Gem, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HalfStar = () => (
  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5">
    <defs>
      <clipPath id="half">
        <rect x="0" y="0" width="12" height="24" />
      </clipPath>
    </defs>
    <path
      d="M12 2l2.9 6.8L22 9.3l-5 4.9L18.2 22 12 18.5 5.8 22 7 14.2 2 9.3l7.1-0.5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 2l2.9 6.8L22 9.3l-5 4.9L18.2 22 12 18.5 5.8 22 7 14.2 2 9.3l7.1-0.5z"
      fill="currentColor"
      clipPath="url(#half)"
    />
  </svg>
)
const About = () => {
  return (
    <div>
      <div
        className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-8 lg:py-12 bg-[#ededed] dark:bg-background-dark">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <div className="@container">
            <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
              <div className="flex flex-col gap-6 lg:w-1/2 justify-center">
                <div className="flex flex-col gap-4 text-left">
                  <span
                    className="text-[#4976ff] font-bold tracking-widest text-sm uppercase font-display">Reliable
                    • Affordable • Ready to Work</span>
                  <h1
                    className="text-[#0d141b] dark:text-white text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight font-display">
                    Cooling Rwanda,<br />One Building at a Time
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 text-lg font-body leading-relaxed max-w-lg">
                    GENTLE TECHNICAL SERVICES is the leading provider of HVAC solutions for homes,
                    offices, hotels, and industries in Kigali. We are committed to technical excellence.
                  </p>
                </div>
                <div className="flex gap-4 pt-2">
                  <button
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#4976ff] hover:bg-[#345ec9] text-white text-base font-bold leading-normal tracking-wide font-display shadow-md transition-all hover:-translate-y-0.5">
                    <a href='/services' className="truncate">Our Services</a>
                  </button>
                  <button
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white border border-[#4976ff] text-[#4976ff] hover:bg-[#ebf0ff] text-base font-bold leading-normal tracking-wide font-display shadow-sm transition-colors">
                    <a href='/contact' className="truncate">Contact Us</a>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover rounded-2xl aspect-[4/3] shadow-2xl shadow-blue-900/10"
                  data-alt="Professional HVAC technician servicing an air conditioning unit on a rooftop"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmXXrpCnia9zCC2bEZun9T02GrLEGUeGQB0CvCPJxL2CtQwJHvHHI022PnWq5c9j1svpUqjVTtuHN5Za1LrUPTSPMXwO8F0V5xbKnbvXk8fdI15DjAP9eYsgBFHSDwwwf62s4Xlkfrb28uvA1iCkDviYB9c-X4pLpTMDPJka4Wx68J7HIPOWNr-CngeB_2Hwpr4J4qEADxobBduss4ta_gkL-RyL-NPdH_KcbR56zV1Bono64wBfcOHX0obsAtD1xF64dnf1JYoyrZ")'
                  }}
                ></div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-16 bg-white dark:bg-[#1a2632]">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <h2
            className="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight px-4 pb-12 text-center font-display">
            Our Core Identity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-2xl pt-[240px] overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              data-alt="Abstract blue technical blueprint pattern representing engineering precision"
              style={{ backgroundImage: 'linear-gradient(0deg, rgba(73, 118, 255, 0.95) 0%, rgba(73, 118, 255, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgGqmpIGRZ6pve17njNVStYjTPL6D50VNrWn7yG7KDtV0xOQLTOc1SpFh22HbQbtCGyFX9i7p4-pKSIdbOjMq3tjmKaMysvMyB-9bvFkkm65mCAZSV4LhmlK14jwPc-d2vDFyWGWQfotUmU62ZE6RQIX6ikSX6EMEdtakIMSVB_4LsO8M3NPORBZOUpip2MK9ozm1O8UbWoZURH59m1sprVUIUA0HrB9-SgoXihYbuWs8B2MRYP7ZjjvALDlz2VgjyEEzY8CmpdpJR")' }}>
              <div className="flex w-full items-end justify-between gap-4 p-8">
                <div className="flex flex-1 flex-col gap-3">
                  <div
                    className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-full mb-2 backdrop-blur-md border border-white/30">
                    <Flag className='text-white text-2xl' />
                  </div>
                  <p className="text-white tracking-wide text-2xl font-bold leading-tight font-display">Our
                    Mission</p>
                  <p className="text-white/90 text-base font-medium leading-relaxed font-body">
                    To provide sustainable, efficient, and reliable climate control solutions for every
                    Rwandan home and business.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-2xl pt-[240px] overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              data-alt="Modern high-rise building glass facade reflecting clear blue sky"
              style={{ backgroundImage: 'linear-gradient(0deg, rgba(16, 25, 34, 0.95) 0%, rgba(16, 25, 34, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDImLsgoJim8iQASKdL65NZgQcVByk1lZnblkV7Gi8OrkDhFij7eK3ZjxG8LIycgxhAEwtQUBhJo6QE_3jE877pRrfrRcFOzh0eWUMpS0RDNX-JVSDl4F6lBI7-PghuqX6UrnmRKxJPsQY8SZFqr15iytvND4g2InctlEJswL8o5GKmzDvAR0PdwSTqZd0PHvZ3cuS_zkEIVy42oG6BazQtLMI0G6zvoF7XqqA_FJbtHID0ZoQJarMqlU9UoFmObJskeGy9M-h62q4z")' }}>
              <div className="flex w-full items-end justify-between gap-4 p-8">
                <div className="flex flex-1 flex-col gap-3">
                  <div
                    className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-full mb-2 backdrop-blur-md border border-white/30">
                    <Eye className=" text-white text-2xl" />
                  </div>
                  <p className="text-white tracking-wide text-2xl font-bold leading-tight font-display">Our
                    Vision</p>
                  <p className="text-white/90 text-base font-medium leading-relaxed font-body">
                    To be the most trusted technical service partner in East Africa, known for
                    uncompromising quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-2xl pt-[240px] overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              data-alt="Clean minimal white interior with modern ventillation"
              style={{ backgroundImage: 'linear-gradient(0deg, rgba(73, 118, 255, 0.95) 0%, rgba(73, 118, 255, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGxMhK8mppb6mkvqJiF3hFT5b_6k2GSiKR9ouCW0A3LekkydwuXANx7YiIuV-2SDEqpF0hjmkyFdunVroZh4eIFNmuLEPx6OfnheoHHYNbqqydl0rB0yd8j6R_UQ8NmmZJMhDLIOqJbVPCe4-4rqb2OcfcCei3txLUk0eeaaD3PSQ1f-me3yqAy1uxATyF4uAfzB-LoovSFr7_DYHnB_70tBTFu1DGEK-ao5zrLn-e5oUJZy_PNuNHks0ltQvd0fHmOTTJvUmSuCdt")' }}>
              <div className="flex w-full items-end justify-between gap-4 p-8">
                <div className="flex flex-1 flex-col gap-3">
                  <div
                    className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-full mb-2 backdrop-blur-md border border-white/30">
                    <Gem className=" text-white text-2xl" />
                  </div>
                  <p className="text-white tracking-wide text-2xl font-bold leading-tight font-display">Our
                    Values</p>
                  <ul className="text-white/90 text-base font-medium leading-relaxed font-body space-y-1">
                    <li className="flex items-center gap-2"><span
                      className="w-1.5 h-1.5 bg-white rounded-full"></span> Integrity in every deal
                    </li>
                    <li className="flex items-center gap-2"><span
                      className="w-1.5 h-1.5 bg-white rounded-full"></span> Technical Excellence</li>
                    <li className="flex items-center gap-2"><span
                      className="w-1.5 h-1.5 bg-white rounded-full"></span> Speed &amp; Reliability
                    </li>
                    <li className="flex items-center gap-2"><span
                      className="w-1.5 h-1.5 bg-white rounded-full"></span> Customer First</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-24 bg-[#f8fafe] dark:bg-background-dark">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <h2
            className="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight px-4 pb-12 text-center font-display">
            What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div
              className="bg-white dark:bg-[#1a2632] p-10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow flex flex-col gap-6">
              <div className="flex text-[#4976ff]">
                <Star className="fill-primary" />
                <Star className="fill-primary" />
                <Star className="fill-primary" />
                <Star className="fill-primary" />
                <Star className="fill-primary" />
              </div>
              <p className="text-[#0d141b]/80 dark:text-gray-300 italic font-body text-lg leading-relaxed">"The
                team from Gentle Technical Services was professional and punctual. They installed our new
                office AC system in record time. Highly recommended!"</p>
              <div
                className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <img className="w-full h-full object-cover"
                    data-alt="Portrait of a smiling man in business attire"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsA9tATkIsuKuW2KB_yffZGvZ4eg447KSsSt7arylPLj2hMOLugl202PJsGMN6Tu98vfiKUcefa9kYW0Or1egTNtSmxx99yZIAql4hgsUWPmnBa3PdBtBEiKmmlJNNBiAd5MN7ezVeAk6bpdmFwCEcMevvOJi1AWS8IlcPpMiJfUawvrhX3YkPRtJqFVaJ-PURBKRPRUXI-HZWryXm_tp90Wn2nLUNkvVuNyyhR7mjUHRBmz9q7-PDjktOW4MDSMOCTajkKyRiLebw" />
                </div>
                <div>
                  <p className="text-base font-bold text-[#0d141b] dark:text-white font-display">Jean-Paul M.
                  </p>
                  <p className="text-sm text-[#0d141b]/60 dark:text-gray-500 font-body">Hotel Manager, Kigali
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-white  dark:bg-[#1a2632] p-10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow flex flex-col gap-6">
              <div className="flex relative text-[#4976ff]">
                <Star className="fill-primary" />
                <Star className="fill-primary" />
                <Star className="fill-primary" />
                <Star className="fill-primary" />
                <HalfStar />

              </div>
              <p className="text-[#0d141b]/80 dark:text-gray-300 italic font-body text-lg leading-relaxed">
                "Finally found a reliable HVAC partner for our home. The maintenance service is thorough and
                the technicians are very polite."</p>
              <div
                className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="Portrait of a smiling woman"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSrO9Ru8NDYEUO0tHP3UWKMBZZMyegDIvFawciu12_5ND6GIic6qf5En0mhFmvpcYYHsr5wqsVxS8y1A5MMNVWK2t_G8NjTfMjDfZvzaqkBS3RPFtBuqat7sTZWO82sBW92-xDGVg9YQHXJLYs8GTq-YbpN0B_lixu0GT_QRJ62bs9uF5FtjuHDbiWN_F0KbhNIEv4YHJaxWkhWyKOmzD0G3-EPja_1b4D2s1rs6njsuBl5zflfeaO0aqt_yKl50MfzOWhhRSVD3h7" />
                </div>
                <div>
                  <p className="text-base font-bold text-[#0d141b] dark:text-white font-display">Sarah U.</p>
                  <p className="text-sm text-[#0d141b]/60 dark:text-gray-500 font-body">Homeowner, Nyarutarama
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#4976ff] py-20">
        <div className="px-4 md:px-20 flex flex-col items-center text-center gap-8">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold max-w-3xl font-display leading-tight">Ready to
            Upgrade Your Comfort?</h2>
          <p className="text-blue-50 text-xl max-w-2xl font-body">Get a free inspection and quote for your home or
            business today.</p>
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            
            <Link href={'/contact'}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all font-display">
              Call Us Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About