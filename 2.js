function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
        return false;
    }
    
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

