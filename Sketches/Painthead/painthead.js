var mic, micLevel, vol, volspec;
var canvasWidth, canvasHeight, divideCanvasWidth, divideCanvasHeigth, imgMainPosX, imgMainPosY, nonPaintWidth, nonPaintHeight;
var ph2_1x, ph2_1y, ph2_2x, ph2_2y, ph4_1x, ph4_1y, ph4_2x, ph4_2y, ph4_3x, ph4_3y, ph4_4x, ph4_4y, ph6_x, ph6_y, ph8_1x, ph8_1y, ph8_1z, ph8_2x, ph8_2y, ph8_2z, ph8_3x, ph8_3y, ph8_3z, dearloveScale, commaScale, cantthinkScale, ph10x, ph10y, centerX, centerY, multMain1000, multMain200, multMain10, multMain500, multMain3;

console.log("window width" + window.innerWidth);
console.log("window height" + window.innerHeight);

var i = 0;
var m = 0;

vol = 0;
volspec = 0;
"use strict";

function setup() {
    mic = new p5.AudioIn()
    mic.start();
       
    if ( detectmob() ) { //if user is on mobile detectmob() == true if on mobile
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    centerX = canvasWidth/2;
    centerY = canvasHeight/2;
    divideCanvasWidth = 2.4;
    divideCanvasHeight = 2.75;
    divideCanvasWidth2 = 1;
    divideCanvasHeight2 = 2.75;
    nonPaintWidth = window.innerWidth; //aspect ratio here
    nonPaintHeight = (window.innerWidth)*(1/0.6);
    imgMainPosX = (canvasWidth/2)-((nonPaintWidth/divideCanvasWidth)/2);
    imgMainPosY = (canvasHeight/2)-((nonPaintHeight/divideCanvasHeight)/2);
    imgMainPosX2 = 0;
    imgMainPosY2 = (canvasHeight/2)-((nonPaintHeight/divideCanvasHeight2)/2);
    
    
    //Keep positionings and sizings relative to nonPaintWidth and nonPaintHeight
       
    div2_1w = 1.2;
    div2_1h = 3;  
    div2_2w = 2;
    div2_2h = 3;    
    ph2_1x = nonPaintWidth - (nonPaintWidth/1.09);
    ph2_1y = (canvasHeight/2) - ((nonPaintHeight/div2_2h)/2);
    ph2_2x = canvasWidth - (canvasWidth/1.085);
    ph2_2y = (canvasHeight/2) - ((nonPaintHeight/div2_2h)/1.98);       
    ph4_1x = canvasWidth - (canvasWidth/1.07); //background text
    ph4_1y = canvasHeight - (canvasHeight/1.07); 
    ph4_2x = canvasWidth - (canvasWidth/1.27); //Skin Crawler
    ph4_2y = canvasHeight - (canvasHeight/1.25); 
    ph4_3x = canvasWidth - (canvasWidth/1.45); //Text under
    ph4_3y = canvasHeight - (canvasHeight/6); 
    ph4_4x = canvasWidth - (canvasWidth/3.4); //my
    ph4_4y = canvasHeight - (canvasHeight/6.4);  
    div4_1w = 2.1;
    div4_1h = 2;
    div4_2w = 2.5;
    div4_2h = 2.2;
    div4_3w = 1.8;
    div4_3h = 25;
    div4_4w = 16.7;
    div4_4h = 35;
        
        
    ph6_x = -290;
    ph6_y = 0;
    ph6_texty = 0;
   
    ph8_1x = 170;
    ph8_1y = -30;
    ph8_1z = 40;
    commaScale = canvasWidth/900;
    ph8_2x = -18;
    ph8_2y = -50;
    ph8_2z = 0;
    dearloveScale = canvasWidth/650;
    ph8_3x = -185;
    ph8_3y = 100;
    ph8_3z = 0;
    cantthinkScale = canvasWidth/40;
        
    ph10_1x = 0;
    ph10_1y = 0;
    ph10_2x = nonPaintWidth - (nonPaintWidth/1.47);
    ph10_2y = nonPaintHeight - (nonPaintHeight/1.383);
    ph10_3x = nonPaintWidth - (nonPaintWidth/1.45);
    ph10_3y = nonPaintHeight - (nonPaintHeight/1.387);
    ph10_4x = nonPaintWidth - (nonPaintWidth/1.57);
    ph10_4y = nonPaintHeight - (nonPaintHeight/1.43);
    ph10_5x = nonPaintWidth - (nonPaintWidth/1.453);
    ph10_5y = nonPaintHeight - (nonPaintHeight/1.279);
    ph10_6x = nonPaintWidth - (nonPaintWidth/1.44);
    ph10_6y = nonPaintHeight - (nonPaintHeight/1.278);
    ph10_7x = nonPaintWidth - (nonPaintWidth/1.5);
    ph10_7y = nonPaintHeight - (nonPaintHeight/2.4);
    ph10_8x = nonPaintWidth - (nonPaintWidth/1.925);
    ph10_8y = nonPaintHeight - (nonPaintHeight/2.95);
    //
    ph10_1w = 1.3;
    ph10_1h = 1.8;
    ph10_2w = 28;
    ph10_2h = 35;
    ph10_3w = 28;
    ph10_3h = 38;
    ph10_4w = 28;
    ph10_4h = 38;
    ph10_5w = 7.2;
    ph10_5h = 8.5;
    ph10_6w = 6.5;
    ph10_6h = 8.6;
    ph10_7w = 1.7;
    ph10_7h = 7.5;
    ph10_8w = 10.4;
    ph10_8h = 23;
    
        
    ph12_1w = 1.1;
    ph12_1h = 2.1; 
    ph12_2w = 13;
    ph12_2h = 30;
    ph12_3w = 8;
    ph12_3h = 35;
        
    ph12_1x = 0;
    ph12_1y = canvasHeight - (nonPaintHeight/ph12_1h);
    ph12_2x = nonPaintWidth - (nonPaintWidth/4.5);
    ph12_2y = canvasHeight - (nonPaintHeight/3);
    ph12_3x = nonPaintWidth - (nonPaintWidth/2);
    ph12_3y = canvasHeight - (nonPaintHeight/3.5);
        
    ph14_1x = canvasWidth - (canvasWidth/1.02);
    ph14_1y = canvasWidth/8;
    ph14_2x = canvasWidth - (canvasWidth/1.38);
    ph14_3x = 0;
    ph14_3y = canvasWidth/9;
    ph14_4y = canvasWidth/5;
    ph14_5w = 2;
    ph14_5h = 4.5;
    ph14_5x = -(nonPaintWidth/ph14_5w);
    ph14_5y = canvasHeight - (canvasHeight/1.5);
     
        
    ph16_1w = 1;
    ph16_1h = 5;
    ph16_2w = 22;
    ph16_2h = 65;
    ph16_3w = 1;
    ph16_3h = 5;
    ph16_4w = 2;
    ph16_4h = 4.7;    
    ph16_1x = 0
    ph16_1y = 0;
    ph16_2x = canvasWidth - (nonPaintWidth/1.02);
    ph16_2y = canvasWidth - (nonPaintWidth/1.03);
    ph16_3x = 0;
    ph16_3y = canvasHeight - (nonPaintHeight/(ph16_3h));
    ph16_4x = canvasWidth/2 - ((1/2)*(nonPaintWidth/ph16_4w));
    ph16_4y = canvasHeight/2 - ((1/2)*(nonPaintHeight/(ph16_4h)));
        
} else { //if user is on desktop/laptop
    canvasWidth = (window.innerWidth/1.7);
    canvasHeight = ((window.innerWidth/1.7)*0.6);
    nonPaintWidth = (window.innerWidth/1.7); //necessary bc mobile is different
    nonPaintHeight = ((window.innerWidth/1.7)*0.6); // diddo above
    centerX = canvasWidth/2;
    centerY = canvasHeight/2;
    divideCanvasWidth = 5;
    divideCanvasHeight = 2.3;
    divideCanvasWidth2 = 2.2;
    divideCanvasHeight2 = 2.4;
    imgMainPosX = (canvasWidth/2)-((canvasWidth/divideCanvasWidth)/2);
    imgMainPosY = (canvasHeight/2)-((canvasHeight/divideCanvasHeight)/2);
    imgMainPosX2 = (canvasWidth/2)-((canvasWidth/divideCanvasWidth2)/2);
    imgMainPosY2 = (canvasHeight/2)-((nonPaintHeight/divideCanvasHeight2)/2);
    
    ph2_1x = canvasWidth - (canvasWidth/1.335);
    ph2_1y = canvasHeight - (canvasHeight/1.293);
    ph2_2x = canvasWidth - (canvasWidth/1.32);
    ph2_2y = canvasHeight - (canvasHeight/1.287);
    div2_1w = 2;
    div2_1h = 2;
    div2_2w = 3;
    div2_2h = 2; 
    
    ph4_1x = (canvasWidth/7.1); //background text
    ph4_1y = (canvasHeight/2) - ((canvasHeight/1.3)/2);
    ph4_2x = canvasWidth/4.3; //skin crawler
    ph4_2y = (canvasHeight/2) - ((canvasHeight/1.9)/2);
    ph4_3x = canvasWidth/1.7; //text under
    ph4_3y = canvasHeight/1.5;
    ph4_4x = canvasWidth/1.265; //text over
    ph4_4y = canvasHeight/1.47;
    div4_1w = 3.8;
    div4_1h = 1.3;
    div4_2w = 4.8;
    div4_2h = 1.9;
    div4_3w = 3.5;
    div4_3h = 17;
    div4_4w = 31;
    div4_4h = 28;
    
    
    ph6_x = canvasWidth/100;
    ph6_y = canvasHeight/100;
    ph6_texty = -0.2;
    
    ph8_1x = canvasWidth - (canvasWidth/1.32); //comma
    ph8_1y = canvasHeight - (canvasHeight/.98);
    ph8_1z = 100; 
    commaScale = canvasWidth/1500;
    ph8_2x = canvasWidth - (canvasWidth/.93); //dear love
    ph8_2y = canvasHeight - (canvasHeight/.9);
    ph8_2z = 35;
    dearloveScale = canvasWidth/900;
    ph8_3x = canvasWidth - (canvasWidth/0.88); //i cant think
    ph8_3y = canvasHeight - (canvasHeight/1.4);
    ph8_3z = 25;
    cantthinkScale = canvasWidth/80;
    
    ph10_1x = 0;
    ph10_1y = 0;
    ph10_2x = canvasWidth - (canvasWidth/1.29);
    ph10_2y = canvasHeight - (canvasHeight/2.08);
    ph10_3x = canvasWidth - (canvasWidth/1.279);
    ph10_3y = canvasHeight - (canvasHeight/2.03);
    ph10_4x = canvasWidth - (canvasWidth/1.335);
    ph10_4y = canvasHeight - (canvasHeight/2.16);
    ph10_5x = canvasWidth - (canvasWidth/1.28);
    ph10_5y = canvasHeight - (canvasHeight/1.65);
    ph10_6x = canvasWidth - (canvasWidth/1.28);
    ph10_6y = canvasHeight - (canvasHeight/1.65);
    ph10_7x = canvasWidth - (canvasWidth/1.7);
    ph10_7y = canvasHeight - (canvasHeight/3.3);
    ph10_8x = canvasWidth - (canvasWidth/1.965);
    ph10_8y = canvasHeight - (canvasHeight/4.8);
    ph10_1w = 1.9;
    ph10_1h = 1;
    ph10_2w = 36;
    ph10_2h = 20;
    ph10_3w = 36;
    ph10_3h = 20;
    ph10_4w = 39;
    ph10_4h = 20;
    ph10_5w = 11.5;
    ph10_5h = 4.8;
    ph10_6w = 11.5
    ph10_6h = 4.8;
    ph10_7w = 3;
    ph10_7h = 6;
    ph10_8w = 18;
    ph10_8h = 16;

    
    ph12_1w = 1.5;
    ph12_1h = 1.5; 
    ph12_2w = 13;
    ph12_2h = 9;
    ph12_3w = 8;
    ph12_3h = 13;
    ph12_1x = 0;
    ph12_1y = canvasHeight - (nonPaintHeight/ph12_1h);
    ph12_2x = canvasWidth - (canvasWidth/2);
    ph12_2y = canvasHeight - (canvasHeight/1.8);
    ph12_3x = canvasWidth - (canvasWidth/1.6);
    ph12_3y = canvasHeight - (canvasHeight/2.3);
    
    ph14_1x = canvasWidth - (canvasWidth/1.02);
    ph14_1y = canvasHeight - (canvasHeight/1.25);
    ph14_2x = canvasWidth - (canvasWidth/1.38);
    ph14_3x = 0;
    ph14_3y = canvasHeight - (canvasHeight/1.17);
    ph14_4y = canvasHeight - (canvasHeight/1.3);
    ph14_5w = 3.3;
    ph14_5h = 3;
    ph14_5x = -(nonPaintWidth/ph14_5w);
    ph14_5y = canvasHeight - (canvasHeight/1.5);
    
    ph16_1x = canvasWidth - (canvasWidth/1.1);
    ph16_1y = 0;
    ph16_2x = canvasWidth - (canvasWidth/1.12);
    ph16_2y = canvasHeight - (canvasHeight/1.03);
    ph16_3x = 0;
    ph16_3y = canvasHeight - (canvasHeight/2.9);
    ph16_4x = canvasWidth - (canvasWidth/1.55);
    ph16_4y = canvasHeight - (canvasHeight/1.6);
    ph16_1w = 1.1;
    ph16_1h = 2.9;
    ph16_2w = 26;
    ph16_2h = 38;
    ph16_3w = 1.1;
    ph16_3h = 2.9;
    ph16_4w = 3.7;
    ph16_4h = 4.1;
    
}
}
function draw() {
    micLevel = mic.getLevel();
    if (micLevel < 0.03) {
        vol = 0;
        volspec = 0;
        multMain1500 = 0;
        multMain200 = 0;
        multMain10 = 0;
        multMain500 = 0;
        multMain3 = 0;
    } else if (micLevel > 0.03 && micLevel < 0.3){
        vol = 0.8;
        volspec = 0.8;
        multMain1500 = 0;
        multMain200 = 0;
        multMain10 = 0;
        multMain500 = 0;
        multMain3 = 0;
    } else {
        vol = 500;
        volspec = 1;
        multMain1500 = 1500;
        multMain200 = 200;
        multMain10 = 10;
        multMain500 = 500;
        multMain3 = 2.5;
    }
}

