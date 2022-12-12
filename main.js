const elform = document.querySelector(".noutbok-form");
const elinput = document.querySelectorAll(".input");
const elwrapper=document.querySelector(".wrapper");
let arr=[]


elform.addEventListener("submit", e=>{
    let obj={}
    e.preventDefault();
    for(let i of elinput){
obj[i.name] = i.value;
obj.id=Math.random()*10000;
i.value=""
    }
    arr.push(obj);
    render()
});

function render (){
    elwrapper.innerHTML=``
    for(let i of arr){
        let Card = document.createElement("div");
        Card.id=i.id
        Card.style.border="10p"
        Card.style.padding="20px"
        Card.style.backgroundColor=("rgb(204, 204, 179, 500)")
        Card.style.width = "18rem";
        Card.style.height="30rem"
        Card.classList.add("card")

        Card.innerHTML = `
        <img src="${i.linki}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${i.nomi}</h5>
          <p class="card-text">${i.soni} ta</p>
          <p class="card-text">${i.narxi} $</p>
          <p class="card-text">${i.xotirasi} gb</p>
          <p class="card-text pl-5 bg-info p-2 text-white" >Jami:${i.soni*i.narxi} $ </p>
          <button class="btn btn-dark"  onclick="minus(${i.id})"> -1 </button>
          <button class="btn btn-danger"  onclick="deleted(${i.id})">Delete</button>
          <button class="btn btn-dark" onclick="plus(${i.id})">+1</button>
        </div>
        `
        elwrapper.append(Card);
    }
}
const deleted = (id)=>{
    for(let i=0; i<arr.length; i++){
        if(id==arr[i].id){
            arr.splice(i,1)
        }
    }
    render()
}
const minus =(id)=>{
    for(let i=0; i<arr.length; i++){
        if(id==arr[i].id){
            if(arr[i].soni==0){
                break
            }
arr[i].soni-=1
        }
    }
    render()
}
const plus =(id)=>{
    for(let i=0; i<arr.length; i++){
        if(id==arr[i].id){
arr[i].soni-=-1
        }
    }
    render()
}
