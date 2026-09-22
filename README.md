# Status do Projeto

- Importei as imagens e ícones no assets
- Criei a estrutura básica html, css e js

---
## Estrutura atual do projeto

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

---
## Como o Sistema Vai Funcionar

### Navegação

A aplicação vai ter uma barra lateral com links para navegar entre as páginas:

- Página Inicial
- Livros
- Consulta (Relatórios)
- Usuários
- Cadastrar Usuário
- Emprestar Livro
- Cadastrar Livro
- Devolver Livro
- Botão "Sair" no final da barra

---

## Página Inicial

### Estrutura

**Título:** "Início"  
**Subtítulo:** "Bem-vindo a sua Biblio-Tech!"

### Conteúdo

**3 Cards principais lado a lado:**

1. **Livros Cadastrados** — Mostra a quantidade total de livros cadastrados
2. **Empréstimos Ativos** — Mostra quantos empréstimos estão acontecendo no momento
3. **Usuários Cadastrados** — Mostra a quantidade total de usuários cadastrados

**1 Card maior embaixo — "Empréstimos Recentes"**  
Exibe em uma tabela os empréstimos mais recentes com as colunas:

- Livro (título)
- Usuário (nome)
- Data Empréstimo
- Data Devolução
- Status (Ativo ou Devolvido)

### Como funciona

- **Livros Cadastrados:** atualiza automaticamente toda vez que um livro é cadastrado na tela de "Cadastrar Livro"
    
- **Empréstimos Ativos:**
    
    - Aumenta (+1) toda vez que alguém empresta um livro na tela "Emprestar Livro"
    - Diminui (-1) toda vez que alguém devolve um livro na tela "Devolver Livro"
- **Usuários Cadastrados:** atualiza automaticamente toda vez que um novo usuário é cadastrado na tela "Cadastrar Usuário"
    
- **Tabela Empréstimos Recentes:** atualiza sempre que um empréstimo é feito, mostrando os mais recentes
    

---

## Página: Livros (Catálogo)

### Estrutura

**Título:** "Catálogo de Livros"

### Filtros

Abaixo do título tem um formulário com:

- Campo de pesquisa (Busca por título, autor ou ISBN)
- Dropdown de categoria (começa com "Todas as categorias")
- Dropdown de disponibilidade (Disponível ou Indisponível)
- Botão "Buscar"

### Tabela de Resultados

Mostra os livros encontrados com as colunas:

- Título
- Autor
- Categoria
- Ano
- Disponibilidade (com badge verde para "Disponível" ou cinza para "Indisponível")

### Como funciona

- **Barra de Pesquisa:** O usuário digita o nome do título, autor ou ISBN. A busca é exata e considera maiúsculas/minúsculas.
    
- **Categoria:** Dropdown que permite selecionar uma categoria. Se nenhuma for selecionada, a busca considera todas as categorias.
    
- **Disponibilidade:**
    
    - Um livro fica **disponível** quando não tem empréstimos ativos
    - Um livro fica **indisponível** quando tem empréstimos ativos
    - Se um livro foi cadastrado com quantidade maior que 1, ele continua disponível mesmo com empréstimos, desde que sobre quantidade em estoque
    - Se a quantidade chegar a 0, fica indisponível
- **Botão Buscar:** Busca os livros que combinam com os filtros (não precisa preencher todos os campos). Se encontrar, atualiza a tabela com os resultados. Se não encontrar, mostra mensagem de erro.
    

---

## Página: Consulta (Relatórios)

### Estrutura

**Título:** "Relatório Geral"  
**Descrição:** "Visualize as estatísticas da biblioteca"

### Conteúdo

3 cards principais mostrando:

1. **Total de Empréstimos** — Número total de empréstimos feitos (soma tudo que foi emprestado, ativo ou devolvido)
2. **Usuários Ativos** — Quantos usuários têm empréstimos ativos no momento
3. **Atrasos Registrados** — Quantidade de devoluções que foram feitas com atraso

### Como funciona

- **Total de Empréstimos:** Aumenta (+1) toda vez que alguém faz um novo empréstimo na tela "Emprestar Livro"
    
- **Usuários Ativos:**
    
    - Aumenta (+1) quando um empréstimo é feito
    - Diminui (-1) quando um livro é devolvido
    - Um usuário é ativo se tem pelo menos um empréstimo ativo no momento
