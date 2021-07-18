let btn = document.getElementById('btn');
let input1 = document.getElementById('input1');
let new_order = document.getElementById('new_order');
let new_list = document.getElementsByTagName('li');
let leer1 = document.getElementById('leer');
leer2 = "";

btn.addEventListener('click', () => {
    let input2 = input1.value;
    if( input2 == leer2){
        leer1.innerHTML = "you cant give empty order!";
    }else{
        let li = document.createElement('LI');
        li.innerHTML = input2;
        new_order.insertBefore(li, new_order.childNodes[0]);
        input1.value = '';
    }
})
li.addEventListener('click', () =>{
    li.style.textDecoration = "line-through";
})