const form = document.querySelector('#enviarorc');

// Saving Data

form.addEventListener('submit', (e) => {
    e.preventDefault();
    database.collection('orcamento').add({
        nome: form.nome.value,
        email: form.email.value,
        servico: form.servico.value,
        necessidades: form.necessidades.value
    });
})