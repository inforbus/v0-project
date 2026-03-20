#!/bin/bash
if [ -f "/vercel/share/v0-project/public/videos/banner/banner-1.mp4" ]; then
  echo "[v0] ✓ 视频文件已存在"
  echo "[v0] 文件大小: $(stat -f%z /vercel/share/v0-project/public/videos/banner/banner-1.mp4 2>/dev/null || stat -c%s /vercel/share/v0-project/public/videos/banner/banner-1.mp4) bytes"
else
  echo "[v0] ✗ 视频文件未找到"
fi
