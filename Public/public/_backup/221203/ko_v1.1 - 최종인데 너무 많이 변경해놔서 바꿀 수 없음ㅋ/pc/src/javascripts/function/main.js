// function main() {
//    // gsap.registerPlugin(ScrollTrigger);

//    const pageContainer = document.querySelector(".container"); // 컨테이너
//    const menuButton = document.querySelector('#menu > button'); // 메뉴 버튼
//    const menuDotsItems = document.querySelectorAll('.dots_item'); // 메뉴 점
//    const menuLineItems = document.querySelectorAll('.line_item'); // 메뉴 X 라인 

//    const cursor = document.querySelector('.cursor'); // 커서

//    let motionBreakBoolean = true; // 메뉴 클릭 후 모션 동작시 false 


//    // const scroller = new LocomotiveScroll({
//    //    el: document.querySelector('#wrap'),
//    //    smooth: true
//    // })

//    /* LocomotiveScroll (Smooth Scroll) */
//    // const scroller = new LocomotiveScroll({
//    //    el: pageContainer,
//    //    smooth: true,
//    //    // getDirection: true
//    // });

//    // scroller.on("scroll", ScrollTrigger.update); 

//    // ScrollTrigger.scrollerProxy(".container", {
//    //    scrollTop(value) {
//    //       return arguments.length
//    //          ? scroller.scrollTo(value, 0, 0)
//    //          : scroller.scroll.instance.scroll.y;
//    //    },
//    //    getBoundingClientRect() {
//    //       return {
//    //          top: 0,
//    //          left: 0,
//    //          width: window.innerWidth,
//    //          height: window.innerHeight
//    //       };
//    //    },

//    //    pinType: document.querySelector(".container").style.transform
//    //       ? "transform"
//    //       : "fixed"
//    // });

//    // ScrollTrigger.addEventListener("refresh", () => scroller.update());


//    // scroller.on("scroll", function (t) {
//    //    let scrollYOffset = Math.floor(t.scroll.y);
//    //    document.querySelector('.top').innerHTML = scrollYOffset;
//    // });

//    /* Menu Click Event (메뉴 클릭 함수) */
//    // const menuClickToggle = () => {
//    //    let menuActiveTrue = document.querySelector('header').classList.contains('is-opened');
//    //    if (menuActiveTrue && motionBreakBoolean) {
//    //       motionBreakBoolean = false;
//    //       menuCloseMotion();
//    //    } else if (!menuActiveTrue && motionBreakBoolean) {
//    //       motionBreakBoolean = false;
//    //       menuOpenMotion();
//    //    }
//    // }

//    /* Menu Click Event (메뉴 클릭 이벤트) */
//    // menuButton.addEventListener('click', menuClickToggle);

//    /* Menu Close Motion (메뉴 닫기 모션) */
//    // const menuCloseMotion = () => {
//    //    let type = false;
//    //    let menuCloseTimeLine = gsap.timeline();

//    //    menuDotsItems[0].style.left = -document.querySelector('.dots_wrap').offsetWidth / 3 + 'px';
//    //    menuDotsItems[2].style.left = document.querySelector('.dots_wrap').offsetWidth / 3 + 'px';
//    //    menuCloseTimeLine.to(menuLineItems, .5, { width: 0 });
//    //    menuCloseTimeLine.to(menuDotsItems[0], 1, { display: 'block', opacity: 1, ease: Back.easeOut.config(1.7) });
//    //    menuCloseTimeLine.to(menuDotsItems[1], 1, { display: 'block', opacity: 1, delay: -.9, ease: Back.easeOut.config(1.7) });
//    //    menuCloseTimeLine.to(menuDotsItems[2], 1, { display: 'block', opacity: 1, delay: -.9, ease: Back.easeOut.config(1.7) });
//    //    gsap.to(document.querySelector('.menu_bg_mask'), 1, { 'clip-path': 'circle(0% at calc(100% - 80px) 70px)', ease: "power2.inOut", });
//    //    gsap.to(document.querySelector('#showMenu'), 1, {
//    //       'clip-path': 'circle(0% at calc(100% - 80px) 70px)', ease: "power2.inOut",
//    //       onCompleteParams: [type],
//    //       onComplete: menuClickCallBack,
//    //       delay: .3
//    //    });
//    // }


