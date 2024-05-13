const display = document.querySelector("#display");
const buttons =document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="backspace"){
         let string = display.innerText.toString();
         display.innerText= string.substr(0,string.length - 1)
        }else if(display.innerText !="" && item.id == "equal"){
            display.innerText = eval(display.innerText);
        }else if(display.innerText== "" && item.id=="equal"){
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.id;
        }
    
    }
})

const calculadoraone= document.querySelector(".theme-toggler")
const calculadoradow= document.querySelector(".calculator")
let isdark = true;

calculadoraone.onclick = ()=>{
    calculadoradow.classList.toggle("dark")
    calculadoraone.classList.toggle("active")
    isdark = !isdark;

}





/*

*/


/*
toString. es para crear una cadenas de caracteres sea # o Letras
sudstr. devuelve los caracteres de una cadena que comienzan en una localización
        su meto es desde el index (0) y la longitud -1 (lenght-1)
eval. realiza la operacion arimetica 
*/