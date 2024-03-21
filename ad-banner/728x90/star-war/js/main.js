function animation(){
    var startAd = 0;
    var setDelay = 0;
    var tl = gsap.timeline({repeat: -1, repeatDelay: 3});
    // tl.set("#cta", {y:90});
    startAd += 1;
    tl.to("#bg", { x: -540, ease: "power1.out", duration: 10}, startAd);
    tl.to("#text-1", { autoAlpha: 1, ease: "power1.out", duration: .5}, startAd);
    startAd += 2.5;
    tl.to("#text-1", { autoAlpha: 0, ease: "power1.out", duration: .5}, startAd);
    tl.to("#text-2", { autoAlpha: 1, ease: "power1.out", duration: .5, delay:.5}, startAd);
    startAd += 2.5;
    tl.to("#text-2", { autoAlpha: 0, ease: "power1.out", duration: .5}, startAd);
    tl.to("#text-3", { autoAlpha: 1, ease: "power1.out", duration: .5, delay:.5}, startAd);
    startAd += 2.5;
    tl.to("#text-3", { autoAlpha: 0, ease: "power1.out", duration: .5}, startAd);
    tl.to("#text-4", { autoAlpha: 1, ease: "power1.out", duration: .5, delay:.5}, startAd);

}
//Init
window.load = animation();
