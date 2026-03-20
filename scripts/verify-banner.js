import fs from 'fs';

const filePath = '/vercel/share/v0-project/public/videos/banner/banner-1.mp4';

try {
  const stats = fs.statSync(filePath);
  console.log('[v0] ✓ 视频文件已存在');
  console.log('[v0] 文件大小:', (stats.size / 1024 / 1024).toFixed(2), 'MB');
  console.log('[v0] 文件路径:', filePath);
} catch (err) {
  console.log('[v0] ✗ 文件不存在:', err.message);
}
