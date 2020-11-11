const organization = {
    name:"XYZ Corp.",
    address:{
        city:"Los Angeles",
        pincode:90001
    }
};

document.getElementById("obj").innerHTML = "The input object is : "+JSON.stringify(organization);

let {name,address:{pincode:pin}} = organization; //destructuring object

document.getElementById("op").innerHTML = "The pincode from nested address object is : <span style='text-decoration:underline'>"+pin+"</span>";