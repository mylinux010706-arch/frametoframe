var translations = {
  en: {
    appTitle: "Video ⇄ Frames",
    tagline: "Turn a video into frames, or frames into a video — all in your browser.",
    tabVideoToFrames: "Video to frames",
    tabFramesToVideo: "Frames to video",
    dropVideoTitle: "Drop a video here",
    dropVideoHint: "or click to browse — MP4, WebM, MOV",
    dropFramesTitle: "Drop image frames here",
    dropFramesHint: "or click to browse — PNG or JPG, multiple files",
    fpsLabel: "Frames per second",
    formatLabel: "Frame format",
    outputFormatLabel: "Output format",
    formatMp4: "MP4",
    formatWebm: "WebM",
    formatGif: "GIF",
    formatMp4Unsupported: "This browser can only export WebM here.",
    qualityLabel: "Quality",
    qualityLow: "Low",
    qualityMedium: "Medium",
    qualityHigh: "High",
    audioLabel: "Background audio (optional)",
    audioChoose: "Choose file",
    extractModeLabel: "Extraction mode",
    extractModeFps: "Fixed FPS",
    extractModeNth: "Every Nth native frame",
    nthLabel: "Every Nth frame",
    nthModeUnsupported: "This browser can't read native frames — using Fixed FPS instead.",
    trimStartLabel: "Start",
    trimEndLabel: "End",
    trimNow: "Now",
    trimSelected: "Selected {selected} of {total}",
    dragReorderHint: "Drag thumbnails to reorder them.",
    selectAll: "Select all",
    selectNone: "Select none",
    extractButton: "Extract frames",
    buildButton: "Build video",
    buildingHint: "Building takes about as long as the finished video plays.",
    outputNote: "Everything runs on your device — nothing is uploaded.",
    removeFile: "Remove",
    clearAll: "Clear",
    downloadZip: "Download frames (.zip)",
    downloadVideo: "Download video",
    installApp: "Install app",
    statusReady: "Ready — {duration}, {width}×{height}",
    statusExtracting: "Extracting frame {current} of {total}",
    statusExtractingNth: "Extracting… {count} frames captured so far",
    statusZipping: "Packing zip… {percent}%",
    statusExtractDone: "{count} frames extracted",
    statusExtractDoneCapped: "Captured the maximum of {count} frames — the clip may have more.",
    statusBuilding: "Building frame {current} of {total}",
    statusEncodingGif: "Encoding GIF… {percent}%",
    statusBuildDone: "Video ready",
    statusBuildDoneFallback: "Video ready — saved as WebM, since this browser can't encode MP4.",
    metaFramesSelected: "{count} frames selected",
    metaFramesReady: "{count} frames · {duration} at {fps} fps · {size}",
    metaFramesReadyNth: "{count} frames · every {n} native frames · {size}",
    metaFramesSelectedForZip: "{selected} of {total} selected · ~{size}",
    metaVideoReady: "{count} frames · {fps} fps · {duration} · {format} · {size}",
    sizeEstimateVideo: "Estimated size: ~{size}",
    sizeEstimateGif: "GIF size depends on the footage — build it to see the result.",
    errorNoFile: "Add a video first.",
    errorNoFrames: "Add at least two frames first.",
    errorNotVideo: "That file isn't a video.",
    errorNotImage: "Only image files are supported.",
    errorTooManyFrames: "That's {count} frames — lower the fps or use a shorter clip.",
    errorNoRecorder: "This browser can't record video.",
    errorBuildFailed: "Something went wrong while building — try again.",
    ariaThemeToggle: "Toggle dark mode",
    ariaRemoveFrame: "Remove this frame",
    ariaSelectFrame: "Select this frame for download"
  },
  id: {
    appTitle: "Video ⇄ Frame",
    tagline: "Ubah video menjadi frame, atau frame menjadi video — semua di browser.",
    tabVideoToFrames: "Video ke frame",
    tabFramesToVideo: "Frame ke video",
    dropVideoTitle: "Taruh video di sini",
    dropVideoHint: "atau klik untuk memilih file — MP4, WebM, MOV",
    dropFramesTitle: "Taruh frame gambar di sini",
    dropFramesHint: "atau klik untuk memilih file — PNG atau JPG, bisa lebih dari satu",
    fpsLabel: "Frame per detik",
    formatLabel: "Format frame",
    outputFormatLabel: "Format keluaran",
    formatMp4: "MP4",
    formatWebm: "WebM",
    formatGif: "GIF",
    formatMp4Unsupported: "Browser ini hanya bisa mengekspor WebM.",
    qualityLabel: "Kualitas",
    qualityLow: "Rendah",
    qualityMedium: "Sedang",
    qualityHigh: "Tinggi",
    audioLabel: "Audio latar (opsional)",
    audioChoose: "Pilih file",
    extractModeLabel: "Mode ekstraksi",
    extractModeFps: "FPS tetap",
    extractModeNth: "Setiap frame ke-N (asli)",
    nthLabel: "Setiap frame ke-N",
    nthModeUnsupported: "Browser ini tidak bisa membaca frame asli — pakai FPS tetap.",
    trimStartLabel: "Mulai",
    trimEndLabel: "Selesai",
    trimNow: "Sekarang",
    trimSelected: "Dipilih {selected} dari {total}",
    dragReorderHint: "Seret thumbnail untuk mengurutkan ulang.",
    selectAll: "Pilih semua",
    selectNone: "Batal semua",
    extractButton: "Ambil frame",
    buildButton: "Buat video",
    buildingHint: "Waktu proses kurang lebih sama dengan durasi video hasil.",
    outputNote: "Semua diproses di perangkatmu — tidak ada yang diunggah.",
    removeFile: "Hapus",
    clearAll: "Bersihkan",
    downloadZip: "Unduh frame (.zip)",
    downloadVideo: "Unduh video",
    installApp: "Pasang aplikasi",
    statusReady: "Siap — {duration}, {width}×{height}",
    statusExtracting: "Mengambil frame {current} dari {total}",
    statusExtractingNth: "Mengekstrak… {count} frame terkumpul",
    statusZipping: "Menyusun zip… {percent}%",
    statusExtractDone: "{count} frame berhasil diambil",
    statusExtractDoneCapped: "Berhasil mengambil maksimum {count} frame — klip ini mungkin punya lebih banyak.",
    statusBuilding: "Menyusun frame {current} dari {total}",
    statusEncodingGif: "Mengekode GIF… {percent}%",
    statusBuildDone: "Video siap",
    statusBuildDoneFallback: "Video siap — disimpan sebagai WebM karena browser ini tidak bisa mengekode MP4.",
    metaFramesSelected: "{count} frame dipilih",
    metaFramesReady: "{count} frame · {duration} pada {fps} fps · {size}",
    metaFramesReadyNth: "{count} frame · setiap {n} frame asli · {size}",
    metaFramesSelectedForZip: "{selected} dari {total} dipilih · ~{size}",
    metaVideoReady: "{count} frame · {fps} fps · {duration} · {format} · {size}",
    sizeEstimateVideo: "Perkiraan ukuran: ~{size}",
    sizeEstimateGif: "Ukuran GIF tergantung isi videonya — proses dulu untuk melihat hasilnya.",
    errorNoFile: "Tambahkan video terlebih dahulu.",
    errorNoFrames: "Tambahkan minimal dua frame.",
    errorNotVideo: "File ini bukan video.",
    errorNotImage: "Hanya file gambar yang didukung.",
    errorTooManyFrames: "Itu {count} frame — turunkan fps atau gunakan video yang lebih pendek.",
    errorNoRecorder: "Browser ini tidak bisa merekam video.",
    errorBuildFailed: "Ada yang salah saat membangun video — coba lagi.",
    ariaThemeToggle: "Ganti mode gelap/terang",
    ariaRemoveFrame: "Hapus frame ini",
    ariaSelectFrame: "Pilih frame ini untuk diunduh"
  }
};

