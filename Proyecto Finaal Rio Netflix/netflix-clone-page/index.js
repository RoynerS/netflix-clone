const users = ['Mayra', 'Royner', 'Angeline'];

const perfiles = document.querySelector('.perfiles');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    const reversedUsers = [...users].reverse();

    reversedUsers.forEach((curElem) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = `<span>${curElem}</span>`;

        button.addEventListener('click', () => {
            console.log(`Button clicked: ${curElem}`);
            
            
            window.location.href = 'Netflix.html';
        });

        perfiles.insertAdjacentElement('afterbegin', button);
    });
};


addIcon.addEventListener('click', () => {
    let userName = prompt('Por favor ingresa tu nombre');

    if(userName != null && !users.includes(userName)){
        users.push(userName);
        console.log(users);
        perfiles.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${userName}</span></button>
        `);
    }else{
        alert('El nombre de usuario ya existe');
    }
})

userIcons();