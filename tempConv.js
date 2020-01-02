window.onload = ()=> {
    let cel = document.querySelector("#cel input");
    let far = document.querySelector("#far input");
    let logo = document.getElementById("logo");

    const getConv = async (url,settings)=> {
            const response = await fetch(url,settings);
            const data = await response.json();
            return data;
    }


    logo.addEventListener("click",()=>location.href = "index.html");

   cel.addEventListener("keyup",(e)=> {
        e.which = e.which || e.keyCode;
        if(e.which == 13) {
            let url = `https://acmgokulintro.herokuapp.com/api/tempConv?mode=cf&value=${e.target.value}`;
            let settings = {
               method: 'GET'
            };
            getConv(url,settings)
            .then(data => far.value = data.answer);
        }
    });

    far.addEventListener("keyup",(e)=> {
        e.which = e.which || e.keyCode;
        if(e.which == 13) {
            let url = `https://acmgokulintro.herokuapp.com/api/tempConv?mode=fc&value=${e.target.value}`;
            let settings = {
               method: 'GET'
            };
            getConv(url,settings)
            .then(data => cel.value = data.answer);
        }
    });
};