var MAX_FRAMES = 3000;
var SETTINGS_KEY = "vf_settings";
var BITRATE_PRESETS = { low: 1500000, medium: 4000000, high: 9000000 };
var GIF_QUALITY_PRESETS = { low: 20, medium: 12, high: 6 };
var GIF_MAX_DIM = 480;

var currentLang = "en";
var currentVideoFile = null;
var frameBlobs = [];
var frameSelected = [];
var lastExtractMeta = null;
var frameFiles = [];
var frameImageCache = new Map();
var builtVideoUrl = null;
var builtVideoExt = "mp4";
var attachedAudioFile = null;
var dragSrcIndex = null;
var deferredInstallPrompt = null;

var themeToggle = document.getElementById("themeToggle");
var installBtn = document.getElementById("installBtn");
var langButtons = Array.prototype.slice.call(document.querySelectorAll(".lang-btn"));
var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));

var dropzoneVideo = document.getElementById("dropzoneVideo");
var videoInput = document.getElementById("videoInput");
var videoFileInfo = document.getElementById("videoFileInfo");
var videoFileName = document.getElementById("videoFileName");
var videoRemoveBtn = document.getElementById("videoRemoveBtn");
var trimRow = document.getElementById("trimRow");
var trimStart = document.getElementById("trimStart");
var trimEnd = document.getElementById("trimEnd");
var trimStartNow = document.getElementById("trimStartNow");
var trimEndNow = document.getElementById("trimEndNow");
var trimHint = document.getElementById("trimHint");
var extractModeSelect = document.getElementById("extractMode");
var nthUnsupportedHint = document.getElementById("nthUnsupportedHint");
var fpsField = document.getElementById("fpsField");
var nthField = document.getElementById("nthField");
var videoFpsInput = document.getElementById("videoFps");
var videoNthInput = document.getElementById("videoNth");
var videoFormatSelect = document.getElementById("videoFormat");
var extractBtn = document.getElementById("extractBtn");
var v2fStatus = document.getElementById("v2fStatus");
var v2fProgress = document.getElementById("v2fProgress");
var v2fProgressFill = document.getElementById("v2fProgressFill");
var v2fResults = document.getElementById("v2fResults");
var v2fFilmstrip = document.getElementById("v2fFilmstrip");
var v2fMeta = document.getElementById("v2fMeta");
var v2fSelectedMeta = document.getElementById("v2fSelectedMeta");
var v2fSelectAllBtn = document.getElementById("v2fSelectAllBtn");
var v2fSelectNoneBtn = document.getElementById("v2fSelectNoneBtn");
var downloadZipBtn = document.getElementById("downloadZipBtn");

var dropzoneFrames = document.getElementById("dropzoneFrames");
var framesInput = document.getElementById("framesInput");
var f2vList = document.getElementById("f2vList");
var f2vFilmstrip = document.getElementById("f2vFilmstrip");
var f2vMeta = document.getElementById("f2vMeta");
var f2vClearBtn = document.getElementById("f2vClearBtn");
var framesFpsInput = document.getElementById("framesFps");
var framesFormatSelect = document.getElementById("framesFormat");
var framesFormatHint = document.getElementById("framesFormatHint");
var qualitySelect = document.getElementById("qualitySelect");
var audioField = document.getElementById("audioField");
var audioInput = document.getElementById("audioInput");
var audioPickBtn = document.getElementById("audioPickBtn");
var audioFileName = document.getElementById("audioFileName");
var audioRemoveBtn = document.getElementById("audioRemoveBtn");
var sizeEstimateHint = document.getElementById("sizeEstimateHint");
var buildBtn = document.getElementById("buildBtn");
var f2vStatus = document.getElementById("f2vStatus");
var f2vProgress = document.getElementById("f2vProgress");
var f2vProgressFill = document.getElementById("f2vProgressFill");
var f2vResult = document.getElementById("f2vResult");
var f2vPreview = document.getElementById("f2vPreview");
var f2vPreviewImg = document.getElementById("f2vPreviewImg");
var f2vResultMeta = document.getElementById("f2vResultMeta");
var downloadVideoBtn = document.getElementById("downloadVideoBtn");

