"use strict";

// get elements
const hamburgerBtn = document.querySelector(".btn-hamburger__ctn");
const nav = document.querySelector(".navigation");
const navlinks = document.querySelectorAll(".navigation a");
const main = document.querySelector("main");

// toggle element class in classlist 
function toggleClass(element, classname)
{
    if(element.classList.contains(classname))
        element.classList.remove(classname);
    else
        element.classList.add(classname);
}

// hamburger button click
hamburgerBtn.addEventListener("click", function(){
    // toggle mobile navigation
    toggleClass(nav, "navigation--visible");
});