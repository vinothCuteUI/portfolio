function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:2 });

    var startTime=0;
    tl.to("#text-3",{y:"-=20",yoyo:true, repeat:9    ,duration:0.5 ,ease:"power1.out"},startTime)
    tl.to("#text-3",{y:"+=10",yoyo:true, repeat:9 ,duration:0.5 ,ease:"power1.out"},startTime)


     startTime+=1;
    tl.to("#text-1",{x:0 ,duration:0.9 ,ease:"power1.out"},startTime)

    startTime+=1
    tl.to("#text-2",{x:0,duration:0.9 ,ease:"power1.out"},startTime)

   

    startTime+=1;
    tl.to("#text-4",{x:0,duration:0.9 ,ease:"power1.out"},startTime)
    tl.to("#text-6",{x:0,duration:0.9 ,ease:"power1.out"},startTime)

    startTime+=1;
    tl.to("#text-5",{y:0,duration:0.9 ,ease:"power1.out"},startTime)


}

window.addEventListener("load",animations)