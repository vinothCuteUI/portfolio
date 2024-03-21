function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay: 2 });
    
    var startTime = 0;

    startTime += 0.5;
    tl.to(".img-sec", {scale:1, y:0, duration:3 ,ease:"power1.out" }, startTime);
    tl.to("#text-1", {top: 70,alpha:1, duration:0.5 ,ease:"power1.out" }, startTime);

    startTime += 0.5;
    tl.to("#text-2", {top:122,alpha:1, duration:0.5 ,ease:"power1.out" },startTime);

    startTime += 0.5;
    tl.to("#text-3", {top:165,alpha:1, duration:0.5 ,ease:"power1.out" },startTime);

    startTime += 0.3;
    tl.to(".mist-1", {top:164,alpha:1, duration:0.5 ,ease:"power1.out" },startTime);

    startTime += 0.3;
    tl.to(".mist-2", {top:84,alpha:1, duration:0.5 ,ease:"power1.out" },startTime);

    startTime += 0.3;
    tl.to(".mist-3", {top:125,alpha:1, duration:0.5 ,ease:"power1.out" },startTime);

    startTime += 0.3;
    tl.to(".mist-4", {top:224,alpha:1, duration:0.5 ,ease:"power1.out" },startTime);

    startTime += 0.3;
    tl.to(".mist-5", {top:216,alpha:1, duration:0.5 ,ease:"power1.out" },startTime);

    startTime += 0.3;
    tl.to("#cta", {bottom:25, duration:0.5 ,ease:"power1.out"},startTime);
    tl.to("#cta", {scale:1.1,yoyo:true, repeat:3, duration:0.5 ,ease:"power1.out"},startTime+0.5);
    


    console.log(tl.totalDuration());

}

window.addEventListener("load", animations)