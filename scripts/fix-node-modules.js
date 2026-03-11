#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const nodeModulesPath = path.join(__dirname, '..', 'node_modules');

// Check if node_modules exists as a file (not a directory)
try {
  const stats = fs.statSync(nodeModulesPath);
  
  if (!stats.isDirectory()) {
    console.log('Removing corrupted node_modules file from git...');
    try {
      // Remove from git index
      execSync('git rm --cached node_modules', { cwd: path.dirname(__dirname) });
      // Remove the file
      fs.unlinkSync(nodeModulesPath);
      console.log('Successfully removed corrupted node_modules from git');
    } catch (error) {
      console.log('Could not remove from git, attempting to delete file directly...');
      try {
        fs.unlinkSync(nodeModulesPath);
        console.log('File deleted successfully');
      } catch (deleteError) {
        console.error('Failed to delete node_modules file:', deleteError.message);
      }
    }
  }
} catch (error) {
  // node_modules doesn't exist yet, which is expected
  if (error.code !== 'ENOENT') {
    console.error('Error checking node_modules:', error.message);
  }
}
