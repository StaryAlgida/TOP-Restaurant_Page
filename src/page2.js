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
        <h3>Only this week!!!</h3>
        <p class="price">Price: 12.99$</p>
    </div>`;
    const content2 = document.createElement('div');
    content2.classList.add("samll-container");
    content2.innerHTML = `<h2>Space Toamto Soup</h2>
    <div>
        <img class="food-img" src="${Soup}">
        <h3>Made from fresh moon tomatoes!!!</h3>
        <p class="price">Price: 5.00$</p>
    </div>`;
    const content3 = document.createElement('div');
    content3.classList.add("samll-container");
    content3.innerHTML = `<h2>Supersonic Chicken Wings</h2>
    <div>
        <img class="food-img" src="${Chicken}">
        <h3>Extra crispy!!!</h3>
        <p class="price">Price: 8.00$</p>
    </div>`;

    pageContainer.appendChild(content1);
    pageContainer.appendChild(content2);
    pageContainer.appendChild(content3);
    
    return pageContainer;
}