function detectmob() { //detect is user is on mobile based on size of screen
   if(window.innerWidth <= 800 && window.innerHeight <= 700) {
     return true;
   } else {
     return false;
   }
}

var PH1 = function ( p ) {
    var img;
    var myCanvas;         
     
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/1no_white.jpg');
    }
            
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight); //was at 1000 x 600 
    }   
    
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
    }
            
    p.draw = function() { 
            p.background(255);
            p.image(img, imgMainPosX + micLevel*2000*vol, imgMainPosY - micLevel*2000*vol, nonPaintWidth/divideCanvasWidth, nonPaintHeight/divideCanvasHeight);
            }
    }
myp5 = new p5(PH1, 'container1');

var PH2 = function ( p ) {
    var myCanvas;
     
    p.preload = function() {
        backGround = p.loadImage('Resources/Photos/Painthead/PaintWordUnder.png');
        paintWord = p.loadImage('Resources/Photos/Painthead/PaintOnTop.png');
    }
    
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
    
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
    }
    
    p.draw = function() {
            p.background('#f99991');
            p.image(backGround, ph2_1x - micLevel*2000*vol, ph2_1y + micLevel*1000*vol, nonPaintWidth/div2_1w, nonPaintHeight/div2_1h);
            p.image(paintWord, ph2_2x + micLevel*150*volspec, ph2_2y + micLevel*350*volspec, (nonPaintWidth/div2_2w) + (multMain1500*micLevel), (nonPaintHeight/div2_2h + (multMain1500*micLevel)));

    }
}
myp5 = new p5(PH2, 'container2');

