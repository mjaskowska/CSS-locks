function countLineHeight() {
  const cacheDOM = {
    minWidth: document.querySelector(".min-width-2"),
    maxWidth: document.querySelector(".max-width-2"),
    errorMsg: document.querySelector(".errorMsg"),
    codeContainer: document.querySelector(".result-bkg"),
    resetBtn: document.querySelector(".reset"),
    lineHMinRem: document.querySelector(".min-line-2"),
    lineHMaxRem: document.querySelector(".max-line-2"),
  };

  const minWidth = parseFloat(cacheDOM.minWidth.value);
  const maxWidth = parseFloat(cacheDOM.maxWidth.value);
  const lineHMinRem = parseFloat(cacheDOM.lineHMinRem.value);
  const lineHMaxRem = parseFloat(cacheDOM.lineHMaxRem.value);

  const lineHMinPx = lineHMinRem * 16;
  const lineHMaxPx = lineHMaxRem * 16;

  const mLine = (lineHMaxPx - lineHMinPx) / (maxWidth - minWidth);
  const bLine = 0 - mLine * minWidth;

  const mLinevw = Math.round((mLine * 100 + Number.EPSILON) * 1000) / 1000;
  const bLine1 = Math.round((bLine + Number.EPSILON) * 1000) / 1000;
  const pxDiff =
    Math.round((lineHMaxPx - lineHMinPx + Number.EPSILON) * 1000) / 1000;

  if (
    cacheDOM.minWidth.value > 0 &&
    cacheDOM.maxWidth.value > 0 &&
    cacheDOM.lineHMinRem.value > 0 &&
    cacheDOM.lineHMaxRem.value > 0
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

    code1.innerHTML = `line-height: ${lineHMinRem}rem;`;
    code2.innerHTML = `@media (min-width: ${minWidth}px){ line-height: calc(${lineHMinRem}rem + ${mLinevw}vw + ${bLine1}px); }`;
    code3.innerHTML = `@media (min-width: ${maxWidth}px){ line-height: calc(${lineHMinRem}rem + ${pxDiff}px); }`;
  } else {
    cacheDOM.errorMsg.innerHTML = "Fill all the fields with valid numbers.";
    cacheDOM.errorMsg.style.display = "block";
  }

  const reset = () => {
    cacheDOM.minWidth.value = "";
    cacheDOM.maxWidth.value = "";
    cacheDOM.lineHMaxRem.value = "";
    cacheDOM.lineHMinRem.value = "";

    cacheDOM.errorMsg.style.display = "none";
    cacheDOM.codeContainer.innerHTML = "";
  };

  cacheDOM.resetBtn.addEventListener("click", reset);
}
const calculateBtn2 = document.querySelector(".calc2");
calculateBtn2.addEventListener("click", countLineHeight);

gsap.from(".body-content", {duration: 0.7, y: 50, opacity: 0})