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

    if (pixelData[3] !== 0) { // Проверяем непрозрачность пикселя
        alert('Цветная область!');
        // Воспроизвести звук или выполнить другие действия
    } else {
        alert('Прозрачная область.');
    }
}

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    });
});

const descriptionElements = document.querySelectorAll('.description');

descriptionElements.forEach((el) => observer.observe(el))