import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIDEO_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%E6%9C%8814%E6%97%A5%20%281%29-UNFfSjj1SKya5DDcw8S7Mo5wkWahjb.mp4';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'banner');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'banner-video.mp4');

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`[v0] Created directory: ${OUTPUT_DIR}`);
}

// 如果文件已存在，删除它
if (fs.existsSync(OUTPUT_FILE)) {
  fs.unlinkSync(OUTPUT_FILE);
  console.log(`[v0] Removed existing file: ${OUTPUT_FILE}`);
}

// 下载视频
console.log(`[v0] Downloading video from: ${VIDEO_URL}`);
console.log(`[v0] Saving to: ${OUTPUT_FILE}`);

const file = fs.createWriteStream(OUTPUT_FILE);
let downloadedSize = 0;

https.get(VIDEO_URL, (response) => {
  const totalSize = parseInt(response.headers['content-length'], 10);
  
  response.on('data', (chunk) => {
    downloadedSize += chunk.length;
    const percent = ((downloadedSize / totalSize) * 100).toFixed(2);
    process.stdout.write(`\r[v0] Download progress: ${percent}%`);
  });

  response.pipe(file);

  file.on('finish', () => {
    file.close();
    console.log(`\n[v0] Video download complete! Saved to: ${OUTPUT_FILE}`);
    console.log(`[v0] File size: ${(downloadedSize / 1024 / 1024).toFixed(2)} MB`);
  });

  file.on('error', (err) => {
    fs.unlink(OUTPUT_FILE, () => {});
    console.error(`[v0] Error writing file: ${err.message}`);
    process.exit(1);
  });
}).on('error', (err) => {
  fs.unlink(OUTPUT_FILE, () => {});
  console.error(`[v0] Error downloading file: ${err.message}`);
  process.exit(1);
});
