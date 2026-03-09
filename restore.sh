#!/bin/bash
cd /vercel/share/v0-project
git checkout -- .
git clean -fd
echo "文件已恢复"
