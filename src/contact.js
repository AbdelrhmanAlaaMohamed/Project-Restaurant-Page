function generateContact() {
    const content = document.querySelector('#content');

    const section = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = 'Order';
    section.appendChild(h1)

    const div1 = document.createElement('h2');
    div1.textContent = 'Number:';
    section.appendChild(h2);

    const div2 = document.createElement('h2');
    div2.textContent = 'Order Details';
    section.appendChild(h2);

    content.appendChild(section);
}

export default generateContact;