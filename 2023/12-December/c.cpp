#include<bits/stdc++.h>

using namespace std;

int weeks_days[10];
int n;
int mat[1010][10];

void count_day(){


    // for(int i=0;i<n;i++){
    //     for(int j=0;j<5;j++){
    //         cout<<mat[i][j];
    //     }
    //     cout<<endl;
    // }


    for(int i=0;i<5;i++){
        int num = 0;
        //cout<<"----"<<i<<"----";
        for(int j=0;j<n;j++){
            if(mat[j][i]==1){
                num++;
                //cout<<j<<" "<<i<<endl;

            }
            //cout<<mat[j][i]<<" ";
        }
        //cout<<endl;
        weeks_days[i]=num;
    }
}

bool is_posibl(int day_1,int day_2){


   //cout<<day_1<< " "<<day_2<<endl;

    int num = 0;

    for(int i=0;i<n;i++){
        if(mat[i][day_1]==0 && mat[i][day_2] == 1){
            num++;
        }
        else if(mat[i][day_1]==0){
            return false;
        }
    }
    if(num == n/2){
        return true;
    }

    for(int i = 0;i<n;i++){
        if(mat[i][day_1]==1 && mat[i][day_2] == 1){
            num++;
        }
        if(num==n/2){
            break;
        }
    }

    return num == n/2;

}

int main(){

    // freopen("entrada.txt", "r", stdin);
    // freopen("salida.txt", "w", stdout);

    bool answer = false;

    cin>>n;
    for(int i=0;i<n;i++){
        for(int j=0;j<5;j++){
            cin>>mat[i][j];
        }
    }
    count_day();
    //  for(int i=0;i<5;i++){
    //     cout<<weeks_days[i]<<" ";
    // }
    //cout<<endl;
    for(int i=0;i<5;i++){
        if(weeks_days[i]>=n/2){
            for(int j=i+1;j<5;j++){
                if(weeks_days[j]>=n/2 && is_posibl(i,j)){
                    answer = true;
                    break;
                }
            }
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