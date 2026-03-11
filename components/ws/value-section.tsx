'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'

const valueItems = [
  {
    title: '多重防护、网站安全加固',
    circleLine1: '多重防护、',
    circleLine2: '网站安全加固',
    prevLine1: '深度适配、',
    prevLine2: '国产支持',
    nextLine1: '7*24网站发布',
    nextLine2: '权验与审计',
    description: '构建应用攻击实时防护、篡改实时阻断、木马病毒识别告警、网站内容发布实时审计的多重防护体系。',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-6d5wAw1CHEcpX66jutL9j2Scq3HUMO.png',
  },
  {
    title: '7*24网站发布权验与审计',
    circleLine1: '7*24网站发布',
    circleLine2: '权验与审计',
    prevLine1: '多重防护、',
    prevLine2: '网站安全加固',
    nextLine1: '双机热备、',
    nextLine2: '运行可靠',
    description: '实时校验和审计网站文件是否含有隐式篡改、恶意链接、木马病毒、确保网站文件正确无误。',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-c1OauyrI23GgNpNIEMLVhuOIdLOE86.png',
  },
  {
    title: '双机热备、运行可靠',
    circleLine1: '双机热备、',
    circleLine2: '运行可靠',
    prevLine1: '7*24网站发布',
    prevLine2: '权验与审计',
    nextLine1: '助力网络安全',
    nextLine2: '等级保护测评',
    description: '提供特有的双引擎篡改恢复技术，让防篡改7*24小时全时覆盖，全时防御。',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-GcoP45TnMaJV6RhY8eFBFIS9DlX7eH.png',
  },
  {
    title: '助力网络安全等级保护测评',
    circleLine1: '助力网络安全',
    circleLine2: '等级保护测评',
    prevLine1: '双机热备、',
    prevLine2: '运行可靠',
    nextLine1: '深度适配、',
    nextLine2: '国产支持',
    description: '实现信息系统的防攻击、防篡改，帮助用户信息系统等级保护建设检测工作的顺利通过。',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-PnfeP3iYKRToIgm6GmSLkuhn2UNCt3.png',
  },
  {
    title: '深度适配、国产支持',
    circleLine1: '深度适配、',
    circleLine2: '国产支持',
    prevLine1: '助力网络安全',
    prevLine2: '等级保护测评',
    nextLine1: '多重防护、',
    nextLine2: '网站安全加固',
    description: '经4000+用户、上万个复杂IT环境验证，支持国家信创环保、主流操作系统、数据库、Web及应用服务器。',
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-jKOGbnhvXBI5xsNOuDh2d8tPXZJS22.png',
  },
]

export function WSValueSection() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const handlePrev = useCallback(() => {
    setDirection('left')
    setCurrentIdx((prev) => (prev === 0 ? valueItems.length - 1 : prev - 1))
  }, [])

  const handleNext = useCallback(() => {
    setDirection('right')
    setCurrentIdx((prev) => (prev === valueItems.length - 1 ? 0 : prev + 1))
  }, [])

  useEffect(() => {
    autoplayRef.current = setInterval(handleNext, 8000)
    return () => clearInterval(autoplayRef.current!)
  }, [handleNext])

  const handleMouseEnter = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
  }

  const handleMouseLeave = () => {
    autoplayRef.current = setInterval(handleNext, 8000)
  }

  const current = valueItems[currentIdx]
  const prev = valueItems[(currentIdx - 1 + valueItems.length) % valueItems.length]
  const next = valueItems[(currentIdx + 1) % valueItems.length]

  return (
    <section className='relative w-full bg-gradient-to-b from-[#F8F8F8] via-white to-white py-20 lg:py-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-8'>
        <div
          className='relative h-[400px] lg:h-[500px]'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Desktop view - 3 columns circular arrangement */}
          <div className='hidden lg:flex items-center justify-center gap-12 h-full'>
            {/* Left card */}
            <div className='flex-shrink-0 w-64 opacity-60 scale-90 transition-all duration-500'>
              <div className='bg-white rounded-2xl shadow-lg p-8 text-center min-h-96'>
                <div className='mb-6'>
                  <Image
                    src={prev.icon}
                    alt={prev.title}
                    width={64}
                    height={64}
                    className='mx-auto h-16 w-16 object-contain'
                  />
                </div>
                <h3 className='text-sm font-bold text-gray-800 mb-4 line-clamp-2'>
                  <div>{prev.prevLine1}</div>
                  <div>{prev.prevLine2}</div>
                </h3>
                <p className='text-xs text-gray-600 line-clamp-3'>{prev.description}</p>
              </div>
            </div>

            {/* Center card - Active */}
            <div className='flex-shrink-0 w-72 transition-all duration-500 z-10'>
              <div className='bg-white rounded-2xl shadow-2xl p-8 text-center min-h-96 border-2 border-red-500'>
                <div className='mb-6'>
                  <Image
                    src={current.icon}
                    alt={current.title}
                    width={64}
                    height={64}
                    className='mx-auto h-20 w-20 object-contain'
                  />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>{current.title}</h3>
                <p className='text-sm text-gray-700'>{current.description}</p>
              </div>
            </div>

            {/* Right card */}
            <div className='flex-shrink-0 w-64 opacity-60 scale-90 transition-all duration-500'>
              <div className='bg-white rounded-2xl shadow-lg p-8 text-center min-h-96'>
                <div className='mb-6'>
                  <Image
                    src={next.icon}
                    alt={next.title}
                    width={64}
                    height={64}
                    className='mx-auto h-16 w-16 object-contain'
                  />
                </div>
                <h3 className='text-sm font-bold text-gray-800 mb-4 line-clamp-2'>
                  <div>{next.nextLine1}</div>
                  <div>{next.nextLine2}</div>
                </h3>
                <p className='text-xs text-gray-600 line-clamp-3'>{next.description}</p>
              </div>
            </div>
          </div>

          {/* Mobile view */}
          <div className='lg:hidden flex items-center justify-center h-full'>
            <div className='bg-white rounded-2xl shadow-2xl p-6 text-center w-full max-w-sm'>
              <div className='mb-6'>
                <Image
                  src={current.icon}
                  alt={current.title}
                  width={56}
                  height={56}
                  className='mx-auto h-14 w-14 object-contain'
                />
              </div>
              <h3 className='text-base font-bold text-gray-900 mb-3'>{current.title}</h3>
              <p className='text-sm text-gray-700 mb-6'>{current.description}</p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className='mt-12 flex items-center justify-center gap-4'>
          <button
            onClick={handlePrev}
            className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors'
            aria-label='Previous'
          >
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
          </button>

          {/* Progress indicators */}
          <div className='flex gap-2'>
            {valueItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIdx(idx)
                  setDirection(idx > currentIdx ? 'right' : 'left')
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIdx ? 'w-8 bg-red-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors'
            aria-label='Next'
          >
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
