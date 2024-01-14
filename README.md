## Campinho Digital: Programação Web Full Stack 2023.2/2024 
- Parte II: Iniciando Backend
  
...

# Projeto de Gerenciamento de Tarefas em Node.js

Este projeto simula um sistema de gerenciamento de tarefas simples usando Node.js e Express.js.

...

## Como Rodar o Projeto

Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

1. **Clone o Repositório:**

- Instale as Dependências:
- cd seu-repositorio
- npm install

Inicie o Servidor:
npm start

O servidor estará rodando em http://localhost:3000.

## Testando os Endpoints usando a ferramenta com o Postman

- GET/tasks: Adiciona uma nova tarefa. Envie um JSON no corpo da requisição.
  - Métodos: POST
  - URL:http://localhost:3000/tasks
  - Corpo (raw JSON)

- No JSON:
{
  "task": "Fazer compras"
}

- incluir o cabeçalho Content-Type: application/json ao enviar requisições POST.

## Arquitetura

A estrutura do projeto segue um padrão MVC (Model-View-Controller) para melhor organização e manutenção do código.

- **`/models`:** Contém os modelos de dados para representar as tarefas.

- **`/routes`:** Define as rotas da API, incluindo o endpoint POST para adicionar tarefas.

- **`/controllers`:** Lida com a lógica de negócios, conectando os modelos às rotas.

- **`/views`:** Não aplicável para este projeto, já que é uma API, mas poderia ser usado em projetos web.

...

## Decisões de Design

### Uso do Express.js

Optei por utilizar o framework Express.js devido à sua simplicidade e eficiência na criação de APIs web em Node.js.

### Estrutura de Dados

Escolhi um modelo simples para representar tarefas, consistindo apenas de um campo de texto para a descrição da tarefa.

...

## Contribuições

Fique à vontade para contribuir ou fazer sugestões para melhorar este projeto. Contribuições podem incluir correções de bugs, novos recursos ou melhorias na documentação.

Substitua "seu-usuario" e "seu-repositorio" pelos detalhes reais do seu repositório no GitHub.

```bash
git add README.md
git commit -m "Adiciona README com instruções de execução"
git push origin main

