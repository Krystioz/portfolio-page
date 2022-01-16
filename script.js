const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImgs = document.querySelectorAll(".gallery-img");
let currentlySelected = 0;

prevBtn.addEventListener("click", function () {
    //wrócę tu
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add("active");
    nextBtn.disabled = false;

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener("click", function () {
    //removes class from selected img
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active");
    prevBtn.disabled = false;

    if (galleryImgs.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }

    //  +1 because we start at 0 index while having 12 images
    //  so the last currently selected would be number 11 when
    //  the last image would be 12
});

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector(".ball");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
    spring({
        from: ballXY.get(),
        velocity: ballXY.getVelocity(),
        to: { x: 0, y: 0 },
        stiffness: 200,
        // mass: 1,
        // damping: 10
    }).start(ballXY);
});

new Swiper(".swiper-container", {
    speed: 200,
    effect: "cube",
    spaceBetween: 300,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



