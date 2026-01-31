//SCROLL SUAVE COM GSAP
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);


ScrollSmoother.create({
	smooth: 1.5,
	effects: true
});

gsap.from("picture:nth-child(2)",{
    opacity: 0,
    duration: 1
})

gsap.from("picture:nth-child(1)",{
    y: -60,
    duration: 1
})

gsap.from("picture:nth-child(2)",{
    y: 200,
    duration: 1
})

//ANIMACAO TITULO CIDADES
gsap.from(".card",{
    opacity: 0,
    filter: "blur(10px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards",
        start: "0 75%",
        end: "100% 70%",
        scrub: true,
    
    }
})

//ANIMACAO TITULO CIDADES
gsap.from(".secaoObrigado ul li",{
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".secaoObrigado ul",
        scrub: true,
        start: "0 80%",
        end: "100% 55%",
     
}
})


//ANIMAÇAO FOOTER
gsap.from("footer",{
    y: "-30%",
    immediateRender:false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        start: "0 100%",
        end: "100% 100%",
        invalidateOnRefresh:true,
    }
})

//ANIMAÇÃO DAS LETRAS
const grupoSplit = document.querySelectorAll(".textSplit");

grupoSplit.forEach((texSpliter)=>{{
const tSpliter = SplitText.create(texSpliter,{
    type: "lines,words, chars",
    mask: "lines"
})

    gsap.from(tSpliter.chars,{
        y: 40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
        scrollTrigger: {
            trigger: texSpliter
        }
    })
}
});

//Preloader Animation
const tl = gsap.timeline({
    onComplete(){
        gsap.to("#preloader",{
           opacity: 0,
           onComplete(){
            gsap.to("#preloader",{
                display: "none"
            })
           }  
        })
    }
});

tl.to("#preloader path",{
    strokeDashoffset: 0,
    duration: 1
})

tl.to("#preloader path",{
    fill: " rgb(168, 19, 19)",
    duration: .5,
    strokeDashoffset: 0
})