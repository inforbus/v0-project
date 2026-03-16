#!/usr/bin/env python3
"""Download and compress images for offline use"""

import os
import json
import requests
from pathlib import Path
from PIL import Image
from io import BytesIO
import hashlib

# Create directories
script_dir = Path(__file__).parent
project_root = script_dir.parent
public_images = project_root / "public" / "images"
public_images.mkdir(parents=True, exist_ok=True)

# Image mapping configuration with URLs to download
IMAGES = {
    # Home page banners
    "banner-api-gateway": {
        "url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=75&auto=format",
        "width": 1920,
        "quality": 75,
    },
    "banner-middleware": {
        "url": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=75&auto=format",
        "width": 1920,
        "quality": 75,
    },
    # QR codes (keep original size)
    "qr-wechat": {
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%81-57sFPmnhiXZUGIDptfDZm3lWnVvXJc.png",
        "width": 144,
        "quality": 95,
    },
    "qr-video": {
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%8C%E7%BB%B4%E7%A0%812-ZvQiroB73HZa0RR8y9kaVvioBvP79A.png",
        "width": 144,
        "quality": 95,
    },
    # Architecture diagrams
    "architecture-ai-agent": {
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%B6%E6%9E%84%E5%9B%BE-qte6VDj3U4iS74yOekcWo9DCTojP0r.png",
        "width": 1200,
        "quality": 90,
    },
    "architecture-middleware": {
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-02-26%2009.48.54-dINeUw8HwaEHihoN4MlRtqH4ruXSaP.png",
        "width": 1200,
        "quality": 90,
    },
    # Icons
    "icon-service": {
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%A8%E7%BA%BF-9UdxG92GVQ7UZ44cfJw5DbpK3kU5VT.png",
        "width": 72,
        "quality": 90,
    },
}

def download_and_compress_image(name, config):
    """Download image and compress it"""
    try:
        print(f"Downloading {name}...")
        response = requests.get(config["url"], timeout=10)
        response.raise_for_status()
        
        # Open image
        img = Image.open(BytesIO(response.content))
        
        # Convert RGBA to RGB if necessary for JPEG
        if img.mode in ("RGBA", "LA", "P"):
            background = Image.new("RGB", img.size, (255, 255, 255))
            if img.mode == "P":
                img = img.convert("RGBA")
            background.paste(img, mask=img.split()[-1] if img.mode == "RGBA" else None)
            img = background
        
        # Resize based on width
        if config["width"] < img.width:
            ratio = config["width"] / img.width
            new_height = int(img.height * ratio)
            img = img.resize((config["width"], new_height), Image.Resampling.LANCZOS)
        
        # Determine output format
        if name.endswith("-qr") or "qr" in name.lower():
            # Keep as PNG for QR codes
            output_path = public_images / f"{name}.png"
            img.save(output_path, "PNG", optimize=True)
        else:
            # Convert to WebP for other images (better compression)
            output_path = public_images / f"{name}.webp"
            img.save(output_path, "WEBP", quality=config["quality"], method=6)
        
        file_size = output_path.stat().st_size / 1024
        print(f"✓ Saved {name} ({file_size:.1f}KB)")
        return str(output_path.relative_to(project_root))
        
    except Exception as e:
        print(f"✗ Failed to download {name}: {e}")
        return None

def main():
    """Main function"""
    print("Starting image download and compression...")
    
    image_map = {}
    
    for name, config in IMAGES.items():
        local_path = download_and_compress_image(name, config)
        if local_path:
            # Remove leading 'public/' for Next.js Image component
            image_map[name] = "/" + local_path.replace("public/", "")
    
    # Save image map
    map_file = project_root / "lib" / "image-map.ts"
    map_content = f"""// Auto-generated image map for offline usage
export const imageMap: Record<string, string> = {json.dumps(image_map, ensure_ascii=False, indent=2)}
"""
    
    map_file.parent.mkdir(parents=True, exist_ok=True)
    map_file.write_text(map_content)
    print(f"\n✓ Image map saved to {map_file.relative_to(project_root)}")
    print(f"\nTotal images processed: {len(image_map)}")

if __name__ == "__main__":
    main()
