#include <iostream>
#include <vector>
using namespace std;
int main() {
  int a;
  cin >> a;  
  vector<int>A, Answer(a);
  for (int i = 0; i < a; i++) {
    A.emplace_back(i);
  }
  int now = 0;
  for (int i = 1; i <= a; i++) {
    now += i;
    now %= A.size();
    Answer[A[now]] = i;
    A.erase(A.begin() + (now));
  }
  for (int i = 0; i < a; i++) {
    cout << Answer[i] << " ";
  }
}