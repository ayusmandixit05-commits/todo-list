/*array=JSON.parse(localStorage.getItem("todo")) || []*/
array=[]
function getValue(){
    array=JSON.parse(localStorage.getItem("todo")) || []
    const ref1=document.querySelector('.in')
    const ref2=document.querySelector('.in2')
    const ref3=document.querySelector('.in3')
    const name1=ref1.value
    const duedate=ref2.value
    const duetime=ref3.value
    array.push(
        {
            name:name1,
            duedate:duedate,
            duetime:duetime
    })
    ref1.value="";
    ref2.value="";
    ref3.value=""
    localStorage.setItem('todo',JSON.stringify(array));
}
function todorender(){
    let todoListHtml=''
    html=''
    for(i=0;i<array.length;i++){
        html+=(`
        <div class='grid1'>
            <p class='cang'>${array[i].name}</p>
            <p class='date'>${array[i].duedate}</p>
            <p class='time'>${array[i].duetime}</p>
            <button class='chan' onclick="deleteItem(${i})">Done</button>
        </div>
        `)
    }
    todoListHtml+=html
    document.querySelector('.res').innerHTML=todoListHtml
}
function deleteItem(i){
    array.splice(i,1);
    localStorage.setItem('todo',JSON.stringify(array));
    todorender();
}
