document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.image');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    // const indicatorContainer = document.querySelector('.indicator-container');
    let currentIndex = 0;
    const indicators = document.querySelectorAll('.indicator');

    arrowLeft.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    arrowRight.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    function updateSlider() {
        images.forEach((image, index) => {
            if (index === currentIndex) {
                image.style.display = 'block';
                indicators[index].classList.add('active');
            } else {
                image.style.display = 'none';
                indicators[index].classList.remove('active');
            }
        });
    }
    // เรียกใช้ฟังก์ชันเพื่อกำหนดรูปแรกที่แสดง
    updateSlider();
});