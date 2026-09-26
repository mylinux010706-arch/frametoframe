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
    extractButton: "Extract frames",
    buildButton: "Build video",
    buildingHint: "Building takes about as long as the finished video plays.",
    outputNote: "Everything runs on your device — nothing is uploaded.",
    removeFile: "Remove",
    clearAll: "Clear",
    downloadZip: "Download frames (.zip)",
    downloadVideo: "Download video",
    statusReady: "Ready — {duration}, {width}×{height}",
    statusExtracting: "Extracting frame {current} of {total}",
    statusZipping: "Packing zip… {percent}%",
    statusExtractDone: "{count} frames extracted",
    statusBuilding: "Building frame {current} of {total}",
    statusBuildDone: "Video ready",
    metaFramesSelected: "{count} frames selected",
    metaFramesReady: "{count} frames · {duration} at {fps} fps",
    metaVideoReady: "{count} frames · {fps} fps · {duration}",
    errorNoFile: "Add a video first.",
    errorNoFrames: "Add at least two frames first.",
    errorNotVideo: "That file isn't a video.",
    errorNotImage: "Only image files are supported.",
    errorTooManyFrames: "That's {count} frames — lower the fps or use a shorter clip.",
    errorNoRecorder: "This browser can't record video.",
    ariaThemeToggle: "Toggle dark mode",
    ariaRemoveFrame: "Remove this frame"
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
    extractButton: "Ambil frame",
    buildButton: "Buat video",
    buildingHint: "Waktu proses kurang lebih sama dengan durasi video hasil.",
    outputNote: "Semua diproses di perangkatmu — tidak ada yang diunggah.",
    removeFile: "Hapus",
    clearAll: "Bersihkan",
    downloadZip: "Unduh frame (.zip)",
    downloadVideo: "Unduh video",
    statusReady: "Siap — {duration}, {width}×{height}",
    statusExtracting: "Mengambil frame {current} dari {total}",
    statusZipping: "Menyusun zip… {percent}%",
    statusExtractDone: "{count} frame berhasil diambil",
    statusBuilding: "Menyusun frame {current} dari {total}",
    statusBuildDone: "Video siap",
    metaFramesSelected: "{count} frame dipilih",
    metaFramesReady: "{count} frame · {duration} pada {fps} fps",
    metaVideoReady: "{count} frame · {fps} fps · {duration}",
    errorNoFile: "Tambahkan video terlebih dahulu.",
    errorNoFrames: "Tambahkan minimal dua frame.",
    errorNotVideo: "File ini bukan video.",
    errorNotImage: "Hanya file gambar yang didukung.",
    errorTooManyFrames: "Itu {count} frame — turunkan fps atau gunakan video yang lebih pendek.",
    errorNoRecorder: "Browser ini tidak bisa merekam video.",
    ariaThemeToggle: "Ganti mode gelap/terang",
    ariaRemoveFrame: "Hapus frame ini"
  }
};

var MAX_FRAMES = 3000;
var currentLang = "en";
var currentVideoFile = null;
var frameBlobs = [];
var frameFiles = [];
var frameImageCache = new Map();
var builtVideoUrl = null;
var builtVideoExt = "webm";

var themeToggle = document.getElementById("themeToggle");
var langButtons = Array.prototype.slice.call(document.querySelectorAll(".lang-btn"));
var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));

var dropzoneVideo = document.getElementById("dropzoneVideo");
var videoInput = document.getElementById("videoInput");
var videoFileInfo = document.getElementById("videoFileInfo");
var videoFileName = document.getElementById("videoFileName");
var videoRemoveBtn = document.getElementById("videoRemoveBtn");
var videoFpsInput = document.getElementById("videoFps");
var videoFormatSelect = document.getElementById("videoFormat");
var extractBtn = document.getElementById("extractBtn");
var v2fStatus = document.getElementById("v2fStatus");
var v2fProgress = document.getElementById("v2fProgress");
var v2fProgressFill = document.getElementById("v2fProgressFill");
var v2fResults = document.getElementById("v2fResults");
var v2fFilmstrip = document.getElementById("v2fFilmstrip");
var v2fMeta = document.getElementById("v2fMeta");
var downloadZipBtn = document.getElementById("downloadZipBtn");