//    /* Menu Open Motion (메뉴 오픈 모션) */
//    // const menuOpenMotion = () => {
//    //    let type = true;
//    //    let menuOpenTimeLine = gsap.timeline();
//    //    menuOpenTimeLine.to(menuDotsItems, .3, { left: 0 });
//    //    menuOpenTimeLine.to(menuDotsItems, .3, { display: 'none', opacity: 0, delay: -.1 });
//    //    menuOpenTimeLine.to(menuLineItems, .3, { width: Math.floor(document.querySelector('.dots_wrap').offsetWidth / 2.3), delay: -.1 });
//    //    TweenMax.staggerTo(document.querySelectorAll('.menu_list_wrap'), .8, { top: 0, ease: "power2.inOut", delay: .3 }, .1);
//    //    gsap.to(document.querySelector('#showMenu'), 1, {
//    //       'clip-path': 'circle(150% at calc(100% - 80px) 70px)', ease: "power2.inOut",
//    //       onCompleteParams: [type],
//    //       onComplete: menuClickCallBack
//    //    });
//    //    gsap.to(document.querySelector('.menu_bg_mask'), 1, { 'clip-path': 'circle(150% at calc(100% - 80px) 70px)', ease: "power2.inOut", delay: .3 });
//    // }

//    // /* Menu Click CallBack Motion (메뉴 클릭 시 콜백) */
//    // const menuClickCallBack = (obj) => {
//    //    if (obj) {
//    //       document.querySelector('header').classList.add('is-opened');
//    //       motionBreakBoolean = true;
//    //    } else {
//    //       document.querySelector('header').classList.remove('is-opened');
//    //       motionBreakBoolean = true;
//    //       TweenMax.to(document.querySelectorAll('.menu_list_wrap'), .5, { top: 110, delay: .3 });
//    //    }
//    // }


//    /* Intro SVG Motion (인트로 SVG 모션) */
//    const IntroSVGMotion = () => {
//       const gridLine1 = [], gridLine2 = [], gridLine3 = [], gridLine4 = [];
//       const lineSpan = ['row_line_top', 'row_line_bottom', 'col_line_top', 'col_line_bottom'];
//       const gridLineWrap = [gridLine1, gridLine2, gridLine3, gridLine4];

//       for (let i = 0; i < lineSpan.length; i++) {
//          document.querySelectorAll('.' + lineSpan[i] + ' span').forEach(element => {
//             if (i % 2 === 0) {
//                gridLineWrap[i].unshift(element);
//             } else {
//                gridLineWrap[i].push(element);
//             }

//          });
//          TweenMax.staggerTo(gridLineWrap[i], 1, { 'width': '100%', ease: Expo.easeInOut }, .15);
//       }
//       gsap.to(document.querySelector('.star_svg_item'), 1, { 'scale': 1, ease: Expo.easeInOut }, .2);
//       gsap.to(document.querySelector('.circle_svg_item ellipse'), 1.5, { 'stroke-dashoffset': 0, ease: Expo.easeInOut });
//       gsap.to(document.querySelector('.rhombus_svg_item polygon'), 1.5, { 'stroke-dashoffset': 0, ease: Expo.easeInOut });
//    }
//    IntroSVGMotion();



//    /* Moving Images Motion (움직이는 이미지 모션) */
//    function movingImgMotion() {
//       let num = 0; // position 초기값 0
//       let i = 0; // count
//       setInterval(() => {
//          i++
//          document.querySelectorAll('.moving_image > div').forEach((element) => {
//             element.style.backgroundPosition = (num -= 192) + 'px';
//          })
//          if (i > 8) {
//             i = 0;
//             document.querySelectorAll('.moving_image > div').forEach((element) => {
//                element.style.backgroundPosition = '0';
//             })
//          }

//       }, 300);
//    }
//    movingImgMotion();



