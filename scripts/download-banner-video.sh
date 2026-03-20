#!/bin/bash

# 下载视频的脚本
VIDEO_URL="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%E6%9C%8814%E6%97%A5%20%281%29-UNFfSjj1SKya5DDcw8S7Mo5wkWahjb.mp4"
OUTPUT_FILE="/vercel/share/v0-project/public/videos/banner/banner-1.mp4"

echo "开始下载banner视频..."
echo "下载URL: $VIDEO_URL"
echo "保存到: $OUTPUT_FILE"

curl -L -o "$OUTPUT_FILE" "$VIDEO_URL"

if [ $? -eq 0 ]; then
    echo "✓ 视频下载完成！"
    ls -lh "$OUTPUT_FILE"
else
    echo "✗ 下载失败"
    exit 1
fi