var videoSource = document.getElementById("videoSource");
var workCanvas = document.getElementById("workCanvas");
var ctx = workCanvas.getContext("2d");

function t(key, vars) {
  var str = (translations[currentLang] && translations[currentLang][key]) || key;
  if (vars) {
    Object.keys(vars).forEach(function (k) {
      str = str.replace("{" + k + "}", vars[k]);
    });
  }
  return str;
}

function setStatus(el, text) {
  el.textContent = text;
}

function formatTime(seconds) {
  seconds = Math.max(0, Math.round(seconds));
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = seconds % 60;
  var mm = h > 0 ? String(m).padStart(2, "0") : String(m);
  var ss = String(s).padStart(2, "0");
  return h > 0 ? h + ":" + mm + ":" + ss : mm + ":" + ss;
}

function formatBytes(bytes) {
  if (!isFinite(bytes) || bytes <= 0) return "0 KB";
  var units = ["B", "KB", "MB", "GB"];
  var i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  var decimals = i === 0 || bytes >= 100 ? 0 : 1;
  return bytes.toFixed(decimals) + " " + units[i];
}

function clampNumber(input, min, max) {
  var v = parseInt(input.value, 10);
  if (isNaN(v)) v = min;
  v = Math.min(max, Math.max(min, v));
  input.value = v;
  return v;
}

function clampFloat(value, min, max) {
  var v = parseFloat(value);
  if (isNaN(v)) v = min;
  return Math.min(max, Math.max(min, v));
}

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function naturalCompare(a, b) {
  var ax = [];
  var bx = [];
  a.replace(/(\d+)|(\D+)/g, function (_, d, s) {
    ax.push([d ? Number(d) : Infinity, s || ""]);
  });
  b.replace(/(\d+)|(\D+)/g, function (_, d, s) {
    bx.push([d ? Number(d) : Infinity, s || ""]);
  });
  while (ax.length && bx.length) {
    var an = ax.shift();
    var bn = bx.shift();
    var nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
    if (nn) return nn;
  }
  return ax.length - bx.length;
}

/* ---------- settings persistence ---------- */

function loadSettings() {
  try {
    var raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveSetting(key, value) {
  try {
    var s = loadSettings();
    s[key] = value;
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch (e) {
    /* storage unavailable (private mode, quota, etc.) — safe to ignore */
  }
}

function persistOnChange(el, key) {
  if (!el) return;
  el.addEventListener("change", function () {
    saveSetting(key, el.value);
  });
}

function applySavedSettings() {
  var s = loadSettings();
  if (s.videoFps) videoFpsInput.value = s.videoFps;
  if (s.videoFormat) videoFormatSelect.value = s.videoFormat;
  if (s.videoNth) videoNthInput.value = s.videoNth;
  if (s.extractMode) {
    var modeOpt = extractModeSelect.querySelector('option[value="' + s.extractMode + '"]');
    if (modeOpt && !modeOpt.disabled) extractModeSelect.value = s.extractMode;
  }
  if (s.framesFps) framesFpsInput.value = s.framesFps;
  if (s.framesFormat) {
    var formatOpt = framesFormatSelect.querySelector('option[value="' + s.framesFormat + '"]');
    if (formatOpt && !formatOpt.disabled) framesFormatSelect.value = s.framesFormat;
  }
  if (s.quality) qualitySelect.value = s.quality;
}

/* ---------- language / theme ---------- */

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  langButtons.forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
  });
  themeToggle.setAttribute("aria-label", t("ariaThemeToggle"));
  refreshDynamicText();
}

function refreshDynamicText() {
  if (!v2fResults.hidden && frameBlobs.length && lastExtractMeta) {
    updateExtractedMeta(lastExtractMeta);
    updateSelectedMeta();
  }
  if (!f2vList.hidden) {
    f2vMeta.textContent = t("metaFramesSelected", { count: frameFiles.length });
  }
  if (!f2vResult.hidden) {
    var fps2 = clampNumber(framesFpsInput, 1, 60);
    f2vResultMeta.textContent = t("metaVideoReady", {
      count: frameFiles.length,
      fps: fps2,
      duration: formatTime(frameFiles.length / fps2),
      format: builtVideoExt.toUpperCase(),
      size: f2vResultMeta.dataset.size || ""
    });
  }
  updateSizeEstimate();
}

langButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    localStorage.setItem("vf_lang", btn.getAttribute("data-lang"));
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

function getEffectiveTheme() {
  var stored = localStorage.getItem("vf_theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

themeToggle.addEventListener("click", function () {
  var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  var next = current === "dark" ? "light" : "dark";
  localStorage.setItem("vf_theme", next);
  applyTheme(next);
});

/* ---------- tabs ---------- */

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (tb) {
      tb.setAttribute("aria-selected", tb === tab ? "true" : "false");
    });
    panels.forEach(function (p) {
      p.hidden = p.id !== "panel-" + tab.getAttribute("data-panel");
    });
  });
});

/* ---------- steppers ---------- */

document.querySelectorAll(".stepper-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var input = document.getElementById(btn.getAttribute("data-target"));
    var step = parseInt(btn.getAttribute("data-step"), 10);
    var min = parseInt(input.min, 10);
    var max = parseInt(input.max, 10);
    var val = parseInt(input.value, 10);
    if (isNaN(val)) val = min;
    input.value = Math.min(max, Math.max(min, val + step));
    input.dispatchEvent(new Event("change"));
  });
});

