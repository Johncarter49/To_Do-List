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
        li.innerHTML = input2 + `<button class="delete" style='font-size: 20px'><i class='fas fa-trash-alt' ></i></button>`;
        new_order.insertBefore(li, new_order.childNodes[0]);
        input1.value = '';
    }
})


let task = document.getElementById('task');
new_order.addEventListener('click', function(){
    task.style.textDecoration = "line-through";
})

let task_delete = document.querySelectorAll(".delete");
for(let i=0; i<task_delete.length; i++){
    task_delete[i].onclick = function(){
        this.parentNode.remove();
    }
}


// for(let i=0; i<task.length; i++){
//     task[i].onclick = function(){
//         this.classList.toggle('completed');
//     }
// }