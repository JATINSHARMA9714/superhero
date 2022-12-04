const baseurl='https://www.superheroapi.com/api.php/2918041138490868'
const images=document.getElementById('image')
const input=document.getElementById('typedtext')
const search=document.getElementById('searchsuperhero')
const getsearchedhero=(named)=>{
    // console.log('hello')
fetch(`${baseurl}/search/${named}`)
.then(response=>response.json())
.then(json=>{
    console.log(json.results[0])
    images.innerHTML=`<img src='${json.results[0].image.url}' height=200 width=200/>`
    images.innerHTML+=`${json.results[0].name}`
})
}
const getrandomhero=(id)=>{
    fetch(`${baseurl}/${id}`)
    .then(response=>response.json())
    .then(json=>{
        console.log(json)
       images.innerHTML=`<img src='${json.image.url}' height=200 width=200/>`
       images.innerHTML+=`${json.name}`
    })
}

const randombutton=document.getElementById('random')
randombutton.addEventListener("click",function(){
    let id=Math.floor(Math.random()*700)+1
    getrandomhero(id)
})
search.addEventListener("click",function(){
    const data=input.value
    console.log(data)
    // console.log('hello')
    getsearchedhero(data)
})