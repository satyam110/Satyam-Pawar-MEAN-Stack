var Person=function(fname,lname,age,skills,dateofbirth,address,married,profession){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.skills=skills;
        this.dateofbirth=dateofbirth;
        this.address=address;
        this.married=married;
        this.profession=profession;
}
var amithab=new Person("amithab","bacchan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst");
var abhishek=new Person("abhishek",21,["HTML"],"08/06/1997","false","jr analyst");
var Aaradhya= new Person("Aaradhya",20,["JS"],"01/09/1999","false","jr analyst");
   
    abhishek=Object.create(amithab);
    Aaradhya=Object.create(abhishek);
    
    
print=function()
{
    console.log(amithab);

    console.log(abhishek.lname);
    console.log(abhishek.address);
    console.log(Aaradhya.lname);
    console.log(Aaradhya.address);
   

    document.getElementById("r1").textContent="Output in console";

}();