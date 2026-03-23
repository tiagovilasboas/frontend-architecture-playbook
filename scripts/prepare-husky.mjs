#!/usr/bin/env node
/**
 * Skip Husky on CI and Vercel — git hooks are not needed there and `husky` can fail the install.
 */
if (process.env.CI || process.env.VERCEL) {
  process.exit(0);
}

import { execSync } from 'node:child_process';

execSync('husky', { stdio: 'inherit' });
