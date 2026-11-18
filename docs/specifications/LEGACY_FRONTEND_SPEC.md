# Legacy Frontend Specification

## 1. Contexto

Este documento registra a especificação funcional e visual de uma versão anterior do frontend do Biblio-Tech.

O conteúdo representa o planejamento da interface, suas páginas, funcionalidades, validações e lógica de manipulação dos dados. As informações foram preservadas como referência histórica do desenvolvimento e não devem ser interpretadas automaticamente como a arquitetura ou implementação atual do sistema.

Na versão documentada, os dados eram manipulados por meio de arrays e objetos JavaScript, com armazenamento em memória.

---

## 2. Estrutura do Projeto

A estrutura de arquivos planejada para essa versão era:

```text
Biblio-Tech/
├── assets/
│   └── icons/
│       ├── cadastrar-livro.png
│       ├── cadastro.png
│       ├── empréstimo.png
│       ├── livros.png
│       ├── logo_bibliotech.PNG
│       ├── logo_home.png
│       ├── lupa.png
│       ├── sair.png
│       ├── setinha_verde.png
│       ├── setinha.png
│       └── usuarios.png
├── css/
│   └── style.css
├── js/
│   └── script.js
├── pages/
│   ├── cadastro-livros.html
│   ├── cadastro-usuarios.html
│   ├── catalogo-livros.html
│   ├── consulta.html
│   ├── devolucao.html
│   ├── emprestimos.html
│   └── usuarios-cadastrados.html
├── index.html
└── README.md
```

---

## 3. Organização da Interface

### 3.1. Navegação

A aplicação teria uma barra lateral com links para navegação entre as páginas:

- Página Inicial
- Livros
- Consulta (Relatórios)
- Usuários
- Cadastrar Usuário
- Emprestar Livro
- Cadastrar Livro
- Devolver Livro
- Botão "Sair", localizado no final da barra lateral.

### 3.2. Página Inicial

**Título:** Início

**Subtítulo:** Bem-vindo a sua Biblio-Tech!

#### Conteúdo

A página inicial teria três cards principais, posicionados lado a lado:

1. **Livros Cadastrados:** quantidade total de livros cadastrados.
2. **Empréstimos Ativos:** quantidade de empréstimos em andamento.
3. **Usuários Cadastrados:** quantidade total de usuários cadastrados.

Abaixo desses cards, haveria um card maior chamado **Empréstimos Recentes**, contendo uma tabela com as seguintes colunas:

- Livro (título)
- Usuário (nome)
- Data Empréstimo
- Data Devolução
- Status (Ativo ou Devolvido)

#### Funcionamento

- **Livros Cadastrados:** o contador seria atualizado automaticamente sempre que um novo livro fosse cadastrado na página "Cadastrar Livro".
- **Empréstimos Ativos:**
  - Aumentaria em 1 sempre que um empréstimo fosse realizado na página "Emprestar Livro".
  - Diminuiria em 1 sempre que um livro fosse devolvido na página "Devolver Livro".
- **Usuários Cadastrados:** o contador seria atualizado automaticamente sempre que um novo usuário fosse cadastrado na página "Cadastrar Usuário".
- **Empréstimos Recentes:** a tabela seria atualizada sempre que um novo empréstimo fosse realizado, exibindo os registros mais recentes.

### 3.3. Página: Livros (Catálogo)

**Título:** Catálogo de Livros

#### Filtros

Abaixo do título, haveria um formulário com:

- Campo de pesquisa por título, autor ou ISBN.
- Dropdown de categoria, iniciado com a opção "Todas as categorias".
- Dropdown de disponibilidade, com as opções "Disponível" e "Indisponível".
- Botão "Buscar".

#### Tabela de Resultados

Os livros encontrados seriam apresentados em uma tabela com as seguintes colunas:

- Título
- Autor
- Categoria
- Ano
- Disponibilidade

A disponibilidade seria representada visualmente por badges:
- Verde para "Disponível".
- Cinza para "Indisponível".

#### Funcionamento

- **Barra de Pesquisa:** o usuário poderia digitar o título, autor ou ISBN. A busca seria exata e consideraria diferenças entre letras maiúsculas e minúsculas.
- **Categoria:** o dropdown permitiria selecionar uma categoria. Caso nenhuma fosse selecionada, a pesquisa consideraria todas as categorias.
- **Disponibilidade:**
  - Um livro seria considerado disponível quando não tivesse empréstimos ativos.
  - Um livro seria considerado indisponível quando tivesse empréstimos ativos.
  - Caso um livro fosse cadastrado com quantidade maior que 1, continuaria disponível mesmo com empréstimos em andamento, desde que ainda houvesse exemplares em estoque.
  - Quando a quantidade disponível chegasse a 0, o livro seria considerado indisponível.
