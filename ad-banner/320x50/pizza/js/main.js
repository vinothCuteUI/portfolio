function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});

    startTime=+0.1; 
    tl.to("#image-1",{y:"=+50",yoyo:true, repeat:0 ,duration:6 ,ease:"power1.out"}, startTime);

    startTime=+0.9;
    tl.to("#text1",{y:0,yoyo:true, repeat:0 ,duration:1 ,ease:"power1.out"}, startTime);

    startTime=+1.9;
    tl.to("#text2",{y:0,yoyo:true, repeat:0 ,duration:1 ,ease:"power1.out"}, startTime);
   
    
    startTime=+0.3;
    tl.to("#image-6",{y:0,yoyo:true, repeat:0 ,duration:1.3 ,ease:"power1.out"}, startTime);

    startTime=+1;
    tl.to("#image-7",{y:0,yoyo:true, repeat:0 ,duration:1.3 ,ease:"power1.out"}, startTime);

    startTime=+1.6;
    tl.to("#image-8",{y:0,yoyo:true, repeat:0 ,duration:1.3 ,ease:"power1.out"}, startTime);

    startTime=+2;
    tl.to("#image-9",{y:0,yoyo:true, repeat:0 ,duration:1.3 ,ease:"power1.out"}, startTime);

    startTime=+0.5;
    tl.to("#image-10",{y:0,yoyo:true, repeat:0 ,duration:1.3 ,ease:"power1.out"}, startTime);
   
  
}

window.addEventListener("load", animation)