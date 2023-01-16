document.addEventListener('DOMContentLoaded', () => {
    let slider = tns({
        container: ".slider-container",
        items: 1,
        gutter: 10,
        slideBy: "page",
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
        nav: false,
        controls: false,
        responsive: {
            640: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });



    
});

