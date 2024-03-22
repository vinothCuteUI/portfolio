function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});
  
    startTime=0; 
    tl.to("#image-1",{y:"=+50",yoyo:true, repeat:0 ,duration:6 ,ease:"power1.out"}, startTime);

    startTime=+1;
    tl.to("#text-1",{y:10,duration:1 ,ease:"power1.out"}, startTime);

    startTime=+2;
    tl.to("#text-2",{x:0 ,duration:1.2}, startTime);

    startTime=+2.4;
    tl.to("#text-3",{x:0 ,duration:1.3}, startTime);

    startTime=+2.5;
    tl.to("#text-4",{x:0 ,duration:1.4}, startTime);

    startTime=+2.6;
    tl.to("#text-5",{x:0 ,duration:1.5}, startTime);

    startTime=+2.7;
    tl.to("#text-6",{y:0,duration:1 ,ease:"power1.out"}, startTime);
   
  
}

window.addEventListener("load", animation)