- **Atrasos Registrados:**
    
    - Aumenta (+1) na tela "Devolver Livro" quando a data de devolução é **maior** que a data de devolução esperada (aquela registrada no momento do empréstimo)
    - A comparação é feita no momento da devolução

---

## Página: Usuários

### Estrutura

**Título:** "Usuários Cadastrados"  
**Descrição:** "Visualize os usuários cadastrados"

### Conteúdo

- Barra de pesquisa "Pesquisar usuário"
- Botão "Buscar"
- Tabela com colunas: Nome e Email

### Como funciona

- **Barra de Pesquisa:** O usuário digita o nome que quer procurar
    
- **Botão Buscar:** Busca todos os usuários com aquele nome. Pode ter múltiplos resultados (usuários com o mesmo nome).
    
- **Tabela:**
    
    - Antes de buscar, mostra todos os usuários cadastrados
    - Depois de clicar em "Buscar", mostra apenas os usuários que combinam com a pesquisa
    - Cada usuário tem um email único, então se tiver nomes repetidos, dá pra diferenciar pelo email

---

## Página: Cadastrar Usuário

### Estrutura

**Título:** "Cadastrar Usuário"  
**Descrição:** "Preencha os dados do aluno/usuário"

### Formulário

- Campo "Nome" (texto)
- Campo "E-mail" (email)
- Botão "Cadastrar-se"

### Como funciona

- **Nome:** Campo de texto simples. O valor digitado é armazenado com a chave "nome" em um objeto JSON.
    
- **E-mail:** Campo de email. Será armazenado com a chave "email" em um objeto JSON.
    
- **Validações:**
    
    - Os dois campos são obrigatórios
    - O e-mail deve ser um e-mail válido
    - Não pode ter dois usuários com o mesmo e-mail (precisa validar duplicação)
- **Botão Cadastrar-se:** Ao clicar, valida os dados. Se tudo tiver certo, armazena no JSON de usuários e mostra mensagem de sucesso. Se tiver erro, mostra a mensagem de erro na tela.
    

---

## Página: Emprestar Livro

### Estrutura

**Título:** "Emprestar Livro"  
**Descrição:** "Preencha os dados do livro e do usuário"

### Formulário

O formulário tem os seguintes campos:

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

- Botão "Emprestar Livro"

### Como funciona

- **Validações:**
    
    - Todos os campos são obrigatórios
    - Os campos de data devem aceitar só datas válidas
    - Os dados do livro precisam existir no cadastro (se não existir, dá erro)
    - O e-mail do usuário precisa estar cadastrado
    - O livro não pode estar indisponível (sem quantidade em estoque)
- **Ao Emprestar:**
    
    - Os dados são armazenados em um JSON de empréstimos
    - A quantidade do livro no cadastro diminui em 1
    - O status do empréstimo é marcado como "Ativo"
    - A tabela de "Empréstimos Recentes" na página inicial é atualizada
    - Os contadores (Empréstimos Ativos, Total de Empréstimos) são atualizados
- **Se der erro:** Mostra a mensagem de erro na interface (nunca usar alert)
    

---

## Página: Cadastrar Livro

### Estrutura

**Título:** "Cadastro de Livro"  
**Descrição:** "Preencha os dados do livro"

### Formulário

- Título
- Autor
- ISBN
- Editora
- Ano de Publicação
- Categoria
- Sinopse (texto maior)
- Quantidade (número)
- Localização
- Botão "Cadastrar Livro"

### Como funciona

- **Validações:**
    
    - Todos os campos são obrigatórios
    - Cada campo tem um tipo específico de dado (texto, número, etc.)
    - A quantidade deve ser um número maior que 0
- **Ao Cadastrar:**
    
    - Os dados são armazenados em um JSON de livros
    - O campo "Quantidade" registra quantas cópias desse livro existem
    - O contador "Livros Cadastrados" na página inicial atualiza
    - A disponibilidade do livro é calculada automaticamente com base na quantidade e empréstimos ativos
- **Se der erro:** Mostra a mensagem de erro na interface
    

---

## Página: Devolver Livro

### Estrutura

**Título:** "Devolução de Livros"  
**Descrição:** "Preencha os dados do livro e do aluno que está devolvendo"

### Formulário

