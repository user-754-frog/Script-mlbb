/* ============================================================
   DATA LINK — EDIT DI SINI SAJA
   ============================================================ */
const LINKS = {
  telegram:          "https://t.me/boost/lexusgamingmlbb",
  scriptDamage:      "https://sfl.gl/s33qM2",
  droneView:         "https://sfl.gl/s9ZyC",
  scriptDamageNoAds: "https://move2link.co/6ab9977",
  droneViewNoAds:    "https://move2link.co/b873f2a",
  scriptDamageVip:   "https://move2link.co/4434178"
};

/* ============================================================
   PEMETAAN ID TOMBOL → KEY LINK
   ============================================================ */
const BUTTON_MAP = {
  btnTelegram:          "telegram",
  btnTelegramBottom:    "telegram",
  btnScriptDamage:      "scriptDamage",
  btnDroneView:         "droneView",
  btnScriptDamageNoAds: "scriptDamageNoAds",
  btnDroneViewNoAds:    "droneViewNoAds",
  btnScriptDamageVip:   "scriptDamageVip"
};

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  applyLinks();
  initTypewriter();
  initMatrix();
});

/* ============================================================
   APPLY LINK KE SEMUA TOMBOL
   ============================================================ */
function applyLinks() {
  Object.entries(BUTTON_MAP).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && LINKS[key]) el.href = LINKS[key];
  });
}

/* ============================================================
   TYPEWRITER — efek ketik di terminal
   ============================================================ */
function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const phrases = [
    "loading mlbb_scripts.db...",
    "injecting anti_ban_module.so...",
    "damage_multiplier := 2.0x",
    "drone_view.init()",
    "bypass_detection: SUCCESS",
    "access granted ✓"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(type, deleting ? 25 : 60);
  }

  type();
}

/* ============================================================
   MATRIX RAIN — subtle background
   ============================================================ */
function initMatrix() {
  const canvas = document.getElementById("matrix");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let drops = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const columns = Math.floor(canvas.width / 16);
    drops = Array(columns).fill(1);
  }

  resize();
  window.addEventListener("resize", resize);

  const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";
  const fontSize = 14;

  function draw() {
    ctx.fillStyle = "rgba(5, 8, 16, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0, 255, 65, 0.5)";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 16, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 70);
  }
