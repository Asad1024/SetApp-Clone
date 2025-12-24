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

      {/* CTA Section - with white bg ending at center */}
      <div className="relative bg-white" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="flex justify-center">
          <div className="bg-gray-50 relative z-10 flex flex-col justify-center" style={{ width: '1330px', height: '587.59px', opacity: 1, paddingRight: '290px', paddingLeft: '290px', borderRadius: '20px' }}>
            <div className="flex flex-col">
              <div className="mb-8">
                <Image src="/images/SVG.png" alt="Setapp" width={60} height={60} />
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
        <div className="absolute left-0 right-0 bg-gray-900" style={{ top: 'calc(50% + 0px)', bottom: '0' }}></div>
      </div>

      {/* Footer Links */}
      <div className="bg-gray-900 text-gray-400" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="grid grid-cols-4 gap-16 mb-16">
            {/* Logo and Newsletter */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <Image src="/images/SVG.png" alt="Setapp Icon" width={20} height={20} />
                <span className="text-white font-semibold text-base">SETAPP</span>
              </div>
              <p className="text-sm mb-6 text-gray-400">Updates from our team, written with love 🧡</p>
              <div className="flex gap-2 mb-8">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-md bg-gray-800 text-gray-300 border-0 focus:outline-none focus:ring-1 focus:ring-gray-600 text-sm placeholder:text-gray-500" 
                />
                <button className="px-3 py-3 hover:opacity-80 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-600 px-4 py-2 text-white font-bold text-xs">
                  DMCA
                </div>
                <div className="bg-gray-700 px-4 py-2 text-gray-300 font-semibold text-xs">
                  PROTECTED
                </div>
              </div>
            </div>

            {/* Column 1 */}
            <div>
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
            <div>
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
            <div>
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

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
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
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 6.5h.01" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="#9CA3AF"/>
                    </svg>
                  </a>
                </div>
                <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
                  <Image src="/images/Item.png" alt="US Flag" width={20} height={20} />
                  <span>English</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
