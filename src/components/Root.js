const root = (guess, target=5) => {
    return 0.5 * (guess + target/guess)
}

const f = (next , initial, times) => {
    let current = initial
    for (x = times; 0 < x; x--) {
        current = next(current)
    }
    return current
}

f(root, 2.5, 100)

const example = (x) => Math.cos(x) + Math.sin(x)