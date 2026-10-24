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
   APPLY LINK
   ============================================================ */
function applyLinks() {
  Object.keys(BUTTON_MAP).forEach(function (id) {
    var el = document.getElementById(id);
    var key = BUTTON_MAP[id];
    if (el && LINKS[key]) {
      el.href = LINKS[key];
    }
  });
}

/* Jalankan setelah DOM siap */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyLinks);
} else {
  applyLinks();
}