//    /* Introduce Time Line (섹션 고정) */
//    let introduceTimeLine = gsap.timeline({
//       scrollTrigger: {
//          // markers: { startColor: "blue", endColor: 1"blue" },
//          // trigger: ".project_fix_img",
//          trigger: "#project .project_intro",
//          // scroller: ".container",
//          pin: true,
//          scrub: true,
//          start: "top top",
//          end: '+=' + 3500
//       }
//    });
//    introduceTimeLine.to(document.querySelector('.project_fix_img'), { opacity: 1, duration: 1 });
//    introduceTimeLine.to(document.querySelectorAll('.encase_txt'), { 'transform': 'translate3d(0, 0, 0)', duration: 1 });
//    introduceTimeLine.to(document.querySelectorAll('.encase_txt'), { 'transform': 'translate3d(0, ' + -encase_txt + 'px' + ', 0)', duration: 1, delay: .5 });

//    /* Project Images Scale Time Line (이미지 확대 트리거) */
//    let projectImgScaleTimeLine = gsap.timeline({
//       scrollTrigger: {
//          trigger: ".project_fix_img",
//          // scroller: ".container",
//          // pin: true,
//          scrub: true,
//          start: "top top",
//          end: '+=' + (document.querySelector('#project').offsetHeight * 1.5)
//       }
//    });
//    projectImgScaleTimeLine.to('.intro_img', { scale: 1.5, duration: 1 })
//    projectImgScaleTimeLine.to('.lg_img', { scale: 1.5, delay: -0.8, duration: 1 })
//    projectImgScaleTimeLine.to('.msfk_img', { scale: 1.5, delay: -0.8, duration: 1 })
//    projectImgScaleTimeLine.to('.hyosung_img', { scale: 1.5, delay: -0.8, duration: 1 })

//    /* Project Images Fix Time Line (백그라운드 이미지 고정) */
//    let bgFixTimeLine = gsap.timeline({
//       scrollTrigger: {
//          markers: { startColor: "red", endColor: "red" },
//          trigger: ".project_fix_img",
//          // scroller: ".container",
//          pin: true,
//          scrub: true,
//          start: "top top",
//          end: '+=' + (document.querySelector('#project').offsetHeight * 1.5)
//       }
//    });
//    /* Mouse Motion (마우스 모션) */
//    document.addEventListener('mousemove', (e) => {
//       gsap.to(cursor, .5, { left: e.pageX + 'px', top: e.pageY + 'px' });
//    });
// }






// function sub1() {
//    const scroller = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true
//    })

//    gsap.registerPlugin(ScrollTrigger)


//    scroller.on('scroll', ScrollTrigger.update)

//    ScrollTrigger.scrollerProxy(
//       '.container', {
//       scrollTop(value) {
//          return arguments.length ?
//             scroller.scrollTo(value, 0, 0) :
//             scroller.scroll.instance.scroll.y
//       },
//       getBoundingClientRect() {
//          return {
//             left: 0, top: 0,
//             width: window.innerWidth,
//             height: window.innerHeight
//          }
//       }
//    }
//    )


//    ScrollTrigger.create({
//       trigger: '.image-mask',
//       scroller: '.container',
//       start: 'top+=30% 50%',
//       end: 'bottom-=40% 50%',
//       animation: gsap.to('.image-mask', { backgroundSize: '120%' }),
//       scrub: 2,
//       // markers: true
//    })


//    ScrollTrigger.addEventListener('refresh', () => scroller.update())


//    ScrollTrigger.refresh()
// }







// function sub2() {



// }







const scroller = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: true
})

gsap.registerPlugin(ScrollTrigger)


scroller.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(
   '.container', {
       scrollTop(value) {
           return arguments.length ?
           scroller.scrollTo(value, 0, 0) :
           scroller.scroll.instance.scroll.y
       },
       getBoundingClientRect() {
           return {
               left: 0, top: 0, 
               width: window.innerWidth,
               height: window.innerHeight
           }
       }
   }
)


ScrollTrigger.create({
   trigger: '.image-mask',
   scroller: '.container',
   start: 'top+=30% 50%',
   end: 'bottom-=40% 50%',
   animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
   scrub: 2,
   // markers: true
})


ScrollTrigger.addEventListener('refresh', () => scroller.update())


ScrollTrigger.refresh()