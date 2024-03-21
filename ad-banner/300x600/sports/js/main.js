function animation(){
    var startAd = 0;
    var setDelay = 0;
    var tl = gsap.timeline({repeat: -1, repeatDelay: 2});
    // tl.set("#cta", {y:90});
    startAd += 1;
    tl.to("#pro-img1", { left: 0, rotate:0, ease: "power2.out", duration: 1}, startAd);
    tl.to("#text-1", { autoAlpha: 1, ease: "power2.inOut", duration: .5}, startAd);
    tl.to("#text-2", { autoAlpha: 1, ease: "power2.inOut", duration: .5, delay:setDelay+=.3}, startAd);
    tl.to("#text-3", { autoAlpha: 1, ease: "power2.inOut", duration: .5, delay:setDelay+=.3}, startAd);
    tl.to("#cta", { scale: 1, ease: "power2.inOut", duration: .5, delay:setDelay+=.3}, startAd);

    startAd += 1.5;
    tl.to("#pro-img1", { left: -300, rotate:-45, ease: "power2.out", duration: 1}, startAd);
    tl.to("#clr-bg-2", { autoAlpha:1, ease: "power1.out", duration: .6, delay:.3}, startAd);
    startAd += 1;
    tl.to("#pro-img2", { left: 0, rotate:0, ease: "power2.out", duration: 1}, startAd);

    startAd += 1.5;
    tl.to("#pro-img2", { left: -300, rotate:-45, ease: "power2.out", duration: 1}, startAd);
    tl.to("#clr-bg-3", { autoAlpha:1, ease: "power1.out", duration: .6, delay:.3}, startAd);
    startAd += 1;
    tl.to("#pro-img3", { left: 0, rotate:0, ease: "power2.out", duration: 1}, startAd);
    // startAd += 1.5;
    // tl.to("#pro-img1", { left: -300, rotate:-45, ease: "power2.out", duration: 1}, startAd);

}
//Init
window.load = animation();
