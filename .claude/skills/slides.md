# /slides

Generate a self-contained HTML presentation deck from a topic and outline the user provides in chat. Never produce bullet-list slides — every slide must use one of the 12 purposeful layouts below.

---

## Invocation examples

```
/slides "AI in Healthcare" | Intro: what this is, Stats: 3 key numbers, How it works: 4 steps, Risks vs Benefits, Code: sample API call, Quote: Hinton quote, Closing: CTA
/slides "Q3 Review"
/slides topic="My Startup" outline="Problem, Solution, Traction, Team, Ask"
```

If the user gives just a topic, infer a sensible 8–12 slide outline.

---

## Full workflow

1. **Parse** the user's topic and outline into a `slides[]` array: `{heading, body, type_hint?, data?, code?, quote?, items?}`
2. **Assign layouts** using the rules below — never place the same layout on adjacent slides
3. **Generate** `slides/<deck-slug>.html` using the complete HTML template in this file
4. **Create** `slides/render.js` using the render script in this file
5. **Install** Chromium if needed: `npx playwright install chromium 2>&1 | tail -3`
6. **Render**: `node slides/render.js slides/<deck-slug>.html`
7. **Inspect** every PNG with the Read tool; look for: overflow, clipped text, empty panels, broken charts, misaligned grids
8. **Fix** layout bugs in the HTML, then re-render affected slides
9. **Report** the file paths and show the user a few key PNG previews with SendUserFile

---

## Layout assignment rules

| Priority | Condition | Layout |
|----------|-----------|--------|
| 1st slide always | — | `cover` |
| Last slide always | — | `closing` |
| Single giant number + label | "X million users", "42%" | `statement` |
| 3–4 labelled metrics | "Revenue: $2M, Users: 50k, NPS: 72, Churn: 2%" | `stat-grid` |
| `code:` hint or code block | — | `code` |
| `quote:` hint or attribution string | — | `quote` |
| Exactly 2 sides (A vs B, Before/After, Pro/Con) | — | `comparison` |
| Numeric series with labels (≥3 data points) | bar/column/trend | `chart-bar` |
| 3–4 named items with short descriptions | features, pillars | `feature-grid` |
| 4–6 sequential numbered steps | — | `process` |
| Date-ordered or era-ordered list | — | `timeline` |
| All else | heading + body copy + accent visual | `image-text` |

---

## Complete HTML template

See demo.html in this folder for the full working example with all 12 layouts.

Place into `slides/<deck-slug>.html`. Add one `<section class="slide layout-X">` per slide.

CRITICAL CSS RULE: Never set `position:relative` on layout classes.
`.slide { position:absolute }` must not be overridden — doing so breaks `inset:0`
and collapses the slide to content height, destroying `justify-content:center`.

### Theme variables
```css
:root{
  --bg:#080d1a; --surface:#111827; --surface2:#1a2236; --border:#1e2d45;
  --accent:#6366f1; --cyan:#06b6d4; --amber:#f59e0b; --emerald:#10b981; --rose:#f43f5e;
  --text:#f1f5f9; --soft:#94a3b8; --muted:#475569;
  --sans:'Inter',system-ui,-apple-system,sans-serif;
  --mono:'JetBrains Mono','Fira Code',Consolas,monospace;
  --r:12px;
}
```

### Shell (required on every deck)
```css
html,body{ background:var(--bg);color:var(--text);font-family:var(--sans);overflow:hidden;width:1280px;height:720px; }
.deck{position:relative;width:1280px;height:720px;overflow:hidden}
.slide{ position:absolute;inset:0;opacity:0;pointer-events:none;display:flex;flex-direction:column;overflow:hidden; }
.slide.active{opacity:1;pointer-events:all}
.progress{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--cyan));transition:width .3s ease;z-index:200;}
.nav{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:12px;background:rgba(17,24,39,.85);border:1px solid var(--border);backdrop-filter:blur(12px);border-radius:40px;padding:6px 18px;z-index:100;}
.nav-btn{background:none;border:none;color:var(--soft);font-size:1.3rem;cursor:pointer;padding:2px 8px;border-radius:6px;transition:color .2s,background .2s;}
.nav-counter{font-size:.8rem;color:var(--soft);letter-spacing:.05em;min-width:50px;text-align:center}
```

