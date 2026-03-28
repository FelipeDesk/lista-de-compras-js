const inputItem = document.getElementById('input-item');
const listaDeCompras = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');
let contador = 0;

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    
    const valor = inputItem.value.trim();

    if (valor === ''){
        alert('Por favor, adicione algo na lista!');
        return;
    }

    const itemDaLista = document.createElement('li');
    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox-' + contador++;
    const nomeItem = document.createElement('p');
    nomeItem.classList.add('texto-customizado');
    nomeItem.innerText = valor;

    inputCheckbox.addEventListener('click', function(){
        if (inputCheckbox.checked){
            nomeItem.style.textDecoration = 'line-through';
        } else{
            nomeItem.style.textDecoration = 'none';
        }
    })

    nomeItem.addEventListener('click', function(){
        itemDaLista.remove();
        
        verificarListaVazia();
    })

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    const diaDaSemana = new Date().toLocaleDateString('pt-br', { weekday: 'long' });
    const data = new Date().toLocaleDateString('pt-br');
    const hora = new Date().toLocaleTimeString('pt-br', {hour: 'numeric', minute: 'numeric'});

    const dataCompleta = `${diaDaSemana}, (${data}) às ${hora}`;
    const itemData = document.createElement('p');
    itemData.classList.add('texto-data');
    itemData.innerText = dataCompleta;

    itemDaLista.appendChild(itemData);
    listaDeCompras.appendChild(itemDaLista);

    inputItem.value = '';
    verificarListaVazia();
})

const mensagemVazio = document.querySelector('.mensagem-lista');

function verificarListaVazia(){
    const itensDaLista = listaDeCompras.querySelectorAll('li');
    if (itensDaLista.length === 0){
        mensagemVazio.style.display = 'block'
    } else{
        mensagemVazio.style.display = 'none'
    }
}
verificarListaVazia();