let nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
let index0 = 0;
let index1 = 0;
var output;
var s;
var lines = [];
var idx=-1;
 
function nextFunction() {
    idx++;
    s=lines[idx];
    if(lines[idx+1]==""){
        document.getElementById('next').disabled = true;
    }
    let S1 = [0, 0, 0, 0, 0, 0, 0];
    let S0 = [0, 0, 0, 0, 0, 0, 0];

    let d0 = [1, 1, 1, 1, 1, 1, 0];
    let d1 = [0, 1, 1, 0, 0, 0, 0];
    let d2 = [1, 1, 0, 1, 1, 0, 1];
    let d3 = [1, 1, 1, 1, 0, 0, 1];
    let d4 = [0, 1, 1, 0, 0, 1, 1];
    let d5 = [1, 0, 1, 1, 0, 1, 1];
    let d6 = [1, 0, 1, 1, 1, 1, 1];
    let d7 = [1, 1, 1, 0, 0, 0, 0];
    let d8 = [1, 1, 1, 1, 1, 1, 1];
    let d9 = [1, 1, 1, 1, 0, 1, 1];

    let i=0;

    while(s[i]!==' '){
        if(s[i]=='1'){
            S1[i]=1;
        }else{
            S1[i]=0;
        }
        i++;
    }
    i++;
    while(i<s.length-1){
        if(s[i]=='1'){
            S0[i-8]=1;
        }else{
            S0[i-8]=0;
        }
        i++;
    }

    let a,b;
    
    if(JSON.stringify(S1)==JSON.stringify(d0)){
        a=0;
    }else if(JSON.stringify(S1)==JSON.stringify(d1)){
        a=1;
    }else if(JSON.stringify(S1)==JSON.stringify(d2)){
        a=2;
    }else if(JSON.stringify(S1)==JSON.stringify(d3)){
        a=3;
    }else if(JSON.stringify(S1)==JSON.stringify(d4)){
        a=4;
    }else if(JSON.stringify(S1)==JSON.stringify(d5)){
        a=5;
    }else if(JSON.stringify(S1)==JSON.stringify(d6)){
        a=6;
    }else if(JSON.stringify(S1)==JSON.stringify(d7)){
        a=7;
    }else if(JSON.stringify(S1)==JSON.stringify(d8)){
        a=8;
    }else if(JSON.stringify(S1)==JSON.stringify(d9)){
        a=9;
    }

    if(JSON.stringify(S0)==JSON.stringify(d0)){
        b=0;
    }else if(JSON.stringify(S0)==JSON.stringify(d1)){
        b=1;
    }else if(JSON.stringify(S0)==JSON.stringify(d2)){
        b=2;
    }else if(JSON.stringify(S0)==JSON.stringify(d3)){
        b=3;
    }else if(JSON.stringify(S0)==JSON.stringify(d4)){
        b=4;
    }else if(JSON.stringify(S0)==JSON.stringify(d5)){
        b=5;
    }else if(JSON.stringify(S0)==JSON.stringify(d6)){
        b=6;
    }else if(JSON.stringify(S0)==JSON.stringify(d7)){
        b=7;
    }else if(JSON.stringify(S0)==JSON.stringify(d8)){
        b=8;
    }else if(JSON.stringify(S0)==JSON.stringify(d9)){
        b=9;
    }

    index1=a;
    index0=b;
    if(idx>0){
        document.getElementById('prev').disabled = false;

    }
}

function prevFunction() {
    idx--;
    s=lines[idx];
    if(idx==0){
        document.getElementById('prev').disabled = true;
    }
    let S1 = [0, 0, 0, 0, 0, 0, 0];
    let S0 = [0, 0, 0, 0, 0, 0, 0];

    let d0 = [1, 1, 1, 1, 1, 1, 0];
    let d1 = [0, 1, 1, 0, 0, 0, 0];
    let d2 = [1, 1, 0, 1, 1, 0, 1];
    let d3 = [1, 1, 1, 1, 0, 0, 1];
    let d4 = [0, 1, 1, 0, 0, 1, 1];
    let d5 = [1, 0, 1, 1, 0, 1, 1];
    let d6 = [1, 0, 1, 1, 1, 1, 1];
    let d7 = [1, 1, 1, 0, 0, 0, 0];
    let d8 = [1, 1, 1, 1, 1, 1, 1];
    let d9 = [1, 1, 1, 1, 0, 1, 1];

    let i=0;

    while(s[i]!==' '){
        if(s[i]=='1'){
            S1[i]=1;
        }else{
            S1[i]=0;
        }
        i++;
    }
    i++;
    while(i<s.length-1){
        if(s[i]=='1'){
            S0[i-8]=1;
        }else{
            S0[i-8]=0;
        }
        i++;
    }

    let a,b;
    
    if(JSON.stringify(S1)==JSON.stringify(d0)){
        a=0;
    }else if(JSON.stringify(S1)==JSON.stringify(d1)){
        a=1;
    }else if(JSON.stringify(S1)==JSON.stringify(d2)){
        a=2;
    }else if(JSON.stringify(S1)==JSON.stringify(d3)){
        a=3;
    }else if(JSON.stringify(S1)==JSON.stringify(d4)){
        a=4;
    }else if(JSON.stringify(S1)==JSON.stringify(d5)){
        a=5;
    }else if(JSON.stringify(S1)==JSON.stringify(d6)){
        a=6;
    }else if(JSON.stringify(S1)==JSON.stringify(d7)){
        a=7;
    }else if(JSON.stringify(S1)==JSON.stringify(d8)){
        a=8;
    }else if(JSON.stringify(S1)==JSON.stringify(d9)){
        a=9;
    }

    if(JSON.stringify(S0)==JSON.stringify(d0)){
        b=0;
    }else if(JSON.stringify(S0)==JSON.stringify(d1)){
        b=1;
    }else if(JSON.stringify(S0)==JSON.stringify(d2)){
        b=2;
    }else if(JSON.stringify(S0)==JSON.stringify(d3)){
        b=3;
    }else if(JSON.stringify(S0)==JSON.stringify(d4)){
        b=4;
    }else if(JSON.stringify(S0)==JSON.stringify(d5)){
        b=5;
    }else if(JSON.stringify(S0)==JSON.stringify(d6)){
        b=6;
    }else if(JSON.stringify(S0)==JSON.stringify(d7)){
        b=7;
    }else if(JSON.stringify(S0)==JSON.stringify(d8)){
        b=8;
    }else if(JSON.stringify(S0)==JSON.stringify(d9)){
        b=9;
    }

    index1=a;
    index0=b;
    document.getElementById('next').disabled = false;
}

