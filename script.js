const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
        .to(".boundingelem", {
            y: "0",
            duration: 2,
            delay: -1,
            stagger:0.2,
            ease: Expo.easeInOut,
        })
        .from("#hero-footer",{
            y: '-10',
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease :Expo.easeInOut
        })
}
  

function circleMouseFolloer(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`   
    })
    
}
document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mouseleave",function (dets) {
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });
});
document.querySelectorAll(".elem").forEach(function (elem) {
    var diffrot = 0;
    var rotate = 0;
    elem.addEventListener("mousemove",function (dets) {
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot *0.5)
        });
    });
});

circleMouseFolloer();
firstPageAnim();

