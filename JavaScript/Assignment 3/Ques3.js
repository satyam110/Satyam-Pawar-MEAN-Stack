class Rectangle{
    constructor (height,width){
        this.height = height;
        this.width = width;
        
    }
}

Rectangle.prototype.getArea = function(){
        return(this.height*this.width); 
}

function getRectArea(){

    var width = Number(prompt("Enter width :"));
    var height = Number(prompt("Enter height :")); 
    
    var rect = new Rectangle(height,width);
    rect.hieght = 50;
    var getArea = rect.getArea();
    

    document.getElementById("height").innerHTML="<h3>Height of the Rectangle : "+rect.height+"</h3>";
    document.getElementById("width").innerHTML="<h3>Width of the Rectangle : "+rect.width+"</h3>";
    document.getElementById("area").innerHTML="<h3>Area of the Rectangle : "+getArea+"</h3>"

}
