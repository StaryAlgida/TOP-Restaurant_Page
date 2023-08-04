import menu from "./menu";
import page1 from "./page1";
import footer from "./footer"
import './style.css';
import Background from "./img/background.jpg"

const content = document.querySelector("#content");

window.onload = ()=>{
    content.style.backgroundImage = `url('${Background}')`;
    content.appendChild(menu());
    content.appendChild(page1());
    content.appendChild(footer());
}
