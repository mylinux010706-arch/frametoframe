const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const LIB = {
  jszip: 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js',
  mp4: 'https://cdn.jsdelivr.net/npm/mp4-muxer@5/build/mp4-muxer.js',
  webm: 'https://cdn.jsdelivr.net/npm/webm-muxer@5/build/webm-muxer.js'
};
const FPS = [5, 10, 15, 20, 24, 25, 30, 50, 60, 90, 120, 144, 165, 240];
const PAGE = 60;
const H264 = ['avc1.640034', 'avc1.4d0034', 'avc1.420034'];
const VPX = [['vp09.00.10.08', 'V_VP9'], ['vp8', 'V_VP8']];

const T = {
  en: {
    tabV2F: 'Video → Frames', tabF2V: 'Frames → Video', toggleTheme: 'Toggle theme', themeLight: 'Light', themeDark: 'Dark',
    dropVideo: 'Drop your video here', orBrowse: 'or click to browse', dropFrames: 'Drop your frames here',
    fmtSupported: 'Supported by this browser: {list}', fmtFrames: 'Supported: PNG, JPG, JPEG',
    fps: 'FPS', customFps: 'Custom FPS', extract: 'Extract Frames', reset: 'Reset', cancel: 'Cancel', close: 'Close',
    name: 'File name', size: 'File size', duration: 'Duration', resolution: 'Resolution', srcFps: 'Source FPS', format: 'Format', unknown: 'Unknown',
    estFrames: 'Estimated frames: {n}.',
    srcUnknownNote: 'Source FPS could not be verified. Extraction follows what the browser can decode.',
    bigWarn: 'This video will generate approximately {n} frames. Processing this many frames may use a large amount of browser memory.',
    preparing: 'Preparing video...', extracting: 'Extracting frames...', frameOf: 'Frame {a} / {b}',
    cancelled: 'Process cancelled.', extracted: 'Extraction complete.',
    sel1: '1 frame selected', selN: '{n} frames selected', selAll: 'Select All', selNone: 'Deselect All', selInv: 'Invert Selection',
    dlSel: 'Download Selected (PNG)', dlZip: 'Download All as ZIP', zipping: 'Creating ZIP... {p}%',
    frame: 'Frame', page: 'Page {a} / {b}', prev: 'Previous', next: 'Next', dlPng: 'Download PNG',
    errNoFile: 'No file selected.', errType: 'Unsupported file type.',
    errCorrupt: 'The video is corrupted or cannot be read by this browser.',
    errFps: 'Enter a valid FPS (minimum 1).', errFpsMax: 'FPS cannot exceed 240.',
    errFpsSrc: "Requested FPS is higher than the source video's available frame rate.",
    errNoSel: 'Select at least one frame.', errType2: 'Only PNG and JPG images are supported.',
    errSkipped: '{n} unsupported file(s) were skipped.', errFrame: 'Invalid image: {name}',
    errMismatch: 'Fit the frames to the first frame resolution before creating a video.',
    errMp4: 'MP4 is not supported by your browser.', errWebm: 'WebM is not supported by your browser.',
    errEnc: 'The video encoder failed.', errMem: 'Not enough browser memory.',
    errLib: 'A required library could not be loaded. Check your connection.', errFail: 'The process failed.',
    errNoFmt: 'No supported video output format is available in this browser.',
    errNoFmtHint: 'Try using a modern browser such as Chrome, Edge, or Firefox.',
    framesCount: 'Number of frames: {n}', estDur: 'Estimated duration: {s} seconds', secs: '{s} seconds',
    mismatch: 'Frame resolution mismatch. All frames should have the same resolution before creating a video.',
    resizeFirst: "Fit to first frame's resolution", fitted: 'Frames will be fitted to the first frame resolution.',
    moveUp: 'Move up', moveDown: 'Move down', remove: 'Remove',
    outFmt: 'Output Format', supp: 'Supported by your browser', notSupp: 'Not supported by your browser',
    create: 'Create {f}', loadingEnc: 'Loading video encoder...', encoding: 'Encoding video...', encDone: 'Encoding complete.',
    download: 'Download {f}', preview: 'Preview',
    aboutTitle: 'What is FrameLab for?',
    aboutIntro: 'FrameLab turns a video into a numbered set of images, and a set of images back into a video. Both directions run in your browser.',
    aboutV2FT: 'Video → Frames',
    aboutV2F: 'Choose a video and a frame rate, and FrameLab saves the frames as PNG files named frame-0001.png, frame-0002.png and so on. Use it to grab a still image, check a clip frame by frame, or hand frames to an image editor. It only takes frames that exist in the video: no interpolation and no duplicated frames.',
    aboutF2VT: 'Frames → Video',
    aboutF2V: 'Add PNG or JPG images, drag them into the order you want, pick an FPS and create a video. The duration is the number of frames divided by the FPS. MP4 is offered only if your browser can encode it; otherwise WebM is used. If the frames differ in size, you choose whether to fit them to the first frame.',
    aboutPrivT: 'Your files stay on your device',
    aboutPriv: 'Videos and images are processed locally and are never uploaded. The only downloads are the small helper libraries for ZIP files and MP4/WebM output, loaded the first time you need them.',
    aboutLimitT: 'Good to know',
    aboutLimit: 'A long video at a high FPS makes a lot of frames and can use a lot of browser memory, so FrameLab warns you first. Source FPS is estimated from the video and shown as Unknown when it cannot be verified. Supported formats depend on your browser.'
  },
  id: {
    tabV2F: 'Video → Frame', tabF2V: 'Frame → Video', toggleTheme: 'Ganti tema', themeLight: 'Terang', themeDark: 'Gelap',
    dropVideo: 'Letakkan video di sini', orBrowse: 'atau klik untuk memilih file', dropFrames: 'Letakkan frame di sini',
    fmtSupported: 'Didukung browser ini: {list}', fmtFrames: 'Didukung: PNG, JPG, JPEG',
    fps: 'FPS', customFps: 'FPS kustom', extract: 'Ekstrak Frame', reset: 'Reset', cancel: 'Batal', close: 'Tutup',
    name: 'Nama file', size: 'Ukuran file', duration: 'Durasi', resolution: 'Resolusi', srcFps: 'FPS sumber', format: 'Format', unknown: 'Tidak diketahui',
    estFrames: 'Perkiraan jumlah frame: {n}.',
    srcUnknownNote: 'FPS sumber tidak dapat diverifikasi. Ekstraksi mengikuti kemampuan decoding browser.',
    bigWarn: 'Video ini akan menghasilkan sekitar {n} frame. Memproses frame sebanyak ini dapat menggunakan banyak memori browser.',
    preparing: 'Menyiapkan video...', extracting: 'Mengekstrak frame...', frameOf: 'Frame {a} / {b}',
    cancelled: 'Proses dibatalkan.', extracted: 'Ekstraksi selesai.',
    sel1: '1 frame dipilih', selN: '{n} frame dipilih', selAll: 'Pilih Semua', selNone: 'Batalkan Semua', selInv: 'Balik Pilihan',
    dlSel: 'Unduh Terpilih (PNG)', dlZip: 'Unduh Semua sebagai ZIP', zipping: 'Membuat ZIP... {p}%',
    frame: 'Frame', page: 'Halaman {a} / {b}', prev: 'Sebelumnya', next: 'Berikutnya', dlPng: 'Unduh PNG',
    errNoFile: 'Tidak ada file yang dipilih.', errType: 'Jenis file tidak didukung.',
    errCorrupt: 'Video rusak atau tidak dapat dibaca oleh browser ini.',
    errFps: 'Masukkan FPS yang valid (minimal 1).', errFpsMax: 'FPS tidak boleh lebih dari 240.',
    errFpsSrc: 'FPS yang dipilih lebih tinggi daripada frame rate video sumber.',
    errNoSel: 'Pilih minimal satu frame.', errType2: 'Hanya gambar PNG dan JPG yang didukung.',
    errSkipped: '{n} file yang tidak didukung dilewati.', errFrame: 'Gambar tidak valid: {name}',
    errMismatch: 'Sesuaikan frame ke resolusi frame pertama sebelum membuat video.',
    errMp4: 'Browser Anda tidak mendukung output MP4.', errWebm: 'Browser Anda tidak mendukung output WebM.',
    errEnc: 'Encoder video gagal.', errMem: 'Memori browser tidak mencukupi.',
    errLib: 'Library yang dibutuhkan gagal dimuat. Periksa koneksi Anda.', errFail: 'Proses gagal.',
    errNoFmt: 'Browser ini tidak mendukung format video output yang diperlukan.',
    errNoFmtHint: 'Coba gunakan browser modern seperti Chrome, Edge, atau Firefox.',
    framesCount: 'Jumlah frame: {n}', estDur: 'Perkiraan durasi: {s} detik', secs: '{s} detik',
    mismatch: 'Resolusi frame berbeda. Semua frame sebaiknya memiliki resolusi yang sama sebelum membuat video.',
    resizeFirst: 'Sesuaikan ke resolusi frame pertama', fitted: 'Frame akan disesuaikan ke resolusi frame pertama.',
    moveUp: 'Naikkan', moveDown: 'Turunkan', remove: 'Hapus',
    outFmt: 'Format Output', supp: 'Didukung browser Anda', notSupp: 'Tidak didukung browser Anda',
    create: 'Buat {f}', loadingEnc: 'Memuat encoder video...', encoding: 'Meng-encode video...', encDone: 'Encoding selesai.',
    download: 'Unduh {f}', preview: 'Pratinjau',
    aboutTitle: 'FrameLab untuk apa?',
    aboutIntro: 'FrameLab mengubah video menjadi kumpulan gambar bernomor, dan kumpulan gambar kembali menjadi video. Kedua arah diproses langsung di browser.',
    aboutV2FT: 'Video → Frame',
    aboutV2F: 'Pilih video dan frame rate, lalu FrameLab menyimpan frame sebagai file PNG bernama frame-0001.png, frame-0002.png, dan seterusnya. Berguna untuk mengambil gambar diam, memeriksa video frame demi frame, atau menyerahkan frame ke aplikasi edit gambar. Frame hanya diambil dari yang memang ada di video: tanpa interpolasi dan tanpa frame duplikat.',
    aboutF2VT: 'Frame → Video',
    aboutF2V: 'Tambahkan gambar PNG atau JPG, seret ke urutan yang diinginkan, pilih FPS, lalu buat video. Durasi adalah jumlah frame dibagi FPS. MP4 hanya ditawarkan jika browser Anda benar-benar bisa membuatnya; jika tidak, WebM yang dipakai. Jika ukuran frame berbeda, Anda yang memutuskan apakah akan disesuaikan ke frame pertama.',
    aboutPrivT: 'File tetap di perangkat Anda',
    aboutPriv: 'Video dan gambar diproses secara lokal dan tidak pernah di-upload. Satu-satunya yang diunduh adalah library kecil untuk file ZIP dan output MP4/WebM, dimuat saat pertama kali dibutuhkan.',
    aboutLimitT: 'Perlu diketahui',
    aboutLimit: 'Video panjang dengan FPS tinggi menghasilkan banyak frame dan dapat memakai banyak memori browser, karena itu FrameLab memberi peringatan lebih dulu. FPS sumber diperkirakan dari videonya dan ditampilkan sebagai Tidak diketahui jika tidak bisa diverifikasi. Format yang didukung bergantung pada browser.'
  }
};

