# Documentação — Modelo Conceitual do Diagrama Entidade-Relacionamento da Biblioteca-BD

## 1. Visão geral

O modelo conceitual representa a estrutura de dados do sistema **Biblio-BD**, um sistema de gerenciamento de biblioteca responsável pelo cadastro de usuários, livros, categorias, exemplares do acervo, empréstimos e devoluções, feito a partir de um projeto anterior que usava banco de dados não relacional.

A modelagem foi construída utilizando o modelo **Entidade-Relacionamento (ER)**, representado graficamente por meio do **Diagrama Entidade-Relacionamento (DER)**.

Uma decisão importante da modelagem foi separar o conceito de **livro** do conceito de **exemplar físico do livro**. Para isso, foi criada a entidade `ACERVO`.

Essa separação permite representar corretamente uma situação comum em bibliotecas: um mesmo livro pode possuir vários exemplares físicos, sendo que alguns podem estar disponíveis e outros emprestados.

---

# 2. Entidades

O modelo conceitual possui quatro entidades principais:

- `USUARIO`
    
- `LIVRO`
    
- `CATEGORIA`
    
- `ACERVO`
    

---

## 2.1 USUARIO

Representa as pessoas cadastradas no sistema e que podem realizar empréstimos.

### Atributos

|Atributo|Tipo conceitual|Observação|
|---|---|---|
|**id_usuario**|Identificador|Identifica unicamente o usuário|
|nome|Texto|Nome do usuário|
|email|Texto|E-mail do usuário|

O atributo `id_usuario` é o identificador da entidade e deve ser representado como atributo-chave no diagrama.

O `email` também deve ser único no sistema, porém continua sendo um atributo de `USUARIO`, não o identificador principal.

---

## 2.2 LIVRO

Representa a **obra ou título bibliográfico**, independentemente da quantidade de exemplares físicos existentes na biblioteca.

### Atributos

| Atributo       | Tipo conceitual | Observação               |
| -------------- | --------------- | ------------------------ |
| **id_livro**   | Identificador   | Identifica o livro       |
| titulo         | Texto           | Título da obra           |
| autor          | Texto           | Autor da obra            |
| isbn           | Texto           | ISBN do livro            |
| editora        | Texto           | Editora responsável      |
| ano_publicacao | Inteiro         | Ano de publicação        |
| sinopse        | Texto longo     | Descrição/resumo da obra |

### Decisão de modelagem

Os atributos relacionados à quantidade e disponibilidade **não ficam mais em** `**LIVRO**`.

Anteriormente, seria possível representar:

```
quantidade_total
quantidade_disponivel
disponibilidade
```

Porém, essa abordagem não identifica individualmente os exemplares físicos.

Com a criação da entidade `ACERVO`, cada exemplar passa a ser representado separadamente.

---

## 2.3 CATEGORIA

Representa a categoria à qual um livro pertence.

### Atributos

|Atributo|Tipo conceitual|Observação|
|---|---|---|
|**id_categoria**|Identificador|Identifica a categoria|
|nome|Texto|Nome da categoria|

Uma categoria pode ser utilizada por diversos livros.

Exemplo:

```
Categoria: Romance

├── Dom Casmurro
├── Orgulho e Preconceito
└── ...
```

---

## 2.4 ACERVO

Representa os **exemplares físicos** que a biblioteca possui de determinado livro.

Essa entidade foi adicionada para solucionar a questão da disponibilidade e permitir o controle individual dos exemplares.

### Atributos

| Atributo      | Tipo conceitual | Observação                                         |
| ------------- | --------------- | -------------------------------------------------- |
| **id_acervo** | Identificador   | Identifica individualmente o exemplar              |
| status        | Texto           | Indica se o exemplar está disponível ou emprestado |
| localizacao   | Texto           | Local onde o exemplar está armazenado              |

### Exemplo

Um único livro pode possuir vários exemplares:

```
LIVRO
Dom Casmurro
       |
       ├── ACERVO 1 → Disponível
       ├── ACERVO 2 → Emprestado
       ├── ACERVO 3 → Disponível
       └── ACERVO 4 → Emprestado
```

