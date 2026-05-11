function divideNumbers (num1, num2) {
    if (num2 == 0) {
        throw new Error('you cannot divide by zero');
    }
    return num1 / num2;
} 