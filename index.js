document.addEventListener("DOMContentLoaded", function(event) {
  window.addEventListener("load", function() {
    const loadingScreen = document.querySelector(".loader");

    const sideNav = document.querySelector(".main-nav--side-nav");
    const btns = document.querySelectorAll(".button");

    loadingScreen.classList.add("finish-loading");
    document.querySelector("body").style.overflow = "auto";

    btns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        if (
          btn.classList.contains("main-nav__close-nav") ||
          btn.classList.contains("main-nav__open-nav")
        ) {
          sideNav.classList.toggle("toggle-menu");
        }
      });
    });

    let controller = new ScrollMagic.Controller();

    [...document.querySelectorAll(".trigger-1")].forEach(section => {
      let controller = new ScrollMagic.Controller();

      // Animate the hero on the homepage
      let trigger1Tl = new TimelineMax({
        delay: 0.4
      });

      trigger1Tl
        .from(section.querySelector(".js-zoom-out"), 0.6, {
          opacity: 0,
          scale: 1.8
        })
        .from(section.querySelector(".js-spin"), 0.7, {
          opacity: 0,
          rotation: "360deg"
        })
        .staggerFrom(section.querySelectorAll(".js-spin span"), 0.4, {
          opacity: 0,
          width: 0
        })
        .from(section.querySelector(".js-slide-down"), 0.7, {
          opacity: 0,
          y: -40
        })
        .from(section.querySelector(".js-fade-in"), 0.8, { opacity: 0 });

      TweenMax.delayedCall(trigger1Tl.duration(), makeScene);

      function makeScene() {
        trigger1Tl.pause();

        let trigger1Scene = new ScrollMagic.Scene({
          triggerElement: section,
          duration: section.offsetHeight + "px",
          triggerHook: 0
        })
          .setTween(
            TweenMax.fromTo(trigger1Tl, 1, { progress: 1 }, { progress: 0 })
          )
          // .addIndicators({
          //   name: "trigger 1"
          // })
          .addTo(controller);
      }
    });

    // Animate the two images on the first and fifth section on the homepage
    [...document.querySelectorAll(".trigger-2")].forEach(section => {
      let controller = new ScrollMagic.Controller();
      let trigger2Tl = new TimelineMax();

      trigger2Tl
        .from(section.querySelector(".js-fade-down"), 1, {
          opacity: 0,
          y: -100
        })
        .from(
          section.querySelector(".js-fade-up"),
          1,
          {
            opacity: 0,
            y: 100
          },
          "-=0.5"
        );

      let trigger2Scene = new ScrollMagic.Scene({
        triggerElement: section
      })
        .setTween(trigger2Tl)
        // .addIndicators({
        //   name: "trigger 2"
        // })
        .addTo(controller);
    });

    // Animate the four images on the third section on the homepage
    let trigger3Tl = new TimelineMax();

    trigger3Tl
      .from(".trigger-3 .js-fade-left", 0.75, { opacity: 0, x: -70 }, "-=1")
      .from(".trigger-3 .js-fade-down", 0.75, { opacity: 0, y: -70 }, "-=1")
      .from(".trigger-3 .js-fade-up", 0.75, { opacity: 0, y: 70 }, "-=1")
      .from(".trigger-3 .js-fade-right", 0.75, { opacity: 0, x: 70 }, "-=1");

    let trigger3Scene = new ScrollMagic.Scene({
      triggerElement: ".trigger-3",
      duration: 0
    })
      .setTween(trigger3Tl)
      // .addIndicators({
      //   name: "trigger 3",
      //   indent: 100
      // })
      .addTo(controller);

    // Animate the text on each panel(the sections with the background images)
    [...document.querySelectorAll(".trigger-4")].forEach(section => {
      let controller = new ScrollMagic.Controller();
      let trigger4Tl = new TimelineMax();

      trigger4Tl.staggerTo(
        section.querySelectorAll(".js-fade-up"),
        1,
        { opacity: 0, y: "-20px" },
        0.6
      );

      let trigger4Scene = new ScrollMagic.Scene({
        triggerElement: section,
        duration: 300,
        offset: 120,
        triggerHook: 0.1
      })
        .setTween(trigger4Tl)
        // .addIndicators({ name: "trigger 4" })
        .addTo(controller);
    });
  });

  // var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector("body"), {
    speed: 0.75,
    damping: 0.1,
    renderByPixels: true,
    thumbMinSize: 20,
    alwaysShowTracks: true,
    continuousScrolling: "auto",
    delegateTo: null
  });
});
