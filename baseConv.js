window.onload = ()=> {
    const getAns = async (url,settings) => {
        const response = await fetch(url,settings);
        const data = await response.json();
        return data;
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
            let url = `https://acmgokulintro.herokuapp.com/api/baseConv?value=${e.target.value}`;
            let settings = {
               method: 'GET'
            };
           getAns(url,settings)
             .then(ans=> {
                bin.innerHTML = ans.binary;
                octal.innerHTML = ans.octal;
                hexa.innerHTML = ans.hexadecimal;
               }
             );
          
        }
    });
}