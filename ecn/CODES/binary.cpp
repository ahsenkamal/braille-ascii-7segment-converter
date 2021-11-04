#include<bits/stdc++.h>
#include<fstream>
using namespace std; 

void sevenSegment(string s){
    string o1;
    string o0;

    vector<int> S1 = {0, 0, 0, 0, 0, 0, 0};
    vector<int> S0 = {0, 0, 0, 0, 0, 0, 0};

    vector<int> d0 = {1, 1, 1, 1, 1, 1, 0};
    vector<int> d1 = {0, 1, 1, 0, 0, 0, 0};
    vector<int> d2 = {1, 1, 0, 1, 1, 0, 1};
    vector<int> d3 = {1, 1, 1, 1, 0, 0, 1};
    vector<int> d4 = {0, 1, 1, 0, 0, 1, 1};
    vector<int> d5 = {1, 0, 1, 1, 0, 1, 1};
    vector<int> d6 = {1, 0, 1, 1, 1, 1, 1};
    vector<int> d7 = {1, 1, 1, 0, 0, 0, 0};
    vector<int> d8 = {1, 1, 1, 1, 1, 1, 1};
    vector<int> d9 = {1, 1, 1, 1, 0, 1, 1};

    int i=0;

    while(s[i]!=' '){
        o1.push_back(s[i]);
        if(s[i]=='1'){
            S1[i]=1;
        }else{
            S1[i]=0;
        }
        i++;
    }
    i++;
    while(i<s.size()){
        o0.push_back(s[i]);
        if(s[i]=='1'){
            S0[i-8]=1;
        }else{
            S0[i-8]=0;
        }
        i++;
    }

    int a,b;
    
    if(S1==d0){
        a=0;
    }else if(S1==d1){
        a=1;
    }else if(S1==d2){
        a=2;
    }else if(S1==d3){
        a=3;
    }else if(S1==d4){
        a=4;
    }else if(S1==d5){
        a=5;
    }else if(S1==d6){
        a=6;
    }else if(S1==d7){
        a=7;
    }else if(S1==d8){
        a=8;
    }else if(S1==d9){
        a=9;
    }

    if(S0==d0){
        b=0;
    }else if(S0==d1){
        b=1;
    }else if(S0==d2){
        b=2;
    }else if(S0==d3){
        b=3;
    }else if(S0==d4){
        b=4;
    }else if(S0==d5){
        b=5;
    }else if(S0==d6){
        b=6;
    }else if(S0==d7){
        b=7;
    }else if(S0==d8){
        b=8;
    }else if(S0==d9){
        b=9;
    }

    cout<<a<<b<<endl;
}

int main(){
    fstream newfile;
    newfile.open("output.txt",ios::in);
    if (newfile.is_open()){
        string s;
        while(getline(newfile, s)){
            sevenSegment(s);
        }
        newfile.close();
    }
    return 0;
}