### Layout 1 · cover
```css
.layout-cover{justify-content:center;align-items:center;text-align:center;background:radial-gradient(ellipse 90% 70% at 50% 40%,#1e2d62 0%,var(--bg) 70%);animation:cover-pulse 8s ease-in-out infinite;}
@keyframes cover-pulse{0%,100%{background:radial-gradient(ellipse 90% 70% at 50% 40%,#1e2d62 0%,var(--bg) 70%)}50%{background:radial-gradient(ellipse 110% 90% at 50% 35%,#2d1e62 0%,var(--bg) 70%)}}
.cover-eyebrow{font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:var(--cyan);margin-bottom:1.5rem;}
.cover-title{font-size:clamp(3rem,5.5vw,5rem);font-weight:800;line-height:1.05;background:linear-gradient(135deg,var(--text) 40%,var(--soft) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;max-width:900px;}
.cover-subtitle{font-size:1.3rem;color:var(--soft);margin-top:1.2rem;max-width:700px;}
.cover-accent-line{width:80px;height:3px;border-radius:2px;background:linear-gradient(90deg,var(--accent),var(--cyan));margin:1.5rem auto 0;}
.cover-meta{margin-top:2.5rem;display:flex;align-items:center;gap:1rem;justify-content:center;}
.cover-author{font-size:.85rem;color:var(--muted);background:var(--surface);border:1px solid var(--border);border-radius:40px;padding:.4rem 1.2rem;}
```
HTML:
```html
<section class="slide layout-cover active">
  <span class="cover-eyebrow">EYEBROW</span>
  <h1 class="cover-title">TITLE</h1>
  <p class="cover-subtitle">SUBTITLE</p>
  <div class="cover-accent-line"></div>
  <div class="cover-meta"><span class="cover-author">AUTHOR! w DATE</span></div>
</section>
```

### Layout 2 · statement
```css
.layout-statement{justify-content:center;align-items:center;text-align:center;padding:3rem;background:var(--bg);}
.stmt-label-top{font-size:.8rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:1rem;display:block;}
.stmt-number{font-size:clamp(5rem,12vw,9rem);font-weight:900;line-height:1;color:var(--accent);animation:fade-up .7s ease both;}
.stmt-unit{font-size:2.5rem;font-weight:700;color:var(--soft);vertical-align:super;}
.stmt-caption{font-size:1.5rem;color:var(--soft);margin-top:1.2rem;max-width:680px;animation:fade-up .7s .15s ease both;}
@keyframes fade-up{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
```
HTML:
```html
<section class="slide layout-statement">
  <span class="stmt-label-top">CONTEXT</span>
  <div class="stmt-number"><span class="stmt-unit">$</span>1.8<span class="stmt-unit">T</span></div>
  <p class="stmt-caption">EXPLANATION</p>
</section>
```

### Layout 3 · stat-grid
```css
.layout-stat-grid{padding:3.5rem 4rem;gap:1.2rem;background:var(--bg);}
.stat-grid-heading{font-size:1rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:1.5rem;}
.stat-grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:1.4rem;flex:1;}
.stat-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:2rem 2.2rem;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;animation:card-in .5s ease both;}
.stat-card:nth-child(1){animation-delay:.05s}.stat-card:nth-child(2){animation-delay:.15s}.stat-card:nth-child(3){animation-delay:.25s}.stat-card:nth-child(4){animation-delay:.35s}
@keyframes card-in{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}
.stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;border-radius:var(--r) var(--r) 0 0;}
.stat-card:nth-child(1)::before{background:linear-gradient(90deg,var(--accent),var(--cyan))}.stat-card:nth-child(2)::before{background:linear-gradient(90deg,var(--cyan),var(--emerald))}.stat-card:nth-child(3)::before{background:linear-gradient(90deg,var(--amber),var(--rose))}.stat-card:nth-child(4)::before{background:linear-gradient(90deg,var(--emerald),var(--accent))}
.stat-value{font-size:3.2rem;font-weight:800;line-height:1;color:var(--text)}.stat-delta{font-size:.8rem;color:var(--emerald);margin-top:.3rem}.stat-desc{font-size:.9rem;color:var(--soft);margin-top:.8rem}
```

