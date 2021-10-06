var i = 0;
var szoveg = 'Ezt a projektmunkát a 911-es terrortámadás témában csináltuk \n reméljük tetszeni fog önöknek!';
var speed = 50;

function typeWriter(){
    if(i < szoveg.length){
        document.getElementById("szoveg_kiiratas").innerHTML += szoveg.charAt(i)
        i++;
        setTimeout(typeWriter, speed)
    }
}