#!/usr/bin/env python3
import urllib.request
import os
from pathlib import Path

# 视频URL
VIDEO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%E6%9C%8814%E6%97%A5%20%281%29-UNFfSjj1SKya5DDcw8S7Mo5wkWahjb.mp4"

# 本地保存路径
PROJECT_DIR = Path("/vercel/share/v0-project")
PUBLIC_DIR = PROJECT_DIR / "public" / "images" / "banner"
OUTPUT_FILE = PUBLIC_DIR / "banner-video.mp4"

# 创建目录（如果不存在）
PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

print(f"[v0] 开始下载视频...")
print(f"[v0] 源URL: {VIDEO_URL}")
print(f"[v0] 保存路径: {OUTPUT_FILE}")

try:
    # 下载视频
    urllib.request.urlretrieve(VIDEO_URL, OUTPUT_FILE)
    
    # 验证文件大小
    file_size = os.path.getsize(OUTPUT_FILE)
    print(f"[v0] 视频下载成功！")
    print(f"[v0] 文件大小: {file_size / (1024*1024):.2f} MB")
    print(f"[v0] 文件路径: {OUTPUT_FILE}")
    
except Exception as e:
    print(f"[v0] 错误: 下载失败 - {str(e)}")
    exit(1)

print(f"[v0] 完成！")
