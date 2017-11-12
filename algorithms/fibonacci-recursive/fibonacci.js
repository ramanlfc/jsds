function fibonacci(pos) {

    if (pos < 2)
        return 1;

    return fibonacci(pos - 2) + fibonacci(pos - 1);
}

function fibonacciWithCache(pos) {

    let cache = fibonacciWithCache.cache;

    if (fibonacciWithCache.cache[pos] === undefined) { 
        if (pos < 2) {
            cache[pos] = 1;
        } else {
            cache[pos] = fibonacci(pos - 2) + fibonacci(pos - 1);
        }
    }

    return cache[pos];
}

fibonacciWithCache.cache = {};