let btn = document.getElementById('btn');
btn.onmousemove = function(){
    btn.style.backgroundColor = "#23f3bc";
}
btn.onmouseout = function(){
    btn.style.backgroundColor = "#00bc8a";
}

//Section 2 

let list = document.getElementsByClassName('list')[0];
let btnManga =document.getElementById('magna-btn');
btnManga.onclick = function(){
list.style.visibility='visible';
btnManga.innerHTML = 'Show Less';
};
btnManga.ondblclick = function(){
        list.style.visibility='hidden';
        btnManga.innerHTML = 'Learn More';
};

let hover = document.getElementById('hover');
let hoverImg = document.getElementById('hover-img');
let i;
let counter = 0;
hoverImg.onmouseout=function(){
    counter +=1;
    console.log(counter);
    hover.innerHTML = counter;

}
// let hover = document.getElementById('hover');
// let hoverImg = document.getElementById('hover-img');
// let i;
// let counter = 0;
// hoverImg.onmouseout=function(){
//     counter +=1;
//     console.log(counter);
//     hover.innerHTML = counter;

// }



