function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:1 });

    var startTime=0;
    tl.to("#logo,#text_1",{y:0,duration:1 ,ease:"power1.out"},startTime);
    tl.to("#text_5",{x:0,duration:0.8 ,ease:"power1.out"},startTime);
    tl.to("#text_6",{x:0,duration:0.8 ,ease:"power1.out"},startTime);
    tl.to("#text_7",{y:0,duration:0.8 ,ease:"power1.out"},startTime);

    startTime+=1;
    tl.to("#text_2",{x:0,duration:0.6 ,ease:"power1.out"},startTime);
    tl.to("#text_3",{x:0,duration:1 ,ease:"power1.out"},startTime);
    tl.to("#text_4",{x:0,duration:1.4 ,ease:"power1.out"},startTime);
  

    startTime+=1;
    tl.to("#man",{x:"-=20",yoyo:true, repeat:0   ,duration:5 ,ease:"power1.out"},startTime)
    tl.to("#man",{x:"+=20",yoyo:true, repeat:0 ,duration:5 ,ease:"power1.out"},startTime)

}

window.addEventListener("load",animations)