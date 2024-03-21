function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:4 });

    var startTime=0;
    tl.to("#logo,#text_1",{y:0,duration:0.5 ,ease:"power1.out"},startTime);

    startTime+=1;
    tl.to("#text_2",{x:0,duration:0.8 ,ease:"power1.out"},startTime);
    startTime+=0.5;
    tl.to("#text_3",{x:0,duration:0.8 ,ease:"power1.out"},startTime);
    startTime+=0.5;
    tl.to("#text_4",{x:0,duration:0.8 ,ease:"power1.out"},startTime);
    startTime+=0.5;
    tl.to("#btn",{x:0,duration:0.8 ,ease:"power1.out"},startTime);


  

    console.log(tl.totalDuration());
}

window.addEventListener("load",animations)







