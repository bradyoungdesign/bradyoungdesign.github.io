// Banner button scroll
var scrollBtn = document.querySelector('#scroll-btn');
// var scrollBtnBottom = document.querySelector('#scroll-btn-bottom');

function scrollDown(){
    document.querySelector('#projects').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

scrollBtn.addEventListener('click', function(){
    window.location.href = "https://bradyoungdesign.github.io/";
    scrollDown();
});


// const card = document.querySelector(".card");

// function handleHover(e) {
    
// }
// function resetStyles(e) {
    
// }

// card.addEventListener("mousemove", handleHover);
// card.addEventListener("mouseleave", resetStyles);