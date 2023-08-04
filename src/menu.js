import page1 from "./page1";
import page2 from "./page2";
import page3 from "./page3";
import footer from "./footer"

function resetPage(){
    const continer = document.querySelector('#content');
    continer.removeChild(document.querySelector('#container'));
    continer.removeChild(document.querySelector('#foot'));
}

function createButtons(contener){
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');

    button1.innerText = "Home";
    button1.addEventListener('click', ()=>{
        const content = document.querySelector("#content")
        resetPage();
        content.appendChild(page1());
        content.appendChild(footer());
    });

    button2.innerText = "Menu";
    button2.addEventListener('click', ()=>{
        const content = document.querySelector("#content")
        resetPage();
        content.appendChild(page2());
        content.appendChild(footer());
    });

    button3.innerText = "About";
    button3.addEventListener('click', ()=>{
        const content = document.querySelector("#content");
        resetPage();
        content.appendChild(page3());
        content.appendChild(footer());
    });

    contener.appendChild(button1);
    contener.appendChild(button2);
    contener.appendChild(button3);
}

export default function menu(){
    const header = document.createElement('header');
    
    const title = document.createElement('h1');
    title.innerText= "Space Restaruant";

    const menu = document.createElement('div');
    createButtons(menu);
    

    header.appendChild(title);
    header.appendChild(menu);
    return header;
}