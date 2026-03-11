'use client'

import { useState, useEffect } from 'react'

const honors = [
  { id: 1, image: '/images/honor-1.jpg', title: '国家高新技术企业', icon: '🏢' },
  { id: 2, image: '/images/honor-2.jpg', title: 'CMMI DEV 5级认证', icon: '⚙️' },
  { id: 3, image: '/images/honor-3.jpg', title: 'ISO9001质量认证', icon: '✓' },
  { id: 4, image: '/images/honor-4.jpg', title: '国家技术创新示范企业', icon: '🎯' },
  { id: 5, image: '/images/honor-5.jpg', title: '国家企业技术中心', icon: '🔬' },
  { id: 6, image: '/images/honor-6.jpg', title: '山东省科学技术进步二等奖', icon: '🏆' },
  { id: 7, image: '/images/honor-7.jpg', title: '中国十大创新软件企业', icon: '💡' },
  { id: 8, image: '/images/honor-8.jpg', title: '信创可靠企业核心软件品牌', icon: '⭐' },
  { id: 9, image: '/images/honor-9.jpg', title: '国际Jakarta EE工作组企业级会员', icon: '🌐' },
]

export function HonorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % honors.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const visibleHonors = [
    honors[(currentIndex - 1 + honors.length) % honors.length],
    honors[currentIndex],
    honors[(currentIndex + 1) % honors.length],
  ]

  return (
    <div className="animate-fadeIn space-y-12">
      {/* Carousel Section */}
      <div 
        className="relative h-96 flex items-center justify-center group"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <div className="flex justify-center items-center gap-6 w-full px-4">
          {/* Left Card - Smaller */}
          <div className="flex-shrink-0 w-40 h-80 transform -rotate-6 opacity-50 hover:opacity-75 transition-all">
            <img
              src={visibleHonors[0].image}
              alt={visibleHonors[0].title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Center Card - Larger */}
          <div className="flex-shrink-0 w-56 h-80 transform hover:scale-105 transition-transform">
            <img
              src={visibleHonors[1].image}
              alt={visibleHonors[1].title}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Card - Smaller */}
          <div className="flex-shrink-0 w-40 h-80 transform rotate-6 opacity-50 hover:opacity-75 transition-all">
            <img
              src={visibleHonors[2].image}
              alt={visibleHonors[2].title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + honors.length) % honors.length)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous honor"
        >
          <svg className="w-6 h-6 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % honors.length)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next honor"
        >
          <svg className="w-6 h-6 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2">
        {honors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-[#BF1920] w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to honor ${index + 1}`}
          />
        ))}
      </div>

      {/* Honors Info Grid - Below Carousel */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-b from-slate-50 to-white p-8 rounded-lg">
        {honors.map((honor) => (
          <div
            key={honor.id}
            className={`text-center p-4 rounded-lg transition-all ${
              currentIndex === honor.id - 1
                ? 'border-2 border-[#BF1920] bg-[#BF1920]/5'
                : 'border border-gray-200 hover:border-[#BF1920]/50'
            }`}
          >
            <div className="text-2xl mb-3">{honor.icon}</div>
            <h4 className="font-sans font-bold text-foreground text-sm leading-relaxed">
              {honor.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}