/* ---------- dropzone helper ---------- */

function wireDropzone(zone, input, onFiles) {
  zone.addEventListener("click", function () {
    input.click();
  });
  zone.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      input.click();
    }
  });
  zone.addEventListener("dragover", function (e) {
    e.preventDefault();
    zone.classList.add("dragover");
  });
  zone.addEventListener("dragleave", function () {
    zone.classList.remove("dragover");
  });
  zone.addEventListener("drop", function (e) {
    e.preventDefault();
    zone.classList.remove("dragover");
    onFiles(e.dataTransfer.files);
  });
  input.addEventListener("change", function () {
    onFiles(input.files);
    input.value = "";
  });
}

/* ---------- video → frames: source video + trim ---------- */

function lockVideoControls() {
  videoSource.dataset.hadControls = videoSource.hasAttribute("controls") ? "1" : "0";
  videoSource.removeAttribute("controls");
  videoSource.style.pointerEvents = "none";
}

function unlockVideoControls() {
  if (videoSource.dataset.hadControls === "1") videoSource.setAttribute("controls", "");
  videoSource.style.pointerEvents = "";
}

function updateTrimHint() {
  var start = parseFloat(trimStart.value) || 0;
  var end = parseFloat(trimEnd.value) || 0;
  trimHint.textContent = t("trimSelected", {
    selected: formatTime(Math.max(0, end - start)),
    total: formatTime(videoSource.duration || 0)
  });
}

function clampTrimInputs() {
  var duration = videoSource.duration || 0;
  var start = clampFloat(trimStart.value, 0, duration);
  var end = clampFloat(trimEnd.value, Math.min(duration, start + 0.1), duration);
  trimStart.value = start.toFixed(1);
  trimEnd.value = end.toFixed(1);
  updateTrimHint();
}

trimStart.addEventListener("change", clampTrimInputs);
trimEnd.addEventListener("change", clampTrimInputs);
trimStart.addEventListener("input", updateTrimHint);
trimEnd.addEventListener("input", updateTrimHint);

trimStartNow.addEventListener("click", function () {
  trimStart.value = videoSource.currentTime.toFixed(1);
  clampTrimInputs();
});
trimEndNow.addEventListener("click", function () {
  trimEnd.value = videoSource.currentTime.toFixed(1);
  clampTrimInputs();
});

function supportsRVFC() {
  return typeof HTMLVideoElement !== "undefined" && "requestVideoFrameCallback" in HTMLVideoElement.prototype;
}

function initExtractMode() {
  var nthOption = extractModeSelect.querySelector('option[value="nth"]');
  if (!supportsRVFC()) {
    if (nthOption) nthOption.disabled = true;
    if (extractModeSelect.value === "nth") extractModeSelect.value = "fps";
    if (nthUnsupportedHint) {
      nthUnsupportedHint.hidden = false;
      nthUnsupportedHint.setAttribute("data-i18n", "nthModeUnsupported");
    }
  }
  updateExtractModeUI();
}

function updateExtractModeUI() {
  var isNth = extractModeSelect.value === "nth";
  fpsField.hidden = isNth;
  nthField.hidden = !isNth;
}

extractModeSelect.addEventListener("change", updateExtractModeUI);

function handleVideoFile(file) {
  if (!file || file.type.indexOf("video/") !== 0) {
    setStatus(v2fStatus, t("errorNotVideo"));
    return;
  }
  currentVideoFile = file;
  videoFileName.textContent = file.name;
  videoFileInfo.hidden = false;
  v2fResults.hidden = true;
  frameBlobs = [];
  frameSelected = [];
  videoSource.hidden = false;
  videoSource.src = URL.createObjectURL(file);
  videoSource.addEventListener(
    "loadedmetadata",
    function onMeta() {
      videoSource.removeEventListener("loadedmetadata", onMeta);
      trimStart.max = videoSource.duration;
      trimEnd.max = videoSource.duration;
      trimStart.value = "0";
      trimEnd.value = videoSource.duration.toFixed(1);
      trimRow.hidden = false;
      updateTrimHint();
      setStatus(
        v2fStatus,
        t("statusReady", {
          duration: formatTime(videoSource.duration),
          width: videoSource.videoWidth,
          height: videoSource.videoHeight
        })
      );
    }
  );
}

wireDropzone(dropzoneVideo, videoInput, function (files) {
  if (files.length) handleVideoFile(files[0]);
});

videoRemoveBtn.addEventListener("click", function () {
  currentVideoFile = null;
  videoFileInfo.hidden = true;
  videoSource.removeAttribute("src");
  videoSource.hidden = true;
  trimRow.hidden = true;
  v2fResults.hidden = true;
  setStatus(v2fStatus, "");
});

/* ---------- video → frames: extraction ---------- */

function seekTo(time) {
  return new Promise(function (resolve) {
    var settled = false;
    function done() {
      if (settled) return;
      settled = true;
      videoSource.removeEventListener("seeked", done);
      resolve();
    }
    videoSource.addEventListener("seeked", done);
    videoSource.currentTime = time;
    setTimeout(done, 400);
  });
}

function updateProgress(el, current, total) {
  el.style.width = Math.round((current / total) * 100) + "%";
}

