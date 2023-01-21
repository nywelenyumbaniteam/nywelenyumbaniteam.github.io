function removeSplashFromWeb() {
  document.getElementById("splash")?.remove();
  document.getElementById("splash-branding")?.remove();
  document.body?.classList.add("without-after-element");
  document.body.style.background = "transparent";
}
