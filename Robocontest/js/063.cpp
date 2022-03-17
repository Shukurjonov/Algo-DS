#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
#define MOD 1000000007
#define MAX 1000001
ll inv[MAX];

int main() {
  inv[1] = 1;
  for(int i = 2; i < MAX; ++i)
    inv[i] = MOD - (MOD/i) * inv[MOD%i] % MOD;
  ll a, b, res=1;
  cin>>a>>b;
  a--;b--;
  if(a>b) swap(a,b);
  ll n=a+b;
  for(ll i=b+1;i<=n;i++) {
    res*=i;
    res%=MOD;
  }
  for(ll i=1;i<=a;i++) {
    res*=inv[i];
    res%=MOD;
  }
  cout<<res;
}