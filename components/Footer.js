import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      {/* Border separator before CTA */}
      <div className="bg-white py-2">
        <div className="px-12">
          <div className="border-t-2 border-black"></div>
        </div>
      </div>

      {/* CTA Section - with white bg and content starting from edge */}
      <div className="relative bg-white" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="flex">
          <div className="bg-gray-50 relative z-10 flex flex-col justify-center" style={{ width: '100%', height: '587.59px', opacity: 1, paddingLeft: '120px', paddingRight: '120px', borderRadius: '20px', marginLeft: '40px', marginRight: '40px' }}>
            <div className="flex flex-col">
              <div className="mb-8">
                <Image src="/images/setapp-logo.svg" alt="Setapp" width={60} height={60} />
              </div>
              <h2 className="text-gray-900 mb-8" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 600, fontSize: '46px', lineHeight: '59.8px', letterSpacing: '1.3px' }}>
                Superpowers starting $9.99/month.<br/>Free for 7 days.
              </h2>
              <div className="flex gap-4">
                <button className="bg-gray-900 text-white font-medium hover:bg-gray-800 transition flex items-center justify-center" style={{ width: '193.41px', height: '50px', opacity: 1, borderRadius: '6px', fontSize: '16px' }}>
                  Get started now
                </button>
                <button className="bg-transparent text-gray-900 font-medium border-2 border-gray-300 hover:border-gray-400 transition flex items-center justify-center" style={{ width: '193.41px', height: '50px', opacity: 1, borderRadius: '6px', fontSize: '16px' }}>
                  More about Setapp
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Dark background starts at the vertical center of the entire section - so card is half in white, half in dark */}
        <div className="absolute left-0 right-0" style={{ backgroundColor: '#2B2D32', top: 'calc(50% + 0px)', bottom: '0' }}></div>
      </div>

      {/* Footer Links */}
      <div className="text-gray-400" style={{ backgroundColor: '#2B2D32', paddingTop: '60px', paddingBottom: '40px' }}>
        <div className="mx-auto" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="grid grid-cols-4 gap-16 mb-16">
            {/* Logo and Newsletter */}
            <div>
                <div className="flex flex-col" style={{ maxWidth: '760px' }}>
                  <div style={{ marginBottom: '70px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Image src="/images/SVG.png" alt="Setapp Icon" width={20} height={20} />
                    <span className="text-white font-semibold text-base">SETAPP</span>
                  </div>

                  <p className="text-sm" style={{ color: '#BDC4CE', marginBottom: '20px' }}>Updates from our team, written with love 🧡</p>

                  <div className="relative" style={{ maxWidth: '860px', marginBottom: '28px' }}>
                    <div className="flex items-stretch">
                    <div className="flex-1 flex items-center" style={{ backgroundColor: '#2F3235', borderRadius: '10px 0 0 10px', paddingLeft: '18px', height: '56px', border: '1px solid #33363A' }}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-transparent focus:outline-none placeholder-[#AAB3BC]"
                        style={{ color: '#C7CCD0', fontSize: '16px' }}
                      />
                    </div>
                    <button className="flex items-center justify-center" style={{ width: '64px', height: '56px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '0 10px 10px 0' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5l8 7-8 7" stroke="#2B2D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  </div>
                </div>
            </div>

            {/* Column 1 */}
            <div style={{ marginLeft: '120px' }}>
              <ul className="space-y-3.5 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition">All Apps</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Setapp for Teams</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Podcast</a></li>
                <li><a href="#" className="hover:text-white transition">Download</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div style={{ marginLeft: '120px' }}>
              <ul className="space-y-3.5 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
                <li><a href="#" className="hover:text-white transition">Education Discount</a></li>
                <li><a href="#" className="hover:text-white transition">Family Plan</a></li>
                <li><a href="#" className="hover:text-white transition">For Developers</a></li>
                <li><a href="#" className="hover:text-white transition">Gift Cards</a></li>
                <li><a href="#" className="hover:text-white transition">Redeem Card or Code</a></li>
                <li><a href="#" className="hover:text-white transition">Setapp Reviews</a></li>
                <li><a href="#" className="hover:text-white transition">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-white transition">Mac Developer Survey 2023</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div style={{ marginLeft: '120px' }}>
              <ul className="space-y-3.5 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">Getting started with Setapp</a></li>
                <li><a href="#" className="hover:text-white transition">Remote access to other Mac</a></li>
                <li><a href="#" className="hover:text-white transition">Fix macOS Ventura problems</a></li>
                <li><a href="#" className="hover:text-white transition">Best productivity apps</a></li>
                <li><a href="#" className="hover:text-white transition">Best YouTube downloaders</a></li>
                <li><a href="#" className="hover:text-white transition">Uninstall apps</a></li>
              </ul>
            </div>
          </div>

          {/* DMCA / PROTECTED / Language row placed just above the bottom border */}
            <div style={{ width: '100%', marginTop: '12px', marginBottom: '8px' }}>
              <div className="flex items-center" style={{ width: '100%' }}>
              <div style={{ backgroundColor: '#9CA3AF', padding: '8px 12px', borderRadius: '4px', color: '#FFFFFF', fontWeight: 800, fontSize: '12px' }}>
                DMCA
              </div>
              <div style={{ backgroundColor: '#3A3F42', padding: '8px 18px', borderRadius: '4px', color: '#FFFFFF', fontWeight: 700, fontSize: '12px' }}>
                PROTECTED
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition" style={{ background: 'transparent' }}>
                  <Image src="/images/Item.png" alt="US Flag" width={20} height={20} />
                  <span>English</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t pt-8" style={{ borderColor: '#3A3D43' }}>
            <div className="mb-5">
              <div className="text-xs text-gray-500">
                <p>© 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165 VAT ID: IE3425001BH</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-8 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">Terms of Use</a>
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex gap-3">
                    <a href="#" className="w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="#2B2D32"/>
                      </svg>
                    </a>
                    <a href="#" className="w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="#2B2D32"/>
                      </svg>
                    </a>
                    <a href="#" className="w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" fill="#2B2D32"/>
                        <circle cx="12" cy="11.5" r="2.5" fill="#FFFFFF"/>
                        <circle cx="17" cy="6.5" r="0.7" fill="#FFFFFF"/>
                      </svg>
                    </a>
                    <a href="#" className="w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="4" width="20" height="16" rx="3" fill="#2B2D32"/>
                        <polygon points="9.75,8.75 15.5,11.5 9.75,14.25" fill="#FFFFFF"/>
                      </svg>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
