# 内网部署图片本地化指南

## 问题描述
在内网环境中部署时，外部CDN图片无法加载。此方案将所有外部图片转换为本地资源。

## 解决方案

### 1. 图片管理结构
```
public/images/
├── home/
│   ├── customers.jpg        # 首页客户案例
│   └── honors.jpg           # 首页公司荣誉
├── footer/
│   ├── qrcode-wechat.png    # 页脚微信二维码
│   └── qrcode-public.png    # 页脚公众号二维码
├── icons/
│   └── online-service.png   # 在线服务图标
├── diagrams/
│   ├── middleware-arch.png  # 中间件架构图
│   └── ai-agent-arch.png    # AI智能体架构图
├── banners/
│   ├── home-banner.jpg      # 首页banner
│   ├── about-banner.jpg     # 关于我们banner
│   └── ...
└── cases/
    ├── case-1.jpg          # 客户案例缩略图
    └── ...
```

### 2. 使用 Image URL 映射工具

在 `lib/image-url-mapping.ts` 中维护所有URL映射。该文件提供两个函数：

```typescript
// 方式1：使用映射工具
import { getImageUrl } from '@/lib/image-url-mapping'

const imageUrl = getImageUrl('https://external-url.com/image.jpg')

// 方式2：直接使用本地路径
const localImageUrl = '/images/home/customers.jpg'
```

### 3. 部署流程

#### 步骤1：准备本地图片
将所有需要的图片下载或转换为JPEG格式，放入对应的 `public/images/` 子目录。

#### 步骤2：图片优化建议
- **格式**：使用JPEG格式（质量80%），小于2MB
- **尺寸**：根据用途调整
  - Banner：1920x600px 以下
  - 缩略图：600x400px 以下
  - 图标：200x200px 以下
- **工具**：使用ImageMagick或Pillow进行批量优化
  ```bash
  # ImageMagick 示例
  convert input.png -quality 80 -resize 1920x600 output.jpg
  ```

#### 步骤3：代码迁移
更新所有使用外部URL的文件，改为本地路径：

**示例：footer.tsx**
```typescript
// 旧代码
src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qrcode-xxx.png"

// 新代码
src="/images/footer/qrcode-wechat.png"
```

#### 步骤4：验证和测试
```bash
# 1. 开发环境测试
npm run dev

# 2. 生产构建
npm run build

# 3. 本地预览生产环境
npm run start

# 4. 检查所有图片是否正确加载
# - 打开浏览器开发者工具
# - 检查Network标签中的所有图片请求
# - 确认所有图片状态码为200
```

### 4. 关键文件需要更新

需要以下文件中的外部URL替换为本地路径：

#### 核心组件
- `components/shared/footer.tsx` - 页脚二维码
- `components/online-service-widget.tsx` - 在线服务图标
- `components/home/hero-section.tsx` - 首页banner

#### 数据文件
- `lib/solutions-data.ts` - 方案架构图
- `lib/ws-cases-data.ts` - 案例缩略图
- `lib/ump-cases-data.ts` - 案例缩略图
- `app/cases/[slug]/page.tsx` - 案例详情图片

#### Hero Section 组件
- `components/*/hero-section.tsx` - 各页面banner

### 5. 性能优化建议

#### A. 图片压缩
```bash
# 使用 sharp-cli 批量压缩
npx sharp -i 'public/images/**/*.{jpg,png}' -o 'public/images/' -f webp --quality 80

# 或使用 ImageMagick
for file in public/images/**/*.png; do
  convert "$file" -quality 80 -define png:compression-level=9 "$file"
done
```

#### B. 在 next.config.mjs 中优化图片处理
```javascript
export default {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

#### C. 使用 Next.js Image 组件
```typescript
import Image from 'next/image'

<Image
  src="/images/home/customers.jpg"
  alt="客户案例"
  width={1920}
  height={1080}
  quality={85}
  priority // 首屏图片添加 priority
/>
```

### 6. 验证清单

部署前检查：
- [ ] 所有外部URL已更新为本地路径
- [ ] `public/images/` 目录包含所有必需的图片文件
- [ ] 图片文件大小合理（单个文件 < 500KB）
- [ ] 所有HTML/TSX文件中的URL已更新
- [ ] 构建成功，无任何资源加载错误
- [ ] 本地预览时所有图片正确显示
- [ ] 生产构建后，访问页面无404错误

### 7. 故障排查

**问题1：图片加载失败 (404)**
- 检查文件路径是否正确
- 确认文件名大小写匹配
- 验证文件是否存在于 `public/images/` 中

**问题2：构建后图片路径错误**
- 检查 `next.config.mjs` 中的 `basePath` 配置
- 如果有 `basePath`，确保使用 `useRouter()` 或 `Image` 组件正确处理路径

**问题3：生产环境性能低下**
- 检查图片文件大小
- 确认已启用 Next.js Image 优化
- 考虑使用 WebP 格式

### 8. 自动化脚本维护

系统中提供了以下脚本用于图片管理：
- `scripts/download-images.py` - 下载关键图片
- `scripts/download-qrcodes.py` - 下载二维码
- `scripts/replace-urls.py` - 替换代码中的URL

如需再次运行这些脚本，使用：
```bash
uv run scripts/download-images.py
uv run scripts/download-qrcodes.py
uv run scripts/replace-urls.py
```