function setup() {
    createCanvas(400,400);
    document.getElementById('prev').disabled = true;
    fetch('output.txt')
    .then(response => response.text())
    .then(text => {
            output = text;
            lines = output.split('\n');
    });
}

function asgn(s){
    let S1 = [0, 0, 0, 0, 0, 0, 0];
    let S0 = [0, 0, 0, 0, 0, 0, 0];

    let d0 = [1, 1, 1, 1, 1, 1, 0];
    let d1 = [0, 1, 1, 0, 0, 0, 0];
    let d2 = [1, 1, 0, 1, 1, 0, 1];
    let d3 = [1, 1, 1, 1, 0, 0, 1];
    let d4 = [0, 1, 1, 0, 0, 1, 1];
    let d5 = [1, 0, 1, 1, 0, 1, 1];
    let d6 = [1, 0, 1, 1, 1, 1, 1];
    let d7 = [1, 1, 1, 0, 0, 0, 0];
    let d8 = [1, 1, 1, 1, 1, 1, 1];
    let d9 = [1, 1, 1, 1, 0, 1, 1];

    let i=0;

    while(s[i]!==' '){
        if(s[i]=='1'){
            S1[i]=1;
        }else{
            S1[i]=0;
        }
        i++;
    }
    i++;
    while(i<s.length-1){
        if(s[i]=='1'){
            S0[i-8]=1;
        }else{
            S0[i-8]=0;
        }
        i++;
    }

    let a,b;
    
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

    index1=a;
    index0=b;
}

function draw() {
    background(0);
    sevenSegment1(nums[index1]);
    sevenSegment0(nums[index0]);
}

function getColor(val, shift) {
  let r = 0;
  let g = 180;
  let b = 180;
  let a = 25 + 255 * ((val >> shift) & 1);
  return color(r, g, b, a);
}

function sevenSegment1(val) {
  push();
  noStroke();
  noFill();

  translate(20, 40);
  // A
  fill(getColor(val, 6));
  rect(60, 20, 78, 18, 10, 10);
  // B
  fill(getColor(val, 5));
  rect(140, 40, 18, 98, 10, 10);
  // C
  fill(getColor(val, 4));
  rect(140, 160, 18, 98, 10, 10);
  // D
  fill(getColor(val, 3));
  rect(60, 260, 78, 18, 10, 10);
  // E
  fill(getColor(val, 2));
  rect(40, 160, 18, 98, 10, 10);
  // F
  fill(getColor(val, 1));
  rect(40, 40, 18, 98, 10, 10);
  // G
  fill(getColor(val, 0));
  rect(60, 140, 78, 18, 10, 10);

  pop();
}

function sevenSegment0(val) {
    push();
    noStroke();
    noFill();
    translate(170, 40);
    // A
    fill(getColor(val, 6));
    rect(60, 20, 78, 18, 10, 10);
    // B
    fill(getColor(val, 5));
    rect(140, 40, 18, 98, 10, 10);
    // C
    fill(getColor(val, 4));
    rect(140, 160, 18, 98, 10, 10);
    // D
    fill(getColor(val, 3));
    rect(60, 260, 78, 18, 10, 10);
    // E
    fill(getColor(val, 2));
    rect(40, 160, 18, 98, 10, 10);
    // F
    fill(getColor(val, 1));
    rect(40, 40, 18, 98, 10, 10);
    // G
    fill(getColor(val, 0));
    rect(60, 140, 78, 18, 10, 10);
  
    pop();
}