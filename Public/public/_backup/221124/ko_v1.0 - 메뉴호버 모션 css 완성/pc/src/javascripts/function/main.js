function main() {
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

   let num = 0; // position 초기값 0
   let i = 0; // count
   function callback() {
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
   setInterval(callback, 300);

   // var swiper = new Swiper(".mySwiper", {
   // 	slidesPerView: 2.3,
   // 	spaceBetween: 450,
   // 	centeredSlides: true,
   // 	speed: 2000,
   // 	pagination: {
   // 		el: ".swiper-pagination",
   // 		clickable: true,
   // 	},
   // 	pagination: {
   // 		clickable: true,
   // 	},
   // 	on: {
   // 		slideChange: function () {
   // 			// console.log(this, '출발')
   // 		},
   // 		slideChangeTransitionEnd: function () {
   // 			// console.log(this, '도착')
   // 		},
   // 	}
   // });


   // 소개글 핀 트리거
   let corporationTimeline2 = gsap.timeline({
      scrollTrigger: {
         markers: { startColor: "blue", endColor: "blue" },
         // trigger: ".bg_wrap",
         trigger: "#project .intro_wrap",
         pin: true,
         scrub: true,
         start: "top top",
         end: '+=' + 2500
      }
   });
   corporationTimeline2.to(document.querySelector('.bg_wrap'), { opacity: 1, duration: 1 })
   corporationTimeline2.to(document.querySelector('#project .intro_wrap .txt_wrap'), { opacity: 1, duration: 1 })
   corporationTimeline2.to(document.querySelector('.btm_elm'), { opacity: 1, duration: 4 })


   // 이미지 확대 트리거
   let corporationTimeline = gsap.timeline({
      scrollTrigger: {
         markers: { startColor: "green", endColor: "green" },
         trigger: ".bg_wrap",
         // pin: true,
         scrub: true,
         start: "top top",
         end: '+=' + (document.querySelector('#project').offsetHeight + window.innerHeight * 2 + 2500)
      }
   });
   corporationTimeline.to('.intro_img', { scale: 1.5, duration: 1 })
   corporationTimeline.to('.lg_img', { scale: 1.5, delay: -0.8, duration: 1 })
   corporationTimeline.to('.msfk_img', { scale: 1.5, delay: -0.8, duration: 1 })
   corporationTimeline.to('.hyosung_img', { scale: 1.5, delay: -0.8, duration: 1 })

   // bg_wrap 핀 거는 트리거
   let corporationTimeline1 = gsap.timeline({
      scrollTrigger: {
         markers: { startColor: "red", endColor: "red" },
         trigger: ".bg_wrap",
         pin: true,
         scrub: true,
         start: "top top",
         end: '+=' + (document.querySelector('#project').offsetHeight - window.innerHeight + 2500)
      }
   });

   window.addEventListener('scroll', (e) => {
      // if (windowScrollTop > document.querySelector('.btm_elm').offsetTop - window.innerHeight / 2) {
      //    TweenMax.staggerTo(document.querySelectorAll('.icon_cont'), .5, { opacity: 1 }, .2)
      // } else {
      //    TweenMax.to(document.querySelectorAll('.icon_cont'), .5, { opacity: 0 })
      // }

      // if (windowScrollTop < 7245) {
      //    gsap.to($('.intro_img'), .4, { opacity: 1 })
      //    gsap.to($('.lg_img'), .1, { opacity: 0 })
      //    gsap.to($('.msfk_img'), .1, { opacity: 0 })
      //    gsap.to($('.hyosung_img'), .1, { opacity: 0 })
      // } else if (windowScrollTop >= 7245 && windowScrollTop < 8500) {
      //    gsap.to($('.intro_img'), .1, { opacity: 0 })
      //    gsap.to($('.lg_img'), .4, { opacity: 1 })
      //    gsap.to($('.msfk_img'), .1, { opacity: 0 })
      //    gsap.to($('.hyosung_img'), .1, { opacity: 0 })
      // } else if (windowScrollTop >= 8500 && windowScrollTop < 9600) {
      //    gsap.to($('.intro_img'), .1, { opacity: 0 })
      //    gsap.to($('.msfk_img'), .4, { opacity: 1 })
      //    gsap.to($('.lg_img'), .4, { opacity: 0 })
      //    gsap.to($('.hyosung_img'), .4, { opacity: 0 })
      // } else if (windowScrollTop >= 9600) {
      //    gsap.to($('.intro_img'), .4, { opacity: 0 })
      //    gsap.to($('.hyosung_img'), .4, { opacity: 1 })
      //    gsap.to($('.msfk_img'), .4, { opacity: 0 })
      //    gsap.to($('.lg_img'), .4, { opacity: 0 })
      // } else {
      //    gsap.to($('.intro_img'), .4, { opacity: 0 })
      //    gsap.to($('.lg_img'), .4, { opacity: 0 })
      //    gsap.to($('.msfk_img'), .4, { opacity: 0 })
      //    gsap.to($('.lg_img'), .4, { opacity: 0 })
      // }
   });
}


/* (start) smoothScroll	*/
smoothScroll(".container");
function smoothScroll(content, viewport, smoothness) {
   content = gsap.utils.toArray(content)[0];
   smoothness = smoothness || 1;
   gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
   gsap.set(content, { overflow: "visible", width: "100%" });

   let getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, "y", "px"),
      setScroll = ScrollTrigger.getScrollFunc(window),
      removeScroll = () => content.style.overflow = "visible",
      killScrub = trigger => {
         let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
         scrub && scrub.pause();
         trigger.animation.progress(trigger.progress);
      },
      height, isProxyScrolling;

   function refreshHeight() {
      height = content.clientHeight;
      content.style.overflow = "visible"
      document.body.style.height = height + "px";
      return height - document.documentElement.clientHeight;
   }

   ScrollTrigger.addEventListener("refresh", () => {
      removeScroll();
      requestAnimationFrame(removeScroll);
   })
   ScrollTrigger.defaults({ scroller: content });
   ScrollTrigger.prototype.update = p => p;

   ScrollTrigger.scrollerProxy(content, {
      scrollTop(value) {
         if (arguments.length) {
            isProxyScrolling = true;
            setProp(-value);
            setScroll(value);
            return;
         }
         return -getProp("y");
      },
      scrollHeight: () => document.body.scrollHeight,
      getBoundingClientRect() {
         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
   });

   return ScrollTrigger.create({
      animation: gsap.fromTo(content, { y: 0 }, {
         y: () => document.documentElement.clientHeight - height,
         ease: "none",
         onUpdate: ScrollTrigger.update
      }),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: refreshHeight,
      refreshPriority: -999,
      scrub: smoothness,
      onUpdate: self => {
         if (isProxyScrolling) {
            killScrub(self);
            isProxyScrolling = false;
         }
      },
      onRefresh: killScrub
   });
   /* (end) smoothScroll	*/
}