const S = { lang: 'en', theme: 'light' };
const V = { file: null, url: '', info: null, srcFps: null, frames: [], sel: new Set(), page: 0, busy: false, cancel: false, urls: [], mUrl: '' };
const F = { items: [], id: 0, fit: false, mm: false, busy: false, cancel: false, caps: { mp4: false, webm: false, ready: false }, fmt: null, res: null };
const PR = {};
const libs = {};
let FMTS = '';

const t = (k, p) => (T[S.lang][k] ?? k).replace(/\{(\w+)\}/g, (_, x) => (p && x in p ? p[x] : ''));
const pad = (n, l) => String(n).padStart(l, '0');
const fmtTs = s => {
  const m = Math.round(s * 1000);
  return `${pad(Math.floor(m / 3600000), 2)}:${pad(Math.floor(m / 60000) % 60, 2)}:${pad(Math.floor(m / 1000) % 60, 2)}.${pad(m % 1000, 3)}`;
};
const fmtDur = s => `${pad(Math.floor(s / 60), 2)}:${(s % 60).toFixed(2).padStart(5, '0')}`;
const fmtSize = b => (b < 1024 ? `${b} B` : b < 1048576 ? `${(b / 1024).toFixed(1)} KB` : b < 1073741824 ? `${(b / 1048576).toFixed(1)} MB` : `${(b / 1073741824).toFixed(2)} GB`);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const toBlob = (c, type, q) => new Promise(r => c.toBlob(r, type, q));
const fpsError = f => (!Number.isFinite(f) || f < 1 ? 'errFps' : f > 240 ? 'errFpsMax' : null);
const frameName = i => `frame-${pad(i + 1, 4)}.png`;
const num = n => n.toLocaleString(S.lang === 'id' ? 'id-ID' : 'en-US');
const saved = k => { try { return localStorage.getItem(k); } catch { return null; } };

