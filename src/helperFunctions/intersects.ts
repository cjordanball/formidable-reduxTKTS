// intersects takes two parameters, each of which may be a string
// or an array of strings, and returns a boolean whether they are
// the same or contain any common elements

const intersects = (input1: Array<string>|string, input2: Array<string>|string): boolean => {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 === input2;
    } else if (Array.isArray(input1) && typeof input2 === 'string') {
        return input1.includes(input2);
    } else if (Array.isArray(input2) && typeof input1 === 'string') {
        return input2.includes(input1);
    } else if (Array.isArray(input1) && Array.isArray(input2)) {
        const successArray = input1.filter((val) => {
            return input2.includes(val);
        });
        return successArray.length > 0;
    }
    return false;
};

export default intersects;
