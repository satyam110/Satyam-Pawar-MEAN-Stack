function submitDetails(){
    let laptop = document.getElementById("model").value ;
    let desk = document.getElementById("desk-no").value ;
    let name = document.getElementById("name").value ;
    let desc = document.getElementById("desc").value ;

    if(laptop!=="" && desk!=="" && name!=="" && desc!==""){
        document.getElementById("details").textContent =`Your ticket is submitted successfully with details as Laptop Model : ${laptop}, Desk : ${desk}, Name : ${name}`
    }
}