function extractEveryNthFrame(n, start, end, format) {
  return new Promise(function (resolve, reject) {
    var counter = 0;
    var pending = [];
    var capped = false;
    var wasMuted = videoSource.muted;
    videoSource.muted = true;

    function finish() {
      videoSource.pause();
      videoSource.playbackRate = 1;
      videoSource.muted = wasMuted;
      Promise.all(pending).then(function (blobs) {
        resolve({ blobs: blobs, capped: capped });
      });
    }

    function onFrame(now, frameMeta) {
      var mediaTime = frameMeta.mediaTime;
      counter++;
      if (mediaTime >= start && counter % n === 0 && pending.length < MAX_FRAMES) {
        workCanvas.width = videoSource.videoWidth;
        workCanvas.height = videoSource.videoHeight;
        ctx.drawImage(videoSource, 0, 0, workCanvas.width, workCanvas.height);
        var quality = format === "image/jpeg" ? 0.92 : undefined;
        pending.push(
          new Promise(function (res) {
            workCanvas.toBlob(res, format, quality);
          })
        );
        updateProgress(
          v2fProgressFill,
          Math.min(99, Math.round(((mediaTime - start) / Math.max(0.001, end - start)) * 100)),
          100
        );
        setStatus(v2fStatus, t("statusExtractingNth", { count: pending.length }));
      }
      if (pending.length >= MAX_FRAMES) capped = true;
      if (mediaTime >= end || videoSource.ended || capped) {
        finish();
        return;
      }
      videoSource.requestVideoFrameCallback(onFrame);
    }

    videoSource.playbackRate = 8;
    seekTo(start).then(function () {
      videoSource.requestVideoFrameCallback(onFrame);
      videoSource.play().catch(reject);
    });
  });
}

function updateExtractedMeta(meta) {
  var totalBytes = frameBlobs.reduce(function (sum, blob) {
    return sum + blob.size;
  }, 0);
  if (meta.mode === "nth") {
    v2fMeta.textContent = t("metaFramesReadyNth", {
      count: frameBlobs.length,
      n: meta.n,
      size: formatBytes(totalBytes)
    });
  } else {
    v2fMeta.textContent = t("metaFramesReady", {
      count: frameBlobs.length,
      duration: formatTime(frameBlobs.length / meta.fps),
      fps: meta.fps,
      size: formatBytes(totalBytes)
    });
  }
}

function updateSelectedMeta() {
  var selectedCount = frameSelected.filter(Boolean).length;
  var selectedBytes = frameBlobs.reduce(function (sum, blob, idx) {
    return sum + (frameSelected[idx] ? blob.size : 0);
  }, 0);
  v2fSelectedMeta.textContent = t("metaFramesSelectedForZip", {
    selected: selectedCount,
    total: frameBlobs.length,
    size: formatBytes(selectedBytes)
  });
  downloadZipBtn.disabled = selectedCount === 0;
}

function renderFrameThumbnails() {
  v2fFilmstrip.innerHTML = "";
  frameBlobs.forEach(function (blob, idx) {
    var wrap = document.createElement("div");
    wrap.className = "frame-thumb-wrap" + (frameSelected[idx] ? " selected" : "");

    var img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    img.loading = "lazy";
    img.alt = "frame " + (idx + 1);
    img.className = "frame-thumb";

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "frame-select-toggle";
    toggle.setAttribute("aria-pressed", frameSelected[idx] ? "true" : "false");
    toggle.setAttribute("aria-label", t("ariaSelectFrame"));
    toggle.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

    function toggleThis() {
      frameSelected[idx] = !frameSelected[idx];
      wrap.classList.toggle("selected", frameSelected[idx]);
      toggle.setAttribute("aria-pressed", frameSelected[idx] ? "true" : "false");
      updateSelectedMeta();
    }
    img.addEventListener("click", toggleThis);
    toggle.addEventListener("click", toggleThis);

    wrap.appendChild(img);
    wrap.appendChild(toggle);
    v2fFilmstrip.appendChild(wrap);
  });
}

v2fSelectAllBtn.addEventListener("click", function () {
  frameSelected = frameSelected.map(function () {
    return true;
  });
  renderFrameThumbnails();
  updateSelectedMeta();
});

v2fSelectNoneBtn.addEventListener("click", function () {
  frameSelected = frameSelected.map(function () {
    return false;
  });
  renderFrameThumbnails();
  updateSelectedMeta();
});

async function extractFrames() {
  if (!currentVideoFile) {
    setStatus(v2fStatus, t("errorNoFile"));
    return;
  }
  var duration = videoSource.duration || 0;
  var start = clampFloat(trimStart.value, 0, duration);
  var end = clampFloat(trimEnd.value, Math.min(duration, start + 0.1), duration);
  var mode = extractModeSelect.value === "nth" && supportsRVFC() ? "nth" : "fps";
  var format = videoFormatSelect.value;

  if (mode === "fps") {
    var fpsCheck = clampNumber(videoFpsInput, 1, 60);
    var totalCheck = Math.max(1, Math.floor((end - start) * fpsCheck));
    if (totalCheck > MAX_FRAMES) {
      setStatus(v2fStatus, t("errorTooManyFrames", { count: totalCheck }));
      return;
    }
  }

  extractBtn.disabled = true;
  v2fProgress.hidden = false;
  v2fResults.hidden = true;
  frameBlobs = [];
  frameSelected = [];
  workCanvas.width = videoSource.videoWidth;
  workCanvas.height = videoSource.videoHeight;
  lockVideoControls();

  var capped = false;
  var meta;

  try {
    if (mode === "nth") {
      var n = clampNumber(videoNthInput, 1, 60);
      var result = await extractEveryNthFrame(n, start, end, format);
      frameBlobs = result.blobs;
      capped = result.capped;
      meta = { mode: "nth", n: n };
    } else {
      var fps = clampNumber(videoFpsInput, 1, 60);
      var total = Math.max(1, Math.floor((end - start) * fps));
      for (var i = 0; i < total; i++) {
        var time = Math.min(end - 0.001, start + i / fps);
        await seekTo(time);
        ctx.drawImage(videoSource, 0, 0, workCanvas.width, workCanvas.height);
        var quality = format === "image/jpeg" ? 0.92 : undefined;
        var blob = await new Promise(function (resolve) {
          workCanvas.toBlob(resolve, format, quality);
        });
        frameBlobs.push(blob);
        updateProgress(v2fProgressFill, i + 1, total);
        setStatus(v2fStatus, t("statusExtracting", { current: i + 1, total: total }));
      }
      meta = { mode: "fps", fps: fps };
    }
  } finally {
    unlockVideoControls();
  }

  frameSelected = frameBlobs.map(function () {
    return true;
  });
  lastExtractMeta = meta;
  extractBtn.disabled = false;
  v2fProgress.hidden = true;
  renderFrameThumbnails();
  updateExtractedMeta(meta);
  updateSelectedMeta();
  v2fResults.hidden = false;
  setStatus(v2fStatus, t(capped ? "statusExtractDoneCapped" : "statusExtractDone", { count: frameBlobs.length }));
}

