function animateCounter(id, endValue) {
    let counter = 0;
    const interval = setInterval(() => {
        if (counter < endValue) {
            counter++;
            document.getElementById(id).innerText = counter;
        } else {
            clearInterval(interval);
        }
    }, 20); 
}

animateCounter("price-counter", 400); 


// ملف JavaScript: script.js

// تعريف الوضع الافتراضي
let isDarkMode = false;

// دالة للتحقق من حالة الزر عند الضغط عليه
function handleButtonClick() {
    if (window.scrollY > 100) {
        // إذا كان المستخدم قد نزل لأكثر من 100 بكسل، يرجع للأعلى
        scrollToTop();
    } else {
        // إذا كان المستخدم في أعلى الصفحة، يقوم بتفعيل الوضع الليلي
        toggleDarkMode();
    }
}

// function toggleDarkMode() {
//     document.body.classList.toggle("dark-mode");
//     document.body.classList.toggle("light-mode");

//     isDarkMode = !isDarkMode;

//     const button = document.getElementById("toggle-button");
//     button.textContent = isDarkMode ? "☀️" : "🌙";
// }


// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }



let isDarkMode = false; // الوضع الافتراضي

function handleButtonClick() {
    if (window.scrollY > 100) {
        scrollToTop();
    } else {
        toggleDarkMode();
    }
}

// دالة لتفعيل وإلغاء الوضع الليلي وتغيير الأيقونة
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    isDarkMode = !isDarkMode;
    const button = document.getElementById("toggle-button");
    button.textContent = isDarkMode ? "☀️" : "🌙";
}

// دالة الرجوع للأعلى
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

