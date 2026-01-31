//SCROLL SUAVE COM GSAP
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
	smooth: 1.5,
	effects: true
});