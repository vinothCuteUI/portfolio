//Reload banner function
function reloadAd(elm){
    let loadElm = document.getElementById(elm);
    let setIframe = loadElm.src;
    loadElm.src = setIframe;
    // loadElm.contentWindow.location.reload();
}


var mobMenuBtn = document.getElementById('mob-menu-btn');
var sideMenus = document.getElementById('side-menus');

mobMenuBtn.onclick = function(){
    if (mobMenuBtn.classList.contains("fa-bars")) {
        mobMenuBtn.classList.remove("fa-bars");
        mobMenuBtn.classList.add("fa-times");
    } else {
        mobMenuBtn.classList.remove("fa-times");
        mobMenuBtn.classList.add("fa-bars");
    }
    sideMenus.classList.toggle("active-menus")
}

document.body.addEventListener('click', function(event) {
    var isClickInsideMenu = sideMenus.contains(event.target);
    var isClickOnMenuButton = mobMenuBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuButton) {
        sideMenus.classList.remove("active-menus");
    }
});


// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     navText: [
//       "<i class='fa fa-caret-left'></i>",
//       "<i class='fa fa-caret-right'></i>"
//     ],
//     autoplay: true,
//     autoplayHoverPause: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 1
//       },
//       1000: {
//         items: 1
//       },
//       1400: {
//         items: 1
//       }
//     }
//   })