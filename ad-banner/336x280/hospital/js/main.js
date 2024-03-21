function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:1 });

    var startTime=0;
    tl.to("#text-2",{y:0,duration:0.5 ,ease:"power1.out"})

    startTime+=1;
    tl.to("#text-3",{x:0,duration:0.5 ,ease:"power1.out"})
    tl.to("#text-4",{x:0,duration:0.5 ,ease:"power1.out"})
    tl.to("#text-5",{x:0,duration:0.5 ,ease:"power1.out"})

    startTime+=1;
    tl.to("#text-6",{y:0,duration:0.9 ,ease:"power1.out"})

    startTime+=0.3;
    tl.to("#text-1",{scale:1,yoyo:true, repeat:7 ,duration:0.5 ,ease:"power1.out"},startTime)
    tl.to("#text-1",{scale:1.05,yoyo:true, repeat:7 ,duration:0.5 ,ease:"power1.out"},startTime)

    startTime+=1;
    tl.to("#text-3",{x:"-=10",yoyo:true, repeat:1    ,duration:0.5 ,ease:"power1.out"},startTime)
    tl.to("#text-3",{x:"+=10",yoyo:true, repeat:1 ,duration:0.5 ,ease:"power1.out"},startTime)

    startTime+=1;
    tl.to("#text-4",{x:"-=10",yoyo:true, repeat:1    ,duration:0.5 ,ease:"power1.out"},startTime)
    tl.to("#text-4",{x:"+=10",yoyo:true, repeat:1 ,duration:0.5 ,ease:"power1.out"},startTime)

    startTime+=1;
    tl.to("#text-5",{x:"-=10",yoyo:true, repeat:1    ,duration:0.5 ,ease:"power1.out"},startTime)
    tl.to("#text-5",{x:"+=10",yoyo:true, repeat:1 ,duration:0.5 ,ease:"power1.out"},startTime)


    console.log(tl.totalDuration());
}

window.addEventListener("load",animations)