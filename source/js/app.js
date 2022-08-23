let $=document;
let input=$.querySelector('.form-control')
let btnadd=$.getElementById('btn-save')
let btndel=$.getElementById('btn-delete')
let colors=$.querySelectorAll('.color-box')
let divElem=$.getElementById('listed')

colors.forEach(function(i){
    i.addEventListener('click',function(event){
        input.style.backgroundColor=event.target.style.backgroundColor
    })
})

function add(){
    let p=$.createElement('p')
    let div=$.createElement('div')
    p.className='card-text p-3'
    div.className='card shadow-sm rounded'
    p.innerHTML=input.value
    p.style.backgroundColor=input.style.backgroundColor
    divElem.append(div)
    div.append(p)
    p.addEventListener('click',clickdelete)
}

btnadd.addEventListener('click',add)

btndel.addEventListener('click',function(){
    input.value=''
})

function clickdelete(event){
   event.target.parentElement.remove()
}
$.body.addEventListener('keydown',function(event){
    if(event.keyCode===13){
        add()
    }
})

