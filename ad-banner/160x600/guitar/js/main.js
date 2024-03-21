function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:2});

    startTime=0;
  
    tl.to("#text-1",{y:0}, startTime);
    
    startTime +=1;
    tl.to("#text-2",{scale:1}, startTime);

    startTime +=1;
    tl.to("#text-3",{scale:1}, startTime);
  
    startTime +=1;
    tl.to("#text-4",{scale:1}, startTime);

    startTime +=1;
    tl.to("#text-5",{x:0}, startTime);
}

window.addEventListener("load", animation)