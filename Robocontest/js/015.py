if(n == 0) s = 0;
  else if(k == 1) s = n;
  else s = (binpow(k, n)-1)*binpow(k-1, M-2)%M;
  cout<<s;


  int res = 1;
  while (n)
    if (n & 1) {
      res = res * a % M;
      --n;
    }
    else {
      a = a * a % M;
      n >>= 1;
    }
  return res;