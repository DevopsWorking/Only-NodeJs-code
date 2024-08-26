function displayNodejsImage() {
    const imageUrl = '/images/nodejs-logo.png';
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Node.js logo';
    imgElement.onerror = () => console.error('Failed to load image:', imageUrl);
    imgElement.onload = () => console.log('Image loaded successfully');
    document.getElementById('image-container').appendChild(imgElement);
}

function initScrollingText() {
    const scrollingText = document.querySelector('#scrolling-text p');
    if (scrollingText) {
        const duration = `${scrollingText.offsetWidth / 50}s`;
        scrollingText.style.animationDuration = duration;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayNodejsImage();
    initScrollingText();
});
