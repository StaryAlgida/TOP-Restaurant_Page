import Burger from "./img/burger.png"
import Soup from "./img/tomato_soup.png"
import Chicken from "./img/chicken_wings.png"

export default function page2(){
    const pageContainer = document.createElement('div');
    pageContainer.id = 'container';

    const content1 = document.createElement('div');
    content1.classList.add("samll-container");
    content1.innerHTML = `<h2>Space Burger</h2>
    <div>
        <img class="food-img" src="${Burger}">
        <p><b>Only this week!!!</b></p>
        <p class="price">12.99$</p>
    </div>`;
    const content2 = document.createElement('div');
    content2.classList.add("samll-container");
    content2.innerHTML = `<h2>Space Toamto Soup</h2>
    <div>
        <img class="food-img" src="${Soup}">
        <p><b>Made from fresh tomatoes!!!</b></p>
        <p class="price">5$</p>
    </div>`;
    const content3 = document.createElement('div');
    content3.classList.add("samll-container");
    content3.innerHTML = `<h2>Chicken Wings</h2>
    <div>
        <img class="food-img" src="${Chicken}">
        <p><b>Extra crispy!!!</b></p>
        <p class="price">8$</p>
    </div>`;

    pageContainer.appendChild(content1);
    pageContainer.appendChild(content2);
    pageContainer.appendChild(content3);
    
    return pageContainer;
}