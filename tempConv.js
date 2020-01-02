window.onload = ()=> {
    let cel = document.querySelector("#cel input");
    let far = document.querySelector("#far input");

   cel.addEventListener("keyup",(e)=> {
        e.which = e.which || e.keyCode;
        if(e.which == 13) {
            far.value =(9/5)*e.target.value+32;
        }
    });

    far.addEventListener("keyup",(e)=> {
        e.which = e.which || e.keyCode;
        console.log(cel.value);
        if(e.which == 13) {
        cel.value =(5/9)*(e.target.value-32);
        }
    });
};