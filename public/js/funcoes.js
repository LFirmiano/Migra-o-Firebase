const form = document.querySelector('#enviar');

// Saving Data

function add(id_controle) {

    //window.alert(id_controle);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        database.collection('cliente').doc(id_controle).set({
            nome: form.nome.value,
            senha: form.senha.value
        });
})

}

database.collection('cliente').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        id_controle = doc.id;
        return id_controle;
    });
    id_controle = parseInt(id_controle) + parseInt(1);
    id_controle = id_controle.toString();
    add(id_controle);
})