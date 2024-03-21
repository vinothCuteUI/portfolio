function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});
  
    startTime=0;

    tl.to("#image-1",{y:3,yoyo:true, repeat:2 ,duration:2 ,ease:"power1.out"}, startTime);

    tl.to("#bg-shape",{x:0,duration:1 ,ease:"power1.out"}, startTime);

    startTime += 0.5;
    tl.to("#text-1",{y:0 ,duration:1, ease:"power1.out"}, startTime);

    startTime += 0.5;
    tl.to("#text-2",{x:0 ,duration:1, ease:"power1.out"}, startTime);

    startTime += 0.5;
    tl.to("#text-3",{x:0 ,duration:1, ease:"power1.out"}, startTime);

    startTime += 0.5;
    tl.to("#text-4",{x:0 ,duration:1, ease:"power1.out"}, startTime);

    startTime += 0.5;
    tl.to("#text-5",{x:0 ,duration:1, ease:"power1.out"}, startTime);

    startTime += 0.5;
    tl.to("#text-6",{y:10,duration:1 ,ease:"power1.out"}, startTime);
   
  
  console.log(tl.totalDuration());
}

window.addEventListener("load", animation)