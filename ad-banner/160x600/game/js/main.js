function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});
  
    startTime=0; 
    tl.to("#image-1",{y:"=+50",yoyo:true, repeat:0 ,duration:3 ,ease:"power1.out"}, startTime);


    startTime=+0.2;
    tl.to("#text-1",{y:"=+50",yoyo:true, repeat:0 ,duration:0.6 ,ease:"power1.out"}, startTime);

    startTime=+0.6;
    tl.to("#text-2",{y:"0",yoyo:true, repeat:0 ,duration:0.7 ,ease:"power1.out"}, startTime);

    startTime=+0.9;
    tl.to("#text-3",{y:"0",yoyo:true, repeat:0 ,duration:0.9 ,ease:"power1.out"}, startTime);

    startTime=+1.3;
    tl.to("#text-4",{y:"0",yoyo:true, repeat:0 ,duration:1 ,ease:"power1.out"}, startTime);


    
    startTime=+2.7;
    tl.to("#image-2",{x:"0",yoyo:true, repeat:0 ,duration:1.2 ,ease:"power1.out"}, startTime);
    
    startTime=+2.7;
    tl.to("#image-3",{x:"0",yoyo:true, repeat:0 ,duration:1.4 ,ease:"power1.out"}, startTime);
 
    startTime=+2.7;
    tl.to("#image-4",{x:"0",yoyo:true, repeat:0 ,duration:1.6 ,ease:"power1.out"}, startTime);

    startTime=+2.7;
    tl.to("#image-5",{x:"0",yoyo:true, repeat:0 ,duration:1.2 ,ease:"power1.out"}, startTime);
    
    startTime=+2.7;
    tl.to("#image-6",{x:"0",yoyo:true, repeat:0 ,duration:1.4 ,ease:"power1.out"}, startTime);
 
    startTime=+2.7;
    tl.to("#image-7",{x:"0",yoyo:true, repeat:0 ,duration:1.6 ,ease:"power1.out"}, startTime);
    

    startTime=+3;
    tl.to("#image-8",{x:"0",yoyo:true, repeat:0 ,duration:1.8 ,ease:"power1.out"}, startTime);
  
    startTime=+3;
    tl.to("#image-9",{x:"0",yoyo:true, repeat:0 ,duration:1.8 ,ease:"power1.out"}, startTime);


    startTime=+2.2; 
    tl.to("#btn",{y:"0",yoyo:true, repeat:0 ,duration:0.6 ,ease:"power1.out"}, startTime);
  
  console.log(tl.totalDuration());
}

window.addEventListener("load", animation)