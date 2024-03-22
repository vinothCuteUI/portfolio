function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:4 });

    var startTime=0;
    tl.to("#logo,#text_1",{x:0,duration:0.9 ,ease:"power1.out"},startTime);


    startTime+=1;
    tl.to("#img_1,#img_2,#img_3",{y:0,duration:5,repeat: 0 ,ease:"power1.out"},startTime);




    startTime+=0.5;
    tl.to("#text_2",{y:0,duration:0.8 ,ease:"power1.out"},startTime);
    startTime+=0.3;
    tl.to("#text_3",{y:0,duration:0.8 ,ease:"power1.out"},startTime);
    startTime+=0.5;
    tl.to("#text_4",{y:0,duration:0.8 ,ease:"power1.out"},startTime);
    startTime+=0.5;
    tl.to("#btn",{x:0,duration:0.8 ,ease:"power1.out"},startTime);

    startTime+=0.5;
    tl.to("#img_4", {scale: 1 }, startTime);
    tl.to("#img_5", {scale: 1 }, startTime);

    startTime+=0.3;
    tl.to("#img_6",{y:0,duration:0.3 ,ease:"power1.out"},startTime);
    tl.to("#img_7",{y:0,duration:0.5 ,ease:"power1.out"},startTime);
    tl.to("#img_8",{y:0,duration:0.7 ,ease:"power1.out"},startTime);
  

}

window.addEventListener("load",animations)