### Layout 4 · timeline
```css
.layout-timeline{padding:3.5rem 4rem 4rem;background:var(--bg);justify-content:center;}
.tl-heading{font-size:1rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:2.5rem;}
.tl-track{position:relative;flex:1;display:flex;align-items:center;}
.tl-line{position:absolute;top:50%;left:0;right:0;height:2px;background:var(--border);transform:translateY(-50%);overflow:hidden;}
.tl-line-fill{height:100%;width:0;background:linear-gradient(90deg,var(--accent),var(--cyan));border-radius:2px;animation:draw-line 1.2s cubic-bezier(.4,0,.2,1) .2s both;}
@keyframes draw-line{from{width:0}to{width:100%}}
.tl-events{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;width:100%;}
.tl-event{display:flex;flex-direction:column;align-items:center;flex:1;position:relative;}
.tl-event:nth-child(odd){padding-top:120px;}.tl-event:nth-child(even){padding-bottom:120px;}
.tl-dot{width:14px;height:14px;border-radius:50%;background:var(--accent);border:3px solid var(--bg);box-shadow:0 0 0 4px rgba(99,102,241,.25);flex-shrink:0;}
.tl-era{font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin:.4rem 0 .2rem;}
.tl-title{font-size:.88rem;font-weight:600;color:var(--text);text-align:center;max-width:130px;}
.tl-body{font-size:.76rem;color:var(--soft);text-align:center;margin-top:.25rem;max-width:130px;line-height:1.4}
```

### Layout 5 · quote
```css
.layout-quote{justify-content:center;align-items:center;padding:4rem 6rem;text-align:center;background:linear-gradient(145deg,#0d1520,var(--bg),#0d1520);overflow:hidden;}
.quote-bg-mark{position:absolute;top:-3rem;left:2rem;font-size:22rem;font-family:Georgia,serif;color:var(--accent);opacity:.06;line-height:1;pointer-events:none;animation:mark-breathe 6s ease-in-out infinite;}
@keyframes mark-breathe{0%,100%{opacity:.06;transform:scale(1)}50%{opacity:.09;transform:scale(1.04)}}
.quote-text{font-size:clamp(1.6rem,3vw,2.4rem);font-weight:500;line-height:1.4;color:var(--text);font-style:italic;max-width:900px;position:relative;z-index:1;}
.quote-text em{color:var(--accent);font-style:normal;}
.quote-divider{width:60px;height:2px;background:linear-gradient(90deg,var(--accent),var(--cyan));margin:1.8rem auto;border-radius:2px;}
.quote-attribution{font-size:1rem;color:var(--soft);letter-spacing:.04em}.quote-role{font-size:.85rem;color:var(--muted);margin-top:.3rem;}
```

### Layout 6 · code
```css
.layout-code{padding:2.5rem 3rem;background:var(--bg);gap:1rem;}
.code-header{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:1rem;}
.code-window{flex:1;background:#0d1117;border:1px solid var(--border);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column;min-height:0;}
.code-titlebar{background:#161b22;border-bottom:1px solid var(--border);padding:.6rem 1rem;display:flex;align-items:center;gap:.5rem;flex-shrink:0;}
.code-dot{width:12px;height:12px;border-radius:50%;}.code-dot.red{background:#ff5f57}.code-dot.yellow{background:#febc2e}.code-dot.green{background:#28c840}
.code-body{display:flex;flex:1;overflow:hidden;min-height:0}
.code-gutter{padding:.9rem .6rem;background:#0d1117;border-right:1px solid var(--border);font-family:var(--mono);font-size:.8rem;color:var(--muted);text-align:right;user-select:none;min-width:3rem;line-height:1.7;flex-shrink:0;}
.code-pre{flex:1;padding:.9rem 1.2rem;margin:0;font-family:var(--mono);font-size:.82rem;line-height:1.7;color:var(--text);overflow:auto;white-space:pre;}
.kw{color:#ff7b72}.str{color:#a5d6ff}.fn{color:#d2a8ff}.num{color:#79c0ff}.cmt{color:#8b949e;font-style:italic}.cls{color:#ffa657}.punc{color:var(--soft)}
.cursor{display:inline-block;width:2px;height:1em;background:var(--cyan);vertical-align:text-bottom;animation:blink .9s step-end infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
```

