export default function page3(){
    const pageContainer = document.createElement('div');
    pageContainer.id = 'container';

    const content1 = document.createElement('div');
    content1.innerText = "Tekst 7"
    const content2 = document.createElement('div');
    content2.innerText = "Tekst 8"
    const content3 = document.createElement('div');
    content3.innerText = "Tekst 9"

    pageContainer.appendChild(content1);
    pageContainer.appendChild(content2);
    pageContainer.appendChild(content3);
    
    return pageContainer;
}