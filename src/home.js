function generateHome() {
    const content = document.querySelector('#content');

    const section = document.createElement('div');
    section.classList.add('home');
    section.setAttribute('id', 'home');

    const span = document.createElement('span');
    span.textContent = "outstanding food";
    section.appendChild(h1);

    const h3 = document.createElement('h3');
    h3.textContent = 'delicious cooking.....  ';
    section.appendChild(h3);

    const img = document.createElement('img');
    img.src = 'images/about-img.png';
    img.setAttribute('id', 'img');
    section.appendChild(img);

    content.appendChild(section);
}

export default generateHome;