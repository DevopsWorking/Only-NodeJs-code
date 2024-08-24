/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

beforeEach(() => {
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');
    require('../src/imageDisplay.js');
});

test('Node.js image is displayed', () => {
    const imageContainer = document.getElementById('image-container');
    const imgElement = imageContainer.querySelector('img');
    
    expect(imgElement).not.toBeNull();
    expect(imgElement.src).toBe('https://nodejs.org/static/images/logo.svg');
    expect(imgElement.alt).toBe('Node.js logo');
});