extractBtn.addEventListener("click", extractFrames);

async function downloadFramesZip() {
  var selectedIndices = frameBlobs
    .map(function (_, i) {
      return i;
    })
    .filter(function (i) {
      return frameSelected[i];
    });
  if (!selectedIndices.length) return;
  downloadZipBtn.disabled = true;
  var zip = new JSZip();
  var ext = videoFormatSelect.value === "image/jpeg" ? "jpg" : "png";
  var pad = String(frameBlobs.length).length;
  selectedIndices.forEach(function (idx) {
    var name = "frame_" + String(idx + 1).padStart(pad, "0") + "." + ext;
    zip.file(name, frameBlobs[idx]);
  });
  var content = await zip.generateAsync({ type: "blob" }, function (meta) {
    setStatus(v2fStatus, t("statusZipping", { percent: Math.round(meta.percent) }));
  });
  var url = URL.createObjectURL(content);
  var a = document.createElement("a");
  a.href = url;
  a.download = selectedIndices.length === frameBlobs.length ? "frames.zip" : "frames-selected.zip";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(function () {
    URL.revokeObjectURL(url);
  }, 4000);
  updateSelectedMeta();
  setStatus(v2fStatus, t("statusExtractDone", { count: frameBlobs.length }));
}

downloadZipBtn.addEventListener("click", downloadFramesZip);

/* ---------- frames → video: frame list (with drag reorder) ---------- */

function addFrameFiles(fileList) {
  var arr = Array.prototype.slice.call(fileList).filter(function (f) {
    return f.type.indexOf("image/") === 0;
  });
  if (!arr.length) {
    setStatus(f2vStatus, t("errorNotImage"));
    return;
  }
  frameFiles = frameFiles.concat(arr);
  frameFiles.sort(function (a, b) {
    return naturalCompare(a.name, b.name);
  });
  f2vResult.hidden = true;
  renderFrameList();
}

function renderFrameList() {
  f2vFilmstrip.innerHTML = "";
  frameFiles.forEach(function (file, idx) {
    var wrap = document.createElement("div");
    wrap.className = "frame-thumb-wrap";
    wrap.draggable = true;
    wrap.title = t("dragReorderHint");

    var img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.loading = "lazy";
    img.className = "frame-thumb";
    img.alt = file.name;

    var rm = document.createElement("button");
    rm.type = "button";
    rm.className = "frame-remove";
    rm.textContent = "×";
    rm.setAttribute("aria-label", t("ariaRemoveFrame"));
    rm.addEventListener("click", function () {
      frameFiles.splice(idx, 1);
      renderFrameList();
    });

    wrap.addEventListener("dragstart", function (e) {
      dragSrcIndex = idx;
      wrap.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", String(idx));
    });
    wrap.addEventListener("dragend", function () {
      wrap.classList.remove("dragging");
    });
    wrap.addEventListener("dragover", function (e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      wrap.classList.add("drag-over");
    });
    wrap.addEventListener("dragleave", function () {
      wrap.classList.remove("drag-over");
    });
    wrap.addEventListener("drop", function (e) {
      e.preventDefault();
      wrap.classList.remove("drag-over");
      var from = dragSrcIndex;
      if (from === null || from === idx) return;
      var moved = frameFiles.splice(from, 1)[0];
      frameFiles.splice(idx, 0, moved);
      dragSrcIndex = null;
      renderFrameList();
    });

    wrap.appendChild(img);
    wrap.appendChild(rm);
    f2vFilmstrip.appendChild(wrap);
  });
  f2vList.hidden = frameFiles.length === 0;
  f2vMeta.textContent = t("metaFramesSelected", { count: frameFiles.length });
  updateSizeEstimate();
}

wireDropzone(dropzoneFrames, framesInput, function (files) {
  addFrameFiles(files);
});

f2vClearBtn.addEventListener("click", function () {
  frameFiles = [];
  renderFrameList();
  f2vResult.hidden = true;
});

