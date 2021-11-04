#include<bits/stdc++.h>
using namespace std;
 
int main(){
    int n;
    cout<<"NUMBER OF TERMS: ";
    cin>>n;
    cin.ignore();
    string s;
    cout<<"EXPRESSION: ";
    getline(cin,s);
    string ans;
    int i=0;
    for(int q=0; q<n; q++){
        string temp;
        while(s[i]!= ' ' && i!=s.size()){
            temp.push_back(s[i]);
            i++;
        }
        i+=3;
        if(q==0)
            ans.append("(");
        else
            ans.append(" | (");

        for(int j=0; j<temp.size(); j++){
            if(temp[j]=='\'')
                continue;

            if(j==0){
                switch(temp[j]){
                    case 'A':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("(~i[1])");
                        }else{
                            ans.append("i[1]");
                        }
                        break;
                    case 'B':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("(~i[2])");
                        }else{
                            ans.append("i[2]");
                        }
                        break;
                    case 'C':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("(~i[3])");
                        }else{
                            ans.append("i[3]");
                        }
                        break;
                    case 'D':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("(~i[4])");
                        }else{
                            ans.append("i[4]");
                        }
                        break;
                    case 'E':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("(~i[5])");
                        }else{
                            ans.append("i[5]");
                        }
                        break;
                    case 'F':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("(~i[6])");
                        }else{
                            ans.append("i[6]");
                        }
                        break;
                }
            }else{
                switch(temp[j]){
                    case 'A':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("&(~i[1])");
                        }else{
                            ans.append("&i[1]");
                        }
                        break;
                    case 'B':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("&(~i[2])");
                        }else{
                            ans.append("&i[2]");
                        }
                        break;
                    case 'C':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("&(~i[3])");
                        }else{
                            ans.append("&i[3]");
                        }
                        break;
                    case 'D':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("&(~i[4])");
                        }else{
                            ans.append("&i[4]");
                        }
                        break;
                    case 'E':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("&(~i[5])");
                        }else{
                            ans.append("&i[5]");
                        }
                        break;
                    case 'F':
                        if(temp[j+1]=='\'' && j+1<temp.size()){
                            ans.append("&(~i[6])");
                        }else{
                            ans.append("&i[6]");
                        }
                        break;
                }
            }
        }
        ans.append(")");
    }
    cout<<endl<<ans;
    
    return 0;
}