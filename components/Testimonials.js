import Image from 'next/image'

export default function Testimonials() {
  return (
    <>
    <section className="py-6 relative">
      <div className="flex justify-center relative z-10">
        {/* Video Testimonial */}
        <div className="relative overflow-hidden" style={{ backgroundColor: '#765070', width: '1355px', height: '720px', opacity: 1, borderRadius: '20px' }}>
          <div className="flex items-center h-full relative">
            {/* Left content */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-center" style={{ paddingLeft: '50px', paddingRight: '0px', width: '500px' }}>
              <p className="text-white mb-6" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 500, fontSize: '26px', lineHeight: '40.04px', letterSpacing: '0%' }}>
                Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.
              </p>
              <p className="text-gray-300 mb-10" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}>
                Jason Staczek
              </p>
              {/* Watch now button */}
              <button className="bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition" style={{ width: '74px', height: '74px', opacity: 1, borderRadius: '37px' }}>
                <Image src="/images/Button - Watch now.png" alt="Watch now" width={48} height={48} />
              </button>
            </div>
            
            {/* Right image */}
            <div className="absolute right-0 bottom-0 overflow-hidden" style={{ width: '670px', height: '690px', opacity: 1 }}>
              <Image src="/images/21a6be253fb14ba0748b3310c64b39b8ff20bbf9.png" alt="Jason Staczek testimonial" width={670} height={690} className="object-cover object-top" style={{ width: '670px', height: '690px' }} />
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute top-6 right-6 flex gap-3 z-20">
            <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Dots indicator - 4 dots outside card */}
      <div className="flex justify-center gap-2 mt-6 mb-4 relative z-10">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>

      {/* White background overlay starting from center of testimonial card */}
      <div className="absolute left-0 right-0 bg-white" style={{ top: '260px', bottom: '-100%', zIndex: 0 }}></div>
    </section>

    {/* White background section */}
    <section className="bg-white text-gray-900 relative" style={{ marginTop: '-50px', paddingTop: '60px', paddingBottom: '32px' }}>
      <div className="px-56">
        {/* Setapp in your words section */}
        <div className="mb-16">
          <div className="flex flex-row justify-between items-start mb-10">
            <h2 style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 600, fontSize: '36px', lineHeight: '47.88px', letterSpacing: '1.3px' }}>Setapp in your words.</h2>
            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-10">
                <p className="max-w-xs" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '32.04px', letterSpacing: '0%' }}>What you say about how Setapp<br/>powers you up.</p>
                <div className="flex gap-3">
                  <a href="#" className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 transition">
                    <Image src="/images/Item ⏵ Link - Setapp on Facebook ⏵ SVG.png" alt="Facebook" width={40} height={40} />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 transition">
                    <Image src="/images/Frame.png" alt="Twitter" width={40} height={40} />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 transition">
                    <Image src="/images/Frame (1).png" alt="Instagram" width={40} height={40} />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 transition">
                    <Image src="/images/Frame (2).png" alt="YouTube" width={40} height={40} />
                  </a>
                </div>
              </div>
              {/* Navigation arrows below social icons */}
              <div className="flex gap-3">
                <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div style={{ width: '380px', height: '422.44px', opacity: 1, border: '1px solid #E5E5E5', borderRadius: '15px', overflow: 'hidden', backgroundColor: '#F5F5F5', padding: '8px', display: 'flex', flexDirection: 'column' }}>
              <div className="text-white flex items-center flex-1" style={{ backgroundColor: '#71719A', borderRadius: '12px', padding: '24px' }}>
                <p style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 500, fontSize: '26px', lineHeight: '36.92px', letterSpacing: '0%' }}>
                  Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.
                </p>
              </div>
              <div className="flex items-end justify-between" style={{ padding: '20px 16px' }}>
                <div>
                  <p className="text-gray-900" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 600, fontSize: '18px', lineHeight: '24px', marginBottom: '4px' }}>Arash Pourhabibi</p>
                  <p className="text-gray-600" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px' }}>@ArashPourhabibi</p>
                </div>
                <div className="flex items-center justify-center">
                  <Image src="/images/Frame (3).png" alt="Twitter" width={20} height={20} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ width: '380px', height: '422.44px', opacity: 1, border: '1px solid #E5E5E5', borderRadius: '15px', overflow: 'hidden', backgroundColor: '#F5F5F5', padding: '8px', display: 'flex', flexDirection: 'column' }}>
              <div className="text-white flex items-center flex-1" style={{ backgroundColor: '#D9AE89', borderRadius: '12px', padding: '24px' }}>
                <p style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 500, fontSize: '26px', lineHeight: '36.92px', letterSpacing: '0%' }}>
                  My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.
                </p>
              </div>
              <div className="flex items-end justify-between" style={{ padding: '20px 16px' }}>
                <div>
                  <p className="text-gray-900" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 600, fontSize: '18px', lineHeight: '24px', marginBottom: '4px' }}>Mauricio Sanchez</p>
                  <p className="text-gray-600" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px' }}>@m741s</p>
                </div>
                <div className="flex items-center justify-center">
                  <Image src="/images/SVG (1).png" alt="Instagram" width={20} height={20} />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ width: '380px', height: '422.44px', opacity: 1, border: '1px solid #E5E5E5', borderRadius: '15px', overflow: 'hidden', backgroundColor: '#F5F5F5', padding: '8px', display: 'flex', flexDirection: 'column' }}>
              <div className="text-white flex items-center flex-1" style={{ backgroundColor: '#765070', borderRadius: '12px', padding: '24px' }}>
                <p style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 500, fontSize: '26px', lineHeight: '36.92px', letterSpacing: '0%' }}>
                  For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!
                </p>
              </div>
              <div className="flex items-end justify-between" style={{ padding: '20px 16px' }}>
                <div>
                  <p className="text-gray-900" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 600, fontSize: '18px', lineHeight: '24px', marginBottom: '4px' }}>Meredith Sweet</p>
                  <p className="text-gray-600" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px' }}>@meredith.sweet.silberstein</p>
                </div>
                <div className="flex items-center justify-center">
                  <Image src="/images/Vector.png" alt="Facebook" width={12} height={12} />
                </div>
              </div>
            </div>
          </div>

          {/* 6 Dots indicator below cards */}
          <div className="flex justify-center gap-2 mt-6 pb-12 border-b" style={{ borderColor: '#E5E5E5' }}>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