const load = src => (libs[src] ??= new Promise((res, rej) => {
  const s = document.createElement('script');
  s.src = src;
  s.onload = res;
  s.onerror = () => { delete libs[src]; rej(new Error('lib')); };
  document.head.append(s);
}));

function dl(el, rows) {
  el.replaceChildren();
  rows.forEach(([k, v]) => {
    const a = document.createElement('dt'), b = document.createElement('dd');
    a.textContent = t(k);
    b.textContent = v;
    el.append(a, b);
  });
}

function setErr(sel, key, p) {
  const el = $(sel);
  el._k = key;
  el._p = p;
  el.textContent = key ? t(key, p) : '';
}

function toast(key, p, type = 'error') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const s = document.createElement('span');
  s.textContent = t(key, p);
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'ic';
  b.textContent = '×';
  b.setAttribute('aria-label', t('close'));
  b.onclick = () => el.remove();
  el.append(s, b);
  $('#toasts').append(el);
  setTimeout(() => el.remove(), 7000);
}

function saveBlob(b, n) {
  const u = URL.createObjectURL(b), a = document.createElement('a');
  a.href = u;
  a.download = n;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(u), 5000);
}

function drawProg(id) {
  const s = PR[id], el = $(`#${id}Prog`);
  if (!s) return;
  el.hidden = false;
  el.querySelector('.stat').textContent = t(s.key);
  el.querySelector('.det').textContent = s.p ? t('frameOf', s.p) : '';
  el.querySelector('.pct').textContent = `${Math.floor(s.pct)}%`;
  el.querySelector('progress').value = s.pct;
}
function setProg(id, key, pct, p) { PR[id] = { key, pct, p }; drawProg(id); }
function hideProg(id) { PR[id] = null; $(`#${id}Prog`).hidden = true; }

function fpsUI(sel, custom, fn) {
  FPS.forEach(n => sel.add(new Option(`${n} FPS`, n)));
  sel.add(new Option('', 'c'));
  sel.value = '30';
  sel.onchange = () => { custom.hidden = sel.value !== 'c'; fn(); };
  custom.oninput = fn;
}
function getFps(sel, custom) {
  if (sel.value !== 'c') return Number(sel.value);
  return custom.value.trim() === '' ? NaN : Number(custom.value);
}

function zone(el, input, onFiles) {
  let d = 0;
  const open = () => input.click();
  el.addEventListener('click', open);
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  el.addEventListener('dragenter', e => { e.preventDefault(); d++; el.classList.add('over'); });
  el.addEventListener('dragover', e => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; });
  el.addEventListener('dragleave', () => { if (--d <= 0) { d = 0; el.classList.remove('over'); } });
  el.addEventListener('drop', e => { e.preventDefault(); d = 0; el.classList.remove('over'); onFiles([...e.dataTransfer.files]); });
  input.addEventListener('change', () => { onFiles([...input.files]); input.value = ''; });
}

