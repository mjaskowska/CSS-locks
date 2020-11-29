
const minWidthInput = document.querySelector('.min-width-3');
const maxWidthInput = document.querySelector('.max-width-3');

const lineHMinRemInput = document.querySelector('.min-line-3');
const lineHMaxRemInput = document.querySelector('.max-line-3');

const fontMinPxInput = document.querySelector('.min-font-3');
const fontMaxPxInput = document.querySelector('.max-font-3');



function countCombined() {

    const minWidth = parseFloat(minWidthInput.value);
    const maxWidth = parseFloat(maxWidthInput.value);
    const fontMinPx = parseFloat(fontMinPxInput.value);
    const fontMaxPx = parseFloat(fontMaxPxInput.value);
    const lineHMinRem = parseFloat(lineHMinRemInput.value);
    const lineHMaxRem = parseFloat(lineHMaxRemInput.value);

    const lineHMinPx = lineHMinRem * 16;
    const lineHMaxPx = lineHMaxRem * 16;
    const fontMinRem = fontMinPx / 16;


    const mFont = (fontMaxPx - fontMinPx) / (maxWidth - minWidth);
    const bFont = 0 - (mFont * minWidth);
    const mFontvw = mFont * 100;
    const fontDiffPx = fontMaxPx - fontMinPx;

    const mLine = (lineHMaxPx - lineHMinPx) / (maxWidth - minWidth);
    const bLine = 0 - (mLine * minWidth)
    const mLinevw = mLine * 100;

    const mLinevw1 = Math.round((mLinevw + Number.EPSILON) * 1000) / 1000;
    const bLine1 = Math.round((bLine + Number.EPSILON) * 1000) / 1000;
    const pxDiff = Math.round(((lineHMaxPx - lineHMinPx) + Number.EPSILON) * 1000) / 1000;

    const bFont1 = Math.round((bFont + Number.EPSILON) * 1000) / 1000;
    const mFontvw1 = Math.round((mFontvw + Number.EPSILON) * 1000) / 1000;

    if (minWidth === '' || maxWidth === '' || fontMinPx === '' || fontMaxPx === '') {

        const errorMsg = document.querySelector('.errorMsg');
        errorMsg.innerHTML = "Fill all the fields with valid numbers.";
        errorMsg.style.display = "block";
    }
    else {
        const errorMsg = document.querySelector('.errorMsg');
        errorMsg.style.display = "none";


        const code1 = document.createElement('div');
        const code2 = document.createElement('div');
        const code3 = document.createElement('div');
        code1.setAttribute('class', 'result-code');
        code2.setAttribute('class', 'result-code');
        code3.setAttribute('class', 'result-code');
        const codeContainer = document.querySelector('.result-bkg')
        codeContainer.appendChild(code1);
        codeContainer.appendChild(code2);
        codeContainer.appendChild(code3);

        code1.innerHTML = `font-size: ${fontMinRem}rem; line-height: ${lineHMinRem}rem; `
        code2.innerHTML = `@media (min-width: ${minWidth}px) { font-size: calc(${fontMinRem}rem + ${mFontvw1}vw + ${bFont1}px); line-height: calc(${lineHMinRem}rem + ${mLinevw1}vw + ${bLine1}px); }`
        code3.innerHTML = `@media (min-width: ${maxWidth}px) { font-size: calc(${fontMinRem}rem + ${fontDiffPx}px);  line-height: calc(${lineHMinRem}rem + ${pxDiff}px);}`
    }
}


const calculateBtn3 = document.querySelector('.calc3');
calculateBtn3.addEventListener('click', countCombined);

const reset = () => {

    minWidthInput.value = '';
    maxWidthInput.value = '';
    lineHMinRemInput.value = '';
    lineHMaxRemInput.value = '';
    fontMinPxInput.value = '';
    fontMaxPxInput.value = '';

    const codeContainer = document.querySelector('.result-bkg')
    codeContainer.innerHTML = '';

}
const resetBtn3 = document.querySelector('.reset3');
resetBtn3.addEventListener('click', reset);