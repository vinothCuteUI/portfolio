function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:1 });

    var startTime=0;
    tl.to("#img_1",{x:0,duration:1 ,ease:"power1.out"},startTime);
    tl.to("#text_1,#text_5",{x:0,duration:0.6 ,ease:"power1.out"},startTime);
    tl.to("#text_2,#text_6",{x:0,duration:0.6 ,ease:"power1.out"},startTime);
    tl.to("#text_3", {scale: 1,duration:0.5 ,ease:"power1.out"},startTime);
    tl.to("#text_4", {scale: 1,duration:0.5 ,ease:"power1.out"},startTime);
     startTime+=2.5;
    tl.to("#img_1",{x:200,duration:1 ,ease:"power1.out"},startTime);


     startTime+=0.5;
    tl.to("#img_2",{x:0,duration:1 ,ease:"power1.out"},startTime);
     startTime+=2.5;
    tl.to("#img_2",{x:200,duration:1 ,ease:"power1.out"},startTime);


    
    startTime+=0.5;
    tl.to("#img_3",{x:0,duration:1 ,ease:"power1.out"},startTime);
     startTime+=2.5;
    tl.to("#img_3",{x:200,duration:1 ,ease:"power1.out"},startTime);

    tl.to("#text_3",{x:0,duration:1 ,ease:"power1.out"},startTime);
    tl.to("#text_4",{x:0,duration:1.4 ,ease:"power1.out"},startTime);
  
}

window.addEventListener("load",animations)