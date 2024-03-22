	

function startAnim(){
	var startTime = 0;
	var TL = new TimelineMax();
	startTime += 0.25;	
	TL.to("#container", 0.5, { autoAlpha: 1, ease:Linear.easeIn },startTime);
	
	// Frame 1
	startTime += 1;
	TL.to(["#svg-container"], 1, { x: 0, ease: Power2.easeInOut}, startTime);
	TL.to([".st0"], 3, {strokeDashoffset:0, ease:Linear.easeNone}, startTime+.5);
	TL.to(["#frame1_copy1"], 1, { y: 0, autoAlpha:1, ease: Power2.easeInOut}, startTime+.5);
	
	startTime += 2.5;
	TL.to(["#svg-container"], 1, { x: -300, ease: Power2.easeInOut}, startTime);
	TL.to([".st1"], 10, {strokeDashoffset:0, ease:Linear.easeNone}, startTime);
	TL.to(["#frame1_copy1, #frame1_img1, #disclaimer1, #frame1_logo"], 1, { x:-300, y: 0, autoAlpha:1, ease: Power2.easeInOut}, startTime);
	TL.to(["#frame2_copy2, #products, #disclaimer2, #frame2_logo, #ctaHolder"], 1, { x: 0, ease:Power2.easeInOut}, startTime);
	
	startTime += 2.5;
	// TL.to(["#svg-container"], 1, { x: -600, ease: Power2.easeInOut}, startTime);
	// TL.to([".st1"], 5, {strokeDashoffset:0, ease:Linear.easeNone}, startTime);
	TL.to(["#frame2_copy2"], 1, { x:-300, y: 0, autoAlpha:1, ease: Power2.easeInOut}, startTime);
	TL.to(["#frame3_copy3"], 1, { x: 0, ease:Power2.easeInOut}, startTime);
	startTime += 1;
	TL.to(["#shine"], 1, { left:"100%", ease: Power1.easeOut},startTime); 
	

	console.log(TL.duration());


	 
}


window.onload = startAnim();