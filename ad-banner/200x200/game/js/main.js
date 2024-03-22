function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay:1 });

    var startTime=0;
    tl.to("#text_2", {scale: 1,duration:0.5 ,ease:"power1.out"},startTime);
    tl.to("#text_3", {scale: 1,duration:0.5 ,ease:"power1.out"},startTime);

    startTime+=1;
    tl.to("#card_sec", {height:90,duration:0.6 ,ease:"power1.out"},startTime);
    
    startTime+=0.6;
    tl.to("#text_4", {scale:1},startTime);
    tl.to("#text_5", {scale:1},startTime);
    tl.to("#text_6", {scale:1},startTime);
    tl.to("#text_7", {scale:1},startTime);
    tl.to("#text_8", {scale:1},startTime);

    startTime+=0.5;
    tl.to("#img_1",{x:0,duration:0.6 ,ease:"power1.out"},startTime);

    startTime+=1;
    tl.to("#btn",{y:0,duration:0.6 ,ease:"power1.out"},startTime);

    startTime+=1;
    tl.to("#card_sec", {scale:0,duration:1 ,ease:"power1.out"},startTime);
    startTime+=0.4;
    tl.to("#img_1",{x:-100,duration:1,ease:"power1.out"},startTime);

   

    startTime+=1;
      tl.to("#card_sec_1", {height:90,duration:0.6 ,ease:"power1.out"},startTime);

      startTime+=0.6;
      tl.to("#text_9", {scale:1},startTime);
      tl.to("#text_10", {scale:1},startTime);
      tl.to("#text_11", {scale:1},startTime);
      tl.to("#text_12", {scale:1},startTime);
      tl.to("#text_13", {scale:1},startTime);

   startTime+=1;
   tl.to("#img_2",{x:0,duration:0.6 ,ease:"power1.out"},startTime);


   startTime+=1;
    tl.to("#card_sec_1", {scale: 0,duration:0.6 ,ease:"power1.out"},startTime);
   startTime+=0.5;
   tl.to("#img_2",{x:150,duration:0.6 ,ease:"power1.out"},startTime);

  
}

window.addEventListener("load",animations)