Nesse exemplo, o livro possui quatro exemplares físicos, sendo dois disponíveis e dois emprestados.

Dessa forma, não é necessário armazenar diretamente em `LIVRO` uma quantidade de exemplares disponíveis.

---

# 3. Relacionamentos

O modelo possui três relacionamentos principais:

- `CLASSIFICA`
    
- `POSSUI`
    
- `EMPRESTA`
    

---

## 3.1 CLASSIFICA

Relaciona `CATEGORIA` com `LIVRO`.

```
CATEGORIA ─── CLASSIFICA ─── LIVRO
```

### Cardinalidade

```
CATEGORIA (0,N) ─── CLASSIFICA ─── (1,1) LIVRO
```

### Interpretação

Uma categoria pode estar associada a nenhum ou vários livros.

Um livro pertence obrigatoriamente a uma única categoria.

Exemplo:

```
CATEGORIA
Romance
    |
    ├── Dom Casmurro
    ├── Livro B
    └── Livro C
```

---

# 3.2 POSSUI

Relaciona `LIVRO` com `ACERVO`.

```
LIVRO ─── POSSUI ─── ACERVO
```

### Cardinalidade

```
LIVRO (1,N) ─── POSSUI ─── (1,1) ACERVO
```

### Interpretação

Um livro possui um ou vários exemplares físicos no acervo.

Cada exemplar do acervo pertence a exatamente um livro.

Exemplo:

```
LIVRO
Dom Casmurro
    |
    ├── ACERVO 001
    ├── ACERVO 002
    ├── ACERVO 003
    └── ACERVO 004
```

Essa relação é importante porque permite separar:

**Livro:**

> A obra "Dom Casmurro".

**Acervo:**

> Os exemplares físicos de "Dom Casmurro" que a biblioteca possui.

---

# 3.3 EMPRESTA

Relaciona `USUARIO` com `ACERVO`.

```
USUARIO ─── EMPRESTA ─── ACERVO
```

O empréstimo é realizado sobre um **exemplar específico**, e não diretamente sobre o livro.

### Cardinalidade

```
USUARIO (0,N) ─── EMPRESTA ─── (0,N) ACERVO
```

### Interpretação

Um usuário pode realizar nenhum ou vários empréstimos ao longo do tempo.

Um exemplar pode participar de nenhum ou vários empréstimos ao longo de sua existência.

Um exemplar, entretanto, não deve possuir mais de um empréstimo ativo simultaneamente. Essa é uma regra de negócio controlada pelo sistema.

---

# 4. Atributos do relacionamento EMPRESTA

O relacionamento `EMPRESTA` possui informações próprias sobre cada ocorrência do empréstimo.

### Atributos

| Atributo                | Tipo conceitual | Observação                                        |
| ----------------------- | --------------- | ------------------------------------------------- |
| **id_emprestimo**       | Identificador   | Identifica o empréstimo                           |
| data_emprestimo         | Data            | Data em que o empréstimo foi realizado            |
| data_devolucao_esperada | Data            | Data prevista para devolução                      |
| data_devolucao_real     | Data            | Data em que o exemplar foi efetivamente devolvido |
| status                  | Texto           | Situação do empréstimo                            |

Esses atributos pertencem ao **empréstimo**, e não diretamente ao usuário ou ao exemplar.

Por exemplo:

```
João ─── EMPRESTA ─── Exemplar 002
              |
              ├── id_emprestimo
              ├── data_emprestimo
              ├── data_devolucao_esperada
              ├── data_devolucao_real
              └── status
```

Isso permite registrar diferentes empréstimos realizados pelo mesmo usuário ao longo do tempo.

---

# 5. Diferença entre LIVRO e ACERVO

Essa é uma das principais decisões da modelagem.

## LIVRO

Representa a obra:

```
LIVRO
────────────────────
Dom Casmurro
Machado de Assis
Editora X
1899
ISBN...
```

## ACERVO

Representa os exemplares físicos dessa obra:

