/**
 * @jest-environment jsdom
 */

const { createNodejsImage, calculateScrollingTextDuration } = require('../src/imageDisplay');

describe('imageDisplay', () => {
    test('createNodejsImage creates an img element with correct attributes', () => {
        const imgElement = createNodejsImage();
        
        expect(imgElement.tagName).toBe('IMG');
        expect(imgElement.src).toContain('/images/nodejs-logo.png');
        expect(imgElement.alt).toBe('Node.js logo');
    });

    test('calculateScrollingTextDuration returns correct duration string', () => {
        const mockElement = { offsetWidth: 1000 };
        const duration = calculateScrollingTextDuration(mockElement);
        
        expect(duration).toBe('20s');
    });

    test('calculateScrollingTextDuration returns fallback duration for invalid input', () => {
        const duration = calculateScrollingTextDuration(null);
        
        expect(duration).toBe('20s');
    });
});
