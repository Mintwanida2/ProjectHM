const carousel = document.querySelector(".slide-wrapper");
const arrowBtns = document.querySelectorAll(".wrapper-trend svg");
const cardWidth = carousel.querySelector(".card-wrap").offsetWidth; // หาความกว้างของแต่ละ card
const scrollAmount = cardWidth * 5; // คำนวณความกว้างที่ต้องการเลื่อน

// 
const carouselChlidrens = [...carousel.children];

let cardPerView = Math.round(carousel.offsetWidth / cardWidth)

// infinite loop
carouselChlidrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin",card.outerHTML)
});
carouselChlidrens.slice(0,cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend",card.outerHTML)
});

// กดปุ่มnext prev
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ?  -scrollAmount:scrollAmount;
    });
});





