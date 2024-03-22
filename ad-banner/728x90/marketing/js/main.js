function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:1 });

    var startTime=0;
    tl.to("#text_2",{y:0,duration:0.9 ,ease:"power1.out"},startTime)
    startTime+=1;
   tl.to("#text_3",{y:0,duration:0.9 ,ease:"power1.out"},startTime)
   startTime+=1;
   tl.to("#text_4",{y:0,duration:0.9 ,ease:"power1.out"},startTime)


    startTime+=1;
    tl.to("#btn",{y:0,duration:0.9 ,ease:"power1.out"},startTime);

    tl.to("#btn",{scale:1,yoyo:true, repeat:2 ,duration:2 ,ease:"power1.out"},startTime)
    tl.to("#btn",{scale:1.2,yoyo:true, repeat:2 ,duration:2 ,ease:"power1.out"},startTime)

    
}

window.addEventListener("load",animations)