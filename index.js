/* CANVAS */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let urlFirst = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';


async function sun() {
    let item = await fetch(urlFirst).then(res => res.json());
    let y = 0;
    let x = 0;

    for (let colors of item) {
        x = 0;
        for (let color of colors) {
            console.log(color)
            ctx.fillStyle = hexToRGB(color);
            ctx.fillRect(x, y, 128, 128);
            x += 128;
        }
        y += 128;
    }
}
/*sun()*/

const hexToRGB = (hex, alpha = 1) => {
    let parseString = hex;
    if (hex.startsWith('#')) { parseString = hex.slice(1, 7); }
    if (parseString.length !== 6) { return null; }
    const r = parseInt(parseString.slice(0, 2), 16);
    const g = parseInt(parseString.slice(2, 4), 16);
    const b = parseInt(parseString.slice(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) { return null; }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};



let urlSecond = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';

async function codewars() {
    let list = await fetch(urlSecond).then(res => res.json());
    let y = 0;
    let x = 0;

    for (let colors of list) {
        x = 0;
        for (let color of colors) {
            ctx.fillStyle = convertArrayToGRB(color);
            ctx.fillRect(x, y, 16, 16);
            x += 16;
        }
        y += 16;
    }
}
/*codewars() */


function convertArrayToGRB(rawColor) {
    let r = rawColor[0];
    let g = rawColor[1];
    let b = rawColor[2];

    return `rgb(${r}, ${g}, ${b})`;
}


function image() {
    const img = new Image(); 
    img.src = './data/image.png'
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 512, 512);
    }
}
/*image()*/


/* SWITCHES */

let sunButton = document.getElementById('switch-sun');
sunButton.addEventListener('click', () => {
    sun();
});

let piskelButton = document.getElementById('switch-codewars');
piskelButton.addEventListener('click', () => {
    codewars();
});

let rsscoolButton = document.getElementById('switch-rsscool');
rsscoolButton.addEventListener('click', () => {
    image();
});
