#include<bits/stdc++.h>

using namespace std;

int main(){

    // freopen("entrada.txt", "r", stdin);
    // freopen("salida.txt", "w", stdout);

    int n;
    string cad,cad2;
    bool answer = true;


    cin>>n>>cad>>cad2;

    for(int i=0;i<n;i++){
        if(cad[i] == cad2[i] && cad[i]=='1'){
            answer = false;
            break;
        }
    }


    if(answer){
        cout<<"YES\n";
    }
    else{
        cout<<"NO\n";
    }

    return 0;
}