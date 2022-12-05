const baseurl='https://www.superheroapi.com/api.php/2918041138490868'
const images=document.getElementById('image')
const input=document.getElementById('typedtext')
const search=document.getElementById('searchsuperhero')
const getherostats=(character)=>{
    const statsinfo=Object.keys(character.powerstats).map(status=>{
        return `<p>${status} : ${character.powerstats[status]}</p>`
    })
    // console.log(statsinfo.join(''))
    return statsinfo.join('')
}
const getsearchedhero=(named)=>{
    // console.log('hello')
fetch(`${baseurl}/search/${named}`)
.then(response=>response.json())
.then(json=>{
    // console.log(json.results[0].powerstats)
    let stats=getherostats(json.results[0])
    //     const name=`<h2>${json.name}</h2>`
    //    images.innerHTML=`${name}<img src='${json.image.url}' height=200 width=200/>${stats}`
   let name=`<h2>${json.results[0].name}</h2>`
    images.innerHTML=`${name}<img src='${json.results[0].image.url}' height=200 width=200/>${stats}`
})
}
const getrandomhero=(id)=>{
    fetch(`${baseurl}/${id}`)
    .then(response=>response.json())
    .then(json=>{
        // console.log(json)
        const stats=getherostats(json)
        const name=`<h2>${json.name}</h2>`
       images.innerHTML=`${name}<img src='${json.image.url}' height=200 width=200/><h2>${stats}</h2>`
    })
}

const randombutton=document.getElementById('random')
randombutton.addEventListener("click",function(){
    let id=Math.floor(Math.random()*700)+1
    getrandomhero(id)
})
search.addEventListener("click",function(){
    const data=input.value
    // console.log(data)
    // console.log('hello')
    getsearchedhero(data)
})