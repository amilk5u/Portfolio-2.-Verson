"use strict";
var winW;
var winH;
var $window = $(window);
var winSc = $(window).scrollTop();
$window.load(function () {
   var _this = $(this);
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
function layout() {
}
function main() {

	function main1() {
		gsap.to($('.star_svg'), 1, { 'scale': 1, ease: Expo.easeInOut }, .2);
		gsap.to($('.circle_svg ellipse'), 1.5, { 'stroke-dashoffset': 0, ease: Expo.easeInOut });


		let introLineSVG1 = [];
		$('.row_line_top span').each(function () {
			introLineSVG1.unshift($(this))
		})
		let introLineSVG2 = [];
		$('.row_line_bottom span').each(function () {
			introLineSVG2.push($(this))
		})
		let introLineSVG3 = [];
		$('.col_line_top span').each(function () {
			introLineSVG3.unshift($(this))
		})
		let introLineSVG4 = [];
		$('.col_line_bottom span').each(function () {
			introLineSVG4.push($(this))
		})

		TweenMax.staggerTo(introLineSVG1, 1, { 'width': '100%', ease: Expo.easeInOut }, .15);
		TweenMax.staggerTo(introLineSVG2, 1, { 'width': '100%', ease: Expo.easeInOut }, .15);
		TweenMax.staggerTo(introLineSVG3, 1, { 'width': '100%', ease: Expo.easeInOut }, .15);
		TweenMax.staggerTo(introLineSVG4, 1, { 'width': '100%', ease: Expo.easeInOut }, .15);





		// console.log($('.painting_deo .box2').css('backgroundPosition', '100px'))

		let i = 0;
		let interval = setInterval(callback, 300);
		function callback() {
			i++
			$('.deco_box').css('backgroundPosition', '-=192px')
			if (i > 8) {
				i = 0;
				$('.deco_box').css('backgroundPosition', '0')
			}
			// console.log(i)
		}





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

		// 소개글 핀 트리거
		let corporationTimeline2 = gsap.timeline({
			scrollTrigger: {
				markers: { startColor: "blue", endColor: "blue" },
				// trigger: ".bg_wrap",
				trigger: "#project .intro_wrap",
				pin: true,
				scrub: true,
				start: "top+=80",
				end: '+=' + 2500
			}
		});
		corporationTimeline2.to('.bg_wrap', { opacity: 1, duration: 1 })
		corporationTimeline2.to('#project .intro_wrap .txt_wrap', { opacity: 1, duration: 1 })
		corporationTimeline2.to('.btm_elm', { opacity: 1, duration: 4 })

		// 이미지 확대 트리거
		let corporationTimeline = gsap.timeline({
			scrollTrigger: {
				markers: { startColor: "green", endColor: "green" },
				trigger: ".bg_wrap",
				// pin: true,
				scrub: true,
				start: "top top",
				end: '+=' + ($('#project').outerHeight() + window.innerHeight * 2 + 2500)
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
				start: "top+=80",
				end: '+=' + ($('#project').outerHeight() - window.innerHeight - 160 + 2500)
			}
		});


		// $window.scroll(function () {
		// 	if (winSc < 7245) {
		// 		gsap.to($('.intro_img'), .4, { opacity: 1 })
		// 		gsap.to($('.lg_img'), .4, { opacity: 0 })
		// 		gsap.to($('.msfk_img'), .4, { opacity: 0 })
		// 		gsap.to($('.hyosung_img'), .4, { opacity: 0 })
		// 	} else if (winSc >= 7245 && winSc < 8500) {
		// 		gsap.to($('.intro_img'), .4, { opacity: 0 })
		// 		gsap.to($('.lg_img'), .4, { opacity: 1 })
		// 		gsap.to($('.msfk_img'), .4, { opacity: 0 })
		// 		gsap.to($('.hyosung_img'), .4, { opacity: 0 })
		// 	} else if (winSc >= 8500 && winSc < 9600) {
		// 		gsap.to($('.intro_img'), .4, { opacity: 0 })
		// 		gsap.to($('.msfk_img'), .4, { opacity: 1 })
		// 		gsap.to($('.lg_img'), .4, { opacity: 0 })
		// 		gsap.to($('.hyosung_img'), .4, { opacity: 0 })
		// 	} else if (winSc >= 9600) {
		// 		gsap.to($('.intro_img'), .4, { opacity: 0 })
		// 		gsap.to($('.hyosung_img'), .4, { opacity: 1 })
		// 		gsap.to($('.msfk_img'), .4, { opacity: 0 })
		// 		gsap.to($('.lg_img'), .4, { opacity: 0 })
		// 	} else {
		// 		gsap.to($('.intro_img'), .4, { opacity: 0 })
		// 		gsap.to($('.lg_img'), .4, { opacity: 0 })
		// 		gsap.to($('.msfk_img'), .4, { opacity: 0 })
		// 		gsap.to($('.lg_img'), .4, { opacity: 0 })
		// 	}
		// });
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