var PH3 = function ( p ) {
    var img;
    var myCanvas;          
        
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/2no_white.png');
        }
            
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
    
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
    }
            
    p.draw = function() {
            p.background(255);    
            p.image(img, imgMainPosX2+micLevel*2000*vol, imgMainPosY2+micLevel*7000*vol, nonPaintWidth/divideCanvasWidth2, nonPaintHeight/divideCanvasHeight2);
        }
    }
myp5 = new p5(PH3, 'container3');

var PH4 = function ( p ) {
    var myCanvas;
    var img1;
    var img2;
    var img3;
    var img4;
    
    p.preload = function() {
        SkinCrawler = p.loadImage('Resources/Photos/Painthead/SkinCrawlerNo_white.jpg');
        TextUnder = p.loadImage('Resources/Photos/Painthead/TextUnderNo_white.jpg');
        BackgroundText = p.loadImage('Resources/Photos/Painthead/BackgroundTextNo_white.jpg');
        TextOver = p.loadImage('Resources/Photos/Painthead/TextOverNo_white.jpg');
    }
    
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
    
     p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
    }
    
    p.draw = function() {
            p.background('#bcf5ee');
            p.image(BackgroundText, ph4_1x - micLevel*2500*vol, ph4_1y - micLevel*3000*vol, nonPaintWidth/div4_1w, nonPaintHeight/div4_1h);
            p.image(SkinCrawler, ph4_2x + micLevel*4300*vol, ph4_2y + micLevel*5200*vol, nonPaintWidth/div4_2w, nonPaintHeight/div4_2h);
            p.image(TextUnder, ph4_3x + micLevel*2500*vol, ph4_3y - micLevel*3200*vol, nonPaintWidth/div4_3w, nonPaintHeight/div4_3h);
            p.image(TextOver, ph4_4x - micLevel*500*volspec, ph4_4y - micLevel*400*volspec, (nonPaintWidth/div4_4w) + (multMain200*micLevel), (nonPaintHeight/div4_4h) + (multMain200*micLevel));
    }
}
myp5 = new p5(PH4, 'container4');

