import dataset from "./dataset.js";
import produtos from "./produto.js";
 
const formFood = document.querySelector('#formFood');

function carregaProdutos() {
  if (localStorage.getItem('novo-produto:loaded') !== 'ok') {

    localStorage.setItem('novo-produto:loaded', 'ok');
  }

  else {
    produtos.carrega(dataset);
  };

  let prod = produtos.buscador();

  for (const item of prod ) {

    const itens = document.getElementById('card-deck');
    const card = createFoodCard(item);
    itens.insertAdjacentHTML('beforeend', card);
  }
  
}

function createFoodCard(food) {
  let foodCard = `<div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${food.imagem}" class="card-img-top" alt="${food.nome}">
            <div class="card-body">
                <h5 class="card-title">${food.nome}</h5>
                <p class="card-text">
                    ${food.descricao}
                </p>
            </div>
        </div>
    </div>`;

  

    return foodCard;
  
}



function carregarValores(formComNovoItem, nomeNovoItem, descNovoItem) {

  const capt_Nome = document.querySelector('#nome');
  const capt_Desc = document.querySelector('#descricao');
  const capt_Img = document.querySelector('#img');


  capt_Nome.input.value = nomeNovoItem;
  capt_Desc.input.value = descNovoItem;
  capt_Img.input.value = descNovoItem;
}



const foodForm = document.querySelector('#foodForm');
const carregaFormNovoItem = document.querySelector("#foodModal")
carregaFormNovoItem.addEventListener('click', function() {
  carregarValores('Novo', '', '', '', '');
  foodForm.onsubmit = (e) => {
    e.preventDefault();
    

    let food = Object.fromEntries(new FormData(foodForm));

    const novoItem= produtos.create(food);
    console.log(novoItem);
    const selectItens = document.getElementById('itens');
    const card = createFoodCard(novoItem);
    selectItens.insertAdjacentHTML('beforeend', card);

    var myModalEl = document.getElementById('foodModal');
    var foodModal = bootstrap.Modal.getInstance(myModalEl);
    foodModal.toggle();
  };
})


window.carregaFormNovoItem = carregaFormNovoItem;

carregaProdutos();