var dropzoneFrames = document.getElementById("dropzoneFrames");
var framesInput = document.getElementById("framesInput");
var f2vList = document.getElementById("f2vList");
var f2vFilmstrip = document.getElementById("f2vFilmstrip");
var f2vMeta = document.getElementById("f2vMeta");
var f2vClearBtn = document.getElementById("f2vClearBtn");
var framesFpsInput = document.getElementById("framesFps");
var buildBtn = document.getElementById("buildBtn");
var f2vStatus = document.getElementById("f2vStatus");
var f2vProgress = document.getElementById("f2vProgress");
var f2vProgressFill = document.getElementById("f2vProgressFill");
var f2vResult = document.getElementById("f2vResult");
var f2vPreview = document.getElementById("f2vPreview");
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

function clampNumber(input, min, max) {
  var v = parseInt(input.value, 10);
  if (isNaN(v)) v = min;
  v = Math.min(max, Math.max(min, v));
  input.value = v;
  return v;
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
  if (!v2fResults.hidden && frameBlobs.length) {
    var fps = clampNumber(videoFpsInput, 1, 60);
    v2fMeta.textContent = t("metaFramesReady", {
      count: frameBlobs.length,
      duration: formatTime(frameBlobs.length / fps),
      fps: fps
    });
  }
  if (!f2vList.hidden) {
    f2vMeta.textContent = t("metaFramesSelected", { count: frameFiles.length });
  }
  if (!f2vResult.hidden) {
    var fps2 = clampNumber(framesFpsInput, 1, 60);
    f2vResultMeta.textContent = t("metaVideoReady", {
      count: frameFiles.length,
      fps: fps2,
      duration: formatTime(frameFiles.length / fps2)
    });
  }
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

document.querySelectorAll(".stepper-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var input = document.getElementById(btn.getAttribute("data-target"));
    var step = parseInt(btn.getAttribute("data-step"), 10);
    var min = parseInt(input.min, 10);
    var max = parseInt(input.max, 10);
    var val = parseInt(input.value, 10);
    if (isNaN(val)) val = min;
    input.value = Math.min(max, Math.max(min, val + step));
  });
});

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
  videoSource.src = URL.createObjectURL(file);
  videoSource.addEventListener(
    "loadedmetadata",
    function onMeta() {
      videoSource.removeEventListener("loadedmetadata", onMeta);
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
  v2fResults.hidden = true;
  setStatus(v2fStatus, "");
});

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

function renderFrameThumbnails(blobs) {
  v2fFilmstrip.innerHTML = "";
  blobs.forEach(function (blob, idx) {
    var img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    img.loading = "lazy";
    img.alt = "frame " + (idx + 1);
    img.className = "frame-thumb";
    v2fFilmstrip.appendChild(img);
  });
}

async function extractFrames() {
  if (!currentVideoFile) {
    setStatus(v2fStatus, t("errorNoFile"));
    return;
  }
  var fps = clampNumber(videoFpsInput, 1, 60);
  var format = videoFormatSelect.value;
  var duration = videoSource.duration;
  var total = Math.max(1, Math.floor(duration * fps));
  if (total > MAX_FRAMES) {
    setStatus(v2fStatus, t("errorTooManyFrames", { count: total }));
    return;
  }

  extractBtn.disabled = true;
  v2fProgress.hidden = false;
  v2fResults.hidden = true;
  frameBlobs = [];
  workCanvas.width = videoSource.videoWidth;
  workCanvas.height = videoSource.videoHeight;

  for (var i = 0; i < total; i++) {
    var time = Math.min(duration - 0.001, i / fps);
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

  extractBtn.disabled = false;
  v2fProgress.hidden = true;
  renderFrameThumbnails(frameBlobs);
  v2fMeta.textContent = t("metaFramesReady", {
    count: total,
    duration: formatTime(total / fps),
    fps: fps
  });
  v2fResults.hidden = false;
  setStatus(v2fStatus, t("statusExtractDone", { count: total }));
}

extractBtn.addEventListener("click", extractFrames);

async function downloadFramesZip() {
  if (!frameBlobs.length) return;
  downloadZipBtn.disabled = true;
  var zip = new JSZip();
  var ext = videoFormatSelect.value === "image/jpeg" ? "jpg" : "png";
  var pad = String(frameBlobs.length).length;
  frameBlobs.forEach(function (blob, idx) {
    var name = "frame_" + String(idx + 1).padStart(pad, "0") + "." + ext;
    zip.file(name, blob);
  });
  var content = await zip.generateAsync({ type: "blob" }, function (meta) {
    setStatus(v2fStatus, t("statusZipping", { percent: Math.round(meta.percent) }));
  });
  var url = URL.createObjectURL(content);
  var a = document.createElement("a");
  a.href = url;
  a.download = "frames.zip";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(function () {
    URL.revokeObjectURL(url);
  }, 4000);
  downloadZipBtn.disabled = false;
  setStatus(v2fStatus, t("statusExtractDone", { count: frameBlobs.length }));
}

downloadZipBtn.addEventListener("click", downloadFramesZip);

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
    wrap.appendChild(img);
    wrap.appendChild(rm);
    f2vFilmstrip.appendChild(wrap);
  });
  f2vList.hidden = frameFiles.length === 0;
  f2vMeta.textContent = t("metaFramesSelected", { count: frameFiles.length });
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

