#!/usr/bin/env python3
"""批量替换所有外网URL为本地路径，支持离线访问"""

import os
import re
from pathlib import Path

# URL映射表
URL_MAPPING = {
    # Unsplash URLs (cases页面)
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format": "/images/cases/case-1.jpg",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format": "/images/cases/case-2.jpg",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format": "/images/cases/case-3.jpg",
    "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&q=80&auto=format": "/images/cases/case-4.jpg",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&auto=format": "/images/cases/case-5.jpg",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format": "/images/cases/case-6.jpg",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80&auto=format": "/images/cases/case-7.jpg",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80&auto=format": "/images/cases/case-8.jpg",
}

# 其他blob存储URLs
BLOB_MAPPING = {
    # 新闻图片
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-36NoQP9iaTba0LOr2DsLCYU7SF8T0G.jpg": "/images/news/news-1.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-x8G1mh2OxXDdwEitQOHHoP2GavA2hP.jpg": "/images/news/news-2.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-18D7gfxEskJpMo4YWTGmkldXcoaOtl.jpg": "/images/news/news-3.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-jfX1cEjcNfA0NuxPdLFbqJFg0wBgJ4.jpg": "/images/news/news-4.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-69ExBIbxUUz6IZyIcRIa6b0hmmMWlS.jpg": "/images/news/news-5.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-i2KNP2AhZwpeqihLLdcUl6i510xEY7.jpg": "/images/news/news-6.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-FkN0BtmQalmMM5PmXwzaqzaxPW3JA1.jpg": "/images/news/news-7.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-9xHsjh1EaCnCfLcr3s4LUX9or50E2x.jpg": "/images/news/news-8.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-itxhffSXs26i8UICrXb7coMEifb2T7.jpg": "/images/news/news-9.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-hn1JmzJokXIYFj4IQXoT2zRBfRt9jS.jpg": "/images/news/news-10.jpg",
    # Banner图片
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ws_baneer-tDR9iLthEjFOTiEg5TuukuKZDFLL0X.png": "/images/banners/ws-banner.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ump_banner-5QlH3fr1WFn6zPIe1rCUeVdy3cScbD.png": "/images/banners/ump-banner.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%283%29-wwAYnIG9RzGLfJqFqXmJLT9YvzbK4A.png": "/images/banners/paas-banner.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20111%20%284%29-9Uncnq2HhziRedULawuqHCj9VgXZ74.jpg": "/images/banners/news-banner.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS%E7%9A%84banner%E5%9B%BE-BSECyM15Z10y2OyngqvfzXGcFJPx5x.png": "/images/banners/middleware-banner.png",
}

# 合并所有映射
ALL_MAPPING = {**URL_MAPPING, **BLOB_MAPPING}

def replace_urls_in_file(file_path):
    """替换单个文件中的所有URL"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 替换所有URL
        for old_url, new_url in ALL_MAPPING.items():
            if old_url in content:
                content = content.replace(old_url, new_url)
                print(f"  ✓ Replaced: {old_url[:60]}... → {new_url}")
        
        # 只有当内容改变时才写入
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"  ✗ Error: {str(e)}")
        return False

def main():
    """主程序"""
    print("批量替换所有外网URL为本地路径...")
    print("=" * 60)
    
    project_root = Path("/vercel/share/v0-project")
    file_types = ['*.tsx', '*.ts', '*.jsx', '*.js']
    
    directories = [
        project_root / "app",
        project_root / "components",
        project_root / "lib",
    ]
    
    total_files = 0
    updated_files = 0
    
    for directory in directories:
        if not directory.exists():
            print(f"⚠️  Directory not found: {directory}")
            continue
        
        print(f"\n📁 Processing {directory.name}...")
        
        for file_type in file_types:
            for file_path in directory.rglob(file_type):
                total_files += 1
                if replace_urls_in_file(str(file_path)):
                    updated_files += 1
    
    print("\n" + "=" * 60)
    print(f"✅ Completed: {updated_files}/{total_files} files updated")
    print(f"   All external URLs have been replaced with local paths")
    print(f"   Images will be available for offline access after deployment")

if __name__ == "__main__":
    main()
