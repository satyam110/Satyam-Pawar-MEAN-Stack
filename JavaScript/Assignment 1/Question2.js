function max(a,b,c){
    var max=0;
    if(a!=null&&b!=null&&c!=null){
    if(a>b && a>c){
        max=a;
    }
    else if(b>a && b>c){
        max=b;
    }
    else{
        max=c;
    }
}else{
    max="One of the parameter is missing";
}
    return max;

}

document.getElementById("result").innerHTML="Max number between 44,23,76 is :"+max(43,23,76);