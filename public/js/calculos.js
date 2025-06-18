function sumar(){
    let num1=document.getElementById("text1").value;
    
    let num2=document.getElementById("text2").value;
    let res= parseFloat(num1)+parseFloat(num2) ;
    console.log("El resultado es:"+res)
}
function resta(){
    let num3=document.getElementById("text3").value;
    let num4=document.getElementById("text4").value;
    let rest=parseFloat(num3)-parseFloat(num4);
    console.log("El resultado es:"+rest)
}

function multiplicar(){
    let num5=document.getElementById("text5").value;
    let num6=document.getElementById("text6").value;
    let mult=parseFloat(num5)*parseFloat(num6);
    console.log("El resultado es:"+mult)
}

function dividir(){
    let num7=document.getElementById("text7").value;
    let num8=document.getElementById("text8").value;
    if(num8==0){
        console.log("No se puede dividir entre 0");
    }else{
        let div=parseFloat(num7)/parseFloat(num8);
        console.log("El resultado es:"+div)
    }
}