### Layout 7 · comparison
```css
.layout-comparison{padding:3rem 0 2rem;background:var(--bg);}
.cmp-heading{font-size:1.4rem;font-weight:700;padding:0 3.5rem;margin-bottom:1.5rem;}
.cmp-grid{flex:1;display:grid;grid-template-columns:1fr 1px 1fr;overflow:hidden;}
.cmp-divider{background:var(--border);}
.cmp-col{padding:1.5rem 3rem;display:flex;flex-direction:column;gap:1rem;}
.cmp-col:nth-child(1){animation:slide-in-left .5s ease both}.cmp-col:nth-child(3){animation:slide-in-right .5s ease both}
@keyframes slide-in-left{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:none}}
@keyframes slide-in-right{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:none}}
.cmp-col-header{font-size:1rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:.5rem 1rem;border-radius:6px;text-align:center;margin-bottom:.5rem;}
.cmp-col:nth-child(1) .cmp-col-header{background:rgba(99,102,241,.15);color:var(--accent)}.cmp-col:nth-child(3) .cmp-col-header{background:rgba(6,182,212,.15);color:var(--cyan)}
.cmp-item{display:flex;align-items:flex-start;gap:.8rem;padding:.7rem 1rem;border-radius:8px;background:var(--surface);border:1px solid var(--border);font-size:.9rem;color:var(--soft);}
```

### Layout 8 · chart-bar
```css
.layout-chart-bar{padding:3rem 3.5rem;background:var(--bg);}
.chart-title{font-size:1.4rem;font-weight:700;}.chart-subtitle{font-size:.9rem;color:var(--soft);margin-top:.3rem}
.chart-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.chart-svg{width:100%;flex:1;display:block;}
.bar-rect{transform-origin:bottom;transform-box:fill-box;animation:grow-bar .7s cubic-bezier(.34,1.56,.64,1) both;}
@keyframes grow-bar{from{transform:scaleY(0)}to{transform:scaleY(1)}}
.bar-label-txt{font-family:var(--sans);fill:var(--soft);font-size:12px}.bar-val-txt{font-family:var(--sans);fill:var(--text);font-size:12px;font-weight:600}
```
SVG rules: viewBox="0 0 1140 380", chart area x=80–1100, y=20–340 (height=320). barH(v)=floor(v/maxVal*320), barY(v)=340-barH(v).

### Layout 9 · feature-grid
```css
.layout-feature-grid{padding:3rem 3.5rem;background:var(--bg);}
.fg-grid{flex:1;display:grid;gap:1.4rem;grid-template-columns:repeat(3,1fr);grid-auto-rows:1fr;align-items:stretch;}
.fg-grid.fg-4{grid-template-columns:repeat(4,1fr)}
.fg-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:1.8rem 1.6rem;display:flex;flex-direction:column;gap:.8rem;animation:fg-up .5s ease both;}
@keyframes fg-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.fg-icon{width:44px;height:44px;border-radius:10px;display:grid;place-items:center;font-size:1.4rem;}
.fg-name{font-size:1rem;font-weight:700;color:var(--text)}.fg-desc{font-size:.85rem;color:var(--soft);line-height:1.55}
```

