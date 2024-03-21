function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});
  
    // startTime=0;
    // tl.to("#petal_rose",{y:0,duration:1 ,repeat:3, ease:"power1.out"}, startTime);

    // startTime=0;
    // tl.to("#petal_rose1",{y:0,duration:1 ,repeat:4, ease:"power1.out"}, startTime);

    startTime=+0.1; 
    tl.to("#image-1",{x:"=+50",yoyo:true, repeat:0 ,duration:3 ,ease:"power1.out"}, startTime);

    startTime=+0.3;
    tl.to("#text-1",{y:0 ,duration:0.4}, startTime);

    startTime=+0.3;
    tl.to("#text-2",{y:0 ,duration:0.6}, startTime);

    startTime=+0.4;
    tl.to("#text-3",{y:0 ,duration:0.8}, startTime);

    startTime=+0.5;
    tl.to("#text-4",{y:0 ,duration:1}, startTime);

    startTime=+0.6;
    tl.to("#text-5",{y:0 ,duration:1.1}, startTime);

    startTime=+0.7;
    tl.to("#btn",{scale:1, duration:1.2, ease:"power1.out" }, startTime);
   
   
  
  console.log(tl.totalDuration());
}

window.addEventListener("load", animation)