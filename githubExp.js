window.onload =()=> {
    const getUserData = async (url,settings)=> {
            let response = await fetch(url,settings);
            let data = response.json();
            return data;
    }
    const input = document.querySelector("#inputProf input");
    const output = document.querySelector("#outputProf"); 
    let outputName = document.querySelector("#outputName");
    let outputPR = document.querySelector("#outputPR");
    input.addEventListener("keyup",(e)=>{
        e.which = e.which | e.keyCode;
        if(e.which == 13) {
            let url = `https://acmgokulintro.herokuapp.com/api/githubExp/${e.target.value}`;
            let settings = {method:'GET'};
            getUserData(url,settings)
                .then(data=>{
                    outputName.innerHTML = "Name:  " + data.name;
                    outputPR.innerHTML = "Public Repos:  "+ data.public_repos;
                    console.log(data);  
                });
        }
    });
    
}