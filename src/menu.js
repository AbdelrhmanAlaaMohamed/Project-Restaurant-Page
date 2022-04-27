function generateMenu() {
    const content = document.querySelector('#content');

    const section = document.createElement('div');

    const deserts = document.createElement('h1');
    deserts.textContent = 'sweet deserts'
    section.appendChild(deserts);

    const p1 = document.createElement('p');
    p1.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores. price : $50';
    section.appendChild(p1);

    const drinks = document.createElement('h1');
    drinks.textContent = 'cold drinks'
    section.appendChild(drinks);

    const p2 = document.createElement('p');
    p2.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores. price : $50';
    section.appendChild(p2);

    const dinner = document.createElement('h1');
    dinner.textContent = 'delicious dinner'
    section.appendChild(dinner);

    const p3 = document.createElement('p');
    p3.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores. price : $50';
    section.appendChild(p3);

    content.appendChild(section);
}

export default generateMenu