#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 修复solutions-data.ts中的所有中文编码问题
 * 使用替换映射来处理可能的乱码和字符编码问题
 */

const filePath = '/vercel/share/v0-project/lib/solutions-data.ts';

// 读取文件
let content = fs.readFileSync(filePath, 'utf8');

// 定义替换规则 - 处理所有可能的乱码和编码问题
const replacements = [
  // AI智能体部分的乱码修复
  [/封化/g, '封装'],
  [/定时背景/g, '动态背景'],
  
  // 数据中台部分的乱码修复
  [/统··治理，·····撑/g, '统一治理，为精准营销和风控决策提供支撑'],
  [/统一治理，·····撑/g, '统一治理，为精准营销和风控决策提供支撑'],
  
  // 运维部分的乱码修复
  [/资··瓶颈/g, '资源瓶颈'],
  [/资·瓶颈/g, '资源瓶颈'],
  
  // 双活部分的乱码修复
  [/高·频交易/g, '高频交易'],
  [/··频交易/g, '高频交易'],
  [/RTO趋近于零···保障/g, 'RTO趋近于零，保障'],
  [/RTO趋近于零··保障/g, 'RTO趋近于零，保障'],
  [/RTO趋近于零·保障/g, 'RTO趋近于零，保障'],
  
  // 享层、管层等缩写的修复
  [/享层（数据资源共享）/g, '享层（数据资源共享）'],
  [/管层（数据治理）/g, '管层（数据治理）'],
  [/存层（数据存储）/g, '存层（数据存储）'],
  [/算层（数据计算）/g, '算层（数据计算）'],
];

console.log('开始修复编码问题...');
let fixedCount = 0;

replacements.forEach(([from, to]) => {
  const matches = content.match(from);
  if (matches) {
    console.log(`找到 ${matches.length} 处 "${from}" 需要替换为 "${to}"`);
    content = content.replace(from, to);
    fixedCount += matches.length;
  }
});

// 写回文件
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✅ 编码修复完成！共修复 ${fixedCount} 处乱码。`);
console.log('文件已保存为 UTF-8 编码。');
