"use strict";
let windowWidth; // Window Width
let windowHeight; // Window Height
let windowScrollTop; // Window Scroll Page YOffset

/* Window Width Height  */
let windowMeasurement = () => {
   windowWidth = window.innerWidth;
   windowHeight = window.innerHeight;
}

/* Window Scroll Offset  */
let windowPageYOffset = () => {
   windowScrollTop = window.pageYOffset;
   document.querySelector('.top').innerHTML = windowScrollTop;
}

/* Window Size Report */
let reportWindowSize = () => {
   windowScrollTop = window.pageYOffset;
   window.addEventListener('resize', windowMeasurement);
   window.addEventListener('scroll', windowPageYOffset);
   windowMeasurement();
   layout();
   main();
}

/* Window Load */
window.addEventListener('load', reportWindowSize);
function layout() {
}
function main() {
   gsap.registerPlugin(ScrollTrigger);

   const pageContainer = document.querySelector(".container");
   const menuButton = document.querySelector('#menu > button');
   const menuDotsItems = document.querySelectorAll('.dots_item');
   const menuLineItems = document.querySelectorAll('.line_item');

   let motionBreakBoolean = true;

   /* LocomotiveScroll (Smooth Scroll) */
   const scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true,
      getDirection: true
   });

   scroller.on("scroll", ScrollTrigger.update);

   ScrollTrigger.scrollerProxy(".container", {
      scrollTop(value) {
         return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
         return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
         };
      },

      pinType: document.querySelector(".container").style.transform
         ? "transform"
         : "fixed"
   });

   // ScrollTrigger.addEventListener("refresh", () => scroller.update());



   scroller.on("scroll", function (t) {
      if (t.scroll.y > document.querySelector('#project').offsetTop) {
         console.log('????????')
      }

      if (t.scroll.y < 7245) {
         gsap.to($('.intro_img'), .4, { opacity: 1 })
         gsap.to($('.lg_img'), .1, { opacity: 0 })
         gsap.to($('.msfk_img'), .1, { opacity: 0 })
         gsap.to($('.hyosung_img'), .1, { opacity: 0 })
      } else if (t.scroll.y >= 7245 && t.scroll.y < 8500) {
         gsap.to($('.intro_img'), .1, { opacity: 0 })
         gsap.to($('.lg_img'), .4, { opacity: 1 })
         gsap.to($('.msfk_img'), .1, { opacity: 0 })
         gsap.to($('.hyosung_img'), .1, { opacity: 0 })
      } else if (t.scroll.y >= 8500 && t.scroll.y < 9600) {
         gsap.to($('.intro_img'), .1, { opacity: 0 })
         gsap.to($('.msfk_img'), .4, { opacity: 1 })
         gsap.to($('.lg_img'), .4, { opacity: 0 })
         gsap.to($('.hyosung_img'), .4, { opacity: 0 })
      } else if (t.scroll.y >= 9600) {
         gsap.to($('.intro_img'), .4, { opacity: 0 })
         gsap.to($('.hyosung_img'), .4, { opacity: 1 })
         gsap.to($('.msfk_img'), .4, { opacity: 0 })
         gsap.to($('.lg_img'), .4, { opacity: 0 })
      } else {
         gsap.to($('.intro_img'), .4, { opacity: 0 })
         gsap.to($('.lg_img'), .4, { opacity: 0 })
         gsap.to($('.msfk_img'), .4, { opacity: 0 })
         gsap.to($('.lg_img'), .4, { opacity: 0 })
      }
      // ScrollTrigger.update
   });

   /* Menu Click Event (?????? ?????? ??????) */
   const menuClickToggle = () => {
      let menuActiveTrue = document.querySelector('header').classList.contains('is-opened');
      if (menuActiveTrue && motionBreakBoolean) {
         motionBreakBoolean = false;
         menuCloseMotion();
      } else if (!menuActiveTrue && motionBreakBoolean) {
         motionBreakBoolean = false;
         menuOpenMotion();
      }
   }

   /* Menu Click Event (?????? ?????? ?????????) */
   menuButton.addEventListener('click', menuClickToggle);

   /* Menu Close Motion (?????? ?????? ??????) */
   const menuCloseMotion = () => {
      let type = false;
      let menuCloseTimeLine = gsap.timeline();
      menuDotsItems[0].style.left = '-10px';
      menuDotsItems[2].style.left = '10px';
      menuCloseTimeLine.to(menuLineItems, .5, { width: 0 });
      menuCloseTimeLine.to(menuDotsItems[0], 1, { display: 'block', opacity: 1, ease: Back.easeOut.config(1.7) });
      menuCloseTimeLine.to(menuDotsItems[1], 1, { display: 'block', opacity: 1, delay: -.9, ease: Back.easeOut.config(1.7) });
      menuCloseTimeLine.to(menuDotsItems[2], 1, { display: 'block', opacity: 1, delay: -.9, ease: Back.easeOut.config(1.7) });
      gsap.to(document.querySelector('.menu_bg_mask'), 1, { 'clip-path': 'circle(0% at calc(100% - 80px) 70px)', ease: "power2.inOut", });
      gsap.to(document.querySelector('#showMenu'), 1, {
         'clip-path': 'circle(0% at calc(100% - 80px) 70px)', ease: "power2.inOut",
         onCompleteParams: [type],
         onComplete: menuClickCallBack,
         delay: .3
      });
   }

   /* Menu Open Motion (?????? ?????? ??????) */
   const menuOpenMotion = () => {
      let type = true;
      let menuOpenTimeLine = gsap.timeline();
      menuOpenTimeLine.to(menuDotsItems, .3, { left: 0 });
      menuOpenTimeLine.to(menuDotsItems, .3, { display: 'none', opacity: 0, delay: -.1 });
      menuOpenTimeLine.to(menuLineItems, .3, { width: 13, delay: -.1 });
      TweenMax.staggerTo(document.querySelectorAll('.menu_list_wrap'), .5, { top: 0,/*  ease: "power2.inOut", */delay: 1 }, .2);
      gsap.to(document.querySelector('#showMenu'), 1, {
         'clip-path': 'circle(150% at calc(100% - 80px) 70px)', ease: "power2.inOut",
         onCompleteParams: [type],
         onComplete: menuClickCallBack
      });
      gsap.to(document.querySelector('.menu_bg_mask'), 1, { 'clip-path': 'circle(150% at calc(100% - 80px) 70px)', ease: "power2.inOut", delay: .3 });
   }

   /* Menu Click CallBack Motion (?????? ?????? ??? ??????) */
   const menuClickCallBack = (obj) => {
      if (obj) {
         document.querySelector('header').classList.add('is-opened');
         motionBreakBoolean = true;
      } else {
         document.querySelector('header').classList.remove('is-opened');
         motionBreakBoolean = true;
      }
   }




   /* Intro SVG Motion (????????? SVG ??????) */
   gsap.to(document.querySelector('.star_svg_item'), 1, { 'scale': 1, ease: Expo.easeInOut }, .2);
   gsap.to(document.querySelector('.circle_svg_item ellipse'), 1.5, { 'stroke-dashoffset': 0, ease: Expo.easeInOut });
   gsap.to(document.querySelector('.rhombus_svg_item polygon'), 1.5, { 'stroke-dashoffset': 0, ease: Expo.easeInOut });

   let introLineSVG1 = [];
   document.querySelectorAll('.row_line_top span').forEach(element => {
      introLineSVG1.unshift(element)
   });
   let introLineSVG2 = [];
   document.querySelectorAll('.row_line_bottom span').forEach(element => {
      introLineSVG2.push(element)
   });
   let introLineSVG3 = [];
   document.querySelectorAll('.col_line_top span').forEach(element => {
      introLineSVG3.unshift(element)
   });
   let introLineSVG4 = [];
   document.querySelectorAll('.col_line_bottom span').forEach(element => {
      introLineSVG4.push(element)
   });
   TweenMax.staggerTo(introLineSVG1, 1, { 'width': '100%', ease: Expo.easeInOut }, .15);
   TweenMax.staggerTo(introLineSVG2, 1, { 'width': '100%', ease: Expo.easeInOut }, .15);
   TweenMax.staggerTo(introLineSVG3, 1, { 'width': '100%', ease: Expo.easeInOut }, .15);
   TweenMax.staggerTo(introLineSVG4, 1, { 'width': '100%', ease: Expo.easeInOut }, .15);




   let num = 0; // position ????????? 0
   let i = 0; // count

   /* Moving Images Motion (???????????? ????????? ??????) */
   function movingImgMotion() {
      i++
      document.querySelectorAll('.moving_image > div').forEach((element) => {
         element.style.backgroundPosition = (num -= 192) + 'px';
      })
      if (i > 8) {
         i = 0;
         document.querySelectorAll('.moving_image > div').forEach((element) => {
            element.style.backgroundPosition = '0';
         })
      }
   }
   setInterval(movingImgMotion, 300);

   /* Introduce Time Line (?????? ??????) */
   let introduceTimeLine = gsap.timeline({
      scrollTrigger: {
         // markers: { startColor: "blue", endColor: "blue" },
         // trigger: ".bg_wrap",
         trigger: "#project .intro_wrap",
         scroller: ".container",
         pin: true,
         scrub: true,
         start: "top top",
         end: '+=' + 2500
      }
   });
   introduceTimeLine.to(document.querySelector('.bg_wrap'), { opacity: 1, duration: 1 })
   introduceTimeLine.to(document.querySelector('#project .intro_wrap .txt_wrap'), { opacity: 1, duration: 1 })
   introduceTimeLine.to(document.querySelector('.btm_elm'), { opacity: 1, duration: 4 })


   /* Project Images Scale Time Line (????????? ?????? ?????????) */
   let projectImgScaleTimeLine = gsap.timeline({
      scrollTrigger: {
         // markers: { startColor: "green", endColor: "green" },
         trigger: ".bg_wrap",
         scroller: ".container",
         // pin: true,
         scrub: true,
         start: "top top",
         end: '+=' + (document.querySelector('#project').offsetHeight + window.innerHeight * 2 + 2500)
      }
   });
   projectImgScaleTimeLine.to('.intro_img', { scale: 1.5, duration: 1 })
   projectImgScaleTimeLine.to('.lg_img', { scale: 1.5, delay: -0.8, duration: 1 })
   projectImgScaleTimeLine.to('.msfk_img', { scale: 1.5, delay: -0.8, duration: 1 })
   projectImgScaleTimeLine.to('.hyosung_img', { scale: 1.5, delay: -0.8, duration: 1 })

   /* Project Images Fix Time Line (??????????????? ????????? ??????) */
   let bgFixTimeLine = gsap.timeline({
      scrollTrigger: {
         markers: { startColor: "red", endColor: "red" },
         trigger: ".bg_wrap",
         scroller: ".container",
         pin: true,
         scrub: true,
         start: "top top",
         end: '+=' + (document.querySelector('#project').offsetHeight - window.innerHeight + 2500)
      }
   });



   // window.addEventListener('scroll', (e) => {
   //    // console.log(windowScrollTop)
   //    // if (windowScrollTop > document.querySelector('.btm_elm').offsetTop - window.innerHeight / 2) {
   //    //    TweenMax.staggerTo(document.querySelectorAll('.icon_cont'), .5, { opacity: 1 }, .2)
   //    // } else {
   //    //    TweenMax.to(document.querySelectorAll('.icon_cont'), .5, { opacity: 0 })
   //    // }

   //    // if (windowScrollTop < 7245) {
   //    //    gsap.to($('.intro_img'), .4, { opacity: 1 })
   //    //    gsap.to($('.lg_img'), .1, { opacity: 0 })
   //    //    gsap.to($('.msfk_img'), .1, { opacity: 0 })
   //    //    gsap.to($('.hyosung_img'), .1, { opacity: 0 })
   //    // } else if (windowScrollTop >= 7245 && windowScrollTop < 8500) {
   //    //    gsap.to($('.intro_img'), .1, { opacity: 0 })
   //    //    gsap.to($('.lg_img'), .4, { opacity: 1 })
   //    //    gsap.to($('.msfk_img'), .1, { opacity: 0 })
   //    //    gsap.to($('.hyosung_img'), .1, { opacity: 0 })
   //    // } else if (windowScrollTop >= 8500 && windowScrollTop < 9600) {
   //    //    gsap.to($('.intro_img'), .1, { opacity: 0 })
   //    //    gsap.to($('.msfk_img'), .4, { opacity: 1 })
   //    //    gsap.to($('.lg_img'), .4, { opacity: 0 })
   //    //    gsap.to($('.hyosung_img'), .4, { opacity: 0 })
   //    // } else if (windowScrollTop >= 9600) {
   //    //    gsap.to($('.intro_img'), .4, { opacity: 0 })
   //    //    gsap.to($('.hyosung_img'), .4, { opacity: 1 })
   //    //    gsap.to($('.msfk_img'), .4, { opacity: 0 })
   //    //    gsap.to($('.lg_img'), .4, { opacity: 0 })
   //    // } else {
   //    //    gsap.to($('.intro_img'), .4, { opacity: 0 })
   //    //    gsap.to($('.lg_img'), .4, { opacity: 0 })
   //    //    gsap.to($('.msfk_img'), .4, { opacity: 0 })
   //    //    gsap.to($('.lg_img'), .4, { opacity: 0 })
   //    // }
   // });
}




