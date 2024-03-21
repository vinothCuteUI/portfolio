function animation(){
    var tl=gsap.timeline({delay:0, repeat: -1, repeatDelay:2});

    startTime=0;
  
    tl.to("#text-3",{scale:0.5,yoyo:true, repeat:11 ,duration:0.3 ,ease:"power1.out"},startTime)
    tl.to("#text-3",{scale:1.07,yoyo:true, repeat:11 ,duration:0.5 ,ease:"power1.out"},startTime)

    tl.to("#text-1",{y:"+=30",yoyo:true, repeat:11 ,duration:0.5 ,ease:"power1.out"}, startTime);
    tl.to("#text-1",{y:"-=20",yoyo:true, repeat:11    ,duration:0.5 ,ease:"power1.out"},startTime)

}

window.addEventListener("load", animation)