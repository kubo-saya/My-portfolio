"use strict";

// ====-ハンバーガー=====

const hamburgerBtn = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger_navi");
const hamburgerLists = document.querySelectorAll(".hamburger_navi li");
const hamburgerMask = document.querySelector(".mask");

// ハンバーガーの開閉
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  hamburgerMenu.classList.toggle("open");
  hamburgerMask.classList.toggle("open");
});

// メニュー、マスククリックで閉じる
function closeMenu() {
  hamburgerBtn.classList.remove("open");
  hamburgerMenu.classList.remove("open");
  hamburgerMask.classList.remove("open");
}

[...hamburgerLists, hamburgerMask].forEach((element) => {
  element.addEventListener("click", closeMenu);
});

// ====アコーディオンメニュー=====

const dts = document.querySelectorAll("dt");

dts.forEach((dt) => {
  dt.addEventListener("click", () => {
    dt.parentNode.classList.toggle("appear");

    dts.forEach((el) => {
      if (dt !== el) el.parentNode.classList.remove("appear");
    });
  });
});

// =====スライドアニメーション========

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
      threshold:0.2
    };


    const fadeObserver = new IntersectionObserver(fadeCallback,options);



    const targets = document.querySelectorAll(".animate");
    targets.forEach(target => {
      fadeObserver.observe(target);
    });