function loadImage(file) {
  return new Promise(function (resolve, reject) {
    if (frameImageCache.has(file)) {
      resolve(frameImageCache.get(file));
      return;
    }
    var img = new Image();
    img.onload = function () {
      frameImageCache.set(file, img);
      resolve(img);
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

/* ---------- frames → video: output format + quality + size estimate ---------- */

var MIME_CANDIDATES = {
  mp4: [
    "video/mp4;codecs=avc1.640028",
    "video/mp4;codecs=avc1.42E01E",
    "video/mp4;codecs=h264",
    "video/mp4"
  ],
  webm: ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"]
};

function firstSupportedMime(family) {
  var list = MIME_CANDIDATES[family] || [];
  for (var i = 0; i < list.length; i++) {
    if (window.MediaRecorder && MediaRecorder.isTypeSupported(list[i])) {
      return list[i];
    }
  }
  return null;
}

function mp4IsSupported() {
  return !!firstSupportedMime("mp4");
}

// Picks the best available recording MIME type. Tries the requested family
// first (mp4 by default); if this browser can't encode it, falls back to the
// other family so building a video never dead-ends on Firefox and friends.
function pickMimeType(preferredFamily) {
  var order = preferredFamily === "webm" ? ["webm", "mp4"] : ["mp4", "webm"];
  for (var i = 0; i < order.length; i++) {
    var mime = firstSupportedMime(order[i]);
    if (mime) {
      return { mime: mime, family: order[i], usedFallback: i > 0 };
    }
  }
  return null;
}

// Grays out the MP4 option up front (instead of surprising the user only
// after they hit Build) when this browser genuinely can't encode it.
function initFramesFormat() {
  if (!framesFormatSelect) return;
  if (!(window.MediaRecorder && mp4IsSupported())) {
    var mp4Option = framesFormatSelect.querySelector('option[value="mp4"]');
    if (mp4Option) mp4Option.disabled = true;
    if (framesFormatSelect.value === "mp4") framesFormatSelect.value = "webm";
    if (framesFormatHint) {
      framesFormatHint.hidden = false;
      framesFormatHint.setAttribute("data-i18n", "formatMp4Unsupported");
    }
  }
}

function updateAudioFieldVisibility() {
  audioField.hidden = framesFormatSelect.value === "gif";
}

function updateSizeEstimate() {
  if (!sizeEstimateHint) return;
  if (!frameFiles.length) {
    sizeEstimateHint.textContent = "";
    return;
  }
  var fps = clampNumber(framesFpsInput, 1, 60);
  var durationSec = frameFiles.length / fps;
  var format = framesFormatSelect.value;
  if (format === "gif") {
    sizeEstimateHint.textContent = t("sizeEstimateGif");
    return;
  }
  var bitrate = BITRATE_PRESETS[qualitySelect.value] || BITRATE_PRESETS.medium;
  var bytes = (bitrate * durationSec) / 8;
  sizeEstimateHint.textContent = t("sizeEstimateVideo", { size: formatBytes(bytes) });
}

framesFormatSelect.addEventListener("change", function () {
  updateAudioFieldVisibility();
  updateSizeEstimate();
});
framesFpsInput.addEventListener("change", updateSizeEstimate);
qualitySelect.addEventListener("change", updateSizeEstimate);

/* ---------- frames → video: optional background audio ---------- */

audioPickBtn.addEventListener("click", function () {
  audioInput.click();
});

audioInput.addEventListener("change", function () {
  if (audioInput.files && audioInput.files[0]) {
    attachedAudioFile = audioInput.files[0];
    audioFileName.textContent = attachedAudioFile.name;
    audioRemoveBtn.hidden = false;
  }
  audioInput.value = "";
});

audioRemoveBtn.addEventListener("click", function () {
  attachedAudioFile = null;
  audioFileName.textContent = "";
  audioRemoveBtn.hidden = true;
});

/* ---------- frames → video: GIF encoding ---------- */

var gifWorkerBlobUrlPromise = null;

function getGifWorkerBlobUrl() {
  if (!gifWorkerBlobUrlPromise) {
    gifWorkerBlobUrlPromise = fetch("https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js")
      .then(function (res) {
        if (!res.ok) throw new Error("gif-worker-fetch-failed");
        return res.blob();
      })
      .then(function (blob) {
        return URL.createObjectURL(blob);
      });
  }
  return gifWorkerBlobUrlPromise;
}

async function buildGif(fps, quality) {
  if (!window.GIF) {
    throw new Error("gif-library-unavailable");
  }
  var workerScriptUrl = await getGifWorkerBlobUrl();
  var firstImg = await loadImage(frameFiles[0]);
  var scale = Math.min(1, GIF_MAX_DIM / Math.max(firstImg.naturalWidth, firstImg.naturalHeight));
  var outW = Math.max(1, Math.round(firstImg.naturalWidth * scale));
  var outH = Math.max(1, Math.round(firstImg.naturalHeight * scale));

  workCanvas.width = outW;
  workCanvas.height = outH;

  var gif = new window.GIF({
    workers: 2,
    quality: GIF_QUALITY_PRESETS[quality] || GIF_QUALITY_PRESETS.medium,
    workerScript: workerScriptUrl,
    width: outW,
    height: outH
  });

  var delayMs = Math.round(1000 / fps);
  for (var i = 0; i < frameFiles.length; i++) {
    var img = await loadImage(frameFiles[i]);
    ctx.clearRect(0, 0, outW, outH);
    ctx.drawImage(img, 0, 0, outW, outH);
    gif.addFrame(ctx, { copy: true, delay: delayMs });
    updateProgress(f2vProgressFill, i + 1, frameFiles.length * 2);
    setStatus(f2vStatus, t("statusBuilding", { current: i + 1, total: frameFiles.length }));
    await sleep(0);
  }

  return new Promise(function (resolve, reject) {
    gif.on("progress", function (p) {
      updateProgress(f2vProgressFill, frameFiles.length + p * frameFiles.length, frameFiles.length * 2);
      setStatus(f2vStatus, t("statusEncodingGif", { percent: Math.round(p * 100) }));
    });
    gif.on("finished", function (blob) {
      resolve(blob);
    });
    gif.on("abort", function () {
      reject(new Error("gif-aborted"));
    });
    gif.render();
  });
}

/* ---------- frames → video: build (MP4/WebM via MediaRecorder, or GIF) ---------- */

function showBuildResult(blob, ext, fps, usedFallback) {
  builtVideoExt = ext;
  if (builtVideoUrl) URL.revokeObjectURL(builtVideoUrl);
  builtVideoUrl = URL.createObjectURL(blob);

  if (ext === "gif") {
    f2vPreview.hidden = true;
    f2vPreview.removeAttribute("src");
    f2vPreviewImg.hidden = false;
    f2vPreviewImg.src = builtVideoUrl;
  } else {
    f2vPreviewImg.hidden = true;
    f2vPreviewImg.removeAttribute("src");
    f2vPreview.hidden = false;
    f2vPreview.src = builtVideoUrl;
  }

  var sizeText = formatBytes(blob.size);
  f2vResultMeta.dataset.size = sizeText;
  f2vResultMeta.textContent = t("metaVideoReady", {
    count: frameFiles.length,
    fps: fps,
    duration: formatTime(frameFiles.length / fps),
    format: ext.toUpperCase(),
    size: sizeText
  });
  f2vResult.hidden = false;
  setStatus(f2vStatus, usedFallback ? t("statusBuildDoneFallback") : t("statusBuildDone"));
}

async function buildRecordedVideo(outputFormat, fps, quality) {
  var preferredFamily = outputFormat === "webm" ? "webm" : "mp4";
  var picked = pickMimeType(preferredFamily);
  if (!picked) {
    setStatus(f2vStatus, t("errorNoRecorder"));
    return;
  }

  var firstImg = await loadImage(frameFiles[0]);
  workCanvas.width = firstImg.naturalWidth;
  workCanvas.height = firstImg.naturalHeight;

  var stream = workCanvas.captureStream(fps);
  var audioEl = null;
  var audioCtx = null;

  if (attachedAudioFile) {
    try {
      audioEl = new Audio();
      audioEl.src = URL.createObjectURL(attachedAudioFile);
      await new Promise(function (resolve, reject) {
        audioEl.addEventListener("loadedmetadata", resolve, { once: true });
        audioEl.addEventListener("error", reject, { once: true });
      });
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var sourceNode = audioCtx.createMediaElementSource(audioEl);
      var destNode = audioCtx.createMediaStreamDestination();
      sourceNode.connect(destNode);
      sourceNode.connect(audioCtx.destination);
      destNode.stream.getAudioTracks().forEach(function (track) {
        stream.addTrack(track);
      });
    } catch (e) {
      console.error("audio-setup-failed", e);
      audioEl = null;
      audioCtx = null;
    }
  }

  var recorder = new MediaRecorder(stream, {
    mimeType: picked.mime,
    videoBitsPerSecond: BITRATE_PRESETS[quality] || BITRATE_PRESETS.medium
  });
  var chunks = [];
  recorder.ondataavailable = function (e) {
    if (e.data && e.data.size) chunks.push(e.data);
  };
  var stopped = new Promise(function (resolve) {
    recorder.onstop = resolve;
  });

  recorder.start();
  if (audioEl) {
    audioEl.currentTime = 0;
    audioEl.play().catch(function (e) {
      console.error("audio-play-failed", e);
    });
  }

  for (var i = 0; i < frameFiles.length; i++) {
    var img = await loadImage(frameFiles[i]);
    ctx.clearRect(0, 0, workCanvas.width, workCanvas.height);
    ctx.drawImage(img, 0, 0, workCanvas.width, workCanvas.height);
    updateProgress(f2vProgressFill, i + 1, frameFiles.length);
    setStatus(f2vStatus, t("statusBuilding", { current: i + 1, total: frameFiles.length }));
    await sleep(1000 / fps);
  }
  await sleep(1000 / fps);

  if (audioEl) audioEl.pause();
  recorder.stop();
  await stopped;
  if (audioCtx) audioCtx.close();

  var blob = new Blob(chunks, { type: picked.mime.split(";")[0] });
  var ext = picked.family === "mp4" ? "mp4" : "webm";
  var wantedMp4 = preferredFamily === "mp4";
  showBuildResult(blob, ext, fps, picked.usedFallback && wantedMp4);
}

async function buildVideo() {
  if (frameFiles.length < 2) {
    setStatus(f2vStatus, t("errorNoFrames"));
    return;
  }
  var outputFormat = framesFormatSelect.value;
  var fps = clampNumber(framesFpsInput, 1, 60);
  var quality = qualitySelect.value;

  buildBtn.disabled = true;
  f2vProgress.hidden = false;
  f2vResult.hidden = true;
  updateProgress(f2vProgressFill, 0, 100);

  try {
    if (outputFormat === "gif") {
      var gifBlob = await buildGif(fps, quality);
      showBuildResult(gifBlob, "gif", fps, false);
    } else {
      await buildRecordedVideo(outputFormat, fps, quality);
    }
  } catch (err) {
    console.error(err);
    setStatus(f2vStatus, t("errorBuildFailed"));
  } finally {
    buildBtn.disabled = false;
    f2vProgress.hidden = true;
  }
}

buildBtn.addEventListener("click", buildVideo);

downloadVideoBtn.addEventListener("click", function () {
  if (!builtVideoUrl) return;
  var a = document.createElement("a");
  a.href = builtVideoUrl;
  a.download = "output." + builtVideoExt;
  document.body.appendChild(a);
  a.click();
  a.remove();
});

/* ---------- PWA: install prompt + service worker ---------- */

window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  deferredInstallPrompt = e;
  installBtn.hidden = false;
});

installBtn.addEventListener("click", function () {
  if (!deferredInstallPrompt) return;
  installBtn.hidden = true;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.finally(function () {
    deferredInstallPrompt = null;
  });
});

window.addEventListener("appinstalled", function () {
  installBtn.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("service-worker.js").catch(function (e) {
      console.error("sw-register-failed", e);
    });
  });
}

/* ---------- init ---------- */

applyTheme(getEffectiveTheme());
initFramesFormat();
initExtractMode();
applySavedSettings();
updateExtractModeUI();
updateAudioFieldVisibility();

persistOnChange(videoFpsInput, "videoFps");
persistOnChange(videoFormatSelect, "videoFormat");
persistOnChange(videoNthInput, "videoNth");
persistOnChange(extractModeSelect, "extractMode");
persistOnChange(framesFpsInput, "framesFps");
persistOnChange(framesFormatSelect, "framesFormat");
persistOnChange(qualitySelect, "quality");

var storedLang = localStorage.getItem("vf_lang");
var initialLang = storedLang || (navigator.language && navigator.language.toLowerCase().indexOf("id") === 0 ? "id" : "en");
applyLanguage(initialLang);
