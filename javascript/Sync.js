function fetchdata(){

    let p =fetch("https://jsonplaceholder.typicode.com/posts")
    p.then((response)=>{return (response.json().stringify); })
    .then((data)=>{
       let div1 = document.getElementById("innerdiv");
       div1.innerHTML=data.userId;
       let div2 = document.getElementById("innerdiv1");
       div1.innerHTML=data.body;

    })
}