- **Botão Buscar:** realizaria a pesquisa considerando os filtros preenchidos, sem exigir que todos fossem utilizados. Caso encontrasse resultados, a tabela seria atualizada. Caso contrário, seria exibida uma mensagem de erro.

### 3.4. Página: Consulta (Relatórios)

**Título:** Relatório Geral

**Descrição:** Visualize as estatísticas da biblioteca.

#### Conteúdo

A página apresentaria três cards principais:

1. **Total de Empréstimos:** número total de empréstimos realizados, incluindo os ativos e os já devolvidos.
2. **Usuários Ativos:** quantidade de usuários que possuem pelo menos um empréstimo ativo.
3. **Atrasos Registrados:** quantidade de devoluções realizadas após a data prevista.

#### Funcionamento

- **Total de Empréstimos:** aumentaria em 1 sempre que um novo empréstimo fosse realizado na página "Emprestar Livro".
- **Usuários Ativos:**
  - Aumentaria em 1 quando um empréstimo fosse realizado.
  - Diminuiria em 1 quando um livro fosse devolvido.
  - Um usuário seria considerado ativo enquanto tivesse pelo menos um empréstimo ativo.
- **Atrasos Registrados:**
  - Aumentaria em 1 na página "Devolver Livro" quando a data real de devolução fosse posterior à data de devolução esperada, registrada no momento do empréstimo.
  - A comparação seria realizada no momento da devolução.

### 3.5. Página: Usuários

**Título:** Usuários Cadastrados

**Descrição:** Visualize os usuários cadastrados.

#### Conteúdo

- Barra de pesquisa com o texto "Pesquisar usuário".
- Botão "Buscar".
- Tabela com as colunas:
  - Nome
  - Email

#### Funcionamento

- **Barra de Pesquisa:** o usuário poderia digitar o nome que deseja procurar.
- **Botão Buscar:** realizaria a busca de todos os usuários que correspondessem ao nome informado. Poderia haver múltiplos resultados para nomes iguais.
- **Tabela:**
  - Antes de realizar uma pesquisa, exibiria todos os usuários cadastrados.
  - Após clicar em "Buscar", exibiria apenas os usuários correspondentes à pesquisa.
  - Como cada usuário teria um email único, seria possível diferenciar usuários com nomes iguais por meio do email.

### 3.6. Página: Cadastrar Usuário

**Título:** Cadastrar Usuário

**Descrição:** Preencha os dados do aluno/usuário.

#### Formulário

- Campo "Nome" (texto).
- Campo "E-mail" (email).
- Botão "Cadastrar-se".

#### Funcionamento

- **Nome:** campo de texto simples. O valor digitado seria armazenado com a chave `nome` em um objeto JSON.
- **E-mail:** campo de email. O valor digitado seria armazenado com a chave `email` em um objeto JSON.
- **Validações:**
  - Os dois campos seriam obrigatórios.
  - O email deveria apresentar um formato válido.
  - Não seria permitido cadastrar dois usuários com o mesmo email.
- **Botão Cadastrar-se:** ao clicar, os dados seriam validados. Caso estivessem corretos, seriam armazenados no JSON de usuários e uma mensagem de sucesso seria exibida. Caso contrário, uma mensagem de erro seria apresentada na interface.

### 3.7. Página: Emprestar Livro

**Título:** Emprestar Livro

**Descrição:** Preencha os dados do livro e do usuário.

#### Formulário

**Dados do Livro:**

- Título
- Autor
- ISBN
- Editora
- Ano de Publicação
- Categoria
- Localização

**Dados do Usuário:**

- Nome do Usuário
- E-mail do Usuário

**Datas:**

- Data Empréstimo
- Data Devolução

**Ação:**

- Botão "Emprestar Livro".

#### Funcionamento

**Validações:**

- Todos os campos seriam obrigatórios.
- Os campos de data deveriam aceitar somente datas válidas.
- Os dados do livro precisariam existir no cadastro.
- O email do usuário precisaria estar cadastrado.
- O livro não poderia estar indisponível, ou seja, sem quantidade disponível em estoque.

**Ao realizar o empréstimo:**

- Os dados seriam armazenados em um JSON de empréstimos.
- A quantidade disponível do livro no cadastro diminuiria em 1.
- O status do empréstimo seria definido como "Ativo".
- A tabela "Empréstimos Recentes", na página inicial, seria atualizada.
- Os contadores "Empréstimos Ativos" e "Total de Empréstimos" seriam atualizados.

**Tratamento de erros:**

As mensagens de erro seriam exibidas na interface, sem utilizar `alert()`.

### 3.8. Página: Cadastrar Livro

**Título:** Cadastro de Livro

**Descrição:** Preencha os dados do livro.

#### Formulário

