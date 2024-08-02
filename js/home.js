// Banner button scroll
var scrollBtn = document.querySelector('#scroll-btn');
// var scrollBtnBottom = document.querySelector('#scroll-btn-bottom');

function scrollDown(){
    document.querySelector('#projects').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

scrollBtn.addEventListener('click', function(){
    scrollDown();
});

// const card = document.querySelector(".card");

// function handleHover(e) {
    
// }
// function resetStyles(e) {
    
// }

// card.addEventListener("mousemove", handleHover);
// card.addEventListener("mouseleave", resetStyles);

const subtitleFade1 = document.querySelector('#fadetext1');
const subtitleFade2 = document.querySelector('#fadetext2');
const subtitleFade3 = document.querySelector('#fadetext3');
const subtitleFade4 = document.querySelector('#fadetext4');
const subtitleFade5 = document.querySelector('#fadetext5');

// console.log(subtitleFade1)

var t1 = anime.timeline({
    easing: 'easeInOutCubic',
    duration: 1100,
    loop: true,
    autoplay: true,
    opacity: 1,
})

t1
.add({
    targets: '#fadetext1',
    opacity: 1
}, '+=1100')
.add({
    targets: '#fadetext1',
    opacity: 0
}, '+=1100')
.add({
    targets: '#fadetext2',
    opacity: 1
}, '+=1100')
.add({
    targets: '#fadetext2',
    opacity: 0
}, '+=1100')
.add({
    targets: '#fadetext3',
    opacity: 1
}, '+=1100')
.add({
    targets: '#fadetext3',
    opacity: 0
}, '+=1100')
.add({
    targets: '#fadetext4',
    opacity: 1
}, '+=1100')
.add({
    targets: '#fadetext4',
    opacity: 0
}, '+=1100')
.add({
    targets: '#fadetext5',
    opacity: 1
}, '+=1100')
.add({
    targets: '#fadetext5',
    opacity: 0
}, '+=1100')
.add({
    targets: '#fadetext6',
    opacity: 1
}, '+=1100')
.add({
    targets: '#fadetext6',
    opacity: 0
}, '+=1100')

t1.play();

// var path = anime.path('.strokepath path');

// anime({
//   targets: '.strokepath .el',
//   translateX: path('x'),
//   translateY: path('y'),
//   rotate: path('angle'),
//   easing: 'linear',
//   duration: 2000,
//   loop: true
// });