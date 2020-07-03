// Pegando valores de ID para realizar o print

const teste = document.querySelector('#teste');

// Getting Data

function renderOrcamento(doc) {

    // Elemento principal que irá conter o loop de informação
    let tr = document.createElement('tr');
    tr.id = "tr";

    //Tags que irão aparecer como <td> dentro de <tr>

    let email = document.createElement('td');
    let servico = document.createElement('td');
    let necess = document.createElement('td');
    let tdButton = document.createElement('td');

    // Elemento Botão de acão

    let formButton = document.createElement('form');
    formButton.id = "formdelete";
    formButton.setAttribute('data-id',doc.id);

    let butButton = document.createElement('button');
    butButton.className = "ls-btn-primary-danger ls-ico-remove espacobtn";

    // Valores das variáveis

    email.textContent = doc.data().email;
    servico.textContent = doc.data().servico;
    necess.textContent = doc.data().necessidades;

    // Colocando as tags dentro das outras
    
    formButton.appendChild(butButton);
    
    tdButton.appendChild(formButton);

    tr.appendChild(email);
    tr.appendChild(servico);
    tr.appendChild(necess);
    tr.appendChild(tdButton);


    // Cria a tag <tr> com tudo que irá dentro 

    teste.appendChild(tr);

    butButton.addEventListener('click', (e) => {
        e.stopPropagation;
        let id = e.target.parentElement.getAttribute('data-id');
        database.collection('orcamento').doc(id).delete();
    });
}

database.collection('orcamento').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderOrcamento(doc);
    });
})