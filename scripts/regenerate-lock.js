#!/usr/bin/env node

// This script regenerates the pnpm-lock.yaml file
// Run with: node scripts/regenerate-lock.js

const { execSync } = require('child_process');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

try {
  console.log('Regenerating pnpm-lock.yaml...');
  execSync('pnpm install', { cwd: projectRoot, stdio: 'inherit' });
  console.log('Successfully regenerated pnpm-lock.yaml');
} catch (error) {
  console.error('Failed to regenerate lockfile:', error.message);
  process.exit(1);
}
