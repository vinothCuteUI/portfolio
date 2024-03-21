function animations(){
    var tl = gsap.timeline({delay:0, repeat: -1, repeatDelay: 1 });

    var startTime=0;
    tl.to("#logo",{y:0},startTime)

    startTime+=1;
    tl.to("#bag_img" ,{x:0,duration:1 ,ease:"power1.out"},startTime)

  startTime+=0.1;
  tl.to("#text_1",{x:0},startTime);

  startTime+=0.2
  tl.to("#text_2",{x:0},startTime);

  startTime+=0.3
  tl.to("#text_3",{x:0},startTime);

  startTime+=0.4
  tl.to("#text_4",{x:0},startTime);

  startTime+=0.2
  tl.to("#cub_img",{y:0,duration:3 ,ease:"power1.out"},startTime);

  startTime+=0.2
  tl.to("#btn",{y:0},startTime);

  



    console.log(tl.totalDuration());
}

window.addEventListener("load",animations)