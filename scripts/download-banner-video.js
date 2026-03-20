import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%E6%9C%8814%E6%97%A5%20%281%29-UNFfSjj1SKya5DDcw8S7Mo5wkWahjb.mp4';
const outputDir = path.join(__dirname, '../public/videos/banner');
const outputPath = path.join(outputDir, 'banner-1.mp4');

// 创建目录
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`✓ 创建目录: ${outputDir}`);
}

// 下载视频
function downloadVideo() {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    
    https.get(videoUrl, (response) => {
      const totalSize = parseInt(response.headers['content-length'], 10);
      let downloadedSize = 0;

      response.on('data', (chunk) => {
        downloadedSize += chunk.length;
        const percent = ((downloadedSize / totalSize) * 100).toFixed(2);
        process.stdout.write(`\r下载进度: ${percent}% (${(downloadedSize / 1024 / 1024).toFixed(2)} MB / ${(totalSize / 1024 / 1024).toFixed(2)} MB)`);
      });

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`\n✓ 视频已保存到: ${outputPath}`);
        resolve();
      });

      file.on('error', (err) => {
        fs.unlink(outputPath, () => {}); // 删除文件
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {}); // 删除文件
      reject(err);
    });
  });
}

// 执行下载
downloadVideo()
  .then(() => {
    console.log('✓ 视频下载完成！');
    process.exit(0);
  })
  .catch((err) => {
    console.error('✗ 下载失败:', err.message);
    process.exit(1);
  });
