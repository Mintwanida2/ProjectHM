
document.addEventListener('DOMContentLoaded', function () {
    var body = document.querySelector('body');

    body.addEventListener('click', function (event) {
        // ตรวจสอบว่า element ที่ถูกคลิกไม่ใช่เมนูตัวเอง
        if (!event.target.closest('.more-links-dropdown')) {
            // ปิดเมนู
            var moreLinksOptions = document.querySelector('.more-links-options');
            moreLinksOptions.style.display = 'none';
        }
        // ตรวจสอบว่า element ที่ถูกคลิกไม่ใช่เมนูตัวเองหรือเมนูลูก
        if (!event.target.closest('#navmenu') && !event.target.closest('.bar-nav')) {
            // ปิดเมนู
            var navmenu = document.getElementById("navmenu");
            navmenu.classList.remove("nav-list-active");
        }

    });


});



// กดmorelink
function morelink() {
    var moreLinksOptions = document.querySelector('.more-links-options');
    if (moreLinksOptions.style.display === 'none') {
        moreLinksOptions.style.display = 'block';
    } else {
        moreLinksOptions.style.display = 'none';
    }
}

// กดแฮมแล้วnavขึ้น
function toggleham(element) {
    var navmenu = document.getElementById("navmenu");
    navmenu.classList.toggle("nav-list-active");
}

// กดnavแล้วmegamenuขึ้น
function goto() {
    ["megamenulink1", "megamenulink2", "megamenulink3", "megamenulink4", "megamenulink5"].forEach(function(menuClass) {
        var submenu = document.querySelector("." + menuClass);
        submenu.classList.toggle(menuClass + "-active");
    });
}




// footer dropdown
function dropdown(element) {
    element.querySelector('.arrow-icon').classList.toggle('rotated');
    // เลือกรายการ ul ที่อยู่หลัง h3 ที่ถูกคลิก
    var ul = element.nextElementSibling;
    // เปลี่ยนคลาสของ ul เพื่อเปิดหรือปิด dropdown
    ul.classList.toggle("show");
}











