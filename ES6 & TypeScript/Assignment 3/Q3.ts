interface printable {
    radius:number,
    area:number
    fname:string,
    lname:string,
    designation:string
  }
  
  function print(...obj){
      for(let o of obj){
          return o;
      }
  }
  function printAll(circle:object , employee:object) {
    console.log(print(circle));
    console.log(print(employee));
    document.getElementById("obj1")?.innerHTML=`Circle Object : ${JSON.stringify(print(circle))}`;
    document.getElementById("obj2")?.innerHTML=`Employee Object : ${JSON.stringify(print(employee))}`;
  }
  
  
  
function printObj(){
        let circle:printable = { 
            radius:3 , 
            area:28.27 
          };
        let employee:printable =  {
            fname:"Steve",
            lname:"Holmer",
            designation:"Software Engineer"
          };
  printAll(circle,employee);
}