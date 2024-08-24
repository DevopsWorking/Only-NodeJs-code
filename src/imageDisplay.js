function displayNodejsImage() {
    const imageUrl = 'https://nodejs.org/static/images/logo.svg';
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Node.js logo';
    document.getElementById('image-container').appendChild(imgElement);
}

displayNodejsImage();
