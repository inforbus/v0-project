#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 读取文件
const filePath = path.join(__dirname, '..', 'lib', 'solutions-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 替换所有可能的乱码
const replacements = [
  // 数据中台用例中的乱码
  ['统一治理，为精准营销和风控决策提供支撑', '统一治理，为精准营销和风控决策提供支撑'],
];

replacements.forEach(([from, to]) => {
  content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
});

// 写回文件
fs.writeFileSync(filePath, content, 'utf8');
console.log('File fixed!');