var PH5 = function ( p ) {
    var img;
    var myCanvas;          
        
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/3no_white.jpg')
        }
            
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
            
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        }            
            
    p.draw = function() {
            p.background(255);    
            p.image(img, imgMainPosX-micLevel*9000*vol, imgMainPosY-micLevel*6000*vol, nonPaintWidth/divideCanvasWidth, nonPaintHeight/divideCanvasHeight);
        }
    }
myp5 = new p5(PH5, 'container5');

var PH6 = function ( p ) {
    var myCanvas;
    var img1;
    var img2;
    var img3;
    
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
    
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        centerX = canvasWidth/2;
        centerY = canvasHeight/2;
        } 
    
    p.draw = function() {
            p.background('#ffffcc');
            p.textFont("Helvetica");
            p.textSize(12);
            p.textAlign(CENTER, CENTER);
            p.text("today i wanted to ride my bike", centerX - 1000*micLevel*vol, centerY - 130 -1000*micLevel*vol);
            p.text("so fast and so far", centerX - 2000*micLevel*vol, centerY - 120 + 3000*micLevel*vol);
            p.text("that the g-force would rip me out of my skin", centerX - 2500*micLevel*vol, centerY - 110 - 1000*micLevel*vol);
            p.text("today i wanted to ride my bike", centerX - 2000*micLevel*vol, centerY - 100 + 2500*micLevel*vol);
            p.text("so fast and so far", centerX - 1500*micLevel*vol, centerY - 90 + 2500*micLevel*vol);
            p.text("that the g-force would rip me out of my skin", centerX - 3400*micLevel*vol, centerY - 80 + 2200*micLevel*vol);
            p.text("peel me, like a banana", centerX + 3500*micLevel*vol, centerY - 70 - 1000*micLevel*vol);
            p.text("and i would keep riding on as a grinning skeleton", centerX + 3100*micLevel*vol, centerY - 60 - 3000*micLevel*vol);
            p.text("and people would stare and mutter incredulously", centerX + 3100*micLevel*vol, centerY - 50 - 1200*micLevel*vol);
            p.text("under their breath and go to work confused or maybe", centerX - 2100*micLevel*vol, centerY - 40 + 4500*micLevel*vol);
            p.text("call in sick and go home and lie down on their", centerX - 1100*micLevel*vol, centerY - 30 - 2400*micLevel*vol);
            p.text("couches and wonder if they were become senile or", centerX + 2100*micLevel*vol, centerY - 20 - 2100*micLevel*vol);
            p.text("contracting some early form of dementia", centerX + 2200*micLevel*vol, centerY - 10 + 1100*micLevel*vol);
            p.text("and eventually i would ride under a clothesline and", centerX + 2100*micLevel*vol, centerY - 2200*micLevel*vol);
            p.text("acquire a new skin; a better one", centerX - 3100*micLevel*vol, centerY + 10 + 3300*micLevel*vol);
            p.text("i'd also bump my", centerX - 90 - 1000*micLevel*vol, centerY + 20 + 1900*micLevel*vol);
        p.textSize(12 + multMain200 * micLevel);
            p.text("head", centerX - 29 + micLevel*100*volspec, centerY + 20 + micLevel*100*volspec);
        p.textSize(12);
            p.text("on a low-hanging street lamp", centerX + 65 - 2700*micLevel*vol, centerY + 20 + 2300*micLevel*vol);
            p.text("and my brain would fall out with a resigned squelch", centerX + 4000*micLevel*vol, centerY + 30 - 6100*micLevel*vol);
            p.text("and along the way i would pick up a new brain from a", centerX - 3600*micLevel*vol, centerY + 40 - 2200*micLevel*vol);
            p.text("black market organ dealer in chicago", centerX + 3330*micLevel*vol, centerY + 50 - 2200*micLevel*vol);
            p.text("a smarter brain; one that is not broken like the old one", centerX - 4300*micLevel*vol, centerY + 60 + 2000*micLevel*vol);
            p.text("and i would keep riding my bike", centerX - 1500*micLevel*vol, centerY + 70 - 4100*micLevel*vol);
            p.text("tilting my head up at the sky every so often to scream", centerX - 5000*micLevel*vol, centerY + 80 - 1000*micLevel*vol);
            p.text("joyously", centerX + 2100*micLevel*vol, centerY + 90 - 2100*micLevel*vol);
            p.text("because things were okay", centerX - 3200*micLevel*vol, centerY + 100 + 1600*micLevel*vol);
            p.text("and things were going to be okay", centerX - 2500*micLevel*vol, centerY + 110 + 3500*micLevel*vol);
            p.text("and i was going to be okay", centerX - 5300*micLevel*vol, centerY + 120 - 3200*micLevel*vol);
            p.fill('#f8cfb1');
    }
}
myp5 = new p5(PH6, 'container6');

