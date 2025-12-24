import Image from 'next/image'

export default function Hero(){
  return (
    <>
    <section className="relative flex items-center justify-center text-center min-h-[70vh] pb-16 pt-20">
      <div className="z-20 w-full">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
              <div className="mb-14 w-21 h-20" style={{ marginRight: '20px' }}>
              <Image src="/images/setapp-icon-birthday-15.svg.png" alt="setapp" width={128} height={128} />
            </div>

            <h1 className="hero-title font-extrabold text-center max-w-2xl mx-auto mb-3" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 700, fontSize: '64px', lineHeight: '67.84px', letterSpacing: '1px' }}>Dozens of apps.<br/>One subscription.</h1>

            <p className="hero-price font-extrabold mt-1 mb-5" style={{ fontFamily: 'Avenir Next, system-ui, sans-serif', fontWeight: 700, fontSize: '64px', lineHeight: '67.84px', letterSpacing: '1px' }}>$9.99</p>

            <div className="flex items-center justify-center gap-3 mb-4">
              <button className="bg-white text-black px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition">Try free for 7 days</button>
              <button className="w-11 h-11 bg-white flex items-center justify-center rounded-lg overflow-hidden hover:bg-gray-100 transition">
                <Image src="/images/Link (1).png" alt="apple" width={32} height={32} className="object-contain" />
              </button>
              <button className="w-11 h-11 bg-white flex items-center justify-center rounded-lg overflow-hidden hover:bg-gray-100 transition">
                <Image src="/images/Link.png" alt="google" width={32} height={32} className="object-contain" />
              </button>
            </div>

            <p className="text-gray-300 text-sm max-w-lg mx-auto mb-8">Power up your workflow with Setapp, a<br/>smart way to get apps.</p>
          </div>
        </div>
      </div>

      {/* Decorative stickers positioned to match Figma */}
      {/* Left side stickers */}
      <div className="absolute left-[8%] top-[15%] -rotate-10 z-[13]">
        <Image src="/images/pics.svg.png" alt="pics" width={173} height={173} />
      </div>
      <div className="absolute left-[8%] top-[34%] rotate-3 z-[15]">
        <Image src="/images/Group.png" alt="macpaw" width={58} height={58} />
      </div>
      <div className="absolute left-[15%] top-[32%] -rotate-6 z-[14]">
        <Image src="/images/pdf.svg.png" alt="pdf" width={140} height={140} />
      </div>
      <div className="absolute left-[6%] top-[55%] -rotate-3 z-[11]">
        <Image src="/images/teamwork.svg.png" alt="teamwork" width={226} height={123} />
      </div>
      <div className="absolute left-[6%] top-[68%] rotate-3 z-[12]">
        <Image src="/images/secure.svg.png" alt="secure" width={175} height={176} />
      </div>

      {/* Right side stickers */}
      <div className="absolute right-[9%] top-[13%] rotate-10 z-[13]">
        <Image src="/images/wifi.svg.png" alt="wifi" width={200} height={125} />
      </div>
      <div className="absolute right-[16%] top-[22%] -rotate-6 z-[14]">
        <Image src="/images/plan.svg.png" alt="plan" width={169} height={169} />
      </div>
      <div className="absolute right-[7%] top-[38%] rotate-12 z-[15]">
        <Image src="/images/converter.svg.png" alt="converter" width={155} height={153} />
      </div>
      <div className="absolute right-[11%] top-[53%] -rotate-7 z-[11]">
        <Image src="/images/manage.svg.png" alt="manage" width={230} height={128} />
      </div>
      <div className="absolute right-[12%] top-[67%] rotate-9 z-[12]">
        <Image src="/images/code.svg.png" alt="code" width={152} height={153} />
      </div>
    </section>
    
    {/* Border separator */}
    <div className="container mx-auto px-6 py-10">
      <div className="border-b" style={{ borderColor: '#E5E5E5' }}></div>
    </div>
    </>
  )
}
