import Chef from './img/cook.png'
import Manager from './img/manager.png'
import Waiter from './img/waiter.png'


export default function page2(){
    const pageContainer = document.createElement('div');
    pageContainer.id = 'container';

    const content1 = document.createElement('div');
    content1.classList.add("samll-container");
    content1.innerHTML = `<h2>Chef</h2>
    <div>
        <img class="personel-img" src=${Chef}>
        <div class="presonel-info">
            <p><b>Haris Douglas</b></p>
            <p>Tel: 233-333-333</p>
            <p>Email: harisDouglas@DaBaDee.com</p>
        </div>
    </div>`;
    const content2 = document.createElement('div');
    content2.classList.add("samll-container");
    content2.innerHTML = `<h2>Manager</h2>
    <div>
        <img class="personel-img" src=${Manager}>
        <div class="presonel-info">
            <p><b>A. Olso</b></p>
            <p>Tel: 899-999-999</p>
            <p>Email: aOlso@DaBaDee.com</p>
        </div>
    </div>`;
    const content3 = document.createElement('div');
    content3.classList.add("samll-container");
    content3.innerHTML = `<h2>Waiter</h2>
    <div>
        <img class="personel-img" src=${Waiter}>
        <div class="presonel-info">
            <p><b>I'm blue</b></p>
            <p>Tel: 123-111-111</p>
            <p>Email:IamBlue@DaBaDee.com</p>
        </div>
    </div>`;

    pageContainer.appendChild(content1);
    pageContainer.appendChild(content2);
    pageContainer.appendChild(content3);
    
    return pageContainer;
}