window.onload = ()=> {
    let container = document.getElementById("bluesec");
    let tempConv = document.getElementById("tempConv");
    let baseConv = document.getElementById("baseConv");
    let githubExp = document.getElementById("githubExp");
   
    let contbg = "white";
   

   tempConv.addEventListener("mouseover",()=> {
  /*       container.style.backgroundColor = contbg; */
        tempConv.style = "background:#A5FF5E;color:white;font-style:italic";
   });
   tempConv.addEventListener("mouseout",()=> {
   /*  container.style ="background:#001AFF;"; */
    tempConv.style = "background:white;color:black";
});
 tempConv.addEventListener("click",()=> {
     location.href="tempConv.html";
 });

baseConv.addEventListener("mouseover",()=> {
  /*   container.style.backgroundColor = contbg; */
    baseConv.style = "background:#A5FF5E;color:white;font-style:italic";
});
baseConv.addEventListener("mouseout",()=> {
container.style ="background:#001AFF;";
baseConv.style = "background:white;color:black";
});
baseConv.addEventListener("click",()=> {
    location.href="baseConv.html";
});

githubExp.addEventListener("mouseover",()=> {
 /*    container.style.backgroundColor = contbg; */
    githubExp.style = "background:#A5FF5E;color:white;font-style:italic";
});
githubExp.addEventListener("mouseout",()=> {
container.style ="background:#001AFF;";
githubExp.style = "background:white;color:black";
});

githubExp.addEventListener("click",()=>location.href="githubExp.html");



}