// Elementary (Wolfram) 1D cellular automata.
// A rule 0–255 defines the next state of a cell from its (left, self, right)
// neighbourhood: 8 neighbourhoods -> 8 output bits -> the rule number.

const canvas = document.getElementById('ca');
const ctx    = canvas.getContext('2d');
const input  = document.getElementById('rule');
const seedEl = document.getElementById('seed');
const goBtn  = document.getElementById('go');
const bitsEl = document.getElementById('rulebits');
const readEl = document.getElementById('readout');

const CELLS = 201;          // odd, so there's a true centre cell
const GENS  = 120;          // rows to evolve
const CELL  = 4;            // px per cell (canvas backing resolution)

canvas.width  = CELLS * CELL;
canvas.height = GENS  * CELL;

function ruleToBits(rule) {
  // bit i (0..7) = output for neighbourhood i (i as 3-bit: LSB=right cell)
  return Array.from({ length: 8 }, (_, i) => (rule >> i) & 1);
}

function drawBits(rule) {
  const bits = ruleToBits(rule);
  // show neighbourhoods 111..000 left-to-right (i = 7..0)
  bitsEl.innerHTML = '';
  for (let i = 7; i >= 0; i--) {
    const nb = i.toString(2).padStart(3, '0');
    const on = bits[i];
    const d = document.createElement('div');
    d.className = 'bit';
    d.innerHTML = `<b class="${on ? 'on' : ''}">${on}</b>${nb}`;
    bitsEl.appendChild(d);
  }
}

function render(rule) {
  const bits = ruleToBits(rule);

  // start: single live cell in the centre, or a random scattering
  let row = new Uint8Array(CELLS);
  if (seedEl.value === 'random') {
    for (let x = 0; x < CELLS; x++) row[x] = Math.random() < 0.5 ? 1 : 0;
  } else {
    row[(CELLS - 1) >> 1] = 1;
  }

  const cs = getComputedStyle(document.documentElement);
  const accent = cs.getPropertyValue('--accent').trim() || '#8a5a44';
  const surface = cs.getPropertyValue('--surface').trim() || '#fffdf8';

  ctx.fillStyle = surface;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = accent;

  for (let g = 0; g < GENS; g++) {
    for (let x = 0; x < CELLS; x++) {
      if (row[x]) ctx.fillRect(x * CELL, g * CELL, CELL, CELL);
    }
    // evolve (edges wrap around)
    const next = new Uint8Array(CELLS);
    for (let x = 0; x < CELLS; x++) {
      const l = row[(x - 1 + CELLS) % CELLS];
      const c = row[x];
      const r = row[(x + 1) % CELLS];
      next[x] = bits[(l << 2) | (c << 1) | r];
    }
    row = next;
  }

  readEl.innerHTML =
    `rule <b>${rule}</b> · binary <b>${rule.toString(2).padStart(8, '0')}</b>`;
  drawBits(rule);
}

function run() {
  let v = parseInt(input.value, 10);
  if (isNaN(v)) v = 30;
  v = Math.max(0, Math.min(255, v));
  input.value = v;
  render(v);
}

goBtn.addEventListener('click', run);
input.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
seedEl.addEventListener('change', run);

// preset links (?rule=N or clicking a preset)
document.querySelectorAll('.presets a').forEach(a =>
  a.addEventListener('click', e => {
    e.preventDefault();
    input.value = a.dataset.rule;
    run();
  })
);

const q = parseInt(new URLSearchParams(location.search).get('rule'), 10);
if (!isNaN(q)) input.value = Math.max(0, Math.min(255, q));

run();
