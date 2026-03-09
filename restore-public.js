const { execSync } = require('child_process');
const fs = require('fs');

try {
  const projectRoot = '/vercel/share/v0-project';
  
  console.log('检查项目目录:', projectRoot);
  
  if (!fs.existsSync(`${projectRoot}/.git`)) {
    throw new Error(`.git 目录未在 ${projectRoot} 找到`);
  }
  
  console.log('✓ 找到 .git 目录\n');
  
  console.log('正在恢复 public 目录...');
  execSync(`git -C "${projectRoot}" checkout HEAD -- public/`, { stdio: 'inherit' });
  
  console.log('\n✓ public 目录已成功恢复!\n');
  
  console.log('恢复的文件:');
  const files = execSync(`find "${projectRoot}/public" -type f 2>/dev/null | sort`, { encoding: 'utf-8' });
  console.log(files || '(未找到文件)');
  
} catch (error) {
  console.error('\n✗ 错误:', error.message);
  process.exit(1);
}
