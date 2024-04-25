function automatonSound(event) {
    const img = document.getElementById('automatonId');
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);

    const pixelData = ctx.getImageData(x, y, 1, 1).data;
    var audio = new Audio('../sounds/automatonSounds/bots_idle_'+(Math.floor(Math.random() * 30) + 1)+'.wav'); 

    if (pixelData[3] !== 0) { // Проверяем непрозрачность пикселя
        img.classList.add('automatonLight');
        audio.play();
        setTimeout(function () {
            img.classList.remove('automatonLight');
        }, 2 * 1000);
    } else if(/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
        window.location.href="main.html";
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const descriptionElements = document.querySelectorAll('.description');

descriptionElements.forEach((el) => observer.observe(el))