- Título
- Autor
- ISBN
- Editora
- Ano de Publicação
- Categoria
- Sinopse (texto maior)
- Quantidade (número)
- Localização
- Botão "Cadastrar Livro".

#### Funcionamento

**Validações:**

- Todos os campos seriam obrigatórios.
- Cada campo deveria receber um tipo específico de dado, como texto ou número.
- A quantidade deveria ser um número maior que 0.

**Ao cadastrar:**

- Os dados seriam armazenados em um JSON de livros.
- O campo "Quantidade" registraria o número de cópias daquele livro.
- O contador "Livros Cadastrados", na página inicial, seria atualizado.
- A disponibilidade seria calculada automaticamente com base na quantidade disponível e nos empréstimos ativos.

**Tratamento de erros:**

As mensagens de erro seriam exibidas diretamente na interface.

### 3.9. Página: Devolver Livro

**Título:** Devolução de Livros

**Descrição:** Preencha os dados do livro e do aluno que está devolvendo.

#### Formulário

- Campo "Livro" (título do livro).
- Campo "E-mail" (email do usuário).
- Campo "Data Devolução" (data em que o livro está sendo devolvido).
- Campo "Usuário" (nome do usuário).
- Botão "Devolver Livro".

#### Funcionamento

**Validações:**

- Todos os campos seriam obrigatórios.
- O livro precisaria estar cadastrado.
- O email precisaria estar cadastrado.
- O livro, email e usuário precisariam corresponder a um empréstimo com status "Ativo".
- A data de devolução não poderia ser anterior à data atual.

**Ao realizar a devolução:**

- O status do empréstimo mudaria de "Ativo" para "Devolvido".
- A quantidade disponível do livro aumentaria em 1, retornando ao estoque.
- O contador "Empréstimos Ativos" diminuiria em 1.
- Caso a data real de devolução fosse posterior à data esperada, o contador "Atrasos Registrados" aumentaria em 1.
- A tabela "Empréstimos Recentes", na página inicial, seria atualizada.

**Tratamento de erros:**

As mensagens de erro seriam exibidas diretamente na interface.

---

## 4. Lógica de Dados da Versão Anterior

### 4.1. Estrutura dos JSONs

Na especificação anterior, os dados seriam organizados em três estruturas principais, representadas por arrays de objetos JavaScript.

**Usuários**

```javascript
usuarios = [
  {
    nome: "João Silva",
    email: "joao@email.com"
  }
];
```

**Livros**

```javascript
livros = [
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    isbn: "123456",
    editora: "Editora X",
    ano: 1899,
    categoria: "Clássicos",
    sinopse: "...",
    quantidade: 5,
    localizacao: "Estante 1 - Prateleira 2"
  }
];
```

**Empréstimos**

```javascript
emprestimos = [
  {
    livro: "Dom Casmurro",
    usuario: "João Silva",
    email: "joao@email.com",
    dataEmprestimo: "02/08/2026",
    dataDevolucaoEsperada: "02/09/2026",
    dataDevolucaoReal: null,
    status: "Ativo" // ou "Devolvido"
  }
];
```

### 4.2. Fluxo de Dados

O fluxo de operações previsto era:

1. **Cadastrar Usuário:** adicionaria um novo registro à lista de usuários.
2. **Cadastrar Livro:** adicionaria um novo registro à lista de livros.
3. **Emprestar Livro:** criaria um registro na lista de empréstimos, definiria seu status como "Ativo" e diminuiria a quantidade disponível do livro.
4. **Devolver Livro:** alteraria o status do empréstimo para "Devolvido" e aumentaria a quantidade disponível do livro.
5. **Dashboard:** calcularia os totais e indicadores com base nos dados armazenados nos arrays.

---

## 5. Notas Importantes da Especificação Anterior

- **Armazenamento em memória:** todos os dados seriam armazenados em arrays e objetos JavaScript. Ao recarregar a página, os dados seriam perdidos.
- **Contadores dinâmicos:** nenhum número seria fixado diretamente no HTML. Todos os contadores da página inicial e dos relatórios seriam calculados via JavaScript.
- **Mensagens de erro:** seriam exibidas na interface, sem utilizar `alert()`.
- **Busca de livros:** seria exata para título, autor e ISBN, considerando diferenças entre letras maiúsculas e minúsculas.
- **Usuários:** poderiam ter nomes iguais, mas cada email deveria ser único.
- **Disponibilidade:** um livro somente seria considerado indisponível quando sua quantidade disponível chegasse a 0.

---

## 6. Referência

Este documento deve ser consultado como registro da especificação anterior do frontend.

As estruturas de dados, os mecanismos de armazenamento e os comportamentos descritos refletem o planejamento daquela versão. Alterações posteriores na arquitetura, na integração com o backend ou no banco de dados devem ser documentadas nos respectivos documentos técnicos do projeto.