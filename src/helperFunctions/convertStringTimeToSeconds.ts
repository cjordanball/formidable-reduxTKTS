const convertStringTimeToSeconds = (inputString: string): number => {
    const timeArray: Array<string> = inputString.split(':');
    const arrLength = timeArray.length;
    let pattern;

    if (arrLength === 2) {
        pattern = /^\d{1,2}:\d{2}$/
    } else if (arrLength === 3) {
        pattern = /^\d{1,2}:\d{2}:\d{2}$/
    } else {
        return 0;
    }
    
    if (!pattern.test(inputString)) {
        return 0;
    }

    let counter = 0;

    for (let i = arrLength; i > 0; i--) {
        counter += (parseInt(timeArray[arrLength - i], 10) * Math.pow(60, i-1));
    }
    
    return counter;
}

export default convertStringTimeToSeconds;