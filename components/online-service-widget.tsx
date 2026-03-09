"use client"

import Image from "next/image"

export function OnlineServiceWidget() {
  return (
    <div
      className="group/service fixed z-50"
      style={{ right: "20px", top: "50%", transform: "translateY(-50%)" }}
    >
      {/* Slide-out contact panel */}
      <div
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 translate-x-3 whitespace-nowrap rounded-xl bg-white p-4 opacity-0 transition-all duration-300 ease-out group-hover/service:pointer-events-auto group-hover/service:translate-x-0 group-hover/service:opacity-100"
        style={{
          right: "calc(100% + 10px)",
          boxShadow: "0px 4px 20px rgba(59, 34, 34, 0.12)",
        }}
      >
        <p className="mb-2.5 text-xs font-medium text-foreground">
          扫码关注公众号
        </p>
        <Image
          src="/images/qrcode-1.png"
          alt="微信公众号二维码"
          width={140}
          height={140}
          className="h-[140px] w-[140px] rounded"
          style={{ width: 'auto', height: 'auto' }}
        />
        <div className="mt-3 text-[11px] text-foreground/70" style={{ lineHeight: "20px" }}>
          <p className="font-medium text-foreground">联系方式</p>
          <p className="mt-0.5">电话：400-618-6180</p>
          <p className="mt-0.5">邮箱：www.inforbus.com</p>
        </div>
      </div>

      {/* Trigger button - using flexbox for proper center alignment */}
      <div
        className="flex cursor-pointer flex-col items-center"
        style={{
          width: "52px",
          borderRadius: "32px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 16px rgba(59, 34, 34, 0.15)",
          paddingTop: "14px",
          paddingBottom: "18px",
          gap: "6px",
        }}
      >
        {/* Chat icon - centered horizontally via flexbox */}
        <Image
          src="/images/service-chat-icon-new.png"
          alt=""
          width={50}
          height={45}
          className="flex-shrink-0 object-contain"
          style={{
            width: "36px",
            height: "32px",
          }}
        />
        {/* Vertical text "在线服务" - centered horizontally via flexbox */}
        <span
          className="text-primary"
          style={{
            writingMode: "vertical-rl",
            fontFamily: "'Source Han Sans CN', 'Noto Sans SC', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.12em",
          }}
        >
          在线服务
        </span>
      </div>
    </div>
  )
}
