/*jshint  node:true */

var Game = require('../game.js');

var gd = new Game({
    length : 4,
    mode : 'digits',
    debug : true
});

// brute force method
for (var i = 123; i < 10000; i++) {
    var s = String(i);
    if (s.length < 4) {
        s = '0' + s;
    }
    var unique = true;
    Array.prototype.slice.call(s).forEach(function (c, i) {
        if (s.indexOf(c) !== i) {
            unique = false;
        }
    });

    if (unique) {
        var result = gd.guess(s);
        if (result.won) {
            console.log('Found', s, 'in', result.guesses, 'guesses');
            break;
        }
    }
}


var gl = new Game({
    length : 4,
    mode : 'letters',
    debug : true
});

var letters = 'abcdefghijklmnopqrstuvwxyz';

// brute force method
var s;
var i, j, k, l;
outerloop:
for (i = 0; i < 26; i++) {
    for (j = 0; j < 26; j++) {
        if (i === j) continue;
        for (k = 0; k < 26; k++) {
            if (i === k || j === k) continue;
            for (l = 0; l < 26; l++) {
                if (i === l || j === l || k === l) continue;
                s = letters[i] + letters[j] + letters[k] + letters[l];
                var result = gl.guess(s);
                if (result.won) {
                    console.log('Found', s, 'in', result.guesses, 'guesses');
                    break outerloop;
                }
            }
        }
    }
}

var gw = new Game({
    length : 4,
    mode : 'words',
    dict : '/usr/share/dict/french',
    debug : true
});

var letters = 'abcdefghijklmnopqrstuvwxyz';

// brute force method
var s;
var i, j, k, l;
outerloop:
for (i = 0; i < 26; i++) {
    for (j = 0; j < 26; j++) {
        if (i === j) continue;
        for (k = 0; k < 26; k++) {
            if (i === k || j === k) continue;
            for (l = 0; l < 26; l++) {
                if (i === l || j === l || k === l) continue;
                s = letters[i] + letters[j] + letters[k] + letters[l];
                var result = gw.guess(s);
                if (result.won) {
                    console.log('Found', s, 'in', result.guesses, 'guesses');
                    break outerloop;
                }
            }
        }
    }
}