function applyLang() {
  document.documentElement.lang = S.lang;
  $$('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
  $$('[data-i18n-aria]').forEach(e => e.setAttribute('aria-label', t(e.dataset.i18nAria)));
  $$('option[value=c]').forEach(o => { o.textContent = t('customFps'); });
  $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === S.lang)));
  $('#themeBtn').textContent = t(S.theme === 'dark' ? 'themeLight' : 'themeDark');
  $('#vFmts').textContent = t('fmtSupported', { list: FMTS });
  drawProg('v');
  drawProg('f');
  if (V.info) { renderVInfo(); updateV(); updateSel(); if (V.frames.length) renderGallery(); }
  renderF();
  renderFormats();
  renderRes();
  ['#vErr', '#fErr'].forEach(s => { const e = $(s); if (e._k) e.textContent = t(e._k, e._p); });
}
function setLang(l) {
  S.lang = l;
  try { localStorage.setItem('fl-lang', l); } catch {}
  applyLang();
}
function setTheme(th) {
  S.theme = th;
  document.documentElement.dataset.theme = th;
  try { localStorage.setItem('fl-theme', th); } catch {}
  $('#themeBtn').textContent = t(th === 'dark' ? 'themeLight' : 'themeDark');
}
function selectTab(tab) {
  $$('[role=tab]').forEach(b => {
    const on = b === tab;
    b.setAttribute('aria-selected', String(on));
    b.tabIndex = on ? 0 : -1;
    $(`#${b.getAttribute('aria-controls')}`).hidden = !on;
  });
}

function videoFormats() {
  const v = document.createElement('video');
  const m = { MP4: 'video/mp4', WebM: 'video/webm', MOV: 'video/quicktime', AVI: 'video/x-msvideo', OGV: 'video/ogg', MKV: 'video/x-matroska' };
  return Object.keys(m).filter(k => v.canPlayType(m[k])).join(', ') || '—';
}

async function detectFps(url) {
  const v = document.createElement('video');
  if (!('requestVideoFrameCallback' in v)) return null;
  v.muted = true;
  v.playsInline = true;
  v.src = url;
  const ts = [];
  try {
    await new Promise((res, rej) => { v.onloadeddata = res; v.onerror = rej; });
    await new Promise(res => {
      const end = setTimeout(res, 2500);
      const cb = (_, m) => {
        ts.push(m.mediaTime);
        if (ts.length >= 24) { clearTimeout(end); res(); } else v.requestVideoFrameCallback(cb);
      };
      v.requestVideoFrameCallback(cb);
      v.play().catch(res);
    });
  } catch {}
  v.pause();
  v.removeAttribute('src');
  v.load();
  const d = ts.slice(1).map((x, i) => x - ts[i]).filter(x => x > 0.0005);
  if (d.length < 6) return null;
  const m = Math.min(...d);
  const ok = d.filter(x => Math.abs(x - m) / m < 0.08).length;
  return ok / d.length >= 0.6 ? Math.round(100 / m) / 100 : null;
}

