const form = document.querySelector('#enviar');

// Saving Data

form.addEventListener('submit', (e) => {
    e.preventDefault();
    database.collection('cliente').add({
        nome: form.nome.value,
        senha: form.senha.value
    });
})