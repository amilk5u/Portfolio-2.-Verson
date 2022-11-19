"use strict";
let windowWidth;
let windowHeight;
let windowScrollTop;

function reportWindowSize() {
   // let _this = $(this);
   // console.log(e.currentTarget)

   // winW = _this.width();
   // winH = _this.height();
   // windowScrollTop = _this.scrollTop();
   windowWidth = window.innerWidth;
   windowHeight = window.innerHeight;
   windowScrollTop = window.pageYOffset;

   // // _this.trigger("resize");
   window.addEventListener('resize', (e) => {
      // console.log(e)
      // console.log(e.currentTarget)
      // winW = _this.width();
      // winH = _this.height();
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
   });

   window.addEventListener('scroll', (e) => {
      windowScrollTop = window.pageYOffset;
      document.querySelector('.top').innerHTML = windowScrollTop;
   });

   layout();
   main();
}

window.addEventListener('load', reportWindowSize);