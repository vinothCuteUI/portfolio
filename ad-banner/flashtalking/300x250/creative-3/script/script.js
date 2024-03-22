	

function startAnim(){
	var startTime = 0;
	var TL = new TimelineMax();
	startTime += 0.25;	
	TL.to("#container", 0.25, { autoAlpha: 1, ease:Linear.easeIn },startTime);
		

	startTime += .5;
	TL.to(["#copy1"], .6, { autoAlpha: 1, rotation:0.01, ease:Power1.easeOut}, startTime);
	startTime += 3;
	TL.to(["#copy1"], .6, { autoAlpha: 0, rotation:0.01, ease:Power1.easeOut}, startTime);
	startTime += .6;
	TL.to(["#copy2, #legal"], .6, { autoAlpha: 1, rotation:0.01, ease:Power1.easeOut}, startTime);

	//Frame 3
	startTime += 3;
	TL.to(["#frame3"], 1, { y: 0, ease: Power2.easeInOut}, startTime);
	startTime += 0.5;
	TL.to(["#shine"], 1.2, { x: 180, ease: Power1.easeOut},startTime+1);

	console.log(TL.duration());


}

window.onload = startAnim();



