const prompt = require("prompt-sync")();

const { criar, atualizar, remover, listar } = require("./usuario");

while (true) {
  console.log(`
        1. para inserir novo usuário
        2. para listar os usuários cadastrados
        3. para atualizar informações de um usuário]
        4. para remover um usuário
        5. para sair do sistema
        `);
  const opcao = prompt();

  switch (opcao) {
    case "1":
        criar()
      break;
    case "2":
        listar()
      break;
    case "3":
        atualizar()
      break;
    case "4":
        remover()
      break;
    case "5":
        process.exit()
      break;
    default:
        console.log("Opção invalida")
      break;
  }
}
