export default function Navbar(){
  return (
    <header style={{ position: 'relative', top: '17px' }}>
      <div className="flex justify-center">
        <div className="flex items-center justify-between" style={{ width: '1440px', height: '40px', opacity: 1 }}>
          {/* Logo - left end */}
          <div className="flex items-center">
              <div style={{ width: '20px', height: '32px', opacity: 1 }}>
              <img src="/images/setapp-icon.png" alt="logo" width={20} height={32} />
            </div>
          </div>

          {/* Right Side - Nav + Actions - right end */}
          <div className="flex items-center gap-8">
            {/* Nav Links */}
            <nav className="flex gap-8 text-gray-300" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '25.76px', letterSpacing: '0.9px' }}>
              <a className="hover:text-white cursor-pointer">How it works</a>
              <a className="hover:text-white cursor-pointer">All apps</a>
              <a className="hover:text-white cursor-pointer">Pricing</a>
              <a className="hover:text-white cursor-pointer">For Teams</a>
              <a className="hover:text-white cursor-pointer">Blog</a>
              <a className="hover:text-white cursor-pointer">Podcast</a>
            </nav>

            {/* Separator */}
            <div className="text-gray-600 text-xl">|</div>

            {/* Flag + Sign In + Try free */}
            <div className="flex items-center gap-4">
              <div className="w-6 h-5">
                  <img src="/images/us-flag.png" alt="US Flag" width={24} height={24} />
                </div>
              <button className="text-gray-300 hover:text-white" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 500, fontSize: '14px', letterSpacing: '0.9px' }}>Sign In</button>
              <button className="px-5 py-2 rounded-md bg-transparent border border-gray-400 text-white hover:bg-white hover:text-bg-dark transition" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 500, fontSize: '14px', letterSpacing: '0.9px' }}>Try free</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
