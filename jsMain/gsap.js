const tl = gsap.timeline({
  default: { duration: 0.75, ease: "power3.easeOut" },
});
tl.fromTo(
  ".gsapImg",
  { scale: 1.6, borderRadius: "0rem", rotate: "0deg" },
  {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.25,
    duration: 10,
    ease: "elastic.out(1.5,2)",
  }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta2", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta3", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta5", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".cta6", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<10%");
tl.fromTo(".gspBtn", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<10%");
