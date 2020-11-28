
const minWidthInput = document.querySelector('.min-width-2');
const maxWidthInput = document.querySelector('.max-width-2');

const lineHMinRemInput = document.querySelector('.min-line-2');
const lineHMaxRemInput = document.querySelector('.max-line-2');

function countLineHeight () {

    const minWidth = parseFloat(minWidthInput.value);
    const maxWidth = parseFloat(maxWidthInput.value);
    const lineHMinRem = parseFloat(lineHMinRemInput.value);
    const lineHMaxRem = parseFloat(lineHMaxRemInput.value);

    const lineHMinPx = lineHMinRem * 16;
    const lineHMaxPx = lineHMaxRem * 16;

    const mLine = (lineHMaxPx - lineHMinPx) / (maxWidth - minWidth);
    const bLine = 0 - (mLine * minWidth)
    const mLinevw = mLine * 100;

    const mLinevw1 = Math.round((mLinevw + Number.EPSILON) * 1000) / 1000;
    const bLine1 = Math.round((bLine + Number.EPSILON) * 1000) / 1000;
    const pxDiff = Math.round(((lineHMaxPx - lineHMinPx) + Number.EPSILON) * 1000) / 1000;

    if (minWidth === '' || maxWidth === '' || lineHMinRem === '' || lineHMaxRem === '') {

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

        code1.innerHTML = `line-height: ${lineHMinRem}rem;`
        code2.innerHTML = `@media (min-width: ${minWidth}px){ line-height: calc(${lineHMinRem}rem + ${mLinevw1}vw + ${bLine1}px); } }`
        code3.innerHTML = `@media (min-width: ${maxWidth}px){ line-height: calc(${lineHMinRem}rem + ${pxDiff}px); }`
    }
    // result testing
    // console.log(`line-height: ${lineHMinRem}rem;`)
    // console.log(`@media (min-width: ${minWidth}px){ line-height: calc(${lineHMinRem}rem + ${mLinevw1}vw + ${bLine1}px); }`)
    // console.log(`@media (min-width: ${maxWidth}px){ line-height: calc(${lineHMinRem}rem + ${pxDiff}px); }`)
}

const calculateBtn2 = document.querySelector('.calc2');
calculateBtn2.addEventListener('click', countLineHeight);

const reset = () => {

    minWidthInput.value = '';
    maxWidthInput.value = '';
    lineHMinRemInput.value = '';
    lineHMaxRemInput.value = '';

    const codeContainer = document.querySelector('.result-bkg')
    codeContainer.innerHTML = '';

}
const resetBtn2 = document.querySelector('.reset2');
resetBtn2.addEventListener('click', reset);

