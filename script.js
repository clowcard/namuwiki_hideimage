// ==UserScript==
// @name         NamuWiki Hide/Show Image
// @namespace    https://github.com/clowcard
// @version      0.1
// @description  Show/Hide images in the wiki page
// @author       clowcard(Kiyoung Kim)
// @match        https://namu.wiki/w/*
// @grant        none
// ==/UserScript==

var image_hidden = true;

function hide_image() {
    $('.wiki-image').attr('image-hidden', 'true');
    $('.wiki-image').css('visibility', 'hidden');
    $('.wiki-youtube').css('visibility', 'hidden');
    image_hidden = true;
}

function show_image() {
    $('.wiki-image').attr('image-hidden', 'false');
    $('.wiki-image').css('visibility', 'visible');
    $('.wiki-youtube').css('visibility', 'visible');
    image_hidden = false;
}

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.keyCode == 73) {
        if (image_hidden) {
            show_image();
        } else {
            hide_image();
        }
    }
}, true);

hide_image();
