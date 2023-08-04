import Picture from './img/cook.png'
import Map from "./img/map.png";

function content1_create(){
    const content = document.createElement('div');
    content.id = "space-cook-img";
    content.classList.add("samll-container")

    const h1Title = document.createElement('h1');
    h1Title.innerText = "It's me space Cook";

    const img = new Image();
    img.src = Picture;
    img.id = "cook-img";
    
    content.appendChild(h1Title);
    content.appendChild(img);

    return content;
}

function content2_create(){
    const content = document.createElement('div');
    content.classList.add("samll-container");

    const h2 = document.createElement('h2');
    h2.innerText = 'We are open on:';

    const hoursList = ["Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: 8am - 10pm"];

    const ul = document.createElement('ul');
    
    hoursList.forEach(element =>{
        const li = document.createElement('li');
        li.innerText = element;
        ul.appendChild(li);
    })

    content.appendChild(h2);
    content.appendChild(ul);

    return content;
}

function content3_create(){
    const content = document.createElement('div');
    content.classList.add("samll-container");

    const h2 = document.createElement('h2');
    h2.innerText = "Location";

    const p = document.createElement('p');
    p.innerText = "We are here.";

    const img = document.createElement('img');
    img.src = Map;
    img.id = "map-img"

    content.appendChild(h2);
    content.appendChild(p);
    content.appendChild(img);

    return content;
}

export default function page1(){
    const pageContainer = document.createElement('div');
    pageContainer.id = 'container';

    const content1 = content1_create();
    
    const content2 = content2_create();

    const content3 = content3_create();

    pageContainer.appendChild(content1);
    pageContainer.appendChild(content2);
    pageContainer.appendChild(content3);

    return pageContainer;
}