var PH7 = function ( p ) {
    var img;
    var myCanvas;        
        
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/4no_white.jpg');
        }
            
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
            
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        }            
            
    p.draw = function() {
            p.background(255);    
            p.image(img, imgMainPosX+micLevel*8000*vol, imgMainPosY-micLevel*3000*vol, nonPaintWidth/divideCanvasWidth, nonPaintHeight/divideCanvasHeight);
        }
}
myp5 = new p5(PH7, 'container7');

var PH8 = function ( p ) {
    var myCanvas;
    var img;
    var img2, img3;
    var m;
   // var up, down;
    var rando;
    var currentTimer;
    var upFlag;
    
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/zebraPrint02.jpg');
    }
    
    p.countUp = function() {
        m += 1;
        rando = random(-100,100);
    }
    
    p.countDown = function() {
        m -= 1;
        rando = random(-100,100);
    }
    
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight, p.WEBGL);
        comma = p.loadModel('Resources/3DComma.obj');
        dearlove = p.loadModel('Resources/dearlove.obj');
        icantthink = p.loadModel('Resources/icantthink.obj');
        
        m = 0;
        upFlag = 1;
        
        setInterval(function() {
            clearInterval(currentTimer);
            
            if (upFlag == 0) {
                currentTimer = setInterval(p.countUp, 60);
                upFlag = 1;
            } else {
                currentTimer = setInterval(p.countDown, 60);
                upFlag = 0;
            }
        }, 1000);
        
        }
    
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        } 
    
    p.draw = function() {
            p.background('#c3f2cf');
           
            p.push();
            p.translate(ph8_1x - micLevel*300*volspec, ph8_1y, ph8_1z + micLevel*100);
            p.normalMaterial();
            p.rotateX(3.14159);
            p.rotateY(0.78539+ p.frameCount*0.05);
            p.texture(img);
            p.scale(commaScale + multMain3 * micLevel);
            p.model(comma);
            p.pop();
           
            p.push();
            p.translate(ph8_2x + 2000*micLevel*vol, ph8_2y + 3400*micLevel*vol, ph8_2z - 1000*micLevel*vol);
            var rot = map(m,-50,50,-20,30);
            p.rotateX(3.12 + (rot/10)); //ideal range is -8 to 17  
            p.texture(img);
            p.scale(dearloveScale);
            p.model(dearlove);
            p.pop();
           
            p.push();
            p.translate(ph8_3x - 3500*micLevel*vol, ph8_3y - 2200*micLevel*vol, ph8_3z + 2000*micLevel*vol);
            p.rotateX(3.14 + (rando/500));
            p.rotateY(rando/150);
            //p.rotateY(p.frameCount * 0.2);
            p.texture(img);
            p.scale(cantthinkScale);
            p.model(icantthink);
            p.pop();
    }
}
myp5 = new p5(PH8, 'container8');

