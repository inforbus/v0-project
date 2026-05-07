# 央企中间件统一管理平台 - 三级详情页完整代码包

## 📋 项目概览

这是一个完整的案例详情页（三级页面），展示了"央企中间件统一管理平台"项目的全部信息。

---

## 📁 文件结构

```
├── lib/
│   └── cases-data.ts              # 案例数据定义文件
├── app/
│   └── cases/
│       └── [slug]/
│           └── page.tsx           # 动态详情页面
└── components/
    └── cases/
        └── other-cases.tsx        # 相关案例展示组件
```

---

## 📝 核心数据结构

### 案例基本信息
```javascript
{
  slug: "central-enterprise-middleware-platform",
  title: "央企中间件统一管理平台",
  tag: "企业",
  desc: "为央企构建全栈式自主可控的中间件统一管理平台，实现中间件产品和服务的标准化管理",
  photo: "/images/case-central-enterprise.jpg",
  metrics: "企业级"
}
```

### 案例详情内容

#### 1. 项目背景
某电力企业中间件数量和版本日益增多，授权管理分散，异地灾备可控性差，传统人工运维效率低、风险高，因此亟需建设统一中间件管理平台，实现版本、授权、实例和灾备统一管控，提高运维效率和业务可靠性。

#### 2. 项目挑战（4项）
- 中间件版本众多且缺乏全局可视化，难以统一掌控与分析使用情况
- 中间件授权信息分布分散，使用统计依赖人工，准确性难以保障
- 中间件实例数量庞大，缺乏统一管控和配置基线管理手段
- 中间件灾备切换可控性不足，效率低，缺乏集中管控机制

#### 3. 解决方案（4项）
- 统一版本管理：建立统一版本库，实时统计产品使用情况
- 集中授权统计：集中管理授权信息，实现自动汇总与使用监控
- 实例统一管控：实现中间件实例集中监控、配置基线与生命周期管理
- 可控灾备切换：提供控制灾备切换界面与自动切换策略、高效的中间件高可用部署以及灾备切换功能，保障业务连续

#### 4. 项目成果（4项关键指标）
| 指标 | 数值 |
|------|------|
| 全局中间件实例 | 2000+ |
| 管理效率提升 | 30%+ |
| 人工工作量降低 | 80% |
| 灾备切换效率提升 | 2倍+ |

#### 5. 技术栈
- InforSuite AS
- InforSuite LB

#### 6. 内容版块（2个）
1. **项目架构**
   - 平台采用微服务架构，通过虚拟机 Agent 与容器 Operator 分别实现虚拟机和容器环境下中间件的全生命周期管理；结合 Prometheus、Grafana 和 AlertManager 提供统一的监控与告警能力。
   - 配图：`/images/cases/central-architecture.png`

2. **核心能力**
   - 平台提供中间件全生命周期管理能力，包括产品统一管理、实例部署与启停、状态监控与巡检、配置基线管理、告警与策略执行，以及异地灾备保障，实现跨环境统一运维与业务连续性。
   - 配图：`/images/cases/central-capabilities.png`

---

## 🎯 页面布局

### 一、Header区域
- 响应式导覆盖层
- 动态背景图片

### 二、Hero Banner（320-520px高）
- 项目标签（企业、企业级等）
- 项目标题
- 项目描述文字

### 三、面包屑导航
- 首页 > 成功案例 > 央企中间件统一管理平台

### 四、主内容区
#### 1. 项目背景板块
- 标题 + 红色竖条装饰
- 完整背景文本

#### 2. 挑战与方案（双列布局）
- **左列**：项目挑战
  - 红色圆形图标
  - 4个要点列表
  - 红色圆点分隔符
  
- **右列**：解决方案
  - 绿色勾选图标
  - 4个方案列表
  - 红色圆点分隔符

#### 3. 项目成果
- 4个指标卡片（2x2 网格，lg以上为 1x4）
- 每个卡片有悬停效果（顶部红色条动画延伸）
- 显示数值和标签

#### 4. 内容版块（交替布局）
- 奇数版块：图片在左，文字在右
- 偶数版块：文字在左，图片在右
- 图片高度：300px（mobile），280px（lg以上）

#### 5. 技术栈展示
- 红色背景的标签列表
- 标签样式：`bg-[#BF1920]/5 border-[#BF1920]/15 text-[#BF1920]`

