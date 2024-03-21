function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});
  
    startTime=0;
     
    tl.to("#image-1",{scale:1,yoyo:true, repeat:2 ,duration:2 ,ease:"power1.out"},startTime)
    tl.to("#image-1",{scale:1.1,yoyo:true, repeat:2 ,duration:2 ,ease:"power1.out"},startTime)

    startTime=+1;
    tl.to("#text-1",{y:10,duration:0.6 ,ease:"power1.out"}, startTime);

    startTime=+1.9;
    tl.to("#text-2",{x:0 ,duration:0.8}, startTime);

    startTime=+1.6;
    tl.to("#text-3",{x:0 ,duration:0.7}, startTime);

    startTime=+2;
    tl.to("#text-4",{x:0 ,duration:0.8}, startTime);

    startTime=+2.1;
    tl.to("#text-5",{x:0 ,duration:1}, startTime);

    startTime=+2.2;
    tl.to("#text-6",{x:0 ,duration:1.1}, startTime);

    startTime=+2;
    tl.to("#btn",{y:10,duration:1 ,ease:"power1.out"}, startTime);

   

    
  console.log(tl.totalDuration());
}

window.addEventListener("load", animation)