```
ACERVO
────────────────────
Exemplar 001 → Disponível
Exemplar 002 → Emprestado
Exemplar 003 → Disponível
Exemplar 004 → Emprestado
```

Portanto:

```
              LIVRO
                |
              POSSUI
                |
                N
              ACERVO
```

Essa separação permite controlar individualmente os exemplares.

---

# 6. Controle da disponibilidade

Com a entidade `ACERVO`, a disponibilidade deixa de ser uma informação armazenada diretamente em `LIVRO`.

Cada exemplar possui seu próprio `status`.

Exemplo:

```
ACERVO

id_acervo | status
----------|------------
1         | Disponível
2         | Emprestado
3         | Disponível
4         | Emprestado
```

Nesse caso:

- Total de exemplares: **4**
    
- Exemplares disponíveis: **2**
    
- Exemplares emprestados: **2**
    

Essas informações podem ser obtidas a partir dos registros de `ACERVO`.

Portanto, não é necessário manter em `LIVRO`:

```
quantidade_total
quantidade_disponivel
disponibilidade
```

Isso evita armazenar informações que podem ser obtidas a partir dos próprios exemplares.

---

# 7. Estrutura geral do DER

A estrutura conceitual final pode ser representada da seguinte maneira:

```
                         ┌───────────────┐
                         │   CATEGORIA   │
                         ├───────────────┤
                         │ id_categoria  │
                         │ nome          │
                         └───────┬───────┘
                                 │
                              (0,N)
                                 │
                            CLASSIFICA
                                 │
                              (1,1)
                                 │
                         ┌───────▼───────┐
                         │     LIVRO     │
                         ├───────────────┤
                         │ id_livro      │
                         │ titulo        │
                         │ autor         │
                         │ isbn          │
                         │ editora       │
                         │ ano_publicacao│
                         │ sinopse       │
                         └───────┬───────┘
                                 │
                              (1,N)
                                 │
                               POSSUI
                                 │
                              (1,1)
                                 │
                         ┌───────▼───────┐
                         │    ACERVO     │
                         ├───────────────┤
                         │ id_acervo     │
                         │ status        │
                         │ localizacao   │
                         └───────┬───────┘
                                 │
                              (0,N)
                                 │
                              EMPRESTA
                                 │
                              (0,N)
                                 │
                         ┌───────▼───────┐
                         │    USUARIO    │
                         ├───────────────┤
                         │ id_usuario    │
                         │ nome          │
                         │ email         │
                         └───────────────┘
```

O relacionamento `EMPRESTA` possui os seguintes atributos:

```
id_emprestimo
data_emprestimo
data_devolucao_esperada
data_devolucao_real
status
```

---

# 8. Resumo das cardinalidades

|Relacionamento|Cardinalidade|
|---|---|
|CATEGORIA — CLASSIFICA — LIVRO|CATEGORIA (0,N) ↔ LIVRO (1,1)|
|LIVRO — POSSUI — ACERVO|LIVRO (1,N) ↔ ACERVO (1,1)|
|USUARIO — EMPRESTA — ACERVO|USUARIO (0,N) ↔ ACERVO (0,N)|

---

# 9. Decisão final da modelagem

A modelagem utiliza quatro entidades:

```
USUARIO
LIVRO
CATEGORIA
ACERVO
```

e três relacionamentos:

```
CLASSIFICA
POSSUI
EMPRESTA
```

A principal decisão foi separar `LIVRO` de `ACERVO`.

`LIVRO` representa a obra cadastrada, enquanto `ACERVO` representa cada exemplar físico disponível na biblioteca. Dessa forma, o sistema consegue controlar individualmente quais exemplares estão disponíveis, quais estão emprestados e onde cada exemplar está localizado.

O empréstimo é realizado entre `USUARIO` e `ACERVO`, pois o usuário não recebe apenas a informação abstrata de um livro: ele recebe um **exemplar físico específico**.

Essa estrutura também permite que um mesmo título possua vários exemplares e que cada exemplar tenha seu próprio estado de disponibilidade.