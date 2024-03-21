function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:4 });

    var startTime=0;
    tl.to("#logo,#text_1",{x:0,duration:0.8 ,ease:"power1.out"},startTime);
    tl.to("#text_2",{y:0,duration:0.8 ,ease:"power1.out"},startTime);

    startTime+=3;
    tl.to("#text_2",{y:-100,duration:0.8 ,ease:"power1.out"},startTime);

    startTime+=0.5;
    tl.to("#text_3,#text_4",{y:0,duration:0.8 ,ease:"power1.out"},startTime);

    console.log(tl.totalDuration());
}

window.addEventListener("load",animations)







