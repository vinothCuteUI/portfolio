function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});
  
    startTime=0; 
    tl.to("#image-1",{y:"=+50",yoyo:true, repeat:0 ,duration:3 ,ease:"power1.out"}, startTime);

    startTime=+0.5; 
    tl.to("#image-3",{y:"0",yoyo:true, repeat:0 ,duration:1 ,ease:"power1.out"}, startTime);

    startTime=+1; 
    tl.to("#image-2",{y:"0",yoyo:true, repeat:0 ,duration:1.5 ,ease:"power1.out"}, startTime);


    startTime=+0.2;
    tl.to("#text-1",{scale:1, duration:0.4, ease:"power1.out" }, startTime);

    startTime=+0.6;
    tl.to("#text-2",{scale:1, duration:0.4, ease:"power1.out" }, startTime);

    startTime=+0.9;
    tl.to("#text-3",{scale:1, duration:0.4, ease:"power1.out" }, startTime);

    startTime=+1.3;
    tl.to("#text-4",{scale:1, duration:0.4, ease:"power1.out" }, startTime);

    startTime=+1.6;
    tl.to("#text-5",{scale:1, duration:0.4, ease:"power1.out" }, startTime);

    startTime=+1.9;
    tl.to("#text-6",{scale:1, duration:0.4, ease:"power1.out" }, startTime);
   
    
    startTime=+0.6;
    tl.to("#image-str",{scale:1, duration:3, ease:"power1.out" }, startTime);
    
    startTime=+0.6;
    tl.to("#image-str1",{scale:1, duration:3, ease:"power1.out" }, startTime);
 
    startTime=+0.6;
    tl.to("#image-str2",{scale:1, duration:3, ease:"power1.out" }, startTime);

    startTime=+0.6;
    tl.to("#image-str3",{scale:1, duration:3, ease:"power1.out" }, startTime);
    
    startTime=+2; 
    tl.to("#btn",{y:"0",yoyo:true, repeat:0 ,duration:1 ,ease:"power1.out"}, startTime);
  
}

window.addEventListener("load", animation)