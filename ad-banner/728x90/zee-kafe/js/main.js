function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:1 });

    var startTime=0;

    // tl.to("#image_1",{x:"-=20",yoyo:true, repeat:0   ,duration:5 ,ease:"power1.out"},startTime)
    tl.to("#image_1",{x:-100, y:0,z:0, transformOrigin:"0% 100%",yoyo:true, repeat:0 ,duration:5 ,ease:"power1.out"},startTime)
    tl.to("#logo,#text_1,#text_2",{y:0,duration:1 ,ease:"power1.out"},startTime);
    tl.fromTo("#cub",{rotation: 0},{rotation: 360, transformOrigin: "center",repeat: 0,duration:8},startTime);

    startTime+=1;
    tl.to("#text_4",{y:0,duration:1 ,ease:"power1.out"},startTime);
    startTime+=0.5;
    tl.to("#text_3",{y:0,duration:0.5 ,ease:"power1.out"},startTime);


    startTime+=0.5;
    tl.to("#text_5,#btn",{y:0,duration:0.5 ,ease:"power1.out"},startTime);

}

window.addEventListener("load",animations)







