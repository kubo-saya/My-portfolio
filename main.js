'use strict';

// =========ハンバーガー=================

const hamburgerBtn = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger_menu");
const hamburgerLists = document.querySelectorAll(".hamburger_menu li")


// ---バーを開くとき---
hamburgerBtn.addEventListener('click',() => {
  hamburgerBtn.classList.toggle("open");
  hamburgerMenu.classList.toggle("open");
});


// ---メニュー押したときに閉じる---
hamburgerLists.forEach((hamburgerList) =>{
  hamburgerList.addEventListener('click', () =>{
    hamburgerBtn.classList.remove("open");
    hamburgerMenu.classList.remove("open");
});
});



// ========header,to-top=================

function scrolleCallback(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
header.classList.add("scrolled");
toTop.classList.add("scrolled");
    }else {
      header.classList.remove("scrolled")
      toTop.classList.remove("scrolled")
    }
  });
}

const header = document.getElementById("header");
const toTop = document.getElementById("to_top")

const scrollObserver = new IntersectionObserver(scrolleCallback);
scrollObserver.observe(document.getElementById("target"));



// ========スライドアニメーション================

function fadeCallback(entries,obs){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    entry.target.classList.add("appear");
    obs.unobserve(entry.target);
});
}

    const options = {
      threshold:0.1
    };


    const fadeObserver = new IntersectionObserver(fadeCallback,options);

    const targets = document.querySelectorAll(".animate");

    targets.forEach(target => {
      fadeObserver.observe(target);
    });


    
