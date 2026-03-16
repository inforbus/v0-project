#!/usr/bin/env python3
"""
完整的外部URL检测和替换脚本
自动下载所有缺失的客户logo并替换所有源代码中的URL
"""

import os
import re
import sys
from pathlib import Path
from urllib.parse import unquote
import requests
from typing import Dict, List, Tuple

# 所有需要替换的URL映射
URL_MAPPING = {
    # 客户LOGO (33个)
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E5%BC%80%E5%8F%91%E9%93%B6%E8%A1%8C-QJdfdGZNIsnDisTWkbWsVwA0twOW0N.png": "/images/customers/ndb.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%B3%E5%AE%89%E7%A7%91%E6%8A%80-xP9pkTi2BHHS4KVnGmteqwog1u0Lf8.webp": "/images/customers/pingan-tech.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E5%BC%80%E5%8F%91%E6%8A%95%E8%B5%84%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-iWXxncUuKsQMZ5r5NtBexjmXCGu4xM.png": "/images/customers/cidg.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%9C%E9%A3%8E%E6%B1%BD%E8%BD%A6%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-YuEYHQEzCVX3UayJstXwuHPG6Lbn7l.png": "/images/customers/dongfeng.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B0%B8%E8%AF%9A%E4%BF%9D%E9%99%A9-3Klfelanu55QyaM7DcSXK4JZNQeP8R.png": "/images/customers/yongcheng.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E8%83%BD%E6%BA%90%E9%9B%86%E5%9B%A2.jpg-fj8aRQ0JNf9smG4X1kKhhPbWePsQLA.png": "/images/customers/shandong-energy.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B1%B1%E4%B8%9C%E9%BB%84%E9%87%91%E9%9B%86%E5%9B%A2-F735TVhIShdkZ0Cm1299UwfIHRf7kH.jpg": "/images/customers/shandong-gold.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C-DCJSc5WeEczMx25juDBvln6gKpzbiQ.png": "/images/customers/icbc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C-QspcDnw5FdfYdPpWteNWEPJ1AsRulx.png": "/images/customers/cmbchina.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8B%9B%E5%95%86%E5%B1%80%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Xs5BU1S5TdTp8QTucenxvetH9oubTs.png": "/images/customers/coc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B5%AA%E6%BD%AE-5p5acCjUSHCcOu6IM16b2dbYJDs8ix.png": "/images/customers/inspur.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B9%96%E5%8D%97%E9%93%B6%E8%A1%8C%EF%BC%88%E5%8D%8E%E8%9E%8D%E6%B9%98%E6%B1%9F%E9%93%B6%E8%A1%8C%E6%9B%B4%E5%90%8D%EF%BC%89-aXpKMwJ8E7wGlGT2Kf4mVXXDJqFHb5.png": "/images/customers/hunan-bank.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E6%8A%95%E8%B4%A2%E5%8A%A1%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Ewio7H5oodUBAVp2ae6JZeaqc4cDON.png": "/images/customers/guotou-finance.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%BF%E5%B7%9E%E5%86%9C%E5%95%86%E8%A1%8C-JCredxRnJvGmvs5fONWkhh0SY5za16.png": "/images/customers/gzrcb.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B9%BF%E5%8F%91%E9%93%B6%E8%A1%8C-waESbZ4nDJqbQyO61QcLm5lAzmwpsJ.png": "/images/customers/cib.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%B4%E4%B8%9A%E9%93%B6%E8%A1%8C-7czOLZOZ1OhoWy7r3cjVQGKAewJJxs.png": "/images/customers/cib-xingye.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%85%B5%E5%99%A8%E5%B7%A5%E4%B8%9A%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-keXrfASMCnX1ANixeSVchG13T3EYel.jpg": "/images/customers/norinco.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%BD%90%E9%B2%81%E9%93%B6%E8%A1%8C-xjfWBrVO1q3T7ql2sz4JMd3QoMYBfV.png": "/images/customers/qilu-bank.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B6%E7%94%B5%E6%8A%95-ZVKZkpJmECVjdDeKihsHTodHBEbsJg.png": "/images/customers/spic.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%BF%A1%E6%81%AF%E9%80%9A%E4%BF%A1%E7%A7%91%E6%8A%80%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8.jpg-4Y4xZHIS8pFRt18UYlacIiCLwBITQo.png": "/images/customers/chitc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E7%94%B5%E6%B0%94%E8%A3%85%E5%A4%87%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-tKd5Ty5mMBjhhFyU9nt8vCwVmT35SX.png": "/images/customers/ceeg.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E9%93%9D%E4%B8%9A%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-VBwypVt2TTc1HGPmhblVS6FBgg2jGs.png": "/images/customers/chinalco.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E8%91%9B%E6%B4%B2%E5%9D%9D%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-pYL8znWzTcXGRbYQGWptx4n2dRmFNP.png": "/images/customers/ctgc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E8%88%AA%E7%A9%BA%E6%B2%B9%E6%96%99%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%EF%BC%88%E4%B8%AD%E5%9B%BD%E8%88%AA%E6%B2%B9%EF%BC%89-AEG1GEPRngqRo44ooIrvrZ5ktPKtCv.png": "/images/customers/caog.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E6%B3%B0%E8%AF%81%E5%88%B8-TXFFc92YbGsJhixZuhADLEpPJaRZIX.png": "/images/customers/citic-securities.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%93%B6%E8%A1%8C-lMLUgET4ZhUuLZFm5aWya7xHsPgaMD.webp": "/images/customers/pbc.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%86%9C%E4%B8%9A%E9%93%B6%E8%A1%8C-0sJWIXSHG0Ag97EEpWdI0staLk0Pno.png": "/images/customers/abc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E6%B0%91%E7%94%9F%E9%93%B6%E8%A1%8C-k8kwdDc0lHpq1fmlqhMfcL1UtrIowv.png": "/images/customers/cmbc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C-Gv4iL9ZbL9tNabOKdGvSLaDdqpobiN.png": "/images/customers/boc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%B8%AD%E8%BD%A6%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-35c45nZyuHHnJ0cBSba82njkj8XXWa.png": "/images/customers/crc.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BB%BA-ZLzO7Fm1YxL5yiMTKoZvIMhbPsy4ty.jpg": "/images/customers/powerchina.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E5%A4%AA%E5%B9%B3%E4%BF%9D%E9%99%A9-vcLP7XeMjLue1p3iL5ESspQCZdniAO.png": "/images/customers/cptpp.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%9B%BD%E4%BA%94%E7%9F%BF%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-c1G5f23dAM32GNcuWsEjGJpfeuMSwv.png": "/images/customers/minmetals.png",
}

