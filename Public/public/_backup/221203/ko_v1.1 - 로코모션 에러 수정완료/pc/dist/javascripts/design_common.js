window.addEventListener("load", function () {
   const pageContainer = document.querySelector(".container"); // 컨테이너
   const menuButton = document.querySelector('#menu > button'); // 메뉴 버튼
   const menuDotsItems = document.querySelectorAll('.dots_item'); // 메뉴 점
   const menuLineItems = document.querySelectorAll('.line_item'); // 메뉴 X 라인 

   /* LocomotiveScroll (Smooth Scroll) */
   const scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true,
      // getDirection: true
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

   /* Intro SVG Motion (인트로 SVG 모션) */
   const IntroSVGMotion = () => {
      const gridLine1 = [], gridLine2 = [], gridLine3 = [], gridLine4 = [];
      const lineSpan = ['row_line_top', 'row_line_bottom', 'col_line_top', 'col_line_bottom'];
      const gridLineWrap = [gridLine1, gridLine2, gridLine3, gridLine4];

      for (let i = 0; i < lineSpan.length; i++) {
         document.querySelectorAll('.' + lineSpan[i] + ' span').forEach(element => {
            if (i % 2 === 0) {
               gridLineWrap[i].unshift(element);
            } else {
               gridLineWrap[i].push(element);
            }

         });
         TweenMax.staggerTo(gridLineWrap[i], 1, { 'width': '100%', ease: Expo.easeInOut }, .15);
      }
      gsap.to(document.querySelector('.star_svg_item'), 1, { 'scale': 1, ease: Expo.easeInOut }, .2);
      gsap.to(document.querySelector('.circle_svg_item ellipse'), 1.5, { 'stroke-dashoffset': 0, ease: Expo.easeInOut });
      gsap.to(document.querySelector('.rhombus_svg_item polygon'), 1.5, { 'stroke-dashoffset': 0, ease: Expo.easeInOut });
   }
   IntroSVGMotion();



});