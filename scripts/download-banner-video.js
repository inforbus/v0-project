import fs from 'fs';
import path from 'path';

const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%E6%9C%8814%E6%97%A5%20%281%29-UNFfSjj1SKya5DDcw8S7Mo5wkWahjb.mp4';
const outputDir = '/vercel/share/v0-project/public/videos/banner';
const outputPath = path.join(outputDir, 'banner-1.mp4');

console.log('[v0] 开始下载banner视频...');
console.log('[v0] 输出路径:', outputPath);

// 下载视频
async function downloadVideo() {
  try {
    console.log('[v0] 正在从CDN下载视频...');
    const response = await fetch(videoUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const bytes = Buffer.from(buffer);
    
    // 使用流式写入
    const writeStream = fs.createWriteStream(outputPath);
    
    writeStream.write(bytes);
    writeStream.end();
    
    writeStream.on('finish', () => {
      console.log(`[v0] ✓ 视频下载完成！`);
      console.log(`[v0] 文件大小: ${(bytes.length / 1024 / 1024).toFixed(2)} MB`);
      console.log(`[v0] 保存位置: ${outputPath}`);
      process.exit(0);
    });
    
    writeStream.on('error', (err) => {
      console.error('[v0] ✗ 文件写入失败:', err.message);
      process.exit(1);
    });
  } catch (err) {
    console.error('[v0] ✗ 下载失败:', err.message);
    process.exit(1);
  }
}

// 执行下载
downloadVideo();
