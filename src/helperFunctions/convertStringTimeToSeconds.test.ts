import convertStringTimeToSeconds from "./convertStringTimeToSeconds";

const testTime1 = '0:33';
const testTime2 = '3:00';
const testTime3 = '14:37';
const testTime4 = 's4:30';
const testTime5 = '2:2';
const testTime6 = '2:234';
const testTime7 = '2:35:32';

describe('test of time conversion helper', () => {
    it('should return 0 if improper string format', () => {
        expect (convertStringTimeToSeconds(testTime4)).toBe(0);
        expect (convertStringTimeToSeconds(testTime5)).toBe(0);
        expect (convertStringTimeToSeconds(testTime6)).toBe(0);
    });
    
    it('correctly returns the time in seconds of time under 1 minute', () => {
        expect (convertStringTimeToSeconds(testTime1)).toBe(33);
    });

    it('correctly returns the number of seconds', () => {
        expect (convertStringTimeToSeconds(testTime2)).toBe(180);
        expect (convertStringTimeToSeconds(testTime3)).toBe(877);
        expect (convertStringTimeToSeconds(testTime7)).toBe(9332);
    })
});