function pickMimeType() {
  var candidates = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
    "video/mp4;codecs=h264",
    "video/mp4"
  ];
  for (var i = 0; i < candidates.length; i++) {
    if (window.MediaRecorder && MediaRecorder.isTypeSupported(candidates[i])) {
      return candidates[i];
    }
  }
  return "";
}

function extFromMime(mime) {
  return mime.indexOf("mp4") !== -1 ? "mp4" : "webm";
}

async function buildVideo() {
  if (frameFiles.length < 2) {
    setStatus(f2vStatus, t("errorNoFrames"));
    return;
  }
  var mime = pickMimeType();
  if (!mime) {
    setStatus(f2vStatus, t("errorNoRecorder"));
    return;
  }
  var fps = clampNumber(framesFpsInput, 1, 60);

  buildBtn.disabled = true;
  f2vProgress.hidden = false;
  f2vResult.hidden = true;

  var firstImg = await loadImage(frameFiles[0]);
  workCanvas.width = firstImg.naturalWidth;
  workCanvas.height = firstImg.naturalHeight;

  var stream = workCanvas.captureStream(fps);
  var recorder = new MediaRecorder(stream, { mimeType: mime });
  var chunks = [];
  recorder.ondataavailable = function (e) {
    if (e.data && e.data.size) chunks.push(e.data);
  };
  var stopped = new Promise(function (resolve) {
    recorder.onstop = resolve;
  });
  recorder.start();

  for (var i = 0; i < frameFiles.length; i++) {
    var img = await loadImage(frameFiles[i]);
    ctx.clearRect(0, 0, workCanvas.width, workCanvas.height);
    ctx.drawImage(img, 0, 0, workCanvas.width, workCanvas.height);
    updateProgress(f2vProgressFill, i + 1, frameFiles.length);
    setStatus(f2vStatus, t("statusBuilding", { current: i + 1, total: frameFiles.length }));
    await sleep(1000 / fps);
  }
  await sleep(1000 / fps);
  recorder.stop();
  await stopped;

  var blob = new Blob(chunks, { type: mime.split(";")[0] });
  builtVideoExt = extFromMime(mime);
  if (builtVideoUrl) URL.revokeObjectURL(builtVideoUrl);
  builtVideoUrl = URL.createObjectURL(blob);
  f2vPreview.src = builtVideoUrl;
  f2vResultMeta.textContent = t("metaVideoReady", {
    count: frameFiles.length,
    fps: fps,
    duration: formatTime(frameFiles.length / fps)
  });
  f2vResult.hidden = false;
  f2vProgress.hidden = true;
  buildBtn.disabled = false;
  setStatus(f2vStatus, t("statusBuildDone"));
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

applyTheme(getEffectiveTheme());

var storedLang = localStorage.getItem("vf_lang");
var initialLang = storedLang || (navigator.language && navigator.language.toLowerCase().indexOf("id") === 0 ? "id" : "en");
applyLanguage(initialLang);
