/* initial */

let p1 = document.getElementById('p1');
let li = document.getElementsByTagName('li');
let ul = document.getElementsByTagName('ul');
let div = document.getElementsByTagName('div');
let h1 = document.getElementsByTagName('h1');


/**
 * action
 */

p1.onclick = () => {
    p1.style.color = "red";
    alert(1);
}

li[1].onclick = () => {
    let date = new Date();
    h1[0].innerHTML = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    alert(2);
}

li[2].onclick = () => {
    for(let i = 0;i < 8;i++){
        document.getElementsByClassName('m-item')[i].classList.add("fn-active")
    }
    alert(3);
}

li[3].onclick = () => {
    li[7].remove();
    alert(4);
}

li[4].onclick = () => {
    window.open('https://www.taobao.com/');
    alert(5);
}

li[5].onclick = () => {
    let li_9 = document.createElement('li');
    li_9.setAttribute('class','m-item ');
    li_9.innerHTML = "p9";
    ul[0].append(li_9);
    alert(6);
}

li[6].onclick = () => {
    div[0].style.width = document.body.clientWidth;
    alert(7);
}

