let mainSection = document.querySelectorAll(".mainSection"),
  paging = document.querySelector(".paging");
mainSection.forEach((e, t) => {
  let l = document.createElement("span");
  l.classList.add("pageSpan"), paging.appendChild(l);
});
const lenis = new Lenis();
function raf(e) {
  lenis.raf(e), requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
let pageSpanAll = document.querySelectorAll(".pageSpan");
mainSection.forEach((e, t) => {
  gsap.to(e, {
    scrollTrigger: {
      trigger: e,
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        pageSpanAll.forEach((e) => {
          e.classList.remove("activePageSpan");
        }),
          pageSpanAll[t].classList.add("activePageSpan");
      },
      onEnterBack: () => {
        pageSpanAll.forEach((e) => {
          e.classList.remove("activePageSpan");
        }),
          pageSpanAll[t].classList.add("activePageSpan");
      },
      onLeaveBack: () => {
        pageSpanAll.forEach((e) => {
          e.classList.remove("activePageSpan");
        }),
          pageSpanAll[t].classList.add("activePageSpan");
      },
      onLeave: () => {},
    },
  });
}),
  gsap.registerPlugin(ScrollTrigger),
  pageSpanAll.forEach((e, t) => {
    e.addEventListener("click", function (e) {
      lenis.scrollTo(`.section${t + 1}`, {});
    });
  });
let defScrollTop = document.querySelector(".defScrollTop");
window.pageYOffset > 30 && (footerScrollTop.style.transform = "scale(1)"),
  window.addEventListener("scroll", function (e) {
    this.window.pageYOffset > 100
      ? (defScrollTop.style.transform = "scale(1)")
      : (defScrollTop.style.transform = "scale(0)");
  }),
  gsap.to(".whiteSection", {
    scrollTrigger: {
      trigger: ".whiteSection",
      start: "top 80%",
      end: "bottom 80%",
      onEnter: () => {
        defScrollTop.classList.add("!bg-white"),
          (defScrollTop.querySelector("path").style.fill = "#434343");
      },
      onEnterBack: () => {
        defScrollTop.classList.add("!bg-white"),
          (defScrollTop.querySelector("path").style.fill = "#434343");
      },
      onLeaveBack: () => {
        defScrollTop.classList.remove("!bg-white"),
          (defScrollTop.querySelector("path").style.fill = "white"),
          defScrollTop.classList.remove("!bg-medium_gray");
      },
      onLeave: () => {
        defScrollTop.classList.remove("!bg-white"),
          defScrollTop.classList.add("!bg-medium_gray"),
          (defScrollTop.querySelector("path").style.fill = "white");
      },
    },
  }),
  defScrollTop.addEventListener("click", function (e) {
    lenis.scrollTo(0, {});
  }),
  gsap.to("footer", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 70%",
      end: "bottom 70%",
      onEnter: () => {
        paging.style.opacity = "0";
      },
      onLeaveBack: () => {
        paging.style.opacity = "1";
      },
    },
  });
let menuBarHome = document.querySelector(".menuBar");
menuBarHome.addEventListener("click", function (e) {
  lenis.stop();
});
let closeMegaMenuHome = document.querySelector(".closeMegaMenu");
closeMegaMenuHome.addEventListener("click", function (e) {
  lenis.start();
});

let blogBox = document.querySelectorAll(".blogBox");

blogBox.forEach(function (box, index) {
  let newIn = index+1
  if (newIn % 2 === 0) {
    gsap.from(box, {
      y: "100%",
      duration:1,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
        end: "bottom bottom",
        // markers:true,
      },
    });
    //even elements are here, you can access it by box
  } else {
    //odd elements are here, you can access it by box
    
    gsap.from(box, {
      y: "-100%",
      duration:1,
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
        end: "bottom bottom",
        // markers:true,
      },
    });
  }
});
