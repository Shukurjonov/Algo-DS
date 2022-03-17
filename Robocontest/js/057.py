n, m = [int(i) for i in input().split()]
n,m=list(sorted([n,m]))
if n==1:
    print(m*m-m)
else: print( max(n*m*(m*n-1) -8-24-(n-4)*20-(m-4)*20-16-(m-4)*(n-4)*8, 0 ))