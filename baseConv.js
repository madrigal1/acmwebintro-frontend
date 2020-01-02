window.onload = ()=> {
    const convertor = (dec,base)=> {
        return Number(dec).toString(base).toUpperCase();
    }
    let input = document.querySelector("#mainbase input");
    let bin = document.querySelector("#binary div");
    let octal = document.querySelector("#octal div");
    let hexa = document.querySelector("#hexadecimal div");
    let logo = document.getElementById("logo");


    logo.addEventListener("click",()=>location.href = "index.html");

    input.addEventListener("keyup",(e)=>{
        e.which = e.which|e.keyCode;
        if(e.which == 13) {
            console.log(convertor(e.target.value,2));
            bin.innerHTML =  convertor(e.target.value,2);
            octal.innerHTML = convertor(e.target.value,8);
            hexa.innerHTML = convertor(e.target.value,16);
        }
    });
}