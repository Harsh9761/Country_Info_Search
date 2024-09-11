let url = " https://restcountries.com/v3.1/all";
let flag;
async function getcountry(){
    try{
        let info = await axios.get(url);
        console.log(info);
    
        return info;
    }
    catch(error){
        console.log(error);
        
    }
}


let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let inp = document.querySelector("input").value;
    console.log(inp);
    let infos = await getcountry();
    flag = 1;
    show(infos);
    
});

function show(infos){
    let p = document.querySelector('p');
    for(let i = 0;i<infos.data.length;i++){
        
        // p.innerHTML = "";
        
        if(infos.data[i].name.common == document.querySelector("input").value){
            p.innerHTML = ` Name:${infos.data[i].name.common} <br/> 
            Captital: ${infos.data[i].capital[0]}, <br/>
            Continent: ${infos.data[i].continents[0]}
            <br/>
            Independent: ${infos.data[i].independent} <br/>
            Population: ${infos.data[i].population} <br/>
            Area: ${infos.data[i].area} <br/>
            Status: ${infos.data[i].status} <br/>
            Flag Photo: <br/> <img src=${infos.data[i].flags.png} alt="">`;
            flag = 0;
        }
        
    }
    if(flag==1){
        p.innerHTML = "No Country Found!!!";
    }
}
