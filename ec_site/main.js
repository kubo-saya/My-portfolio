'use script';

// ハンバーガーメニュー
const hamburgerBtn = document.getElementById('hamburger');
const hamburgerMenu = document.querySelector('.hamburger_navi');
const hamburgerMask = document.querySelector('.mask');
const menuLists =document.querySelectorAll('.hamburger_menu li')

// ハンバーガー開閉
hamburgerBtn.addEventListener('click',() => {
  hamburgerBtn.classList.toggle("open");
  hamburgerMenu.classList.toggle("open");
  hamburgerMask.classList.toggle("open");
});


// メニュー、マスククリックでハンバーガーを閉じる
function closeMenu(){
  hamburgerBtn.classList.remove("open");
  hamburgerMenu.classList.remove("open");
  hamburgerMask.classList.remove("open");
}

[...menuLists, hamburgerMask].forEach((element) => {
  element.addEventListener('click', closeMenu);
});




// スライドアニメーション
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

