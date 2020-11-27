
// new version of code - more adaptable


const minWidth = document.getElementById('min-width').value;
const maxWidth = document.getElementById('max-width').value;

// count font size variables
const fontMinPx = document.getElementById('min-font').value;
const fontMaxPx = document.getElementById('max-font').value;
const fontMinRem = fontMinPx / 16;


// font-size calc

const countFontSize = () => {

    const minWidth = document.getElementById('min-width').value;
    const maxWidth = document.getElementById('max-width').value;

    const fontMinPx = document.getElementById('min-font').value;
    const fontMaxPx = document.getElementById('max-font').value;
    const fontMinRem = fontMinPx / 16;

    const mFont = (fontMaxPx - fontMinPx) / (maxWidth - minWidth);
    const bFont = 0 - (mFont * minWidth);
    const mFontvw = mFont * 100;
    const fontDiffPx = fontMaxPx - fontMinPx;

    const bFont1 = Math.round((bFont + Number.EPSILON) * 1000) / 1000;
    const mFontvw1 = Math.round((mFontvw + Number.EPSILON) * 1000) / 1000;

    
    const numbers = /^[0-9]+$/;

    if (minWidth === '' || maxWidth === '' || fontMinPx === '' || fontMaxPx === '' || 
        !minWidth.match(numbers) || !maxWidth.match(numbers) || !fontMinPx.match(numbers) || !fontMaxPx.match(numbers)) {

        const errorMsg = document.querySelector('.errorMsg');
        errorMsg.innerHTML = "Fill all the fields with a valid number";
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

        code1.innerHTML=`font-size: ${fontMinRem}rem;`
        code2.innerHTML=`@media (min-width: ${minWidth}px) { font-size: calc(${fontMinRem}rem + ${mFontvw1}vw + ${bFont1}px); }`
        code3.innerHTML=`@media (min-width: ${maxWidth}px) { font-size: calc(${fontMinRem}rem + ${fontDiffPx}px); }`
    }

    console.log(`font-size: ${fontMinRem}rem;`)
    console.log(`@media (min-width: ${minWidth}px) { font-size: calc(${fontMinRem}rem + ${mFontvw1}vw + ${bFont1}px); }`)
    console.log(`@media (min-width: ${maxWidth}px) { font-size: calc(${fontMinRem}rem + ${fontDiffPx}px); }`)
}

const calculateBtn = document.querySelector('.calculate');
calculateBtn.addEventListener('click', countFontSize);

// count line height variables
const lineHMinRem = 1.5;
const lineHMaxRem = 2;
const lineHMinPx = lineHMinRem * 16;
const lineHMaxPx = lineHMaxRem * 16;



const countLineHeight = () => {

    const mLine = (lineHMaxPx - lineHMinPx) / (maxWidth - minWidth);
    const bLine = 0 - (mLine * minWidth)
    const mLinevw = mLine * 100;

    const mLinevw1 = Math.round((mLinevw + Number.EPSILON) * 1000) / 1000;
    const bLine1 = Math.round((bLine + Number.EPSILON) * 1000) / 1000;
    const pxDiff = Math.round(((lineHMaxPx - lineHMinPx) + Number.EPSILON) * 1000) / 1000;

    console.log(`line-height: ${lineHMinRem}rem;`)
    console.log(`@media (min-width: ${minWidth}px){ line-height: calc(${lineHMinRem}rem + ${mLinevw1}vw + ${bLine1}px); }`)
    console.log(`@media (min-width: ${maxWidth}px){ line-height: calc(${lineHMinRem}rem + ${pxDiff}px); }`)
}



const reset = () => {

    const minWidth = document.getElementById('min-width');
    const maxWidth = document.getElementById('max-width');

    const fontMinPx = document.getElementById('min-font');
    const fontMaxPx = document.getElementById('max-font');

    minWidth.value = '';
    maxWidth.value = '';
    fontMinPx.value = '';
    fontMaxPx.value = '';
    const codeContainer = document.querySelector('.result-bkg')
    codeContainer.innerHTML = '';

}
const resetBtn = document.querySelector('.reset');
 resetBtn.addEventListener('click', reset);

