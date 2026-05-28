#!/usr/bin/env node
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const htmlFile = process.argv[2];
  if (!htmlFile) { console.error('Usage: node render.js <file.html>'); process.exit(1); }

  const absPath = path.resolve(htmlFile);
  const deckName = path.basename(htmlFile, '.html');
  const pngDir = path.join(path.dirname(absPath), 'png');
  fs.mkdirSync(pngDir, { recursive: true });

  // Auto-discover a pre-installed headless_shell (managed environments like Claude Code on the web)
  const { execSync } = require('child_process');
  let executablePath = process.env.PLAYWRIGHT_EXECUTABLE;
  if (!executablePath) {
    try {
      const found = execSync(
        'find /opt/pw-browsers -name "headless_shell" 2>/dev/null | head -1',
        { encoding: 'utf8' }
      ).trim();
      if (found) executablePath = found;
    } catch {}
  }
  const browser = await chromium.launch({
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto(`file://${absPath}`, { waitUntil: 'networkidle' });

  const slideInfo = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.slide')).map((s, i) => ({
      index: i,
      layout: [...s.classList].find(c => c.startsWith('layout-')) || 'unknown'
    }))
  );

  console.log(`Rendering ${slideInfo.length} slides from ${path.basename(htmlFile)}...`);

  for (const { index, layout } of slideInfo) {
    await page.evaluate((i) => {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((s, idx) => {
        s.classList.toggle('active', idx === i);
      });
      const counter = document.getElementById('counter');
      if (counter) counter.textContent = `${i + 1} / ${slides.length}`;
      const progress = document.getElementById('progress');
      if (progress) progress.style.width = `${(i + 1) / slides.length * 100}%`;
    }, index);
    await page.waitForTimeout(650);
    const filename = path.join(pngDir, `${deckName}-${String(index + 1).padStart(2, '0')}-${layout.replace('layout-', '')}.png`);
    await page.screenshot({ path: filename, clip: { x: 0, y: 0, width: 1280, height: 720 } });
    console.log(`  ✓ ${path.basename(filename)}`);
  }
  await browser.close();
  console.log(`\nDone. ${slideInfo.length} PNGs in ${pngDir}/`);
})();