def download_image(url: str, local_path: str) -> bool:
    """下载单个图片"""
    try:
        Path(local_path).parent.mkdir(parents=True, exist_ok=True)
        print(f"  下载: {Path(local_path).name}...")
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(local_path, 'wb') as f:
                f.write(response.content)
            print(f"    ✓ 成功: {local_path}")
            return True
        else:
            print(f"    ✗ 失败 (HTTP {response.status_code})")
            return False
    except Exception as e:
        print(f"    ✗ 错误: {str(e)}")
        return False

def download_missing_images(project_root: Path) -> int:
    """下载所有缺失的图片"""
    print("\n" + "="*70)
    print("第1步: 下载缺失的客户LOGO图片")
    print("="*70)
    
    images_dir = project_root / "public" / "images"
    downloaded_count = 0
    
    for url, local_path in URL_MAPPING.items():
        full_local_path = str(project_root / local_path.lstrip('/'))
        
        if not Path(full_local_path).exists():
            print(f"\n缺失: {local_path}")
            if download_image(url, full_local_path):
                downloaded_count += 1
    
    print(f"\n✓ 下载完成: {downloaded_count} 张新图片")
    return downloaded_count

def replace_urls_in_files(project_root: Path) -> int:
    """替换所有源代码文件中的URL"""
    print("\n" + "="*70)
    print("第2步: 替换源代码中的所有外部URL")
    print("="*70)
    
    replaced_count = 0
    patterns = [
        (r'\.tsx?$', ['components', 'app', 'lib']),
    ]
    
    # 构建正则表达式用于替换
    replacements = [(re.escape(url), local) for url, local in URL_MAPPING.items()]
    
    for pattern, dirs in patterns:
        for search_dir in dirs:
            dir_path = project_root / search_dir
            if not dir_path.exists():
                continue
                
            for file_path in dir_path.rglob('*'):
                if not file_path.is_file() or not file_path.suffix in ['.tsx', '.ts', '.jsx', '.js']:
                    continue
                
                try:
                    content = file_path.read_text(encoding='utf-8')
                    original_content = content
                    
                    for url, local_path in URL_MAPPING.items():
                        if url in content:
                            content = content.replace(url, local_path)
                            replaced_count += 1
                    
                    if content != original_content:
                        file_path.write_text(content, encoding='utf-8')
                        rel_path = file_path.relative_to(project_root)
                        print(f"✓ 更新: {rel_path}")
                        
                except Exception as e:
                    print(f"✗ 错误处理 {file_path}: {str(e)}")
    
    print(f"\n✓ 替换完成: {replaced_count} 个URL")
    return replaced_count

