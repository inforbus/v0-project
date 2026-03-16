import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import sharp from 'sharp';

const IMAGES = {
  "banner-api-gateway": {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=75&auto=format",
    width: 1920,
    format: "webp",
    quality: 75,
  },
  "banner-middleware": {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=75&auto=format",
    width: 1920,
    format: "webp",
    quality: 75,
  },
  "qr-wechat": {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-57sFPmnhiXZUGIDptfDZm3lWnVvXJc.png",
    width: 144,
    format: "png",
    quality: 95,
  },
  "qr-video": {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%812-ZvQiroB73HZa0RR8y9kaVvioBvP79A.png",
    width: 144,
    format: "png",
    quality: 95,
  },
  "architecture-ai-agent": {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%B6%E6%9E%84%E5%9B%BE-qte6VDj3U4iS74yOekcWo9DCTojP0r.png",
    width: 1200,
    format: "webp",
    quality: 90,
  },
  "architecture-middleware": {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png",
    width: 1200,
    format: "webp",
    quality: 90,
  },
  "icon-service": {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%A8%E7%BA%BF-9UdxG92GVQ7UZ44cfJw5DbpK3kU5VT.png",
    width: 72,
    format: "webp",
    quality: 90,
  },
};

const imageDir = path.join(process.cwd(), 'public', 'images');

// Create directory if it doesn't exist
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

function download(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

async function processImage(name, config) {
  try {
    console.log(`[v0] Downloading ${name}...`);
    const buffer = await download(config.url);
    
    const outputExt = config.format === 'png' ? '.png' : '.webp';
    const outputPath = path.join(imageDir, `${name}${outputExt}`);
    
    let processedBuffer = buffer;
    
    if (config.format === 'webp') {
      processedBuffer = await sharp(buffer)
        .resize(config.width, null, { withoutEnlargement: true })
        .webp({ quality: config.quality, effort: 6 })
        .toBuffer();
    } else if (config.format === 'png') {
      processedBuffer = await sharp(buffer)
        .resize(config.width, null, { withoutEnlargement: true })
        .png({ quality: config.quality, progressive: true })
        .toBuffer();
    }
    
    fs.writeFileSync(outputPath, processedBuffer);
    const sizeKb = (processedBuffer.length / 1024).toFixed(1);
    console.log(`[v0] ✓ Saved ${name} (${sizeKb}KB)`);
  } catch (error) {
    console.error(`[v0] ✗ Failed to process ${name}:`, error.message);
  }
}

async function main() {
  console.log('[v0] Starting image download and compression...');
  
  for (const [name, config] of Object.entries(IMAGES)) {
    await processImage(name, config);
  }
  
  console.log('[v0] Image processing completed!');
}

main().catch(console.error);