- Campo "Livro" (título do livro)
- Campo "E-mail" (e-mail do usuário)
- Campo "Data Devolução" (data em que está devolvendo)
- Campo "Usuário" (nome do usuário)
- Botão "Devolver Livro"

### Como funciona

- **Validações:**
    
    - Todos os campos são obrigatórios
    - O livro precisa estar cadastrado
    - O e-mail precisa estar cadastrado
    - O livro, e-mail e usuário precisam corresponder a um empréstimo que está com status "Ativo"
    - A data de devolução não pode ser anterior à data de hoje
- **Ao Devolver:**
    
    - O status do empréstimo muda de "Ativo" para "Devolvido"
    - A quantidade do livro aumenta em 1 (volta ao estoque)
    - O contador "Empréstimos Ativos" diminui em 1
    - Se a data de devolução for **maior** que a data de devolução esperada (da data de empréstimo), o contador "Atrasos Registrados" aumenta em 1
    - A tabela de "Empréstimos Recentes" na página inicial atualiza
- **Se der erro:** Mostra a mensagem de erro na interface
    

---

## Resumo da Lógica de Dados

### Estrutura dos JSONs

```javascript
// Usuários
usuarios = [
  { nome: "João Silva", email: "joao@email.com" }
]

// Livros
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
]

// Empréstimos
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
]
```

### Fluxo de Dados

1. **Cadastrar Usuário** → Adiciona à lista de usuários
2. **Cadastrar Livro** → Adiciona à lista de livros
3. **Emprestar Livro** → Cria um registro em empréstimos (status = "Ativo"), diminui quantidade do livro
4. **Devolver Livro** → Muda status para "Devolvido", aumenta quantidade do livro
5. **Dashboard** → Calcula totais a partir desses JSONs

---

## Notas Importantes

- **Todos os dados são armazenados em memória** (Arrays/Objetos JavaScript). Quando recarregar a página, os dados são perdidos.
- **Nenhum número é fixo no HTML.** Todos os contadores na página inicial e nos relatórios são calculados via JavaScript.
- **Mensagens de erro aparecem na interface**, nunca em alerts.
- **A busca de livros é exata** para título, autor e ISBN (leva em conta maiúsculas/minúsculas).
- **Usuários podem ter o mesmo nome, mas e-mails únicos.**
- **Um livro só fica indisponível se a quantidade em estoque for 0.**

---
# Regras de Negócio 

**RN01 — E-mail de usuário único:** Não é permitido cadastrar dois usuários utilizando o mesmo e-mail.

**RN02 — Disponibilidade para empréstimo:** Um livro não pode ser emprestado quando sua quantidade disponível for igual a 0.

**RN03 — Redução do estoque:** Ao realizar um empréstimo, a quantidade disponível do livro deve diminuir em 1.

**RN04 — Devolução ao estoque:** Ao realizar uma devolução, a quantidade disponível do livro deve aumentar em 1.

**RN05 — Usuário cadastrado:** Somente usuários cadastrados no sistema podem realizar empréstimos.

**RN06 — Livro cadastrado:** O livro precisa existir no cadastro para que um empréstimo possa ser realizado.

**RN07 — Devolução de empréstimo ativo:** Um livro só pode ser devolvido quando existir um empréstimo correspondente com status "Ativo".

## Situações de Exceção

**EX01 — Cadastro de usuário incompleto:** Caso o usuário tente realizar um cadastro sem preencher os campos obrigatórios, o sistema deve impedir o cadastro e exibir uma mensagem de erro na interface.

**EX02 — E-mail duplicado:** Caso o usuário tente cadastrar um e-mail que já esteja cadastrado, o sistema deve impedir o cadastro e informar o problema.

**EX03 — Livro inexistente:** Caso seja informado um livro que não esteja cadastrado durante um empréstimo, o sistema deve impedir a operação e exibir uma mensagem de erro.

**EX04 — Livro indisponível:** Caso o usuário tente emprestar um livro cuja quantidade disponível seja 0, o sistema deve impedir o empréstimo e informar que o livro está indisponível.

**EX05 — Empréstimo inexistente ou já devolvido:** Caso o usuário tente realizar uma devolução sem existir um empréstimo correspondente com status "Ativo", o sistema deve impedir a operação e exibir uma mensagem de erro.




