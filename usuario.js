const prompt = require("prompt-sync")();

const usuarios = [];

let ultimoId = 0;

const emailNaoDuplicado = (email, id) => {
    if(usuarios.find(usuario => usuario.email == email && usuario.id != id)) {
        console.log("Email duplicado")
        return false
    }

    return true
};

const modelo = (id = ++ultimoId) => {
  // Primeira parte do modelo é a leitura dos dados
  const nome = prompt("Digite o nome do usuário: ");
  const email = prompt("Digite o e-mail desse usuário");
  const telefones = [];
  while (true) {
    const telefone = prompt(
      "Digite um número de telefone do usuário, ou 0 para sair: "
    );
    if (telefone == 0) {
      break;
    }
    telefones.push(telefone);
  }

  // Segunda parte do modelo é a validação dos dados
  if (emailNaoDuplicado(email, id)) {
    // Terceira parte do modelo é o retorno
    return {
      nome,
      email,
      telefones,
      id,
    };
  }

  console.log("Falha em realizar a operação");
};

const criar = () => {
  const novo = modelo();

  if (novo) {
    usuarios.push(novo);
    console.log("Usuário criado com sucesso");
  }
};

const listar = () => {
  if (usuarios.length == 0) {
    console.log("Lista de usuários vazia");
    return false;
  } else {
    usuarios.forEach((usuario) => {
      console.log(`
                  ID ${usuario.id}
                  Nome: ${usuario.nome},
                  Email: ${usuario.email}
                  `);

      usuario.telefones.forEach((telefone, indice) => {
        console.log(`Telefone ${indice + 1}: ${telefone}`);
      });
    });
    return true;
  }
};

const atualizar = () => {
    if(listar()) {
        const id = prompt('Qual o ID do usuário que deseja atualizar?')

        const novo = modelo(id)

        const indice = usuarios.findIndex(usuario => id == usuario.id)

        if(indice != -1) {
            usuarios[indice] = novo
        } else {
            console.log('ID inexistente')
        }
    }

};

const remover = () => {
    if(listar()) {
        const id = prompt('Qual o ID do usuário que deseja remover?')

        const indice = usuarios.findIndex(usuario => id == usuario.id)

        if(indice != -1) {
            usuarios.splice(indice, 1)
        } else {
            console.log('ID inexistente')
        }
    }
}

module.exports = {
  criar,
  atualizar,
  remover,
  listar,
}