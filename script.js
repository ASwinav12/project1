```javascript
/* =========================
   ELEMENTS
========================= */

const progress =
  document.querySelector(".progress");

const navLinks =
  [...document.querySelectorAll(".nav-links a")];

const sections =
  [...document.querySelectorAll("section[id]")];

const reveals =
  document.querySelectorAll(".reveal");

const counters =
  document.querySelectorAll(".counter");


/* =========================
   SCROLL PROGRESS + ACTIVE NAV
========================= */

window.addEventListener("scroll", () => {

  const max =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const scrollProgress =
    scrollY / max;

  progress.style.transform =
    `scaleX(${Math.max(
      0,
      Math.min(1, scrollProgress)
    )})`;


  let current =
    sections[0].id;


  sections.forEach(section => {

    if (
      scrollY >=
      section.offsetTop -
      window.innerHeight * 0.35
    ) {
      current = section.id;
    }

  });


  navLinks.forEach(link => {

    link.classList.toggle(
      "active",
      link.getAttribute("href") ===
      "#" + current
    );

  });

});


/* =========================
   SCROLL REVEAL
========================= */

const observer =
  new IntersectionObserver(
    (entries, obs) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting)
          return;

        entry.target.classList.add(
          "visible"
        );

        obs.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.12
    }
  );


reveals.forEach(element => {
  observer.observe(element);
});


/* =========================
   ANIMATED COUNTERS
========================= */

const counterObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting)
          return;


        const element =
          entry.target;

        const target =
          Number(
            element.dataset.target
          );

        const duration = 1300;

        const startTime =
          performance.now();


        const animate = now => {

          const progress =
            Math.min(
              (now - startTime) /
              duration,
              1
            );


          const eased =
            1 -
            Math.pow(
              1 - progress,
              3
            );


          element.textContent =
            Math.round(
              target * eased
            );


          if (progress < 1) {

            requestAnimationFrame(
              animate
            );

          }

        };


        requestAnimationFrame(
          animate
        );


        counterObserver.unobserve(
          element
        );

      });

    },
    {
      threshold: 0.7
    }
  );


counters.forEach(counter => {
  counterObserver.observe(counter);
});


/* =========================
   MOBILE MENU
========================= */

const menu =
  document.querySelector(
    ".menu-toggle"
  );

const links =
  document.querySelector(
    ".nav-links"
  );


menu.addEventListener("click", () => {

  links.classList.toggle(
    "open"
  );

});


navLinks.forEach(link => {

  link.addEventListener(
    "click",
    () => {

      links.classList.remove(
        "open"
      );

    }
  );

});


/* =========================
   CUSTOM CURSOR
========================= */

const dot =
  document.querySelector(
    ".cursor-dot"
  );

const ring =
  document.querySelector(
    ".cursor-ring"
  );


let mouseX =
  window.innerWidth / 2;

let mouseY =
  window.innerHeight / 2;

let ringX =
  mouseX;

let ringY =
  mouseY;


window.addEventListener(
  "mousemove",
  event => {

    mouseX =
      event.clientX;

    mouseY =
      event.clientY;


    dot.style.left =
      mouseX + "px";

    dot.style.top =
      mouseY + "px";


    dot.style.opacity = 1;

    ring.style.opacity = 1;

  }
);


function cursorLoop() {

  ringX +=
    (mouseX - ringX) *
    0.16;

  ringY +=
    (mouseY - ringY) *
    0.16;


  ring.style.left =
    ringX + "px";

  ring.style.top =
    ringY + "px";


  requestAnimationFrame(
    cursorLoop
  );

}


cursorLoop();


/* =========================
   CURSOR HOVER EFFECT
========================= */

document
  .querySelectorAll(
    "a, button, .project, .service"
  )
  .forEach(element => {

    element.addEventListener(
      "mouseenter",
      () => {

        ring.classList.add(
          "hover"
        );

      }
    );


    element.addEventListener(
      "mouseleave",
      () => {

        ring.classList.remove(
          "hover"
        );

      }
    );

  });


/* =========================
   MAGNETIC BUTTONS
========================= */

document
  .querySelectorAll(".magnetic")
  .forEach(element => {

    element.addEventListener(
      "mousemove",
      event => {

        const rect =
          element.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left -
          rect.width / 2;


        const y =
          event.clientY -
          rect.top -
          rect.height / 2;


        element.style.transform =
          `translate(
            ${x * 0.12}px,
            ${y * 0.12}px
          )`;

      }
    );


    element.addEventListener(
      "mouseleave",
      () => {

        element.style.transform =
          "";

      }
    );

  });


/* =========================
   HERO PARALLAX
========================= */

const heroVisual =
  document.querySelector(
    ".hero-visual"
  );


window.addEventListener(
  "mousemove",
  event => {

    const x =
      event.clientX /
      window.innerWidth -
      0.5;


    const y =
      event.clientY /
      window.innerHeight -
      0.5;


    heroVisual.style.transform =
      `translate(
        ${x * 10}px,
        ${y * 8}px
      )`;

  }
);
```
