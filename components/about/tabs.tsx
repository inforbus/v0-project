'use client'

import { useState } from 'react'

const tabs = [
  { id: 'intro', label: '公司介绍', value: 'intro' },
  { id: 'honors', label: '公司荣誉', value: 'honors' },
  { id: 'timeline', label: '发展历程', value: 'timeline' },
  { id: 'contact', label: '联系我们', value: 'contact' },
]

export function CompanyTabs() {
  const [activeTab, setActiveTab] = useState('intro')

  return (
    <div className="w-full bg-background">
      {/* Tabs Navigation */}
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex gap-8 border-b border-border py-6 lg:py-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 font-sans text-lg font-medium transition-all duration-300 relative whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-[#BF1920]'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#BF1920] rounded-t-sm transition-all duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Content */}
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8 lg:py-16">
        {activeTab === 'intro' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground">公司介绍</h2>
            <p className="text-foreground/70 leading-relaxed">
              暂时的内容占位符
            </p>
          </div>
        )}

        {activeTab === 'honors' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground">公司荣誉</h2>
            <p className="text-foreground/70 leading-relaxed">
              暂时的内容占位符
            </p>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground">发展历程</h2>
            <p className="text-foreground/70 leading-relaxed">
              暂时的内容占位符
            </p>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground">联系我们</h2>
            <p className="text-foreground/70 leading-relaxed">
              暂时的内容占位符
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