async function loadVideo(files) {
  setErr('#vErr', '');
  if (!files.length) return setErr('#vErr', 'errNoFile');
  const f = files[0];
  if (!/^video\//.test(f.type) && !/\.(mp4|m4v|webm|mov|avi|mkv|ogv)$/i.test(f.name)) return setErr('#vErr', 'errType');
  if (V.busy) { V.cancel = true; while (V.busy) await sleep(20); }
  const url = URL.createObjectURL(f), p = document.createElement('video');
  p.muted = true;
  p.preload = 'auto';
  p.src = url;
  try {
    await new Promise((res, rej) => { p.onloadeddata = res; p.onerror = rej; setTimeout(rej, 15000); });
  } catch {
    URL.revokeObjectURL(url);
    return setErr('#vErr', 'errCorrupt');
  }
  const info = { name: f.name, size: f.size, type: f.type || f.name.split('.').pop().toUpperCase(), duration: p.duration, w: p.videoWidth, h: p.videoHeight };
  p.removeAttribute('src');
  p.load();
  if (!info.w || !Number.isFinite(info.duration) || info.duration <= 0) {
    URL.revokeObjectURL(url);
    return setErr('#vErr', 'errCorrupt');
  }
  wipeV();
  Object.assign(V, { file: f, url, info, srcFps: undefined });
  $('#vPrev').src = url;
  $('#vWork').hidden = false;
  renderVInfo();
  updateV();
  const fps = await detectFps(url);
  if (V.url !== url) return;
  V.srcFps = fps;
  renderVInfo();
  updateV();
}

function wipeV() {
  clearFrames();
  if (V.url) URL.revokeObjectURL(V.url);
  const p = $('#vPrev');
  p.pause();
  p.removeAttribute('src');
  p.load();
  Object.assign(V, { file: null, url: '', info: null, srcFps: null });
  $('#vWork').hidden = true;
  $('#zipStat').textContent = '';
  hideProg('v');
  setErr('#vErr', '');
  setErr('#vFpsErr', '');
}
async function resetVideo() {
  V.cancel = true;
  while (V.busy) await sleep(20);
  V.cancel = false;
  wipeV();
}

function renderVInfo() {
  const i = V.info;
  dl($('#vInfo'), [
    ['name', i.name], ['size', fmtSize(i.size)], ['duration', fmtDur(i.duration)], ['resolution', `${i.w} × ${i.h}`],
    ['srcFps', V.srcFps === undefined ? '…' : V.srcFps ? `${V.srcFps.toFixed(2)} FPS` : t('unknown')], ['format', i.type]
  ]);
}

function updateV() {
  if (!V.info) return;
  const fps = getFps($('#vFps'), $('#vFpsC'));
  let e = fpsError(fps);
  if (!e && V.srcFps && fps > V.srcFps + 0.51) e = 'errFpsSrc';
  setErr('#vFpsErr', e);
  $('#vGo').disabled = !!e || V.busy || V.srcFps === undefined;
  const n = e ? 0 : Math.max(1, Math.floor(V.info.duration * fps));
  const notes = [];
  if (n) notes.push(t('estFrames', { n: num(n) }));
  if (V.srcFps === null) notes.push(t('srcUnknownNote'));
  if (n > 2000) notes.push(t('bigWarn', { n: num(n) }));
  $('#vNote').textContent = notes.join(' ');
}

const seek = (v, at) => new Promise((res, rej) => {
  if (Math.abs(v.currentTime - at) < 0.0005 && v.readyState >= 2) return res();
  const ok = () => { v.removeEventListener('error', bad); res(); };
  const bad = () => { v.removeEventListener('seeked', ok); rej(new Error('seek')); };
  v.addEventListener('seeked', ok, { once: true });
  v.addEventListener('error', bad, { once: true });
  v.currentTime = at;
});

async function extract() {
  if (V.busy || !V.info) return;
  const fps = getFps($('#vFps'), $('#vFpsC'));
  const fe = fpsError(fps);
  if (fe) return toast(fe);
  clearFrames();
  V.busy = true;
  V.cancel = false;
  updateV();
  const n = Math.max(1, Math.floor(V.info.duration * fps));
  setProg('v', 'preparing', 0);
  const v = document.createElement('video'), c = document.createElement('canvas'), th = document.createElement('canvas');
  v.muted = true;
  v.preload = 'auto';
  v.src = V.url;
  try {
    await new Promise((res, rej) => { v.onloadeddata = res; v.onerror = rej; });
    const w = v.videoWidth, h = v.videoHeight, tw = 240, tH = Math.max(1, Math.round(h * tw / w));
    c.width = w;
    c.height = h;
    th.width = tw;
    th.height = tH;
    const cx = c.getContext('2d'), tx = th.getContext('2d');
    for (let i = 0; i < n; i++) {
      if (V.cancel) throw 'cancel';
      const ts = i / fps;
      await seek(v, Math.min(ts, Math.max(0, v.duration - 0.001)));
      cx.drawImage(v, 0, 0, w, h);
      tx.drawImage(c, 0, 0, tw, tH);
      const [blob, tb] = await Promise.all([toBlob(c, 'image/png'), toBlob(th, 'image/jpeg', 0.7)]);
      if (!blob || !tb) throw new RangeError('mem');
      V.frames.push({ i, ts, blob, tb });
      setProg('v', 'extracting', (i + 1) / n * 100, { a: i + 1, b: n });
    }
    V.page = 0;
    renderGallery();
    updateSel();
    toast('extracted', null, 'ok');
  } catch (e) {
    clearFrames();
    if (e === 'cancel' || V.cancel) toast('cancelled', null, 'warn');
    else toast(e instanceof RangeError || e?.name === 'QuotaExceededError' ? 'errMem' : 'errFail');
  } finally {
    v.removeAttribute('src');
    v.load();
    c.width = c.height = th.width = th.height = 0;
    hideProg('v');
    V.busy = false;
    updateV();
  }
}

function revokeThumbs() { V.urls.forEach(u => URL.revokeObjectURL(u)); V.urls = []; }
function clearFrames() {
  revokeThumbs();
  V.frames = [];
  V.sel.clear();
  V.page = 0;
  $('#gal').hidden = true;
  $('#galList').replaceChildren();
}

function renderGallery() {
  revokeThumbs();
  const list = $('#galList');
  list.replaceChildren();
  if (!V.frames.length) { $('#gal').hidden = true; return; }
  $('#gal').hidden = false;
  const pages = Math.ceil(V.frames.length / PAGE);
  V.page = Math.min(V.page, pages - 1);
  const frag = document.createDocumentFragment();
  V.frames.slice(V.page * PAGE, (V.page + 1) * PAGE).forEach(fr => {
    const li = document.createElement('li');
    li.className = 'fr';
    const u = URL.createObjectURL(fr.tb);
    V.urls.push(u);
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'th';
    b.dataset.i = fr.i;
    b.setAttribute('aria-label', `${t('frame')} ${pad(fr.i + 1, 4)}`);
    const img = new Image();
    img.src = u;
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    b.append(img);
    const m = document.createElement('label');
    m.className = 'm';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.dataset.i = fr.i;
    cb.checked = V.sel.has(fr.i);
    const tx = document.createElement('span'), a = document.createElement('b'), s = document.createElement('small');
    a.textContent = `${t('frame')} ${pad(fr.i + 1, 4)}`;
    s.textContent = fmtTs(fr.ts);
    tx.append(a, s);
    m.append(cb, tx);
    li.append(b, m);
    frag.append(li);
  });
  list.append(frag);
  $('#pager').hidden = pages < 2;
  $('#pgInfo').textContent = t('page', { a: V.page + 1, b: pages });
  $('#pgPrev').disabled = V.page === 0;
  $('#pgNext').disabled = V.page >= pages - 1;
}

function updateSel() {
  const n = V.sel.size;
  $('#selCount').textContent = n === 1 ? t('sel1') : t('selN', { n });
  $('#dlSel').disabled = !n;
}
function syncChecks() {
  $$('#galList input').forEach(c => { c.checked = V.sel.has(Number(c.dataset.i)); });
  updateSel();
}

async function dlSelected() {
  if (!V.sel.size) return toast('errNoSel');
  for (const i of [...V.sel].sort((a, b) => a - b)) {
    saveBlob(V.frames[i].blob, frameName(i));
    await sleep(250);
  }
}

async function dlZip() {
  if (!V.frames.length) return;
  const b = $('#dlZip'), z = $('#zipStat');
  b.disabled = true;
  z.textContent = t('zipping', { p: 0 });
  try {
    await load(LIB.jszip);
    const zip = new JSZip();
    V.frames.forEach(f => zip.file(frameName(f.i), f.blob));
    const blob = await zip.generateAsync({ type: 'blob', compression: 'STORE' }, m => { z.textContent = t('zipping', { p: Math.floor(m.percent) }); });
    saveBlob(blob, 'frames.zip');
  } catch (e) {
    toast(e?.message === 'lib' ? 'errLib' : 'errMem');
  }
  b.disabled = false;
  z.textContent = '';
}

function openModal(i) {
  const f = V.frames[i];
  V.mUrl = URL.createObjectURL(f.blob);
  const label = `${t('frame')} ${pad(i + 1, 4)}`;
  $('#mImg').src = V.mUrl;
  $('#mImg').alt = label;
  $('#mTitle').textContent = label;
  $('#mTime').textContent = fmtTs(f.ts);
  const a = $('#mDl');
  a.href = V.mUrl;
  a.download = frameName(i);
  $('#modal').showModal();
}

async function addFrames(files) {
  setErr('#fErr', '');
  if (!files.length) return setErr('#fErr', 'errNoFile');
  const ok = files.filter(f => /^image\/(png|jpe?g)$/.test(f.type));
  if (!ok.length) return setErr('#fErr', 'errType2');
  if (ok.length < files.length) setErr('#fErr', 'errSkipped', { n: files.length - ok.length });
  ok.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  for (const f of ok) {
    try {
      const bmp = await createImageBitmap(f);
      const w = bmp.width, h = bmp.height;
      bmp.close();
      F.items.push({ id: ++F.id, file: f, url: URL.createObjectURL(f), w, h });
    } catch {
      setErr('#fErr', 'errFrame', { name: f.name });
    }
  }
  changed();
}

function changed(fo) { F.fit = false; hideResult(); renderF(fo); }

function move(from, to, fo) {
  const [x] = F.items.splice(from, 1);
  F.items.splice(to, 0, x);
  changed(fo);
}

function renderF(fo) {
  $('#fWork').hidden = !F.items.length;
  const list = $('#fList');
  list.replaceChildren();
  const frag = document.createDocumentFragment();
  F.items.forEach((it, i) => {
    const li = document.createElement('li');
    li.draggable = true;
    li.dataset.i = i;
    const n = document.createElement('span');
    n.className = 'n';
    n.textContent = i + 1;
    const img = new Image();
    img.src = it.url;
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    const d = document.createElement('div'), nm = document.createElement('b'), rs = document.createElement('small');
    d.className = 'd';
    nm.textContent = it.file.name;
    rs.textContent = `${it.w} × ${it.h}`;
    d.append(nm, rs);
    const bt = document.createElement('div');
    bt.className = 'bt';
    [['up', '↑', 'moveUp'], ['down', '↓', 'moveDown'], ['del', '×', 'remove']].forEach(([a, s, k]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ic';
      b.dataset.a = a;
      b.textContent = s;
      b.setAttribute('aria-label', t(k));
      bt.append(b);
    });
    li.append(n, img, d, bt);
    frag.append(li);
  });
  list.append(frag);
  if (fo) list.querySelector(`li[data-i="${fo[0]}"] button[data-a="${fo[1]}"]`)?.focus();
  updateF();
}

function updateF() {
  const n = F.items.length, fps = getFps($('#fFps'), $('#fFpsC')), e = fpsError(fps);
  F.mm = n > 0 && F.items.some(x => x.w !== F.items[0].w || x.h !== F.items[0].h);
  $('#fCount').textContent = t('framesCount', { n });
  $('#fWarn').hidden = !F.mm || F.fit;
  $('#fWarnT').textContent = `${t('mismatch')} `;
  $('#fFit').textContent = t('resizeFirst');
  $('#fFitNote').textContent = F.mm && F.fit ? t('fitted') : '';
  setErr('#fFpsErr', e);
  $('#fEst').textContent = e || !n ? '' : t('estDur', { s: (n / fps).toFixed(2) });
  $('#fGo').textContent = t('create', { f: F.fmt === 'webm' ? 'WebM' : 'MP4' });
  $('#fGo').disabled = F.busy || !n || !!e || !F.fmt;
}

async function pickCodec(kind, w, h, fps) {
  if (!('VideoEncoder' in window) || !('VideoFrame' in window)) return null;
  const list = kind === 'mp4' ? H264.map(c => [c, 'avc']) : VPX;
  for (const [codec, mc] of list) {
    try {
      const r = await VideoEncoder.isConfigSupported({ codec, width: w, height: h, bitrate: 4e6, framerate: fps });
      if (r.supported) return { codec, mc };
    } catch {}
  }
  return null;
}

async function detect() {
  F.caps.mp4 = !!(await pickCodec('mp4', 1280, 720, 30));
  F.caps.webm = !!(await pickCodec('webm', 1280, 720, 30));
  F.caps.ready = true;
  F.fmt = F.caps.mp4 ? 'mp4' : F.caps.webm ? 'webm' : null;
}

function renderFormats() {
  if (!F.caps.ready) return;
  const box = $('#fmtList');
  box.replaceChildren();
  [['mp4', 'MP4'], ['webm', 'WebM']].forEach(([k, name]) => {
    const on = F.caps[k];
    const lb = document.createElement('label');
    lb.className = `fmt${on ? '' : ' off'}`;
    const r = document.createElement('input');
    r.type = 'radio';
    r.name = 'fmt';
    r.value = k;
    r.disabled = !on;
    r.checked = F.fmt === k;
    r.addEventListener('change', () => { F.fmt = k; updateF(); });
    const d = document.createElement('span'), b = document.createElement('b'), s = document.createElement('small');
    b.textContent = name;
    s.textContent = t(on ? 'supp' : 'notSupp');
    d.append(b, s);
    lb.append(r, d);
    box.append(lb);
  });
  const none = !F.caps.mp4 && !F.caps.webm;
  $('#fFmtMsg').textContent = none ? `${t('errNoFmt')} ${t('errNoFmtHint')}` : !F.caps.mp4 ? t('errMp4') : '';
  $('#fGo').hidden = none;
  updateF();
}

async function encode() {
  if (F.busy || !F.items.length || !F.fmt) return;
  const fps = getFps($('#fFps'), $('#fFpsC')), fe = fpsError(fps);
  if (fe) return toast(fe);
  if (F.mm && !F.fit) return toast('errMismatch');
  F.busy = true;
  F.cancel = false;
  hideResult();
  updateF();
  const kind = F.fmt, items = [...F.items], n = items.length, f0 = items[0];
  const W = f0.w - (f0.w % 2), H = f0.h - (f0.h % 2);
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const cx = cv.getContext('2d');
  let enc = null;
  try {
    setProg('f', 'loadingEnc', 0);
    const pc = await pickCodec(kind, W, H, fps);
    if (!pc) throw kind;
    await load(kind === 'mp4' ? LIB.mp4 : LIB.webm);
    const isMp4 = kind === 'mp4', M = isMp4 ? Mp4Muxer : WebMMuxer;
    const target = new M.ArrayBufferTarget();
    const muxer = new M.Muxer(isMp4
      ? { target, video: { codec: 'avc', width: W, height: H }, fastStart: 'in-memory' }
      : { target, video: { codec: pc.mc, width: W, height: H, frameRate: fps } });
    let err = null;
    enc = new VideoEncoder({ output: (c, m) => muxer.addVideoChunk(c, m), error: x => { err = x; } });
    enc.configure({ codec: pc.codec, width: W, height: H, bitrate: Math.round(Math.min(6e7, Math.max(2e6, W * H * fps * 0.1))), framerate: fps });
    const dur = Math.round(1e6 / fps);
    setProg('f', 'encoding', 0, { a: 0, b: n });
    for (let i = 0; i < n; i++) {
      if (F.cancel) throw 'cancel';
      if (err) throw err;
      const it = items[i];
      const bmp = await createImageBitmap(it.file);
      const s = Math.min(W / it.w, H / it.h), dw = it.w * s, dh = it.h * s;
      cx.fillStyle = '#000';
      cx.fillRect(0, 0, W, H);
      cx.drawImage(bmp, (W - dw) / 2, (H - dh) / 2, dw, dh);
      bmp.close();
      while (enc.encodeQueueSize > 6) await sleep(4);
      const vf = new VideoFrame(cv, { timestamp: Math.round(i * 1e6 / fps), duration: dur });
      enc.encode(vf, { keyFrame: i % 120 === 0 });
      vf.close();
      setProg('f', 'encoding', (i + 1) / n * 100, { a: i + 1, b: n });
    }
    await enc.flush();
    if (err) throw err;
    muxer.finalize();
    showResult(new Blob([target.buffer], { type: isMp4 ? 'video/mp4' : 'video/webm' }), kind, fps, W, H, n);
    toast('encDone', null, 'ok');
  } catch (x) {
    if (x === 'cancel') toast('cancelled', null, 'warn');
    else if (x === 'mp4') toast('errMp4');
    else if (x === 'webm') toast('errWebm');
    else if (x?.message === 'lib') toast('errLib');
    else if (x instanceof RangeError || x?.name === 'QuotaExceededError') toast('errMem');
    else toast('errEnc');
  } finally {
    try { if (enc && enc.state !== 'closed') enc.close(); } catch {}
    cv.width = cv.height = 0;
    hideProg('f');
    F.busy = false;
    updateF();
  }
}

function showResult(blob, kind, fps, w, h, n) {
  F.res = { url: URL.createObjectURL(blob), kind, fps, w, h, n, size: blob.size };
  $('#fVid').src = F.res.url;
  const a = $('#fDl');
  a.href = F.res.url;
  a.download = kind === 'mp4' ? 'video.mp4' : 'video.webm';
  $('#fRes').hidden = false;
  renderRes();
}
function renderRes() {
  const r = F.res;
  if (!r) return;
  const f = r.kind === 'mp4' ? 'MP4' : 'WebM';
  dl($('#fInfo'), [['format', f], ['fps', String(+r.fps.toFixed(2))], ['resolution', `${r.w} × ${r.h}`], ['duration', t('secs', { s: (r.n / r.fps).toFixed(2) })], ['size', fmtSize(r.size)]]);
  $('#fDl').textContent = t('download', { f });
}
function hideResult() {
  if (F.res) URL.revokeObjectURL(F.res.url);
  F.res = null;
  const v = $('#fVid');
  v.removeAttribute('src');
  v.load();
  $('#fRes').hidden = true;
}
async function resetFrames() {
  F.cancel = true;
  while (F.busy) await sleep(20);
  F.items.forEach(x => URL.revokeObjectURL(x.url));
  F.items = [];
  F.fit = false;
  hideResult();
  setErr('#fErr', '');
  renderF();
}

async function init() {
  const sl = saved('fl-lang'), st = saved('fl-theme');
  S.lang = sl === 'id' || sl === 'en' ? sl : (navigator.language || '').toLowerCase().startsWith('id') ? 'id' : 'en';
  setTheme(st === 'dark' || st === 'light' ? st : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  FMTS = videoFormats();
  fpsUI($('#vFps'), $('#vFpsC'), updateV);
  fpsUI($('#fFps'), $('#fFpsC'), updateF);
  $$('[role=tab]').forEach(b => b.addEventListener('click', () => selectTab(b)));
  $('.tabs').addEventListener('keydown', e => {
    const tabs = $$('[role=tab]'), i = tabs.indexOf(document.activeElement);
    if (i < 0 || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
    const nx = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    nx.focus();
    selectTab(nx);
  });
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  $('#themeBtn').addEventListener('click', () => setTheme(S.theme === 'dark' ? 'light' : 'dark'));
  window.addEventListener('dragover', e => e.preventDefault());
  window.addEventListener('drop', e => e.preventDefault());
  zone($('#vDrop'), $('#vInput'), loadVideo);
  zone($('#fDrop'), $('#fInput'), addFrames);
  $('#vGo').addEventListener('click', extract);
  $('#vReset').addEventListener('click', resetVideo);
  $('#vProg .cancel').addEventListener('click', () => { V.cancel = true; });
  $('#fProg .cancel').addEventListener('click', () => { F.cancel = true; });
  $('#selAll').addEventListener('click', () => { V.frames.forEach(f => V.sel.add(f.i)); syncChecks(); });
  $('#selNone').addEventListener('click', () => { V.sel.clear(); syncChecks(); });
  $('#selInv').addEventListener('click', () => { V.frames.forEach(f => (V.sel.has(f.i) ? V.sel.delete(f.i) : V.sel.add(f.i))); syncChecks(); });
  $('#dlSel').addEventListener('click', dlSelected);
  $('#dlZip').addEventListener('click', dlZip);
  $('#pgPrev').addEventListener('click', () => { V.page--; renderGallery(); });
  $('#pgNext').addEventListener('click', () => { V.page++; renderGallery(); });
  $('#galList').addEventListener('click', e => {
    const b = e.target.closest('button.th');
    if (b) openModal(Number(b.dataset.i));
  });
  $('#galList').addEventListener('change', e => {
    const c = e.target;
    if (c.type !== 'checkbox') return;
    if (c.checked) V.sel.add(Number(c.dataset.i));
    else V.sel.delete(Number(c.dataset.i));
    updateSel();
  });
  const modal = $('#modal');
  $('#mClose').addEventListener('click', () => modal.close());
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
  modal.addEventListener('close', () => {
    URL.revokeObjectURL(V.mUrl);
    $('#mImg').removeAttribute('src');
  });
  $('#fFit').addEventListener('click', () => { F.fit = true; updateF(); });
  $('#fGo').addEventListener('click', encode);
  $('#fReset').addEventListener('click', resetFrames);
  const list = $('#fList');
  let dragI = -1;
  list.addEventListener('click', e => {
    const b = e.target.closest('button[data-a]');
    if (!b) return;
    const i = Number(b.closest('li').dataset.i), a = b.dataset.a;
    if (a === 'up' && i > 0) move(i, i - 1, [i - 1, 'up']);
    else if (a === 'down' && i < F.items.length - 1) move(i, i + 1, [i + 1, 'down']);
    else if (a === 'del') {
      URL.revokeObjectURL(F.items[i].url);
      F.items.splice(i, 1);
      changed();
    }
  });
  list.addEventListener('dragstart', e => {
    const li = e.target.closest('li');
    if (!li) return;
    dragI = Number(li.dataset.i);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(dragI));
    li.classList.add('drag');
  });
  list.addEventListener('dragend', () => {
    dragI = -1;
    $$('#fList li').forEach(l => l.classList.remove('drag', 'over'));
  });
  list.addEventListener('dragover', e => {
    if (dragI < 0) return;
    e.preventDefault();
    $$('#fList li.over').forEach(l => l.classList.remove('over'));
    e.target.closest('li')?.classList.add('over');
  });
  list.addEventListener('drop', e => {
    if (dragI < 0) return;
    e.preventDefault();
    const li = e.target.closest('li');
    const from = dragI;
    dragI = -1;
    if (li && Number(li.dataset.i) !== from) move(from, Number(li.dataset.i));
    else $$('#fList li').forEach(l => l.classList.remove('drag', 'over'));
  });
  applyLang();
  await detect();
  applyLang();
}

init();
