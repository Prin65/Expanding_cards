function expandImage(currentImage) {
    let images = document.querySelectorAll('.image');
    images.forEach(image => {
        if (image !== currentImage) {
            image.classList.remove('active');
        }
    });
    currentImage.classList.add('active');
}


