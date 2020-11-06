function isEven(){
    var num = Number(document.getElementById("num").value);
    var isEven = ["true","false"];
    document.getElementById("result").textContent="isEven : "+isEven[num%2];
}