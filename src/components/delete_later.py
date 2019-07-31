def f(next, initial, times):
    current = initial
    for n in range(0, times):
        current = next(current)
    return current