var PH9 = function ( p ) {
    var img;
    var myCanvas;         
        
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/5no_white.png');
        }
            
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
            
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        }            
            
    p.draw = function() {
            p.background(255);    
            p.image(img, imgMainPosX2 - 3700*micLevel*vol, imgMainPosY2 + 4500*micLevel*vol, nonPaintWidth/divideCanvasWidth2, nonPaintHeight/divideCanvasHeight2);
        }
}
myp5 = new p5(PH9, 'container9');

var PH10 = function ( p ) {
    var myCanvas;
    var mainchar, mor, mol, cl1, cl2, cr, ivegot, my;
    
    p.preload = function() {
        mainchar = p.loadImage('Resources/Photos/Painthead/mainchar_noWhite.png');
        mor = p.loadImage('Resources/Photos/Painthead/mouthoverlayright_noWhite.png');
        mol = p.loadImage('Resources/Photos/Painthead/mouthoverlayleft_noWhite.png');
        cl1 = p.loadImage('Resources/Photos/Painthead/cornleft1_noWhite.png');
        cl2 = p.loadImage('Resources/Photos/Painthead/cornleft2_noWhite.png');
        cr = p.loadImage('Resources/Photos/Painthead/cornright_noWhite.png');
        ivegot = p.loadImage('Resources/Photos/Painthead/ivegot_noWhite.png');
        my = p.loadImage('Resources/Photos/Painthead/my_noWhite.png');
    }
    
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
    
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        } 
    
    p.draw = function() {
            p.background('#bfecff');
            p.fill('#9e41c6')
            p.image(mainchar, ph10_1x + 1500*micLevel*vol, ph10_1y - 2100*micLevel*vol, nonPaintWidth/ph10_1w, nonPaintHeight/ph10_1h);
            p.image(cl1, ph10_2x + 3300*micLevel*vol, ph10_2y - 2200*micLevel*vol, nonPaintWidth/ph10_2w, nonPaintHeight/ph10_2h);
            p.image(cl2, ph10_3x - 2500*micLevel*vol, ph10_3y + 5200*micLevel*vol, nonPaintWidth/ph10_3w, nonPaintHeight/ph10_3h);
            p.image(cr, ph10_4x + 2000*micLevel*vol, ph10_4y + 1500*micLevel*vol, nonPaintWidth/ph10_4w, nonPaintHeight/ph10_4h);
            p.image(mor, ph10_5x + 1500*micLevel*vol, ph10_5y - 2100*micLevel*vol, nonPaintWidth/ph10_5w, nonPaintHeight/ph10_5h);
            p.image(mol, ph10_6x + 1500*micLevel*vol, ph10_6y - 2100*micLevel*vol, nonPaintWidth/ph10_6w, nonPaintHeight/ph10_6h);
            p.image(ivegot, ph10_7x - 2700*micLevel*vol, ph10_7y + 2700*micLevel*vol, nonPaintWidth/ph10_7w, nonPaintHeight/ph10_7h);
            p.image(my, ph10_8x + 100*micLevel*volspec, ph10_8y - 500*micLevel*volspec, (nonPaintWidth/ph10_8w) + (multMain200*micLevel), (nonPaintHeight/ph10_8h) + (multMain200*micLevel));
    }
}
myp5 = new p5(PH10, 'container10');

