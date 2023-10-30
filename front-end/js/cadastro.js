function enviar(nome, dataCadastro, departamento, aceite) {
  //POST, PUT, GET, DELETE -> verbos HTTP

  const data = {
    nome: nome,
    dataCadastro: dataCadastro,
    departamento: departamento,
  };

  fetch('http://localhost:5196/categorias', {
    method: 'POST',
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      document.getElementById("nome").value = ""
      document.getElementById("dataCadastro").value = ""
      document.getElementById("aceite").checked = false


      Swal.fire('Sucesso', 'Categoria cadastrada com sucesso', 'success');
    })
    .catch((error) => {
      Swal.fire('Erro', 'Houve um erro ao salvar os dados', 'error');
    });
}

function salvar() {
  let nome = document.getElementById('nome').value;
  let dataCadastro = document.getElementById('dataCadastro').value;
  let departamento = document.getElementById('departamento').value;
  let aceite = document.getElementById('aceite').checked;

  let splitDate = dataCadastro.split('-');
  let ano = splitDate[0];
  let mes = splitDate[1];
  let dia = splitDate[2];

  let hoje = new Date();

  let erros = [];
  //verificar se o nome esta completo
  if (nome.indexOf(' ') === -1) {
    erros.push('Preencha o nome completo');
  }
  if (hoje.getFullYear() !== parseInt(ano)) {
    erros.push('O ano tem que ser o ano atual');
  }
  if (!aceite) {
    erros.push('Tem que aceitar os termos');
  }

  if (erros.length == 0) {
    enviar(nome, dataCadastro, departamento, aceite);
  } else {
    Swal.fire('Preencha os campos corretamente', erros.join('<br>'), 'error');
  }

  return false;
}
