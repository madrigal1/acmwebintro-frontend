window.onload = ()=> {
    let container = document.getElementById("bluesec");
    let tempConv = document.getElementById("tempConv");
    let baseConv = document.getElementById("baseConv");
    let githubExp = document.getElementById("githubExp");
   const change  = (e) => {
          console.log(e.target);
   }

   tempConv.addEventListener("mouseover",()=> {
        container.style.backgroundColor = "white";
        tempConv.style = "background:#A5FF5E;color:black;border:2px solid black";
   });
   tempConv.addEventListener("mouseout",()=> {
    container.style ="background:#001AFF;";
    tempConv.style = "background:white;color:black";
});


baseConv.addEventListener("mouseover",()=> {
    container.style.backgroundColor = "white";
    baseConv.style = "background:#A5FF5E;color:black;border:2px solid black";
});
baseConv.addEventListener("mouseout",()=> {
container.style ="background:#001AFF;";
baseConv.style = "background:white;color:black";
});

githubExp.addEventListener("mouseover",()=> {
    container.style.backgroundColor = "white";
    githubExp.style = "background:#A5FF5E;color:black;border:2px solid black";
});
githubExp.addEventListener("mouseout",()=> {
container.style ="background:#001AFF;";
githubExp.style = "background:white;color:black";
});



}