var xstep=1.5, ustep = 1;
var lastx=-999, lastu = -999;
var lasty=-999, lastv = -999;
var angle=0, r = 0;
var y = 50;
var v = 150;
var _lineColr = 200, _lineColg = 200, _lineColb = 255;

var colorList = [//name, code, tileNumber
 ["birth", "#438cb5", 72],
 ["blueline" , "#002136", 36],
 ["bk" , "#000009", 2],
 ["white" , "#ffffff",  14],
 ["orangeb" , "#ee852e", 13],
 ["orangen" , "#fbbc25", 23],
 ["yellow" , "#ffdb03", 6],
 ["skinb" , "#f3d48f", 34],
 ["skinn" , "#ffecae", 44],
 ["cianb" , "#006467", 2],
 ["ciann" , "#008080", 2],
 ["pink" , "#c74d64", 3],
 ["brown" , "#342832", 5]
];

var squareList = [];

function setup () {
    createCanvas(256, 320);
    noFill();
    background(0,0,30);
    for (col of colorList) {
        for(i = 0; i < col[2]; i++) {
            squareList.push(col[1]);
        }
    }
}

function draw() {
    for (k = 0; k<255; k++) {
        i = k - int(k/16)*16;
        j = int(k/16);
        len = squareList.length;//squareList の長さ
        d = int(random(len));
        //d番目の色でドットを描く
        noStroke();
        fill(squareList[d]);
        rect(i*16, j*16, 16, 16);
        squareList.splice(d, 1);
        console.log(squareList);
        console.log(i);
        console.log(j);
    }
    //タイトルと日付を挿入
    // Font
    var font = loadFont("https://github.com/me-no/fonts/blob/main/misaki_gothic.ttf");
    textSize(12);
    textFont(font);

    var dObj    = new Date();
	var hours   = dObj.getHours();
	var minutes = dObj.getMinutes();
	var seconds = dObj.getSeconds();
    // Format
	var str     = mkSign(hours, minutes, seconds);
	fill(255, 255, 255);
	noStroke();
	text("オリさく！orisaku! #2", 40, 280);
	text(str, 40, 300);

    noLoop();
}

function mkSign(hours, minutes, seconds) {
    if(hours < 10)   hours   = "0" + hours;
	if(minutes < 10) minutes = "0" + minutes;
	if(seconds < 10) seconds = "0" + seconds;
	var str = "2022/05/04 " + hours + ":" + minutes + ":" + seconds;
	return str;
}
