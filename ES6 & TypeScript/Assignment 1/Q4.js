function lenString(){

    let name = document.getElementById("string").value ;

    let names = name.split(",");

    let names1 = names.map((name) => {
        return {"name":name,"length":name.length}
    });

        document.getElementById("out").innerHTML="Strings with length :"+JSON.stringify(names1)
}