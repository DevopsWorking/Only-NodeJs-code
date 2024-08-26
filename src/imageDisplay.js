function displayNodejsImage() {
    const imageUrl = '/images/nodejs-logo.png';
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Node.js logo';
    document.getElementById('image-container').appendChild(imgElement);
}

function initScrollingText() {
    const scrollingText = document.querySelector('#scrolling-text p');
    scrollingText.style.animationDuration = `${scrollingText.offsetWidth / 50}s`;
}

displayNodejsImage();
window.addEventListener('load', initScrollingText);
