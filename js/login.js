const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

// função, pode ser escrita dessa maneira
const validateInput = ({ target}) => {
    if (target.value.length > 2){
        button.removeAttribute('disabled'); 
        return;
    } 
        button.setAttribute('disabled', '');
    
}

const handleSubmit = (event) => {
event.preventDefault();
// pegando o valor do input e salvando no localStorage.
localStorage.setItem('player', input.value);
// vamos redirecionar para outra página.s
window.location = 'pages/game.html';

}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);