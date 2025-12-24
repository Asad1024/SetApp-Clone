import Image from 'next/image'

export default function Features() {
  return (
    <section className="py-19">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="max-w-md" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 600, fontSize: '36px', lineHeight: '51.84px', letterSpacing: '1px' }}>What you get on Setapp</h2>
          <p className="max-w-md" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '32.04px', letterSpacing: '0%' }}>With a single monthly subscription at $9.99, you get 240+ apps for your Mac.</p>
        </div>

        {/* Feature Cards Grid */}
        <div className="space-y-6 mb-12">
          {/* Top Card - Keep your Mac clean */}
          <div className="rounded-[20px] overflow-hidden relative flex flex-col" style={{ backgroundColor: '#DF96AE', width: '1180px', height: '605px' }}>
            <div className="px-10 pt-[60px] flex items-start gap-4 pb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                <Image src="/images/2ea3dc225416273459df81ca06ad426d29a3cb56.png" alt="CleanMyMac" width={48} height={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Keep your Mac clean</h3>
                <p className="text-gray-800">Remove junk, scan for malware, wipe email attachments</p>
              </div>
            </div>
            <div className="px-10 pb-10 flex-1 flex items-center">
              <Image src="/images/8a5203ae86e579ee7c833ad32903a8952c6f32f6.png" alt="CleanMyMac screenshot" width={1100} height={380} className="rounded-xl w-full h-auto" />
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card - Write code */}
            <div className="overflow-hidden flex flex-col" style={{ backgroundColor: '#F4F0E4', width: '580px', height: '632.6px', justifyContent: 'space-between', opacity: 1, paddingBottom: '59.54px', borderRadius: '20px' }}>
              <div className="px-8 pt-6 pb-3">
                <Image src="/images/5ecec2c860e197b0c252693fa559e428bb28dd4a.png" alt="Code editor" width={580} height={400} className="rounded-xl w-full" />
              </div>
              <div className="px-8 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Image src="/images/5c27d428a3e97ddc13f8ebcef94454f36d2aab18.png" alt="Icon" width={56} height={56} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Write code</h3>
                  <p className="text-gray-700 text-sm">Create applications in more than 25 languages</p>
                </div>
              </div>
            </div>

            {/* Right Card - Join meetings */}
            <div className="overflow-hidden flex flex-col" style={{ backgroundColor: '#384C75', width: '580px', height: '632.6px', opacity: 1, borderRadius: '20px' }}>
              <div className="pt-6 px-8 pb-3 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Image src="/images/daecfd6fc447d2a6b62fc72cbb5af2c7ac6bee48.png" alt="Icon" width={56} height={56} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Join meetings in a click</h3>
                  <p className="text-blue-100 text-sm">Quickly access links to your meetings from menu bar</p>
                </div>
              </div>
              <div className="flex-1"></div>
              <div>
                <Image src="/images/bbd80a807180e55dbcc9d6024b7149e4b93f276f.png" alt="Meeter app" width={524} height={350} className="w-full" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* View all link */}
        <div className="text-center my-12">
          <a href="#" className="inline-flex items-center gap-2 text-white hover:text-gray-300 text-base">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>View all superpowers</span>
          </a>
        </div>

        {/* Setapp Journey Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 mt-12">
          <h2 style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 600, fontSize: '36px', lineHeight: '51.84px', letterSpacing: '1px' }}>Your Setapp journey.</h2>
          <p className="max-w-md" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '32.04px', letterSpacing: '0%' }}>Type in your task into Setapp search and get instant app recommendations.</p>
        </div>

        {/* Border separator */}
        <div className="border-t py-16" style={{ borderColor: '#E5E5E5' }}></div>
      </div>
    </section>
  )
}