### Layout 10 · image-text
```css
.layout-image-text{flex-direction:row;background:var(--bg);}
.it-image{flex:0 0 55%;position:relative;overflow:hidden;background:var(--surface2);}
.it-placeholder{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:5rem;animation:ken-burns 12s ease-in-out infinite alternate;}
@keyframes ken-burns{from{transform:scale(1) translate(0,0)}to{transform:scale(1.06) translate(-1%,-1%)}}
.it-image-overlay{position:absolute;inset:0;background:linear-gradient(90deg,transparent 60%,var(--bg) 100%);}
.it-text{flex:1;padding:3.5rem 3rem;display:flex;flex-direction:column;justify-content:center;gap:1rem;}
.it-eyebrow{font-size:.75rem;letter-spacing:.16em;text-transform:uppercase;color:var(--cyan)}
.it-heading{font-size:2rem;font-weight:800;line-height:1.15}.it-body{font-size:1rem;color:var(--soft);line-height:1.7;max-width:480px}
.it-tag{font-size:.75rem;padding:.3rem .8rem;border-radius:20px;background:rgba(99,102,241,.12);border:1px solid rgba(99,102,241,.3);color:var(--accent);}
```

### Layout 11 · process
```css
.layout-process{padding:3rem 3.5rem;background:var(--bg);}
.proc-steps{flex:1;display:flex;gap:0;position:relative;align-items:center;}
.proc-steps::before{content:'';position:absolute;top:50%;left:24px;right:24px;height:2px;background:var(--border);z-index:0;transform:translateY(-1px);}
.proc-step{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.9rem;position:relative;z-index:1;animation:proc-in .45s ease both;}
@keyframes proc-in{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.proc-num{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;font-size:1.1rem;font-weight:800;background:var(--accent);color:#fff;animation:step-pulse 2.5s ease-in-out infinite;}
@keyframes step-pulse{0%,100%{box-shadow:0 0 0 6px rgba(99,102,241,.15)}50%{box-shadow:0 0 0 10px rgba(99,102,241,.06)}}
.proc-name{font-size:.95rem;font-weight:700;text-align:center;color:var(--text)}.proc-desc{font-size:.8rem;color:var(--soft);text-align:center;line-height:1.5;max-width:160px}
```

### Layout 12 · closing
```css
.layout-closing{justify-content:center;align-items:center;text-align:center;background:radial-gradient(ellipse 80% 60% at 50% 80%,#1e2d62 0%,var(--bg) 65%);overflow:hidden;}
.closing-particles{position:absolute;inset:0;pointer-events:none;overflow:hidden;}
.particle{position:absolute;width:2px;height:2px;border-radius:50%;background:var(--accent);opacity:0;animation:float-up var(--dur,6s) var(--delay,0s) ease-in-out infinite;}
@keyframes float-up{0%{opacity:0;transform:translate(0,0)}10%{opacity:.6}80%{opacity:.3}100%{opacity:0;transform:translate(var(--drift,20px),-420px)}}
.closing-inner{position:relative;z-index:1;}
.closing-title{font-size:clamp(3.5rem,7vw,5.5rem);font-weight:900;line-height:1;background:linear-gradient(135deg,var(--text) 40%,var(--accent) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.closing-tagline{font-size:1.25rem;color:var(--soft);margin-top:1rem;max-width:600px}
.closing-divider{width:60px;height:3px;border-radius:2px;background:linear-gradient(90deg,var(--accent),var(--cyan));margin:1.8rem auto;}
.closing-link{font-size:.85rem;color:var(--soft);background:var(--surface);border:1px solid var(--border);border-radius:40px;padding:.4rem 1.2rem;text-decoration:none;}
```
HTML:
```html
<section class="slide layout-closing">
  <div class="closing-particles" id="particles"></div>
  <div class="closing-inner">
    <h2 class="closing-title">HEADLINE</h2>
    <p class="closing-tagline">TAGLINE</p>
    <div class="closing-divider"></div>
    <div class="closing-links">
      <a class="closing-link" href="#">LINK</a>
    </div>
  </div>
</section>
```

---

## Navigation JS (required on every deck)

