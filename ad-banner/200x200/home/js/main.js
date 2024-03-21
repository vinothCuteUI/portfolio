function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:1 });

    var startTime=0;
    tl.to("#logo",{y:0,duration:0.7 ,ease:"power1.out"},startTime)

    startTime+=1;
    tl.to("#text-1",{x:0,duration:0.7 ,ease:"power1.out"},startTime);

    startTime+=1;
    tl.to("#text-2",{x:0,duration:0.7 ,ease:"power1.out"},startTime);
  

    startTime+=1;
    tl.to("#text-3",{x:0,duration:0.7 ,ease:"power1.out"},startTime);

    startTime+=0.3;
    tl.to("#text-4",{y:0,duration:0.5 ,ease:"power1.out"},startTime);
    
    startTime+=1;
    tl.to("#image_1",{x:120, duration:5 ,ease:"power1.out"},startTime);

    console.log(tl.totalDuration());
}

window.addEventListener("load",animations)