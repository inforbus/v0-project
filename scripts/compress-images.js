import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const customersDir = path.resolve(projectRoot, 'public/images/customers');
const honorsDir = path.resolve(projectRoot, 'public/images/honors');

async function compressImages(dirPath, dirName) {
  console.log(`\n[v0] 开始压缩 ${dirName} 目录的图片...`);
  console.log(`[v0] 目录路径: ${dirPath}`);
  
  if (!fs.existsSync(dirPath)) {
    console.error(`[v0] ✗ 目录不存在: ${dirPath}`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    
    try {
      const ext = path.extname(file).toLowerCase();
      
      if (ext === '.png') {
        // PNG 压缩
        await sharp(filePath)
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(`${filePath}.compressed`);
      } else if (ext === '.jpg' || ext === '.jpeg') {
        // JPG 压缩
        await sharp(filePath)
          .jpeg({ quality: 82, progressive: true })
          .toFile(`${filePath}.compressed`);
      } else if (ext === '.webp') {
        // WEBP 保持高质量
        await sharp(filePath)
          .webp({ quality: 85 })
          .toFile(`${filePath}.compressed`);
      } else {
        continue;
      }
      
      const compressedStats = fs.statSync(`${filePath}.compressed`);
      const compressedSize = compressedStats.size;
      const ratio = ((1 - compressedSize / originalSize) * 100).toFixed(2);
      
      // 替换原文件
      fs.renameSync(`${filePath}.compressed`, filePath);
      
      totalOriginalSize += originalSize;
      totalCompressedSize += compressedSize;
      
      console.log(`[v0] ✓ ${file}: ${(originalSize / 1024).toFixed(2)}KB → ${(compressedSize / 1024).toFixed(2)}KB (节省 ${ratio}%)`);
    } catch (error) {
      console.error(`[v0] ✗ 压缩 ${file} 失败:`, error.message);
    }
  }
  
  const totalRatio = totalOriginalSize > 0 ? ((1 - totalCompressedSize / totalOriginalSize) * 100).toFixed(2) : 0;
  console.log(`\n[v0] ${dirName} 目录压缩完成:`);
  console.log(`[v0] 总大小: ${(totalOriginalSize / 1024).toFixed(2)}KB → ${(totalCompressedSize / 1024).toFixed(2)}KB (总节省 ${totalRatio}%)`);
}

async function main() {
  console.log('[v0] 开始压缩图片...');
  
  try {
    await compressImages(customersDir, '客户部分');
    await compressImages(honorsDir, '荣誉部分');
    
    console.log('\n[v0] ✓ 所有图片压缩完成！');
  } catch (error) {
    console.error('[v0] 图片压缩过程出错:', error);
    process.exit(1);
  }
}

main();
