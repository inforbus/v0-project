'use client'

import { useState, useEffect } from 'react'

const honors = [
  { id: 1, image: '/images/honor-excellence.jpg', title: '中国电子信息行业卓越企业' },
  { id: 2, image: '/images/honor-cmmi.jpg', title: 'CMMI DEV 5级认证' },
  { id: 3, image: '/images/honor-xinchuang.jpg', title: '信创工委会卓越贡献成员单位' },
  { id: 4, image: '/images/honor-innovation.jpg', title: '中国十大创新软件企业' },
  { id: 5, image: '/images/honor-middleware.jpg', title: '推动中间件软件杰出贡献奖' },
  { id: 6, image: '/images/honor-science.jpg', title: '山东省科学技术进步二等奖' },
  { id: 7, image: '/images/honor-iso.jpg', title: 'ISO9001质量体系认证' },
  { id: 8, image: '/images/honor-brand.jpg', title: '信创可靠企业核心软件品牌' },
  { id: 9, image: '/images/honor-jakarta.jpg', title: '国际Jakarta EE工作组企业级会员单位' },
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

  // Get 5 visible cards for fan layout
  const getVisibleHonors = () => {
    const result = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + honors.length) % honors.length
      result.push({ ...honors[index], position: i })
    }
    return result
  }

  const visibleHonors = getVisibleHonors()

  // Card styles based on position
  const getCardStyle = (position: number) => {
    const baseStyle = "absolute transition-all duration-500 ease-out cursor-pointer"
    
    switch (position) {
      case -2: // Far left
        return {
          className: `${baseStyle} w-32 md:w-44 lg:w-56`,
          style: {
            transform: 'translateX(-180%) rotate(-12deg) scale(0.75)',
            opacity: 0.4,
            zIndex: 1,
          }
        }
      case -1: // Left
        return {
          className: `${baseStyle} w-40 md:w-52 lg:w-64`,
          style: {
            transform: 'translateX(-100%) rotate(-6deg) scale(0.9)',
            opacity: 0.7,
            zIndex: 2,
          }
        }
      case 0: // Center
        return {
          className: `${baseStyle} w-56 md:w-72 lg:w-80`,
          style: {
            transform: 'translateX(-50%) rotate(0deg) scale(1)',
            opacity: 1,
            zIndex: 3,
          }
        }
      case 1: // Right
        return {
          className: `${baseStyle} w-40 md:w-52 lg:w-64`,
          style: {
            transform: 'translateX(0%) rotate(6deg) scale(0.9)',
            opacity: 0.7,
            zIndex: 2,
          }
        }
      case 2: // Far right
        return {
          className: `${baseStyle} w-32 md:w-44 lg:w-56`,
          style: {
            transform: 'translateX(80%) rotate(12deg) scale(0.75)',
            opacity: 0.4,
            zIndex: 1,
          }
        }
      default:
        return { className: baseStyle, style: {} }
    }
  }

  return (
    <div className="space-y-8">
      {/* Carousel Section */}
      <div 
        className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden rounded-lg"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {visibleHonors.map((honor) => {
            const cardStyle = getCardStyle(honor.position)
            return (
              <div
                key={`${honor.id}-${honor.position}`}
                className={cardStyle.className}
                style={{
                  ...cardStyle.style,
                  left: '50%',
                }}
                onClick={() => {
                  if (honor.position !== 0) {
                    setCurrentIndex(honors.findIndex(h => h.id === honor.id))
                  }
                }}
              >
                <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-white">
                  <img
                    src={honor.image}
                    alt={honor.title}
                    className="w-full h-auto aspect-[3/4] object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + honors.length) % honors.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg z-10 transition-colors"
          aria-label="Previous honor"
        >
          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % honors.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg z-10 transition-colors"
          aria-label="Next honor"
        >
          <svg className="w-5 h-5 text-[#BF1920]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Current Honor Title */}
      <div className="text-center">
        <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground">
          {honors[currentIndex].title}
        </h3>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2">
        {honors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to honor ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
