// const minWidth = 320;
// const maxWidth = 1000;

// const minFont = 16;
// const maxFont = 25;

const countFontSizeLock = () => {

// y=mx + b

const minWidthVal = document.getElementById("minWidth").value;
const maxWidthVal = document.getElementById("maxWidth").value;

const minFontVal = document.getElementById("minFont").value;
const maxFontVal = document.getElementById("maxFont").value;
  
const m =  (maxFontVal - minFontVal) / (maxWidthVal - minWidthVal);
const b = minFontVal - (m * minWidthVal);

const mLock = Math.round(((m*100) + Number.EPSILON) * 1000) / 1000;
const bLock = Math.round((b + Number.EPSILON) * 100) / 100;

    if (minWidthVal === '' 	|| maxWidthVal === ''	|| minFontVal === '' 	|| maxFontVal === '' ) {
        
        const errorMsg = document.querySelector('.errorMsg');
        errorMsg.innerHTML="Fill all the fields";
        errorMsg.style.display = "block";
    }
    else{
        const errorMsg = document.querySelector('.errorMsg');
        errorMsg.style.display = "none";

        const code = document.createElement('div');
        code.setAttribute('class', 'notification');
        const codeContainer = document.querySelector('.output-code-container')
        codeContainer.appendChild(code);


            if (bLock >= 0){
                console.log("err1");
                code.innerHTML=`font-size: ${minFontVal}px; | @media (min-width: ${minWidthVal}px) { font-size: calc(${mLock}vw + ${bLock}px); } | @media (min-width: ${maxWidthVal}) { font-size: ${maxFontVal}px; }`;
                
            }
            
            else {
                console.log("err2");
                code.innerHTML=`font-size: ${minFontVal}px; | @media (min-width: ${minWidthVal}px) { font-size: calc(${mLock}vw ${bLock}px); } | @media (min-width: ${maxWidthVal}) { font-size: ${maxFontVal}px; }`;
                
            }

    }

}

// ----------------------------------------------------------------------------------------
// new version of code - more adaptable

// const minWidth = 320;
// const maxWidth = 960;

// // count font size variables
// const fontMinPx = 10;
// const fontMaxPx = 50;
// const fontMinRem = fontMinPx / 16;
// const fontMaxRem = fontMaxPx / 16;


// // count line height variables
// const lineHMinRem = 1.5;
// const lineHMaxRem = 2;
// const lineHMinPx = lineHMinRem * 16;
// const lineHMaxPx = lineHMaxRem * 16;


// const countLineHeight = () => {
    
//     const mLine = (lineHMaxPx - lineHMinPx) / (maxWidth - minWidth);
//     const bLine = 0 - (mLine * minWidth)
//     const mLinevw = mLine * 100;

//     const mLinevw1 = Math.round((mLinevw + Number.EPSILON) * 1000) / 1000;
//     const bLine1 = Math.round((bLine + Number.EPSILON) * 1000) / 1000;
//     const pxDiff = Math.round(((lineHMaxPx - lineHMinPx) + Number.EPSILON) * 1000) / 1000;

//     console.log(`line-height: ${lineHMinRem}rem;`)
//     console.log(`@media (min-width: ${minWidth}px){ line-height: calc(${lineHMinRem}rem + ${mLinevw1}vw + ${bLine1}px); }`)
//     console.log(`@media (min-width: ${maxWidth}px){ line-height: calc(${lineHMinRem}rem + ${pxDiff}px); }`)
// }


// // font-size calc

// const countFontSize = () => {

//     const mFont = (fontMaxPx - fontMinPx) / (maxWidth - minWidth);
//     const bFont = 0 - (mFont * minWidth);
//     const mFontvw = mFont * 100;
//     const fontDiffPx = fontMaxPx - fontMinPx;

//     const bFont1 = Math.round((bFont + Number.EPSILON) * 1000) / 1000;
//     const mFontvw1 = Math.round((mFontvw + Number.EPSILON) * 1000) / 1000;

//     console.log(`font-size: ${fontMinRem}rem;`)
//     console.log(`@media (min-width: ${minWidth}px) { font-size: calc(${fontMinRem}rem + ${mFontvw1}vw + ${bFont1}px); }`)
//     console.log(`@media (min-width: ${maxWidth}px) { font-size: calc(${fontMinRem}rem + ${fontDiffPx}px); }`)

// }

// countFontSize();
// countLineHeight();