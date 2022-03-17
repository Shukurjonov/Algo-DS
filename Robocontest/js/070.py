import math
i,j = map(int, input().split())

def fib(n):
    F = [[1, 1],
         [1, 0]]
    if (n == 0):
        return 0
    power(F, n - 1)

    return F[0][0] % 1000000007


def multiply(F, M):
    x = (F[0][0] * M[0][0] +
         F[0][1] * M[1][0])
    y = (F[0][0] * M[0][1] +
         F[0][1] * M[1][1])
    z = (F[1][0] * M[0][0] +
         F[1][1] * M[1][0])
    w = (F[1][0] * M[0][1] +
         F[1][1] * M[1][1])

    F[0][0] = x % 1000000007 
    F[0][1] = y % 1000000007
    F[1][0] = z % 1000000007
    F[1][1] = w % 1000000007


def power(F, n):
    if (n == 0 or n == 1):
        return;
    M = [[1, 1],
         [1, 0]];

    power(F, n // 2)
    multiply(F, F)

    if (n % 2 != 0):
        multiply(F, M)


def computeGCD(x, y):
    while (y):
        x, y = y, x % y
    return x
print(int(fib(computeGCD(i,j)) % 1000000007))