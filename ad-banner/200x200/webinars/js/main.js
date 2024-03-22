function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:1});

    startTime=0;
    

    tl.to("#image1",{scale:1, duration:1, ease:"power1.out" }, startTime);

    startTime +=1;
    tl.to("#text-1",{y:0},duration=0.5, startTime);
    
    startTime +=2;
    tl.to("#text-2",{x:0},duration=2, startTime);

    startTime +=1;
    tl.to("#image4",{y:0},duration=1.5, startTime);

    startTime +=2;
    tl.to("#image2",{y:0},duration=2.5, startTime);

    startTime +=2;
    tl.to("#image3",{y:0},duration=2.5, startTime);

    startTime +=3;
    tl.to("#text-3",{x:0}, duration=2.3, startTime);

   
}


window.addEventListener("load", animation)