var pathA = document.getElementById('pathA'),
    pathB = document.getElementById('pathB')
    pathC = document.getElementById('pathC'),
    segmentA = new Segment(pathA, 8, 32),
    segmentB = new Segment(pathB, 8, 32),
    segmentC = new Segment(pathC, 8, 32);

// Linear section, with a callback to the next
function inAC(s) { s.draw('80% - 24', '80%', 0.3, {delay: 0.1, callback: function(){ inAC2(s) }}); }

// Elastic section, using elastic-out easing function
function inAC2(s) { s.draw('100% - 54.5', '100% - 30.5', 0.6, {easing: ease.ease('elastic-out', 1, 0.3)}); }

// Running the animations
inAC(segmentA); // top bar
inAC(segmentC); // bottom bar

// Expand the bar a bit
function inB(s) { s.draw(8 - 6, 32 + 6, 0.1, {callback: function(){ inB2(s) }}); }

// Reduce with a bounce effect
function inB2(s) { s.draw(8 + 12, 32 - 12, 0.3, {easing: ease.ease('bounce-out', 1, 0.3)}); }

// Run the animation
inB(segmentB);

function outAC(s) { s.draw('90% - 24', '90%', 0.1, {easing: ease.ease('elastic-in', 1, 0.3), callback: function(){ outAC2(s) }}); }
function outAC2(s) { s.draw('20% - 24', '20%', 0.3, {callback: function(){ outAC3(s) }}); }
function outAC3(s) { s.draw(8, 32, 0.7, {easing: ease.ease('elastic-out', 1, 0.3)}); }

function outB(s) { s.draw(8, 32, 0.7, {delay: 0.1, easing: ease.ease('elastic-out', 2, 0.4)}); }

// Run the animations
outAC(segmentA);
outB(segmentB);
outAC(segmentC);

var trigger = document.getElementById('menu-trigger'),
    toCloseIcon = true;

trigger.onclick = function() {
    if (toCloseIcon) {
        inAC(segmentA);
        inB(segmentB);
        inAC(segmentC);
    } else {
        outAC(segmentA);
        outB(segmentB);
        outAC(segmentC);
    }
    toCloseIcon = !toCloseIcon;
};