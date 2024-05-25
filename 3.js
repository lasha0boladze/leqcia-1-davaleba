function calculate(a, b, operation) {
    if (typeof a !== 'number' || isNaN(a) || typeof b !== 'number' || isNaN(b)) {
        return 'operation - false';
    }

    switch (operation) {
        case '+':
            return a + b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'operation - false'; 
            }
            return a / b;
        default:
            return 'operation - false';
    }
}

