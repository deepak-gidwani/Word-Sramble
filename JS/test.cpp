#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<int> arr ={7,1,5,9,8,7,5,8,6,10,4,9,3,5,3,2,10,5,9,10,3,5,2,2,6};
    // cout<<arr.size();
    // return 0;
    int sum=0;
    for(int i=4;i<21;i++){
        sum=sum|arr[i];
    }
    cout<<sum<<endl;
    return 0;
}