var PH11 = function ( p ) {
    var img;
    var myCanvas;        
        
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/6no_white.jpg');
        }
            
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
            
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        }            
            
    p.draw = function() {
            p.background(255);    
            p.image(img, imgMainPosX + 2400*micLevel*vol, imgMainPosY - 3300*micLevel*vol, nonPaintWidth/divideCanvasWidth, nonPaintHeight/divideCanvasHeight);
        }
}
myp5 = new p5(PH11, 'container11');

var PH12 = function ( p ) {
    var myCanvas;
    var main, heremy, identity;
    
    p.preload = function() {
        main = p.loadImage("Resources/Photos/Painthead/identity_noWhite.png");
        takemy = p.loadImage("Resources/Photos/Painthead/takemy_noWhite.png");
        identity = p.loadImage('Resources/Photos/Painthead/identityword_noWhite.png');
    }
    
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
    
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        } 
    
    p.draw = function() {
            p.background('#f7c1e6');
            p.image(main, ph12_1x - (1200*micLevel*vol), ph12_1y + (2600*micLevel*vol), nonPaintWidth/ph12_1w, nonPaintHeight/ph12_1h);
            p.image(takemy, ph12_2x + (3700*micLevel*vol), ph12_2y + (4900*micLevel*vol), nonPaintWidth/ph12_2w, nonPaintHeight/ph12_2h);
            p.image(identity, ph12_3x - 10*micLevel*volspec, ph12_3y - 150*micLevel*volspec, (nonPaintWidth/ph12_3w) + (2*multMain200*micLevel), (nonPaintHeight/ph12_3h) + (multMain200*micLevel));
    }
}
myp5 = new p5(PH12, 'container12');

var PH13 = function ( p ) {
    var img;
    var myCanvas;
    
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/7no_white.jpg');
        }
            
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
            
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        }            
            
    p.draw = function() {
            p.background(255);    
            p.image(img, imgMainPosX - 3200*micLevel*vol, imgMainPosY - 4400*micLevel*vol, nonPaintWidth/divideCanvasWidth, nonPaintHeight/divideCanvasHeight);
        }
}
myp5 = new p5(PH13, 'container13');

var PH14 = function ( p ) {
    var myCanvas;
    var lat;
    var long;
//    var revGeoText;

    p.getValueLatLong = function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var requestResponse = xhr.responseText;
                    var issInfo = JSON.parse(requestResponse);
                    lat = issInfo.latitude;
                    long = issInfo.longitude;
//                    p.getValueRevGeo(lat, long);
                }
            };
            xhr.open("GET", "https://api.wheretheiss.at/v1/satellites/25544", true);
            xhr.send();
    }
 
