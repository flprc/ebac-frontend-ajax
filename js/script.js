const url = 'https://api.github.com/users';
const main = document.getElementById('main');
const userInput = document.getElementById('username');

function updateUserDetails(user) {
    fetch(`${url}/${user}`)
        .then(response => response.json())
        .then(data => {
            const userDetails = `${data.name} possui ${data.public_repos} repositórios públicos no GitHub como ${data.login}`;
            main.innerHTML = userDetails;
        })
        .catch(error => console.error('Erro: ', error.message || error));
}

userInput.addEventListener('focusout', function (event) {
    updateUserDetails(event.target.value);
});
