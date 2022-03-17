n=int(input())
def f(n):
  if n<=1:
    return 0
  if n&1:
    return 2*f(n//2)+f(n//2+1)+(n//2)*(n//2+1)//2
  return 3*f(n//2)+(n//2)*(n//2-1)//2
print(f(n+1))