function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay: 3 });

    var startTime =0;
    tl.to("#test-1", {y: 0 ,duration:1, ease: "power1.out"}, startTime);
    tl.to("#test-2", {x: 0 ,duration:1, ease: "power1.out"}, startTime);
    tl.to("#test-3", {x: 0,duration:1, ease: "power1.out"}, startTime)

    startTime +=1;
    tl.to("#test-4", {alpha: 1,duration:1,ease: "power1.out" }, startTime);

    tl.to("#test-5", {scale: 1,duration:0.5,ease: "power1.out" }, startTime);


}

window.addEventListener("load",animations)