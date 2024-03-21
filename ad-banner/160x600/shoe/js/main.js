function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay: 3 });

    var startTime=0;
    tl.to("#text-4",{scale:1,yoyo:true, repeat:7 ,duration:0.5 ,ease:"power1.out"},startTime)
    tl.to("#text-4",{scale:1.05,yoyo:true, repeat:7 ,duration:0.5 ,ease:"power1.out"},startTime)
    tl.to("#text-5",{y:"+=10",yoyo:true, repeat:8 ,duration:0.5 ,ease:"power1.out"},startTime)
    tl.to("#text-5",{y:"-=10",yoyo:true, repeat:8    ,duration:0.5 ,ease:"power1.out"},startTime)

    tl.to("#text-1",{y:0 ,duration:1 ,ease:"power1.out"},startTime)

    startTime+=1
    tl.to("#text-2",{x:0,duration:1 ,ease:"power1.out"},startTime)

    startTime+=1
    tl.to("#text-3",{x:0 ,duration:1 ,ease:"power1.out"},startTime)

    startTime+=1
    tl.to("#text-6",{alpha:1 ,duration:1 ,ease:"power1.out"},startTime)

    startTime+=1
    


    console.log(tl.totalDuration());
}

window.addEventListener("load",animations)