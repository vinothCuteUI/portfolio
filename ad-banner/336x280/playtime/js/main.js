function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});
  

    startTime=0; 
    
    startTime=+0.1; 
    tl.to("#image-1",{y:"=+50",yoyo:true, repeat:0 ,duration:6 ,ease:"power1.out"}, startTime);

    startTime +=0;
    tl.to("#image-3",{x:"=+50",yoyo:true, repeat:0 ,duration:6 ,ease:"power1.out"}, startTime);

    startTime=+1.5;
    tl.to("#text-3",{y:0,yoyo:true, repeat:0 ,duration:1 ,ease:"power1.out"}, startTime);


}

window.addEventListener("load", animation)