import intersects from './intersects';

const testArray1 = ['peach', 'pear', 'olive', 'grape', 'strawberry'];
const testArray2 = ['jordan\'s', 'jumpin', 'jive', 'grape', 'jukebox'];
const testArray3 = ['jordan\'s', 'jumpin', 'jive', 'straw', 'jukebox'];

describe('test of intersects helper', () => {
    it('identifies two strings as the same', () => {
        expect (intersects('jordan', 'jordan')).toBe(true);
    });
    
    it('identifies case-difference strings as not the same', () => {
        expect(intersects('jordan', 'jorDan')).toBe(false);
    });
    
    it('identifies that a string is contained in an array of strings', () => {
        expect(intersects('olive', testArray1)).toBe(true);
    });
    
    it('identifies whether second parameter string is contained in an array of string passed first', () => {
        expect(intersects(testArray1, 'olive')).toBe(true);
    });
    
    it('identifies that a string is not contained in an array of strings', () => {
        expect(intersects('beauty', testArray1)).toBe(false);
    });
    
    it('same (reverse parameter order)', () => {
        expect(intersects(testArray1, 'beauty')).toBe(false);
    });
    
    it('two arrays are matched if a common element exists', () => {
        expect(intersects(testArray1, testArray2)).toBe(true);
    });
    
    it('two arrays are not matched if no common elements exist', () => {
        expect(intersects(testArray1, testArray3)).toBe(false);
    });
});