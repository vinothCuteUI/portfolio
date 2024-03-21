function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});

    startTime=0;
  
    startTime +=1;
    tl.to("#text-1",{x:0}, startTime);
    
    startTime +=1;
    tl.to("#text-2",{x:0}, startTime);

    startTime +=1;
    tl.to("#text-3",{x:0}, startTime);

    
    startTime +=1;
    tl.to("#cta",{scale:1}, startTime);

    startTime +=1;
    tl.to("#offer",{x:0}, startTime);

   
}

window.addEventListener("load", animation)