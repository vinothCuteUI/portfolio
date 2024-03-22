	


//Get elements ID
var clickTag    = myFT.$("#clickTag");
var product      = myFT.$("#product");
var logo         = myFT.$("#logo");
var copy1        = myFT.$("#copy1");
var copy2        = myFT.$("#copy2");
var copy3        = myFT.$("#copy3");
var copy4        = myFT.$("#copy4");
var copy4a        = myFT.$("#copy4a");
var copy5        = myFT.$("#copy5");
var copy6        = myFT.$("#copy6");
var copy7        = myFT.$("#copy7");
var legal        = myFT.$("#legal");
var cta          = myFT.$("#cta");


myFT.on('instantads', function() {
  // Populate dynamic image elements
  product[0].src = myFT.instantAds.product;
  logo[0].src = myFT.instantAds.logo;
  
 
  // Populate dynamic text elements
  copy1[0].innerHTML = myFT.instantAds.copy1;
  copy2[0].innerHTML = myFT.instantAds.copy2;
  copy3[0].innerHTML = myFT.instantAds.copy3;
  copy4[0].innerHTML = myFT.instantAds.copy4;
  copy4a[0].innerHTML = myFT.instantAds.copy4;
  copy5[0].innerHTML = myFT.instantAds.copy5;
  copy6[0].innerHTML = myFT.instantAds.copy6;
  copy7[0].innerHTML = myFT.instantAds.copy7;
  legal[0].innerHTML = myFT.instantAds.legal;
  cta[0].innerHTML = myFT.instantAds.cta;

  // copy CSS overrides:
  if(myFT.instantAds.css_copy.length > 0)
    {
        var css_copy = myFT.instantAds.css_copy;
        var head = document.head;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css_copy));
        head.appendChild(style);
    }
  // Add dynamic clickTag
  clickTag.on('click', function() {
    myFT.clickTag(1, myFT.instantAds.clickTag1_url);
  });

  startAnim();
});

function startAnim(){
	var startTime = 0;
	var TL = new TimelineMax();
	startTime += 2.3;	
	TL.to("#ad_container", 0.5, { autoAlpha: 1, ease:Linear.easeIn },startTime);
	TL.to(["#btn"], 0, { display: "block" }, startTime);	
	// Frame 1
	startTime += 0.5;
	TL.to(["#copy1","#copy2", "#copy3", "#copy4"], 0.5, { autoAlpha: 1, ease:Linear.easeIn},startTime); 

	// Frame 2
	startTime += 2.3;
	TL.to(["#copy3"], 0.5, { autoAlpha: 0, ease:Linear.easeIn}, startTime);
	startTime += 1.3;
	TL.to(["#copy5"], 0.5, { autoAlpha: 1, ease:Linear.easeIn}, startTime);
	startTime += 2.3;
	TL.to(["#copy1","#copy2", "#copy3", "#copy4","#copy5"], 0.5, { autoAlpha: 0, ease:Linear.easeIn}, startTime);
	startTime += 1.2;
	TL.to(["#product","#copy4a", "#copy6", "#copy7"], 0.5, { autoAlpha: 1, ease:Linear.easeIn}, startTime);
	events();
	
	console.log(TL.duration());	 
}

btn.addEventListener("click", function () {
    TweenMax.to("#legalcover", .6, { autoAlpha: 1 });
    TweenMax.to("#legalInner", .3, { y: "-62", force3D: false, rotation: 0.01, ease: Power1.easeOut });
    TweenMax.to("#btn", .2, { display: "none" })
    TweenMax.to("#btn2", .2, { display: "block" })

//	TL.kill();
});

btn2.addEventListener("click", function () {
    TweenMax.to("#btn", .2, { display: "block" })
    TweenMax.to("#btn2", .2, { display: "none" })
    TweenMax.to("#legalcover", .3, { autoAlpha: 0 });
    TweenMax.to("#legalInner", .3, { y: 0, force3D: false, rotation: 0.01, ease: Power1.easeOut });

//	TL.resume();


});

function events(){

  document.getElementById("border").addEventListener("mouseenter", MouseEnter);
  document.getElementById("border").addEventListener("mouseleave", MouseLeave);
 
}

function MouseEnter(){
	//document.getElementById("cta").src = "url('images/cta-hover.png')";
	document.getElementById("cta").src = "images/cta-hover.png";

}

function MouseLeave(){
	//document.getElementById("cta").src = "url('images/cta.png')";
	document.getElementById("cta").src = "images/cta.png";

}