#### 6. 其他案例推荐
- 可滚动的案例卡片
- 支持左右滚动按钮
- 卡片宽度：300px (mobile) → 420px (3xl)

### 五、Footer

---

## 🎨 设计系统

### 色彩系统
- **主色**：红色 `#BF1920`
- **背景**：使用 `bg-background` 语义 token
- **文本**：`text-foreground`, `text-muted-foreground`
- **边框**：`border-border/40`, `border-border/60`

### 响应式断点
- Mobile: 基础样式
- md (768px): 中等屏幕
- lg (1024px): 大屏幕，两列布局
- 3xl (1920px): 超大屏幕

### 间距规范
- 水平内边距：px-4 (mobile) → px-8 (lg)
- 垂直间距：mb-12 (mobile) → mb-16 (lg) → mb-20 (3xl)
- 最大宽度容器：max-w-6xl → 2xl:max-w-[1100px] → 3xl:max-w-[1400px]

### 字体大小阶梯
- 标题：text-xl → md:text-2xl → 3xl:text-[28px]
- 正文：text-sm → md:text-base → lg:text-[15px] → 3xl:text-lg
- 副标题：text-lg → 3xl:text-xl

---

## 💻 核心组件说明

### SectionTitle 组件
```tsx
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-6 w-1 rounded-full bg-[#BF1920] 3xl:h-7" />
      <h2 className="text-xl font-bold text-foreground md:text-2xl 3xl:text-[28px]">
        {children}
      </h2>
    </div>
  )
}
```
- 用于所有板块的标题
- 左侧有红色竖条装饰
- 响应式文字大小

### OtherCases 组件
- 显示除当前案例外的其他案例
- 支持左右滚动，平滑动画
- 卡片悬停效果：图片缩放、阴影增加

---

## 📱 响应式设计要点

1. **Hero 高度**：
   - Mobile: 320px
   - Tablet: 400px  
   - Desktop: 440px
   - 3xl: 520px

2. **两列布局转换**：
   - Mobile: 单列 (grid-cols-1)
   - lg以上: 两列 (lg:grid-cols-2)

3. **成果指标网格**：
   - Mobile: 2x2 (grid-cols-2)
   - lg以上: 1x4 (lg:grid-cols-4)

4. **内容版块布局**：
   - Mobile: 单列垂直排列
   - lg以上: Flex 横排，交替方向

---

## 🔗 相关路由结构

```
/                                    # 首页
├── /#cases                          # 案例区域锚点
└── /cases/[slug]                    # 案例详情页
    ├── /central-enterprise-middleware-platform    # 当前页面
    ├── /police-data-governance                    # 其他案例
    ├── /national-highway-toll-stations
    └── ...其他案例
```

---

## 📦 依赖项

- Next.js (App Router)
- React
- next/image (图片优化)
- next/link (链接导航)

---

## ✨ 特殊功能

1. **静态参数生成**：`generateStaticParams()` - 预生成所有案例的静态页面
2. **异步参数处理**：`params: Promise<{ slug: string }>` - Next.js 16 新特性
3. **404 处理**：使用 `notFound()` 处理不存在的案例
4. **图片优化**：使用 Next.js Image 组件优化加载
5. **响应式图片**：sizes 属性优化不同屏幕尺寸的加载

---

## 🚀 使用方式

### 添加新案例

1. 在 `lib/cases-data.ts` 中的 `cases` 数组添加基本信息
2. 在同文件的 `caseDetails` 对象中添加详情数据
3. 页面会自动通过动态路由生成 `/cases/[新slug]`

### 修改样式

- 使用 CSS variables 修改主色（当前为 `#BF1920`）
- 调整 Tailwind 响应式前缀以改变布局断点
- 修改间距数值即可改变整体留白

### 添加新的内容板块

在 `contentSections` 数组中添加新对象：
```javascript
{
  title: "新板块标题",
  text: "板块描述文字",
  image: "/images/path/to/image.png"
}
```

---

## 📊 页面性能指标

- 响应式设计：mobile-first
- 图片懒加载：使用 Next.js Image 组件
- 静态生成：通过 `generateStaticParams()` 生成所有页面
- 无 JavaScript 依赖：几乎所有交互仅在 OtherCases 组件（滚动控制）

