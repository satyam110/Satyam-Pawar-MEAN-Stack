class Rectangle{
    constructor (height,width){
        this.height = height;
        this.width = width;
        
    }
}

function createInstance(){

    var height = Number(prompt("Enter height :")); 
    var width = Number(prompt("Enter width :"));
    var rect = new Rectangle(height,width);

    document.getElementById("height").innerHTML="<h4>Height of the Rectangle : "+rect.height+"</h4>";
    document.getElementById("width").innerHTML="<h4>Width of the Rectangle : "+rect.width+"</h4>";

}
