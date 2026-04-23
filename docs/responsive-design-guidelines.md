# 网站响应式设计规范

## 目录

1. [断点设计](#1-断点设计)
2. [布局响应式规范](#2-布局响应式规范)
3. [文字响应式规范](#3-文字响应式规范)
4. [间距响应式规范](#4-间距响应式规范)

---

## 1. 断点设计

### Tailwind 断点配置

| 断点 | 屏幕宽度 | 典型场景 |
|------|----------|----------|
| 默认 | < 640px | 手机竖屏 |
| sm | ≥ 640px | 手机横屏 |
| md | ≥ 768px | 平板 |
| lg | ≥ 1024px | 笔记本 |
| xl | ≥ 1280px | 台式机 |
| 2xl | ≥ 1536px | 大屏显示器 |
| 3xl | ≥ 1920px | 超宽屏（自定义断点） |

### 配置代码

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
}
```

---

## 2. 布局响应式规范

### 2.1 布局模式总览

| 组件 | 手机 | 平板(md) | 桌面(lg) | 大屏(3xl) |
|------|------|----------|----------|-----------|
| **导航** | 汉堡菜单 + 全屏抽屉 | 汉堡菜单 | 水平导航栏 + 下拉菜单 | 增大间距 |
| **网格** | 单列 | 2列 | 3-4列 | 保持比例 |
| **容器** | `px-4` | `px-4` | `px-8` | `max-w-[1400px]` |
| **字体** | 基础尺寸 | 略大 | 正常 | `3xl:text-*` 增大 |

### 2.2 容器约束

```tsx
// 标准容器
<div className="mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]">
  {/* 内容 */}
</div>
```

### 2.3 网格布局

```tsx
// 响应式网格
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* 卡片 */}
</div>

// 四列网格
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {/* 卡片 */}
</div>
```

### 2.4 全宽背景突破容器

```tsx
// 背景延伸至全屏宽度
<div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
  <div className="mx-auto max-w-6xl px-4 lg:px-8">
    {/* 内容 */}
  </div>
</div>
```

### 2.5 Flexbox 响应式

```tsx
// 垂直到水平布局
<div className="flex flex-col lg:flex-row lg:justify-between">
  {/* 内容 */}
</div>

// 居中对齐
<div className="flex flex-col items-center lg:flex-row lg:items-start">
  {/* 内容 */}
</div>
```

### 2.6 导航响应式

```tsx
// 桌面端导航 (lg+)
<nav className="hidden lg:flex items-center gap-6">
  {/* 导航项 */}
</nav>

// 移动端汉堡按钮
<button className="lg:hidden">
  {/* 汉堡图标 */}
</button>

// 移动端菜单
<div className="lg:hidden max-h-[70vh] overflow-y-auto">
  {/* 菜单内容 */}
</div>
```

### 2.7 隐藏/显示元素

```tsx
// 仅中屏以上显示
className="hidden md:flex"

// 仅小屏显示
className="lg:hidden"

// 仅大屏显示
className="hidden 3xl:block"
```

---

## 3. 文字响应式规范

### 3.1 字号断点递进

网站使用 **移动优先** 的渐进式字号放大：

| 断点 | 屏幕宽度 | 典型场景 |
|------|----------|----------|
| 默认 | < 768px | 手机 |
| md | ≥ 768px | 平板 |
| lg | ≥ 1024px | 笔记本 |
| 3xl | ≥ 1920px | 大屏显示器 |

### 3.2 各类文字的响应式规范

#### 主标题 (H2 Section Titles)

```tsx
className="text-2xl md:text-3xl 3xl:text-[40px]"
// 24px → 30px → 40px
```

#### 副标题 (H3 Card Titles)

```tsx
className="text-lg 3xl:text-[22px]"
// 18px → 22px
```

#### 正文段落

```tsx
className="text-sm md:text-base lg:text-[16px] 3xl:text-[22px]"
// 14px → 16px → 16px → 22px
```

#### 辅助文字/说明

```tsx
className="text-xs 3xl:text-sm"
// 12px → 14px

className="text-sm 3xl:text-base"
// 14px → 16px
```

#### 按钮文字

```tsx
className="text-xs sm:text-sm md:text-base 3xl:text-lg"
// 12px → 14px → 16px → 18px
```

#### 导航文字

```tsx
className="text-sm 3xl:text-base"
// 14px → 16px
```

### 3.3 行高响应式

```tsx
// 配合字号调整行高
className="text-sm leading-[1.7] 3xl:text-[16px] 3xl:leading-[28px]"
className="text-sm leading-[200%] 3xl:text-[22px]"
```

### 3.4 Hero 区域大标题

Hero区域使用精确像素值实现平滑过渡：

```tsx
className="text-[29px] sm:text-[37px] md:text-[45px] lg:text-[53px] xl:text-[61px] 2xl:text-[71px] 3xl:text-[81px]"
```

### 3.5 文字规范总结表

| 元素类型 | 移动端 | 平板(md) | 桌面(lg) | 大屏(3xl) |
|----------|--------|----------|----------|-----------|
| 页面标题 | 2xl (24px) | 3xl (30px) | - | 40px |
| 卡片标题 | lg (18px) | - | - | 22px |
| 正文 | sm (14px) | base (16px) | 16px | 22px |
| 辅助文字 | xs (12px) | - | - | sm (14px) |
| 按钮 | sm (14px) | base (16px) | - | lg (18px) |

---

## 4. 间距响应式规范

### 4.1 容器内边距 (Padding)

#### 页面容器水平内边距

```tsx
className="px-4 lg:px-8"
// 16px → 32px
```

#### Section 垂直内边距

```tsx
className="py-12 md:py-16 lg:py-20 3xl:py-24"
// 48px → 64px → 80px → 96px

// 或精确像素模式
className="py-12 md:py-16 lg:py-[80px] 3xl:py-[120px]"
// 48px → 64px → 80px → 120px
```

#### 卡片内边距

```tsx
className="p-5 md:p-6 3xl:p-8"
// 20px → 24px → 32px

className="p-6 lg:p-8 3xl:p-10"
// 24px → 32px → 40px
```

#### 按钮内边距

```tsx
className="px-4 py-2 sm:px-6 sm:py-2.5 md:text-base 3xl:px-8 3xl:py-3"
// 16px/8px → 24px/10px → 32px/12px
```

### 4.2 外边距 (Margin)

#### 标题下方间距

```tsx
className="mb-8 md:mb-12 3xl:mb-16"
// 32px → 48px → 64px

// 或精确像素模式
className="mb-8 md:mb-[50px] 3xl:mb-[70px]"
// 32px → 50px → 70px
```

#### Section 之间间距

```tsx
className="mb-12 lg:mb-16 3xl:mb-20"
// 48px → 64px → 80px
```

#### 段落/元素顶部间距

```tsx
className="mt-4 lg:mt-6 3xl:mt-8"
// 16px → 24px → 32px

className="mt-6 3xl:mt-8"
// 24px → 32px
```

### 4.3 间隙 (Gap)

#### 网格/Flex 布局间隙

```tsx
className="gap-5 lg:gap-6 3xl:gap-8"
// 20px → 24px → 32px

className="gap-6 lg:gap-8 3xl:gap-10"
// 24px → 32px → 40px

className="gap-3 lg:gap-4 3xl:gap-5"
// 12px → 16px → 20px
```

#### 导航项间隙

```tsx
className="lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-12"
// 24px → 32px → 40px → 48px
```

### 4.4 间距规范总结表

| 元素类型 | 手机 | 平板(md) | 桌面(lg) | 大屏(3xl) |
|----------|------|----------|----------|-----------|
| **容器px** | 16px (px-4) | - | 32px (px-8) | - |
| **Section py** | 48px (py-12) | 64px (py-16) | 80px (py-20) | 96-120px |
| **标题 mb** | 32px (mb-8) | 48px (mb-12) | - | 64px (mb-16) |
| **卡片 p** | 20px (p-5) | 24px (p-6) | - | 32px (p-8) |
| **网格 gap** | 20px (gap-5) | - | 24px (gap-6) | 32px (gap-8) |
| **元素 mt** | 16px (mt-4) | - | 24px (mt-6) | 32px (mt-8) |

### 4.5 设计原则

1. **渐进增大** - 随屏幕增大，间距按 1.25-1.5x 比例递增
2. **3xl 专属** - 1920px 以上大屏有专门的间距优化
3. **精确与比例混用** - 关键位置用精确像素值 (`py-[80px]`)，一般位置用Tailwind比例值
4. **保持比例** - 同一组件内的间距保持相似的递进比例

---

## 5. 快速参考

### 常用响应式类名组合

```tsx
// 容器
"mx-auto max-w-6xl px-4 lg:px-8 2xl:max-w-[1100px] 3xl:max-w-[1400px]"

// Section
"py-12 md:py-16 lg:py-20 3xl:py-24"

// 网格
"grid gap-6 md:grid-cols-2 lg:grid-cols-3"

// 标题
"text-2xl md:text-3xl 3xl:text-[40px] mb-8 md:mb-12 3xl:mb-16"

// 正文
"text-sm md:text-base 3xl:text-[22px] leading-relaxed"

// 卡片
"p-5 md:p-6 3xl:p-8"

// Flex布局
"flex flex-col lg:flex-row gap-6 lg:gap-8"
```

---

*文档生成日期: 2026年4月23日*
