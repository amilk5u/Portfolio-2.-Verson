function main() {

   function main1() {


      var swiper = new Swiper(".mySwiper", {
         slidesPerView: 2.3,
         spaceBetween: 450,
         centeredSlides: true,
         speed: 2000,
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
         pagination: {
            clickable: true,
         },
         on: {
            slideChange: function () {
               // console.log(this, '출발')
            },
            slideChangeTransitionEnd: function () {
               // console.log(this, '도착')
            },
         }
      });



      let ddd = '+=' + ($('#lg').height() - window.innerHeight)
      // console.log(ddd)
      // console.log($('#lg').height() - window.innerHeight)
      let corporationTimeline = gsap.timeline({
         scrollTrigger: {
            markers: { startColor: "green", endColor: "green" },
            trigger: ".bg_wrap",
            pin: true,
            scrub: true,
            start: "top top",
            end: ddd
         }
      });
      // 2350
      //3195
      // corporationTimeline.to('.lg_img', 2, { scale: 1.2 })
      // corporationTimeline.to('.lg_img', 2, { opacity: 0, delay: -2 })
      // corporationTimeline.to('.msfk_img', 2, { opacity: 1, delay: -2 })
      // corporationTimeline.to('.msfk_img', 2, { scale: 1.2, delay: -2 })

      corporationTimeline.to('.lg_img', 10, { scale: 1.2 },"-=20")
      corporationTimeline.to('.lg_img',1.5, { opacity: 0 },"-=12")
      corporationTimeline.to('.msfk_img',1.5, { opacity: 1 },"-=12")
      corporationTimeline.to('.msfk_img', 5, { scale: 1.2 },"-=12")

      // let corporationTimeline = gsap.timeline({
      // 	scrollTrigger: {
      // 		trigger: "#lgContents img",
      // 		// pin: '.sec3',   // pin the trigger element while active
      // 		start: "top top", // when the top of the trigger hits the top of the viewport
      // 		end: "+=3000", // end after scrolling 500px beyond the start
      // 		scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // 		markers: { startColor: "red", endColor: "red" },
      // 		// snap: {
      // 		// 	snapTo: "labels", // snap to the closest label in the timeline
      // 		// 	duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      // 		// 	delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      // 		// 	ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      // 		// }
      // 	}
      // });

      // corporationTimeline.to('#lgContents img', { scale: 1.5 })


      // $window.scroll(function(){
      // 	if (winSc > 2800) {
      // 		// console.log('true')
      // 		// $('#lgContents').css('position','fixed')
      // 	}


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
   }
   /* (end) smoothScroll	*/


   let ddd = '+=' + $('.sec2').height()
   function sub1() {
      let corporationTimeline = gsap.timeline({
         scrollTrigger: {
            // trigger: ".box1",
            // pin: '.box1',   // pin the trigger element while active
            // start: "top top", // when the top of the trigger hits the top of the viewport
            // // end: "+=500", // end after scrolling 500px beyond the start
            // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: { startColor: "blue", endColor: "blue" },
            // // snap: {
            // // 	snapTo: "labels", // snap to the closest label in the timeline
            // // 	duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            // // 	delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            // // 	ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
            // // }
            trigger: ".box1",
            pin: true,
            scrub: true,
            start: "top top",
            end: ddd
         }
      });
      corporationTimeline.to('.box1', { scale: 1.2 })

   }


   // var $sections = document.querySelectorAll(".horizon_box");
   // var tl = gsap.timeline({
   // 	scrollTrigger: {
   // 		trigger: "#section2",
   // 		pin: true,
   // 		scrub: 0.3,
   // 		start: "top top",
   // 		end: "+=3000"
   // 	}
   // });
   // tl.to($sections, { xPercent: -100, duration: 2, ease: "none", stagger: 3 })
   // 	.to({}, { duration: 1 });


   if ($('.container').hasClass('sub1')) {
      sub1()
   }
   if ($('.container').hasClass('main1')) {
      main1()
   }








































}