```html
<nav class="nav">
  <button class="nav-btn" id="prev">‹</button>
  <span class="nav-counter" id="counter">1 / N</span>
  <button class="nav-btn" id="next">›</button>
</nav>
<script>
(function(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  const counter = document.getElementById('counter');
  const progress = document.getElementById('progress');
  let cur = 0;
  function show(i) {
    slides[cur].classList.remove('active');
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add('active');
    counter.textContent = (cur + 1) + ' / ' + slides.length;
    progress.style.width = ((cur + 1) / slides.length * 100) + '%';
  }
  document.getElementById('prev').onclick = () => show(cur - 1);
  document.getElementById('next').onclick = () => show(cur + 1);
  document.addEventListener('keydown', e => {
    if (e.key==='ArrowRight'||e.key==='ArrowDown'||e.key===' ') show(cur+1);
    if (e.key==='ArrowLeft'||e.key==='ArrowUp') show(cur-1);
  });
  const pc = document.getElementById('particles');
  if (pc) {
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = [`left:${Math.random()*100}%`,`bottom:${Math.random()*20}%`,`--dur:${5+Math.random()*5}s`,`--delay:${Math.random()*4}s`,`--drift:${(Math.random()-.5)*60}px`].join(';');
      pc.appendChild(p);
    }
  }
})();
</script>
```

---

## Render script (slides/render.js)

```javascript
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

  const { execSync } = require('child_process');
  let executablePath = process.env.PLAYWRIGHT_EXECUTABLE;
  if (!executablePath) {
    try {
      const found = execSync('find /opt/pw-browsers -name "headless_shell" 2>/dev/null | head -1', { encoding: 'utf8' }).trim();
      if (found) executablePath = found;
    } catch {}
  }
  const browser = await chromium.launch({ executablePath, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto(`file://${absPath}`, { waitUntil: 'networkidle' });

  const slideInfo = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.slide')).map((s, i) => ({
      index: i, layout: [...s.classList].find(c => c.startsWith('layout-')) || 'unknown'
    }))
  );
  console.log(`Rendering ${slideInfo.length} slides from ${path.basename(htmlFile)}...`);

  for (const { index, layout } of slideInfo) {
    await page.evaluate((i) => {
      document.querySelectorAll('.slide').forEach((s, idx) => s.classList.toggle('active', idx === i));
      const counter = document.getElementById('counter');
      const slides = document.querySelectorAll('.slide');
      if (counter) counter.textContent = `${i + 1} / ${slides.length}`;
      const progress = document.getElementById('progress');
      if (progress) progress.style.width = `${(i + 1) / slides.length * 100}%`;
    }, index);
    await page.waitForTimeout(650);
    const filename = path.join(pngDir, `${deckName}-${String(index + 1).padStart(2, '0')}-${layout.replace('layout-', '')}.png`);
    await page.screenshot({ path: filename, clip: { x: 0, y: 0, width: 1280, height: 720 } });
    console.log(`  ✓7; ${path.basename(filename)}`);
  }
  await browser.close();
  console.log(`\nDone. ${slideInfo.length} PNGs in ${pngDir}/`);
})();
```

---

## Setup commands

```bash
npm install --save-dev playwright
node slides/render.js slides/<deck-slug>.html
```

---

## Inspection checklist

- [ ] No text overflow or clipping
- [ ] Chart bars visible, SVG fills space
- [ ] Code gutter aligns with code lines
- [ ] Timeline dots centred on line
- [ ] Feature grid cards equal height
- [ ] Comparison columns symmetric
- [ ] Process steps vertically centred
- [ ] Closing slide text centred
- [ ] Nav bar does not overlap content
- [ ] Progress bar visible at top

Common fixes:
- Text overflow → reduce font-size or add overflow:hidden
- Empty SVG → verify viewBox and positive rect heights
- Timeline dots misaligned → check .tl-track { align-items:center }
- Stat card height mismatch → grid-auto-rows:1fr on .stat-grid

---

## Content guidelines

- Slide title: ≤ 10 words
- Body copy: ≤ 35 words per slide
- Stat values: use k/M/B suffixes, include % or $ prefix
- Code blocks: 8–14 lines max
- Quote: one sentence, ≤ 30 words
- Feature descriptions: ≤ 18 words each
- Process steps: ≤ 5; if more, split into two process slides
- Timeline eras: short labels ("2020", "Q1", "Phase 1")
- Slugify output filename: lowercase, spaces → hyphens, max 40 chars