/* (start) smoothScroll	*/
// smoothScroll(".container");
// function smoothScroll(content, viewport, smoothness) {
//    content = gsap.utils.toArray(content)[0];
//    smoothness = smoothness || 1;
//    gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
//    gsap.set(content, { overflow: "visible", width: "100%" });

//    let getProp = gsap.getProperty(content),
//       setProp = gsap.quickSetter(content, "y", "px"),
//       setScroll = ScrollTrigger.getScrollFunc(window),
//       removeScroll = () => content.style.overflow = "visible",
//       killScrub = trigger => {
//          let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
//          scrub && scrub.pause();
//          trigger.animation.progress(trigger.progress);
//       },
//       height, isProxyScrolling;

//    function refreshHeight() {
//       height = content.clientHeight;
//       content.style.overflow = "visible"
//       document.body.style.height = height + "px";
//       return height - document.documentElement.clientHeight;
//    }

//    ScrollTrigger.addEventListener("refresh", () => {
//       removeScroll();
//       requestAnimationFrame(removeScroll);
//    })
//    ScrollTrigger.defaults({ scroller: content });
//    ScrollTrigger.prototype.update = p => p;

//    ScrollTrigger.scrollerProxy(content, {
//       scrollTop(value) {
//          if (arguments.length) {
//             isProxyScrolling = true;
//             setProp(-value);
//             setScroll(value);
//             return;
//          }
//          return -getProp("y");
//       },
//       scrollHeight: () => document.body.scrollHeight,
//       getBoundingClientRect() {
//          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//       }
//    });

//    return ScrollTrigger.create({
//       animation: gsap.fromTo(content, { y: 0 }, {
//          y: () => document.documentElement.clientHeight - height,
//          ease: "none",
//          onUpdate: ScrollTrigger.update
//       }),
//       scroller: window,
//       invalidateOnRefresh: true,
//       start: 0,
//       end: refreshHeight,
//       refreshPriority: -999,
//       scrub: smoothness,
//       onUpdate: self => {
//          if (isProxyScrolling) {
//             killScrub(self);
//             isProxyScrolling = false;
//          }
//       },
//       onRefresh: killScrub
//    });
// }
/* (end) smoothScroll	*/