//*****REV GEO is unstable, receiving 404 response a good bit    
//    p.getValueRevGeo = function(lat, long) {
//        var xhr = new XMLHttpRequest();
//            xhr.open("GET", "https://us1.locationiq.org/v1/reverse.php?key=99b55a157aa255&lat="+lat+"&lon="+long+"&format=json", true);
//            xhr.send();
//            xhr.onreadystatechange = function() {
//                if (this.readyState == 4 && this.status == 200) {
//                    var requestResponse = xhr.responseText; //Store full response in var
//                    var geoCodeInfo = JSON.parse(requestResponse); //turn received information into a javascript object
//                    if (geoCodeInfo.error) {
//                        var Display = "somewhere over an ocean"; //NEED TO MAKE THIS MORE SPECIFIC, FIND LAT AND LONG OF OCEANS OF THE WORLD   
//                    } else {
//                        var Display = geoCodeInfo.display_name; //Set display name to var
//                    }
//                    console.log(Display);
//                    Display = revGeoText;
//                }
//            };
//    }
    
    p.preload = function() {
       iss = p.loadImage('Resources/Photos/Painthead/cartooniss.png');
    }
    
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        p.getValueLatLong();
        var latLongCall = setInterval(p.getValueLatLong, 5000);
    }
    
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        } 
    
    p.draw = function() { 
            p.background('#fff1e1');
            p.textStyle('bold');
            p.fill('#ce2b3b');
            p.textSize((canvasWidth/6.8) + (multMain200*micLevel));
            p.text("IS", ph14_1x + 300*micLevel*volspec, ph14_1y + 400*micLevel*volspec);
            p.textSize(canvasWidth/6.8);
            p.text("S", ph14_1x + canvasWidth/7.5 - 3400*micLevel*vol, ph14_1y + 400*micLevel*vol);
            p.text("POSITION", ph14_2x + 2000*micLevel*vol, ph14_1y + 2500*micLevel*vol);
            p.fill('#fce2c5');
            p.textSize(canvasWidth/20);
            p.textStyle('normal');
            p.text("Lat: ", ph14_1x - 2200*micLevel*vol, ph14_3y + 2200*micLevel*vol);
            p.text("Long: ", ph14_1x - 1800*micLevel*vol, ph14_4y - 2300*micLevel*vol);
            p.image(iss, ph14_5x - 2300*vol*micLevel, ph14_5y + 1500*vol*micLevel, nonPaintWidth/ph14_5w, nonPaintHeight/ph14_5h);
            ph14_5x = ph14_5x + 3;
            var y = 0;
            y = y + 0.5;
            var dat = 0.5*sin(y) + random(-5,5);
            ph14_5y = ph14_5y + dat;
            if (ph14_5x > canvasWidth) {
                ph14_5x = -(nonPaintWidth/ph14_5w);
                ph14_5y = canvasHeight - (canvasHeight/1.5);
            }
        
            if (lat || long) { //learning point here, if statement to wait till data is here (stupid why didnt you think of)
            p.text(lat, ph14_1x + canvasWidth/11.5 - 1300*micLevel*vol, ph14_3y + 1200*micLevel*vol);
            p.text(long, ph14_1x + canvasWidth/7.8 + 2400*micLevel*vol, ph14_4y + 2200*micLevel*vol);
            //p.text(revGeoText, 500, 350);
            }
    }
}
myp5 = new p5(PH14, 'container14');

var PH15 = function ( p ) {
    var img;
    var myCanvas;
    
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/8no_white.png');
        }
            
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
            
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        }            
            
    p.draw = function() { 
            p.background(255);    
            p.image(img, imgMainPosX2 - 6700*micLevel*vol, imgMainPosY2 - 2200*micLevel*vol, nonPaintWidth/divideCanvasWidth2, nonPaintHeight/divideCanvasHeight2);
        }
}
myp5 = new p5(PH15, 'container15');

var PH16 = function ( p ) {
    var myCanvas;
    var strip1, strip2, dead, bird;
    
    p.preload = function() {
        strip1 = p.loadImage("Resources/Photos/Painthead/calvinStrip1_noWhite.png");
        strip2 = p.loadImage("Resources/Photos/Painthead/calvinStrip2_noWhite.png");
        dead = p.loadImage('Resources/Photos/Painthead/calvinDEAD_noWhite.png');
        bird = p.loadImage('Resources/Photos/Painthead/calvinBird_noWhite.png')
    }
    
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
    
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        } 
    
    p.draw = function() {
            p.background('#d6fff0');
            p.image(strip1, ph16_1x - 3500*micLevel*vol, ph16_1y - 2200*micLevel*vol, nonPaintWidth/ph16_1w, nonPaintHeight/ph16_1h);
            p.image(dead, ph16_2x + 200*micLevel*volspec, ph16_2y + 200*micLevel*volspec, (nonPaintWidth/ph16_2w) + (2*multMain500*micLevel), (nonPaintHeight/ph16_2h) + (multMain500*micLevel));
            p.image(strip2, ph16_3x + 3600*micLevel*vol, ph16_3y + 4300*micLevel*vol, nonPaintWidth/ph16_3w, nonPaintHeight/ph16_3h);
            p.image(bird, ph16_4x - 5300*micLevel*vol, ph16_4y - 2300*micLevel*vol, nonPaintWidth/ph16_4w, nonPaintHeight/ph16_4h);
    }
}
myp5 = new p5(PH16, 'container16');

var PH17 = function ( p ) {
    var img;
    var myCanvas;
    
    p.preload = function() {
        img = p.loadImage('Resources/Photos/Painthead/9no_white.jpg');
        }
            
    p.setup = function() {
        myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        }
            
    p.windowResized = function() {
        p.resizeCanvas(canvasWidth, canvasHeight);
        }            
            
    p.draw = function() {
            p.background(255);    
            p.image(img, imgMainPosX - 1200*micLevel*vol, imgMainPosY - 4200*micLevel*vol, nonPaintWidth/divideCanvasWidth, nonPaintHeight/divideCanvasHeight);
        }
}
myp5 = new p5(PH17, 'container17');

