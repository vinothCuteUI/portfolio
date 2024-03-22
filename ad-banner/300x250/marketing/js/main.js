function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay: 2 });
    
    var startTime = 0;

    startTime += 0.5;
    tl.to(".bg-img", { x:-80, duration:5.5 ,ease:"power1.out" }, startTime);
    tl.to("#img-1", { x:0, duration: 5.5,ease:"power1.out" }, startTime);
    tl.to("#text-1", {x:0, duration:1 ,ease:"power1.out" }, startTime);

    startTime += 0.8;
    tl.to("#text-2", {x:0, duration:1 ,ease:"power1.out" },startTime);

    startTime += 0.8;
    tl.to("#text-3", {x:0, duration:1 ,ease:"power1.out" },startTime);

    startTime += 0.8;
    tl.to("#text-4", {x:0, duration:1 ,ease:"power1.out" },startTime);


    startTime += 0.8;
    tl.to("#cta", {bottom:28, duration:0.5 ,ease:"power1.out"},startTime);
    tl.to("#cta", {scale:1.1,yoyo:true, repeat:3, duration:0.5 ,ease:"power1.out"},startTime+0.5);
    


}

window.addEventListener("load", animations)