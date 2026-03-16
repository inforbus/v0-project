#!/usr/bin/env python3
"""为项目下载所有缺失的图片到正确位置"""

import os
import sys
from pathlib import Path
import requests

# 使用环境变量或者直接指定路径
PROJECT_ROOT = Path(os.getcwd())

# 如果当前目录不是项目根，尝试查找
if not (PROJECT_ROOT / "app").exists():
    # 尝试找scripts目录的父目录
    possible_root = Path(__file__).parent.parent if '__file__' in dir() else Path("/vercel/share/v0-project")
    if (possible_root / "app").exists():
        PROJECT_ROOT = possible_root

print(f"[v0] 项目根目录: {PROJECT_ROOT}")

# 验证项目根目录
if not (PROJECT_ROOT / "app").exists() or not (PROJECT_ROOT / "package.json").exists():
    print(f"[v0] ✗ 无法确定正确的项目根目录")
    print(f"[v0] 当前目录: {os.getcwd()}")
    sys.exit(1)

# 所有需要下载的图片映射
IMAGES_TO_DOWNLOAD = {
    # 客户LOGO (33个)
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E5%BC%80%E5%8F%91%E9%93%B6%E8%A1%8C-QJdfdGZNIsnDisTWkbWsVwA0twOW0N.png": "public/images/customers/ndb.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%B3%E5%AE%89%E7%A7%91%E6%8A%80-xP9pkTi2BHHS4KVnGmteqwog1u0Lf8.webp": "public/images/customers/pingan-tech.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E5%BC%80%E5%8F%91%E6%8A%95%E8%B5%84%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-iWXxncUuKsQMZ5r5NtBexjmXCGu4xM.png": "public/images/customers/cidg.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%9C%E9%A3%8E%E6%B1%BD%E8%BD%A6%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-YuEYHQEzCVX3UayJstXwuHPG6Lbn7l.png": "public/images/customers/dongfeng.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B0%B8%E8%AF%9A%E4%BF%9D%E9%99%A9-3Klfelanu55QyaM7DcSXK4JZNQeP8R.png": "public/images/customers/yongcheng.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E8%83%BD%E6%BA%90%E9%9B%86%E5%9B%A2.jpg-fj8aRQ0JNf9smG4X1kKhhPbWePsQLA.png": "public/images/customers/shandong-energy.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E9%BB%84%E9%87%91%E9%9B%86%E5%9B%A2-F735TVhIShdkZ0Cm1299UwfIHRf7kH.jpg": "public/images/customers/shandong-gold.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C-DCJSc5WeEczMx25juDBvln6gKpzbiQ.png": "public/images/customers/icbc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C-QspcDnw5FdfYdPpWteNWEPJ1AsRulx.png": "public/images/customers/cmbchina.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8B%9B%E5%95%86%E5%B1%80%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Xs5BU1S5TdTp8QTucenxvetH9oubTs.png": "public/images/customers/coc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B5%AA%E6%BD%AE-5p5acCjUSHCcOu6IM16b2dbYJDs8ix.png": "public/images/customers/inspur.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B9%96%E5%8D%97%E9%93%B6%E8%A1%8C%EF%BC%88%E5%8D%8E%E8%9E%8D%E6%B9%98%E6%B1%9F%E9%93%B6%E8%A1%8C%E6%9B%B4%E5%90%8D%EF%BC%89-aXpKMwJ8E7wGlGT2Kf4mVXXDJqFHb5.png": "public/images/customers/hunan-bank.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E6%8A%95%E8%B4%A2%E5%8A%A1%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Ewio7H5oodUBAVp2ae6JZeaqc4cDON.png": "public/images/customers/guotou-finance.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%BF%E5%B7%9E%E5%86%9C%E5%95%86%E8%A1%8C-JCredxRnJvGmvs5fONWkhh0SY5za16.png": "public/images/customers/gzrcb.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%BF%E5%8F%91%E9%93%B6%E8%A1%8C-waESbZ4nDJqbQyO61QcLm5lAzmwpsJ.png": "public/images/customers/cib.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%B4%E4%B8%9A%E9%93%B6%E8%A1%8C-7czOLZOZ1OhoWy7r3cjVQGKAewJJxs.png": "public/images/customers/cib-xingye.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%85%B5%E5%99%A8%E5%B7%A5%E4%B8%9A%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-keXrfASMCnX1ANixeSVchG13T3EYel.jpg": "public/images/customers/norinco.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%BD%90%E9%B2%81%E9%93%B6%E8%A1%8C-xjfWBrVO1q3T7ql2sz4JMd3QoMYBfV.png": "public/images/customers/qilu-bank.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E7%94%B5%E6%8A%95-ZVKZkpJmECVjdDeKihsHTodHBEbsJg.png": "public/images/customers/spic.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%BF%A1%E6%81%AF%E9%80%9A%E4%BF%A1%E7%A7%91%E6%8A%80%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8.jpg-4Y4xZHIS8pFRt18UYlacIiCLwBITQo.png": "public/images/customers/chitc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E7%94%B5%E6%B0%94%E8%A3%85%E5%A4%87%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-tKd5Ty5mMBjhhFyU9nt8vCwVmT35SX.png": "public/images/customers/ceeg.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E9%93%9D%E4%B8%9A%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-VBwypVt2TTc1HGPmhblVS6FBgg2jGs.png": "public/images/customers/chinalco.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E8%91%9B%E6%B4%B2%E5%9D%9D%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-pYL8znWzTcXGRbYQGWptx4n2dRmFNP.png": "public/images/customers/ctgc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E8%88%AA%E7%A9%BA%E6%B2%B9%E6%96%99%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E4%B8%AD%E5%9B%BD%E8%88%AA%E6%B2%B9%EF%BC%89-AEG1GEPRngqRo44ooIrvrZ5ktPKtCv.png": "public/images/customers/caog.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E6%B3%B0%E8%AF%81%E5%88%B8-TXFFc92YbGsJhixZuhADLEpPJaRZIX.png": "public/images/customers/citic-securities.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%93%B6%E8%A1%8C-lMLUgET4ZhUuLZFm5aWya7xHsPgaMD.webp": "public/images/customers/pbc.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%86%9C%E4%B8%9A%E9%93%B6%E8%A1%8C-0sJWIXSHG0Ag97EEpWdI0staLk0Pno.png": "public/images/customers/abc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E6%B0%91%E7%94%9F%E9%93%B6%E8%A1%8C-k8kwdDc0lHpq1fmlqhMfcL1UtrIowv.png": "public/images/customers/cmbc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C-Gv4iL9ZbL9tNabOKdGvSLaDdqpobiN.png": "public/images/customers/boc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%B8%AD%E8%BD%A6%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-35c45nZyuHHnJ0cBSba82njkj8XXWa.png": "public/images/customers/crc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BB%BA-ZLzO7Fm1YxL5yiMTKoZvIMhbPsy4ty.jpg": "public/images/customers/powerchina.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%A4%AA%E5%B9%B3%E4%BF%9D%E9%99%A9-vcLP7XeMjLue1p3iL5ESspQCZdniAO.png": "public/images/customers/cptpp.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%BA%94%E7%9F%BF%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-c1G5f23dAM32GNcuWsEjGJpfeuMSwv.png": "public/images/customers/minmetals.png",
}

print(f"[v0] 开始下载 {len(IMAGES_TO_DOWNLOAD)} 张图片...")

downloaded = 0
for url, relative_path in IMAGES_TO_DOWNLOAD.items():
    full_path = PROJECT_ROOT / relative_path
    full_path.parent.mkdir(parents=True, exist_ok=True)
    
    try:
        if not full_path.exists():
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                with open(full_path, 'wb') as f:
                    f.write(response.content)
                downloaded += 1
                print(f"[v0] ✓ 已下载: {relative_path}")
            else:
                print(f"[v0] ✗ 下载失败: {relative_path} (HTTP {response.status_code})")
        else:
            print(f"[v0] ℹ 已存在: {relative_path}")
    except Exception as e:
        print(f"[v0] ✗ 错误: {relative_path} - {str(e)[:50]}")

print(f"[v0] 下载完成! 新增 {downloaded} 张图片")
