#include<bits/stdc++.h>

using namespace std;

const int limit = 1000;

int main(){

    // freopen("entrada.txt", "r", stdin);
    // freopen("salida.txt", "w", stdout);

    int n,b,g;

    cin>>n>>b>>g;

    int answer = n;

    
    for(int i=1;i<limit;i++){
        for(int j=i+1;j<limit;j++){
            if(i*b+j*g<=n){
                answer=min(answer,n-(i*b+j*g));
            }
            else{
                break;
            }
        }
    }

    cout<<answer<<endl;

    return 0;
}