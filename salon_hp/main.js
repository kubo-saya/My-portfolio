"use strict";

//=======ハンバーガーメニュー========//

const hamburgerBtn = document.getElementById("hamburger");
const headerMenu = document.querySelector(".header_navi");
const hamburgerLists = document.querySelectorAll(".header_list");

// -------バーを開くとき-----
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  headerMenu.classList.toggle("open");
});


// ---メニュー押したときに閉じる---
hamburgerLists.forEach((hamburgerList) =>{
  hamburgerList.addEventListener('click', () =>{
    hamburgerBtn.classList.remove("open");
    headerMenu.classList.remove("open");
});
});






// -------メニュー以外を押したときに閉じる-----
document.addEventListener("click", (e) => {
  if (
    !headerMenu.contains(e.target) && // クリックされた要素がメニュー内でない
    !hamburgerBtn.contains(e.target) // クリックされた要素がハンバーガーボタンでない
  ) {
    hamburgerBtn.classList.remove("open");
    headerMenu.classList.remove("open");
  }
});



// ===========to_topの設定==============//
const toTop = document.getElementById("to_top");

toTop.addEventListener("click", () => {
  window,
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
});

const scrollObserver = new IntersectionObserver(scrollCallback);
scrollObserver.observe(document.getElementById("target"));

function scrollCallback(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      toTop.classList.add("scroll");
    } else {
      toTop.classList.remove("scroll");
    }
  });
}

// ========スライドアニメーション=============
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



    