"use strict";

let openBtn = document.getElementById("openMenu");
let closeBtn = document.getElementById("closeMenu");

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

/**
 * visar eller döljer menyn vid ett klick
 * 
 * function toggleMenu
 * @param {} 
 * @returns void
 */

function toggleMenu() {
    let navMenuEl = document.getElementById("navMenu");

    let style = window.getComputedStyle(navMenuEl);

    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}

