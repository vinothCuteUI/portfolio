function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:1 });

    var startTime=0;
    tl.to("#clout,#air",{x:0,duration:10 ,ease:"power1.out"},startTime)
    

   

    startTime+=1;
    tl.to("#text_3",{x:0,duration:0.8 ,ease:"power1.out"},startTime);
    tl.to("#text_4",{x:0,duration:1.2 ,ease:"power1.out"},startTime);
    tl.to("#text_5",{x:0,duration:1.4 ,ease:"power1.out"},startTime);
    tl.to("#text_6",{x:0,duration:1.6 ,ease:"power1.out"},startTime);


    startTime+=1;
    tl.to("#btn",{y:0,duration:0.8 ,ease:"power1.out"},startTime);


    console.log(tl.totalDuration());
}

window.addEventListener("load",animations)