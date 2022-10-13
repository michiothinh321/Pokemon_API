let list = document.querySelector('.list')
let text = document.querySelector('.text');
let btn = document.querySelector('.input button')
let listItem= [];
async function api(){
    let api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
    let {results} = await api.json()
    list.innerHTML=''
    results.forEach(async(result,index) => {
        let fakeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}`).then(res=>res.json())  
        console.log(fakeAPI);      
        let li = document.createElement('li')
        let type = fakeAPI.types[0].type.name;
        li.classList.add(`${type}`)
        listItem.push(li);
        li.innerHTML=`
       <div>
       <p>ID: ${fakeAPI.id}</p>
       <p>Height: ${fakeAPI.weight}</p>
       </div>
       
        <img src="${fakeAPI.sprites.other.dream_world.front_default}" alt="">
        <span>${fakeAPI.name}</span>
        <small>Type: ${fakeAPI.types[0].type.name}</small>`
        
        list.appendChild(li)
    });
}
api()


text.addEventListener('input',function(e){
    filler(e.target.value)
})

function filler (name){
    let search  = name.toLowerCase();
    listItem.forEach((item,index)=>{
        if(item.innerText.toLowerCase().includes(search))
        {
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}
