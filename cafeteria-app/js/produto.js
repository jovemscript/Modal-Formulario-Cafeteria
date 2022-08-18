function carrega(newFoods) {
  localStorage.setItem('novo-produto:produtos', JSON.stringify(newFoods));
}

function cria(produto) {

  const produtos = readAll();

  const novoItem = [...produtos, produto];

  load(novoItem);

  return produto;
}

function buscador() {
  return JSON.parse(localStorage.getItem('novo-produto:produtos'));
}


function atualizar(id, produto) {
  const produtos = readAll();

  const index = produtos.findIndex((produto) => produto.id === id);

  if (index >= 0) {
    produtos[index] = { produto };
  }

  load(produtos);

  return produto;
}



function ler(id) {
  const produtos = readAll();

  const produto = produtos.find((produto) => produto.id === id);

  return produto;
}

function acabar(id) {
  const produtos = readAll();

  const index = produtos.findIndex((produto) => produto.id === id);

  if (index >= 0) {
    produtos.splice(index, 1);
  }

  load(produtos);
}

export default { carrega, cria, buscador, atualizar, acabar, ler };