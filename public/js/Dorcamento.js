function deletar(valorId){

    const formdelete = document.querySelector('#formdelete');

    window.alert(formdelete);

    formdelete.addEventListener('submit', (e) => {
        e.stopPropagation;
        database.collection('orcamento').doc(valorId).delete();
    })

}