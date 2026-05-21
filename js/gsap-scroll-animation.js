document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    gsap.from(".my-path", {
    drawSVG: "0% 5%",           // start fully hidden
    scrollTrigger: {
        // trigger: ".svg-container",
        start: "0",
        end: "50%",
        scrub: 1,              // ties animation directly to scroll position
        // markers:true,
        // once: true
    }
    });

    //     gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    
    // // ScrollSmoother.create({
	// // smooth: 1,
	// // effects: true
    // // });

    // // Create the animation
    // gsap.fromTo("#scroll-path", 
    // { 
    //     strokeDasharray: 10000, // A large enough number to cover the path
    //     strokeDashoffset: 10000 
    // }, 
    // {
    //     strokeDashoffset: 0,
    //     scrollTrigger: {
    //     trigger: ".scroll-svg", // The element that starts the animation
    //     start: "top center",    // Animation starts when the top of the SVG hits the center of the screen
    //     end: "bottom center",   // Animation ends when the bottom of the SVG hits the center
    //     scrub: 1,               // Links the animation to the scrollbar (1 = 1 second smooth delay)
    //     markers: true           // Useful for debugging; remove when finished
    //     }
    // }
    // );
});