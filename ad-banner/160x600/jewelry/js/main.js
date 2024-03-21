function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:2});

    startTime=0;

    tl.to("#text-2",{x:0, duration:1.4, ease:"power1.out"}, startTime);
  
    startTime +=1;
    tl.to("#text-3",{x:0, duration:0.9, ease:"power1.out"}, startTime);
  
    startTime +=1;
    tl.to("#text-1",{scale:1, duration:0.9, ease:"power1.out"}, startTime); 

    startTime +=1;
    tl.to("#text-4",{scale:1}, startTime);
}

window.addEventListener("load", animation)