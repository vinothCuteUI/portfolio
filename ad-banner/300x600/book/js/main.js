function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});
  

    startTime=0; 

    tl.to("#bg1",{x:0 ,duration:7 ,ease:"power1.out"} , startTime);
    
    startTime=+0.1; 
    tl.to("#image-1",{y:"=+50",yoyo:true, repeat:0 ,duration:2 ,ease:"power1.out"}, startTime);

    startTime=+1;
    tl.to("#text-1",{y:10,duration:0.2 ,ease:"power1.out"}, startTime);

    startTime=+1.7;
    tl.to("#text-2",{x:0 ,duration:0.8}, startTime);

    startTime=+1.6;
    tl.to("#text-3",{x:0 ,duration:0.7}, startTime);

    startTime=+1.9;
    tl.to("#text-4",{x:0 ,duration:0.8}, startTime);

    startTime=+1.5;
    tl.to("#text-5",{y:0,yoyo:true, repeat:0 ,duration:2 ,ease:"power1.out"}, startTime);

  
  console.log(tl.totalDuration());
}

window.addEventListener("load", animation)