def scan_remaining_external_urls(project_root: Path) -> List[Tuple[str, str, int]]:
    """扫描剩余的外部URL"""
    print("\n" + "="*70)
    print("第3步: 扫描剩余的外部URL")
    print("="*70)
    
    remaining_urls = []
    
    for search_dir in ['components', 'app', 'lib']:
        dir_path = project_root / search_dir
        if not dir_path.exists():
            continue
            
        for file_path in dir_path.rglob('*'):
            if not file_path.is_file() or not file_path.suffix in ['.tsx', '.ts', '.jsx', '.js']:
                continue
            
            try:
                content = file_path.read_text(encoding='utf-8')
                lines = content.split('\n')
                
                for i, line in enumerate(lines, 1):
                    if 'hebbkx1anhila5yf.public.blob.vercel-storage.com' in line or 'images.unsplash.com' in line:
                        rel_path = file_path.relative_to(project_root)
                        remaining_urls.append((str(rel_path), line.strip()[:100], i))
                        
            except Exception as e:
                pass
    
    if remaining_urls:
        print(f"\n⚠ 发现 {len(remaining_urls)} 个仍需处理的外部URL:")
        for file_path, line, line_num in remaining_urls:
            print(f"  {file_path}:{line_num}")
            print(f"    > {line}...")
    else:
        print("\n✓ 所有外部URL已替换完成!")
    
    return remaining_urls

def main():
    """主程序"""
    print("\n" + "="*70)
    print("完整的离线部署URL处理工具")
    print("="*70)
    
    project_root = Path("/vercel/share/v0-project")
    
    if not project_root.exists():
        print(f"✗ 错误: 项目根目录不存在: {project_root}")
        sys.exit(1)
    
    print(f"\n项目根目录: {project_root}")
    print(f"URL映射表: {len(URL_MAPPING)} 个URL")
    
    # 第1步：下载缺失的图片
    try:
        downloaded = download_missing_images(project_root)
    except Exception as e:
        print(f"✗ 下载图片时出错: {str(e)}")
        downloaded = 0
    
    # 第2步：替换URL
    try:
        replaced = replace_urls_in_files(project_root)
    except Exception as e:
        print(f"✗ 替换URL时出错: {str(e)}")
        replaced = 0
    
    # 第3步：扫描剩余URL
    try:
        remaining = scan_remaining_external_urls(project_root)
    except Exception as e:
        print(f"✗ 扫描URL时出错: {str(e)}")
        remaining = []
    
    # 总结
    print("\n" + "="*70)
    print("处理完成 - 总结")
    print("="*70)
    print(f"✓ 下载的图片: {downloaded} 张")
    print(f"✓ 替换的URL: {replaced} 个")
    print(f"⚠ 剩余外部URL: {len(remaining)} 个")
    
    if not remaining:
        print("\n✅ 所有外部URL已处理完成，项目已准备好进行离线内网部署！")
    else:
        print(f"\n⚠ 还有 {len(remaining)} 个URL需要处理，请查看上面的列表")

if __name__ == "__main__":
    main()
