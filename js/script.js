gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const audioBtn = document.getElementById("audioControl");
let isPlaying = false;

audioBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (audio.paused) {
    audio.play();
    audioBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    audio.pause();
    audioBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
});

const audio = document.getElementById("bgMusic");
audio.volume = 0.2;

function playAudio() {
  audio
    .play()
    .then(() => {
      document.removeEventListener("click", playAudio);
      console.log("Áudio reproduzido com sucesso.");
    })
    .catch((error) => {
      console.error("Erro ao reproduzir o áudio:", error);
    });
}

playAudio();
document.addEventListener("click", playAudio);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animarPagina() {
  gsap.from("picture:nth-child(2)", {
    opacity: 0,
    duration: 1,
  });

  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });

  gsap.from("picture:nth-child(2)", {
    y: 200,
    duration: 1,
  });

  gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cards",
      start: "0 75%",
      end: "100% 70%",
      scrub: true,
    },
  });

  gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".secaoObrigado ul",
      scrub: true,
      start: "0 75%",
      end: "100% 55%",
    },
  });

  if (window.innerWidth > 768) {
    gsap.to(".secaoObrigado ul", {
      x: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".secaoObrigado", 
        scrub: true,
        start: "0 90%",
        end: "100% 60%",
        invalidateOnRefresh: true,
      },
    });
  }

  gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      start: "0 100%",
      end: "100% 100%",
      invalidateOnRefresh: true,
    },
  });

  const grupoSplit = document.querySelectorAll(".textSplit");

  grupoSplit.forEach((texSpliter) => {
    {
      const tSpliter = SplitText.create(texSpliter, {
        type: "lines,words, chars",
        mask: "lines",
      });

      gsap.from(tSpliter.chars, {
        y: 40,
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
        scrollTrigger: {
          trigger: texSpliter,
        },
      });
    }
  });
}

const tl = gsap.timeline({
  onComplete() {
    animarPagina();
    gsap.to("#preloader", {
      opacity: 0,
      onComplete() {
        gsap.to("#preloader", {
          display: "none",
        });
      },
    });
  },
});

tl.to("#preloader path", {
  strokeDashoffset: 0,
  duration: 1,
});

tl.to("#preloader path", {
  fill: " rgb(168, 19, 19)",
  duration: 0.5,
  strokeDashoffset: 0,
});
