// Pegando valores de ID para realizar o print

const trcontrole = document.querySelector('#bot');

// Getting data

function renderBotoes(doc) {

    // Elemento principal que irá conter o loop de informação

    let tdButton = document.createElement('td');

    // Elemento Botão de acão

    let formButton = document.createElement('form');
    formButton.action = "#";

    let inputButton = document.createElement('input');
    inputButton.type = "hidden";
    inputButton.value = doc.id;

    let butButton = document.createElement('button');
    butButton.type = "submit";
    butButton.className = "ls-btn-primary-danger ls-ico-remove espacobtn";

    // Colocando as tags dentro das outras

    formButton.appendChild(inputButton);
    formButton.appendChild(butButton);

    tdButton.appendChild(formButton);

    trcontrole.appendChild(tdButton);

}

database.collection('orcamento').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderOrcamento(doc);
    });
})