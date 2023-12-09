#include<bits/stdc++.h>

using namespace std;

int x,y;

float arr[10];


float equ1(){

    float num_a=(float)x/(float)2;
    float num_b=float(y)-(num_a*2);

    if(num_a>=0 && num_b>=0 ){
        return num_a*2 + num_b*2;
    }

    return (float)INT_MAX;
}

float equ2(){

    float num_a=(float)x/(float)2;
    float num_b=float(y)-(num_a);
    num_b/=2;

    if(num_a>=0 && num_b>=0 ){
        return num_a*2 + num_b*2;
    }

    return (float)INT_MAX;
}

float equ3(){

    float num_b=(float)x/(float)2;
    float num_a=float(y)-(num_b);
    num_a/=2;

    if(num_a>=0 && num_b>=0 ){
        return num_a*2 + num_b*2;
    }

    return (float)INT_MAX;
}

float equ4(){

    float num_b=(float)x/(float)2;
    float num_a=float(y)-(num_b);

    if(num_a>=0 && num_b>=0 ){
        return num_a*2 + num_b*2;
    }

    return (float)INT_MAX;
}

float equ5(){

    float num_a=(float)y-(float)x;
    float num_b=x-num_a;


    if(num_a>=0 && num_b>=0 ){
        return num_a*2 + num_b*2;
    }

    return (float)INT_MAX;
}

float equ6(){

    float num_b=(float)y-(float)x;
    float num_a=x-num_b;

    if(num_a>=0 && num_b>=0 ){
        return num_a*2 + num_b*2;
    }

    return (float)INT_MAX;
}


int main(){

    freopen("entrada.txt", "r", stdin);
    freopen("salida.txt", "w", stdout);

    cin>>x>>y;


    arr[0] = equ1();
    arr[1] = equ2();
    arr[2] = equ3();
    arr[3] = equ4();
    arr[4] = equ5();
    arr[5] = equ6();

    float answer = arr[0];
    
    for(int i=1;i<6;i++){
        answer=min(answer,arr[i]);
    }
    if(answer>=INT_MAX){
        cout<<-1<<endl;
        return;
    }

    cout<<answer<<endl;

    return 0;
}