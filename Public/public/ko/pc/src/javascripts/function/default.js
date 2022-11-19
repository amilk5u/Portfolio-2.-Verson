"use strict";
let winW;
let winH;
let $window = $(window);
let winSc = $(window).scrollTop();
$window.load(function () {
   let _this = $(this);
   winW = _this.width();
   winH = _this.height();
   winSc = _this.scrollTop();
   $window.on("resize", function () {
      winW = _this.width();
      winH = _this.height();
   });
   _this.trigger("resize");
   $(window).scroll(function () {
      winSc = _this.scrollTop();
      $('.top').text(winSc);
   });
   layout();
   main();
});