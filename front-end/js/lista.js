function listar() {
  fetch('http://localhost:5196/categorias', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      renderizar(result);
    })
    .catch((error) => {
      Swal.fire('Erro', 'Houve um erro ao salvar os dados', 'error');
    });
}

function excluir(id){
  fetch('http://localhost:5196/categorias/' + id, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      listar()
    })
    .catch((error) => {
      console.log(error)
      Swal.fire('Erro', 'Houve um erro ao excluir a categoria', 'error');
    });
}

function renderizar(categorias){
  let tabela = document.querySelector("#tabela tbody")
  while(tabela.firstChild){
    tabela.removeChild(tabela.firstChild)
  }

  for(let categoria of categorias) {

    let linha = `
      <tr>
        <td>${categoria.id}</td>
        <td>${categoria.nome}</td>
        <td>${categoria.departamento}</td>
        <td>${categoria.dataCadastro}</td>
        <td>
          <a href="javascript: excluir(${categoria.id})">Excluir</a>
        </td>
      </tr>
    `
    let tr = document.createElement("tr")
    tr.innerHTML = linha

    tabela.appendChild(tr)
  }
}