function countFontSize() {
  const cacheDOM = {
    minWidth: document.querySelector(".min-width"),
    maxWidth: document.querySelector(".max-width"),
    fontMinPx: document.querySelector(".min-font"),
    fontMaxPx: document.querySelector(".max-font"),
    errorMsg: document.querySelector(".errorMsg"),
    codeContainer: document.querySelector(".result-bkg"),
    resetBtn: document.querySelector(".reset"),
  };

  const minWidth = parseFloat(cacheDOM.minWidth.value);
  const maxWidth = parseFloat(cacheDOM.maxWidth.value);
  const fontMinPx = parseFloat(cacheDOM.fontMinPx.value);
  const fontMaxPx = parseFloat(cacheDOM.fontMaxPx.value);

  const fontMinRem = fontMinPx / 16;

  const mFont = (fontMaxPx - fontMinPx) / (maxWidth - minWidth);
  const fontDiffPx = fontMaxPx - fontMinPx;

  const bFont = Math.round((0 - mFont * minWidth + Number.EPSILON) * 1000) / 1000;
  const mFontvw = Math.round((mFont * 100 + Number.EPSILON) * 1000) / 1000;

  if (
    cacheDOM.minWidth.value > 0 &&
    cacheDOM.maxWidth.value > 0 &&
    cacheDOM.fontMinPx.value > 0 &&
    cacheDOM.fontMaxPx.value > 0
  ) {
    cacheDOM.errorMsg.style.display = "none";
    const code1 = document.createElement("div");
    const code2 = document.createElement("div");
    const code3 = document.createElement("div");

    code1.setAttribute("class", "result-code");
    code2.setAttribute("class", "result-code");
    code3.setAttribute("class", "result-code");

    cacheDOM.codeContainer.appendChild(code1);
    cacheDOM.codeContainer.appendChild(code2);
    cacheDOM.codeContainer.appendChild(code3);

    code1.innerHTML = `font-size: ${fontMinRem}rem;`;
    code2.innerHTML = `@media (min-width: ${minWidth}px) { font-size: calc(${fontMinRem}rem + ${mFontvw}vw + ${bFont}px); }`;
    code3.innerHTML = `@media (min-width: ${maxWidth}px) { font-size: calc(${fontMinRem}rem + ${fontDiffPx}px); }`;
  } else {
    cacheDOM.errorMsg.innerHTML = "Fill all the fields with valid numbers.";
    cacheDOM.errorMsg.style.display = "block";
  }

  const reset = () => {
    cacheDOM.minWidth.value = "";
    cacheDOM.maxWidth.value = "";
    cacheDOM.fontMinPx.value = "";
    cacheDOM.fontMaxPx.value = "";

    cacheDOM.errorMsg.style.display = "none";
    cacheDOM.codeContainer.innerHTML = "";
  };

  cacheDOM.resetBtn.addEventListener("click", reset);
}
const calculateBtn1 = document.querySelector(".calc1");
calculateBtn1.addEventListener("click", countFontSize);


gsap.from(".body-content", {duration: 0.7, y: 50, opacity: 0})