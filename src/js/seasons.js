"use strict";

let springEl = document.getElementById("pic1");
springEl.addEventListener("click", choseSpring);

let summerEl = document.getElementById("pic2");
summerEl.addEventListener("click", choseSummer);

let autumnEl = document.getElementById("pic3");
autumnEl.addEventListener("click", choseAutumn);

let winterEl = document.getElementById("pic4");
winterEl.addEventListener("click", choseWinter);

/**
 * byter färg vid klick
 * 
 * function choseSpring
 * @param {}
 * @returns void
 */
function choseSpring() {
    document.getElementById("body").style.backgroundColor ="pink";
    document.getElementById("header").style.backgroundColor = "cornflowerBlue";
    document.getElementById("footer").style.backgroundColor = "hotPink";
    document.getElementById("body").style.color ="seaGreen";
    document.getElementById("footer").style.color = "pink";
    document.getElementById("header").style.color = "pink";
}

/**
 * byter färg vid klick
 * 
 * function choseSummer
 * @param {}
 * @returns void
 */
function choseSummer() {
    document.getElementById("body").style.backgroundColor ="honeyDew";
    document.getElementById("header").style.backgroundColor = "dodgerBlue";
    document.getElementById("footer").style.backgroundColor = "darkGreen";
    document.getElementById("body").style.color ="brown";
    document.getElementById("footer").style.color = "yellow";
    document.getElementById("header").style.color = "yellow";
}

/**
 * byter färg vid klick
 * 
 * function choseAutumn
 * @param {}
 * @returns void
 */
function choseAutumn() {
    document.getElementById("body").style.backgroundColor ="blanchedAlmond";
    document.getElementById("header").style.backgroundColor = "goldenRod";
    document.getElementById("footer").style.backgroundColor = "orangeRed";
    document.getElementById("body").style.color ="maroon";
    document.getElementById("footer").style.color = "oldLace";
    document.getElementById("header").style.color = "oldLace";
}

/**
 * byter färg vid klick
 * 
 * function choseWinter
 * @param {}
 * @returns void
 */
function choseWinter() {
    document.getElementById("body").style.backgroundColor ="azure";
    document.getElementById("header").style.backgroundColor = "darkSlateGrey";
    document.getElementById("footer").style.backgroundColor = "midnightBlue";
    document.getElementById("body").style.color ="black";
    document.getElementById("footer").style.color = "white";
    document.getElementById("header").style.color = "white";
}