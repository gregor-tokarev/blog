/* let sliders = document.querySelectorAll('.slider__item');
let buttons = document.querySelectorAll('.navigation__image');
let sliderItem1 = sliders[0];
let sliderItem2 = sliders[1];
let sliderItem3 = sliders[2];
let arrow1 = buttons[1];
let arrow2 = buttons[0];
let array = ["-100%", "0%", "100%"]
sliderItem1.style.top = array[0];
sliderItem2.style.top = array[1];
sliderItem3.style.top = array[2];
arrow1.addEventListener("click", function () {
    array[0] = array[1];
    array[1] = array[2];
    array[2] = array[0];
    console.log(array   );
     */
/*     array[0], array[1], array[2]] = array[1], array[2], array[0] */
/* }); */
/* arrow2.onclick = function () {
    sliderItem3.style.top = "-100%";
    sliderItem2.style.top = "100%";
    sliderItem1.style.top = "0%";
} */
let iterator = 1,
    menuBtn = document.querySelector("div.title__item");
menuBtn.addEventListener("click", function () {
    if (iterator % 2 !== 0) {
        document.querySelector(".menu-list").style.maxHeight = "200px";
    }else{
        document.querySelector(".menu-list").style.maxHeight = "0px";
    }
    iterator++
});
