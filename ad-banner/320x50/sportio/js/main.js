function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});
  
    startTime=0;
    tl.to("#image-1",{y:3,yoyo:true, repeat:2 ,duration:2 ,ease:"power1.out"}, startTime);

    startTime=+0.2;
    tl.to("#text-5",{x:0 ,duration:0.7}, startTime);

    startTime=+0.3;
    tl.to("#text-1",{y:10,duration:1.4 ,ease:"power1.out"}, startTime);

    startTime=+0.7;
    tl.to("#text-2",{y:0 ,duration:1.2 ,ease:"power1.out"}, startTime);
    startTime=+3;
    tl.to("#text-2",{y:-100 ,duration:1.8 ,ease:"power1.out"}, startTime);

    startTime=+3.4;
    tl.to("#text-3",{y:0 ,duration:1.4, ease:"power1.out"}, startTime);
   

  
  console.log(tl.totalDuration());
}

window.addEventListener("load", animation)