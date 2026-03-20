import fs from 'fs';
import path from 'path';

// 直接使用项目的绝对路径
const projectRoot = '/vercel/share/v0-project';

const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%E6%9C%8814%E6%97%A5%20%281%29-UNFfSjj1SKya5DDcw8S7Mo5wkWahjb.mp4';
const outputDir = path.join(projectRoot, 'public', 'videos', 'banner');
const outputPath = path.join(outputDir, 'banner-1.mp4');

// 下载视频
async function downloadVideo() {
  try {
    console.log('[v0] 项目根目录:', projectRoot);
    console.log('[v0] 输出目录:', outputDir);
    console.log('[v0] 输出文件:', outputPath);
    console.log('[v0] ');
    
    // 确保目录存在
    console.log('[v0] 创建输出目录...');
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('[v0] ✓ 目录已创建');
    console.log('[v0] ');
    
    console.log('[v0] 正在下载视频...');
    const response = await fetch(videoUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const bytes = Buffer.from(buffer);
    
    console.log(`[v0] ✓ 下载完成 (${(bytes.length / 1024 / 1024).toFixed(2)} MB)`);
    console.log('[v0] ');
    
    // 写入文件
    console.log('[v0] 写入文件到本地...');
    fs.writeFileSync(outputPath, bytes);
    
    console.log(`[v0] ✓ 视频已保存！`);
    console.log(`[v0] 文件路径: ${outputPath}`);
    console.log('[v0] ');
    console.log('[v0] 下次需要更新HeroSection组件中的视频源地址为: /videos/banner/banner-1.mp4');
    process.exit(0);
  } catch (err) {
    console.error('[v0] ✗ 失败:', err.message);
    process.exit(1);
  }
}

// 执行下载
downloadVideo();
