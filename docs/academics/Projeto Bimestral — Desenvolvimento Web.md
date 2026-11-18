# Projeto Bimestral — Desenvolvimento Web - Etec

Esse documento apresenta a proposta acadêmica original do projeto

# 1. O DESAFIO

Cada grupo deverá desenvolver um **sistema web interativo**, utilizando exclusivamente:

- HTML
    
- CSS
    
- JavaScript
    

O projeto deverá solucionar um **problema real** relacionado a uma área temática escolhida pela equipe.

O objetivo principal é aplicar de forma prática os conhecimentos consolidados em aula, construindo uma aplicação que possua:

- Interface estruturada e responsiva;
    
- Design organizado e acessível;
    
- Interação avançada com o usuário;
    
- Manipulação dinâmica do DOM;
    
- Tratamento de eventos nativos;
    
- Formulários com validação rigorosa;
    
- Manipulação de estruturas de dados (JS);
    
- Filtros e mecanismos de pesquisa;
    
- Exibição e cálculo de dados dinâmicos;
    
- Aplicação de regras de negócio;
    
- Tratamento de erros e exceções.
    

> ⚠️ **Atenção:** O projeto não deverá ser apenas um site institucional ou estático. A proposta exigida é o desenvolvimento de uma **verdadeira aplicação web interativa e funcional**.

---

# 2. FORMAÇÃO DOS GRUPOS

- Grupos compostos estritamente por **2 a 4 alunos**.
    
- **Participação coletiva:** todos os integrantes deverão participar ativamente do desenvolvimento do código.
    
- **Domínio do projeto:** todos deverão conhecer integralmente o funcionamento do sistema.
    
    - O professor realizará perguntas individuais durante a avaliação.
        
- **Exclusividade:** dois grupos não poderão apresentar sistemas com a mesma proposta exata ou código idêntico.
    

---

# 3. TEMAS SUGERIDOS

Cada grupo deverá escolher um dos 20 temas listados abaixo ou propor um tema próprio aprovado pelo professor.

|Nº|Tema|Descrição|
|--:|---|---|
|01|Clínica Médica|Cadastro de pacientes, médicos e consultas|
|02|Biblioteca|Cadastro de livros, usuários e empréstimos|
|03|Restaurante|Cardápio, clientes e controle de pedidos|
|04|Mercado|Produtos, categorias e controle de estoque|
|05|Pet Shop|Animais, clientes e agendamento de serviços|
|06|Academia|Alunos, planos e ficha de atividades|
|07|Hotel|Quartos, hóspedes e reservas|
|08|Estacionamento|Veículos, vagas e controle de entrada/saída|
|09|Cinema|Filmes, sessões e reserva de assentos|
|10|Game Center|Jogadores, jogos e placar de pontuações|
|11|Finanças Pessoais|Receitas, despesas e categorias|
|12|Agência de Turismo|Destinos, clientes e viagens|
|13|Imobiliária|Imóveis, clientes e negociações|
|14|Recursos Humanos|Funcionários, setores e cargos|
|15|Transporte|Veículos, passageiros e rotas/viagens|
|16|Plataforma Musical|Artistas, músicas e playlists|
|17|Loja Virtual|Produtos, clientes e carrinho de compras|
|18|Sistema Acadêmico|Alunos, disciplinas e notas/frequência|
|19|Reciclagem|Materiais, pontos de coleta e usuários|
|20|Organização de Eventos|Eventos, participantes e inscrições|

## Tema próprio

O grupo poderá propor outro tema não contido na lista, desde que submetido previamente à **validação e aprovação do professor**.

---

# 4. ESTRUTURA DO SISTEMA

O projeto deverá possuir no mínimo **4 telas ou seções funcionais** bem delineadas.

### Arquitetura de navegação sugerida

```text
┌─────────────────────────────────────────────────────────┐
│ LOGO                                                    │
├─────────────────────────────────────────────────────────┤
│ [Início] │ [Cadastro] │ [Consulta] │ [Relatórios]      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│                 CONTEÚDO DA PÁGINA                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

As telas/seções podem variar conforme o tema escolhido.

### Exemplos

- Dashboard
    
- Cadastro
    
- Consulta
    
- Pesquisa
    
- Relatórios
    
- Perfil
    
- Carrinho
    
- Agendamento
    
- Configurações
    

---

# 5. REQUISITOS DE HTML E CSS

## HTML Semântico

Uso correto de tags como:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

## Separação de responsabilidades

Todo o código CSS deve estar em **arquivo externo**.

Exemplo:

```text
style.css
```

## Design & Usabilidade

O projeto deverá possuir:

- Layout limpo;
    
- Hierarquia visual clara;
    
- Botões estilizados de forma padronizada;
    
- Campos de formulário estilizados de forma padronizada.
    

## Responsividade básica

A interface deve se adaptar adequadamente para navegação em:

- Computadores;
    
- Celulares;
    
- Tablets.
    

---

# 6, 7 & 8. REQUISITOS TÉCNICOS: JAVASCRIPT, DOM E EVENTOS

O JavaScript deve desempenhar **papel central** no funcionamento da aplicação.

A avaliação verificará os seguintes mínimos quantitativos e qualitativos:

|Categoria|Mínimo exigido|Exemplos de aplicação prática|
|---|--:|---|
|Funcionalidades JS|**8**|Cadastrar, excluir, editar, pesquisar, filtrar, calcular valores, alterar status, atualizar relatórios, gerar mensagens dinâmicas|
|Manipulações DOM|**8**|Alterar `textContent`, `innerHTML`, modificar atributos e classes CSS, criar/remover elementos via `createElement`/`remove`, alternar visibilidade, atualizar tabelas/cards|
|Eventos Nativos|**6**|`click`, `submit`, `input`, `change`, `mouseover`, `keydown`|

## Regra de Ouro do DOM

> Não basta utilizar JavaScript apenas para emitir alertas com `alert("Olá!")`.

O JavaScript deve **modificar efetivamente e dinamicamente** a estrutura e a interface visual da página.

---

# 9 & 10. FORMULÁRIOS E VALIDAÇÃO DE DADOS

A aplicação deve conter pelo menos **2 formulários funcionais completos**.

### Exemplo de estrutura visual mínima

```text
CADASTRO DE CLIENTE

Nome:      [________________________________________]

E-mail:    [________________________________________]

Telefone:  [________________________________________]

Categoria: [ Selecione uma opção ▼ ]

           [ CADASTRAR ]
```

## Validações obrigatórias

Mínimo de **8 regras de validação**.

Entre elas:

- Verificação de campos obrigatórios/vazios;
    
- Formato válido de e-mail;
    
- Bloqueio de números negativos ou fora da faixa permitida (mínimo/máximo);
    
- Prevenção de cadastros duplicados (ex.: CPF, ID ou E-mail já existente);
    
- Tratamento de busca/consulta por registro inexistente;
    
- Seleção obrigatória em campos do tipo `<select>`.
    

## Mensagens de erro

Todas as mensagens de erro ou validação devem ser exibidas **diretamente na interface**.

Exemplos:

- Banners;
    
- Modais;
    
- Mensagens abaixo dos campos.
    

---

# 11 & 12. MANIPULAÇÃO DE DADOS, PESQUISA E FILTROS

Os dados do sistema devem ser armazenados e manipulados **em memória**, através de **Arrays e Objetos do JavaScript**.

### Exemplo

```javascript
const alunos = [
  { nome: "Ana", idade: 17, curso: "DS" },
  { nome: "Kaue", idade: 18, curso: "DS" }
];
```

## Operações obrigatórias

O sistema deve permitir realizar operações completas (**CRUD**) sobre essas estruturas de dados:

- Adicionar;
    
- Consultar;
    
- Editar;
    
- Excluir;
    
- Pesquisar;
    
- Filtrar;
    
- Contar;
    
- Calcular.
    

## Ferramenta de Pesquisa e Filtro

Deverá permitir filtrar os resultados **em tempo real** utilizando pelo menos **2 critérios simultâneos**.

Exemplos:

```text
Termo digitado
+
Categoria selecionada
+
Status
```

---

# 13 & 14. DASHBOARD E RELATÓRIOS DINÂMICOS

A aplicação deve apresentar um **Dashboard funcional** com cards de métricas e uma seção dedicada a relatórios.

### Exemplo

```text
┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐
│        120        │ │        35         │ │        08         │
│     CLIENTES      │ │      PEDIDOS      │ │     PENDENTES     │
└───────────────────┘ └───────────────────┘ └───────────────────┘
```

## Regra estrita

Os valores exibidos nos cards do Dashboard e nos relatórios devem ser **calculados via JavaScript**.

> ❌ É estritamente proibido fixar valores numéricos estáticos diretamente no HTML.

## Relatórios exigidos

Mínimo de **3 indicadores dinâmicos**:

1. Quantidade total de registros;
    
2. Contagem agregada por categoria ou status;
    
    - Disponíveis / indisponíveis;
        
3. Cálculos financeiros ou estatísticos:
    
    - Maior valor;
        
    - Menor valor;
        
    - Média;
        
    - Total consolidado.
        

---

# 15 & 16. REGRAS DE NEGÓCIO E EXCEÇÕES

O sistema deve implementar:

- Mínimo de **7 Regras de Negócio** inerentes ao contexto escolhido;
    
- Tratamento de pelo menos **5 Situações de Exceção**.
    

## Exemplo — Tema: E-commerce / Loja

1. O produto deve obrigatoriamente possuir nome e preço válido.
    
2. O preço unitário não pode ser igual ou inferior a zero.
    
3. Produtos com estoque zerado não podem ser adicionados ao carrinho.
    
4. Apenas clientes cadastrados podem finalizar pedidos.
    
5. Produtos inexistentes não podem sofrer alteração de status.
    
6. Não é permitido finalizar a compra com o carrinho de compras vazio.
    
7. Descontos aplicados não podem ultrapassar 30% do valor total.
    

---

# 17. WIREFRAMES

Antes de iniciar a codificação, o grupo deverá desenhar os **wireframes (rascunhos estruturais)** das principais páginas.

Deverão ser entregues no mínimo **4 wireframes**:

### Wireframe 01

**Dashboard / Home**

### Wireframe 02

**Tela de Cadastro**

### Wireframe 03

**Tela de Consulta / Tabela**

### Wireframe 04

**Tela adicional escolhida pelo grupo**

## Ferramentas permitidas

- Papel e caneta;
    
- Canva;
    
- Figma;
    
- PowerPoint;
    
- Google Slides;
    
- Etc.
    

> O foco é o planejamento prévio do layout e usabilidade.

---

# 18. PLANO DE TESTES — 15 TESTES

A equipe deverá estruturar e documentar uma matriz com **15 testes funcionais** contendo a seguinte distribuição:

- **5 testes** de funcionamento — fluxo padrão (_Happy Path_);
    
- **5 testes** de validação de entradas inválidas;
    
- **5 testes** de regras de negócio e exceções.
    

## Exemplo de matriz

|Nº|Módulo|Entrada / Ação do Usuário|Resultado Esperado|Status|
|--:|---|---|---|---|
|01|Cadastro|Preencher formulário com dados válidos|Cadastrar e exibir na tabela|OK|
|02|Cadastro|Deixar campo "Nome" em branco|Exibir mensagem de erro e bloquear|OK|
|03|Pesquisa|Buscar por termo existente|Filtrar e exibir registro correto|OK|
|04|Pesquisa|Buscar por termo inexistente|Exibir mensagem "Nenhum registro encontrado"|OK|
|05|Regra de Negócio|Tentar vender item sem estoque|Exibir aviso de estoque insuficiente|OK|

---

# 19. ESTRUTURA DA DOCUMENTAÇÃO TÉCNICA

A documentação final do projeto deve seguir rigorosamente a estrutura numerada abaixo:

1. Capa Identificada
    
2. Introdução
    
3. Definição do Problema
    
4. Justificativa
    
5. Público-alvo
    
6. Objetivo Geral
    
7. Objetivos Específicos — **Mín. 4**
    
8. Requisitos Funcionais — **Mín. 8**
    
9. Requisitos Não-Funcionais — **Mín. 4**
    
10. Regras de Negócio — **Mín. 7**
    
11. Tecnologias Utilizadas
    
12. Modelagem dos Dados (JS)
    
13. Wireframes (4 telas)
    
14. Fluxograma do Sistema
    
15. Descrição das Funcionalidades
    
16. Matriz de Testes (15 testes)
    
17. Dificuldades Encontradas
    
18. Soluções Implementadas
    
19. Melhorias Futuras
    
20. Conclusão
    

---

# 20. ORGANIZAÇÃO DOS ARQUIVOS DO PROJETO

O repositório do projeto deve seguir uma estrutura de pastas **limpa e padronizada**.

```text
PROJETO_WEB/
│
├── index.html                 # Página principal / Dashboard
│
├── pages/
│   ├── cadastro.html          # Tela de formulários
│   ├── consulta.html         # Tela de pesquisas e tabelas
│   └── relatorios.html        # Tela de relatórios e estatísticas
│
├── css/
│   └── style.css              # Estilização centralizada
│
├── js/
│   └── script.js              # Scripts e lógica da aplicação
│
└── README.md                  # Documentação resumida do repositório
```

---

# 21. DIRETRIZES SOBRE USO DE INTELIGÊNCIA ARTIFICIAL

O uso de ferramentas de **Inteligência Artificial** é permitido como recurso pedagógico de apoio para:

- Esclarecer dúvidas conceituais e estudar sintaxe;
    
- Identificar e depurar erros de código (_debugging_);
    
- Pesquisar abordagens e boas práticas de estruturação;
    
- Auxiliar na redação da documentação e plano de testes.
    

## 🚫 PROIBIÇÃO BÁSICA

É estritamente proibido gerar o projeto inteiro via IA sem compreender o código e simplesmente entregá-lo.

Todos os integrantes devem ser capazes de **explicar cada linha de código**.

Durante a arguição individual, o professor fará perguntas diretas como:

> "O que esta função executa?"

> "Por que este evento foi utilizado?"

> "Onde o DOM está sendo modificado?"

> "Faça uma alteração nesta funcionalidade agora."

> **"UTILIZAR IA PARA APRENDER É PERMITIDO. UTILIZAR IA SEM APRENDER NÃO É O OBJETIVO DO PROJETO."**

---

# 22 & 23. APRESENTAÇÃO E REGRAS GERAIS DE AVALIAÇÃO

## Apresentação prática

**Tempo:** 10 a 15 minutos por grupo.

### Exposição oral

O grupo deverá apresentar:

- Tema;
    
- Problema;
    
- Solução;
    
- Wireframes;
    
- Arquitetura.
    

### Demonstração ao vivo

Deverão ser demonstradas as funcionalidades, incluindo:

- Execução;
    
- Validações;
    
- Busca;
    
- Cadastro;
    
- Exclusão em tempo real perante a turma.
    

### Teste de estresse

O professor solicitará ações específicas no momento da apresentação.

Exemplos:

- Cadastrar dado em branco;
    
- Buscar termo inexistente;
    
- Simular erro de regra de negócio.
    

---

# REGRAS FINAIS

- O projeto deve funcionar **100% no ambiente local** sem dependência de servidores Python ou bibliotecas externas complexas.
    
- Plágio ou cópias integrais de projetos entre grupos resultarão na **invalidação da nota**.
    
- **Prazo Final de Entrega:** 25/09/2026.
    

---

# 🎯 DESAFIO FINAL

O objetivo deste projeto não é criar simplesmente uma página web, mas aprender a transformar uma ideia em uma **aplicação interativa e profissional**.

```text
PLANEJAR
    ↓
PROJETAR
    ↓
PROGRAMAR
    ↓
TESTAR
    ↓
DOCUMENTAR
    ↓
APRESENTAR
```

---

# ✅ Checklist Geral do Projeto

## Grupo

-  Grupo possui entre 2 e 4 alunos
    
-  Todos os integrantes participam do desenvolvimento
    
-  Todos conhecem integralmente o funcionamento do sistema
    
-  Proposta não é idêntica à de outro grupo
    

## Sistema

-  Aplicação realmente interativa
    
-  Resolve um problema real
    
-  HTML + CSS + JavaScript
    
-  Interface responsiva
    
-  Design organizado e acessível
    
-  Pelo menos 4 telas/seções funcionais
    

## HTML/CSS

-  HTML semântico
    
-  CSS em arquivo externo
    
-  Layout limpo
    
-  Hierarquia visual clara
    
-  Botões padronizados
    
-  Formulários padronizados
    
-  Responsividade para computador
    
-  Responsividade para celular/tablet
    

## JavaScript / DOM / Eventos

-  Pelo menos 8 funcionalidades JS
    
-  Pelo menos 8 manipulações do DOM
    
-  Pelo menos 6 eventos nativos
    
-  JavaScript modifica efetivamente a interface
    
-  Não depende apenas de `alert()`
    

## Formulários

-  Pelo menos 2 formulários funcionais
    
-  Pelo menos 8 regras de validação
    
-  Campos obrigatórios
    
-  Validação de e-mail
    
-  Limites numéricos
    
-  Prevenção de duplicados
    
-  Tratamento de registros inexistentes
    
-  `<select>` com seleção obrigatória
    
-  Mensagens exibidas na própria interface
    

## Dados / CRUD

-  Dados armazenados em Arrays/Objetos JS
    
-  Adicionar
    
-  Consultar
    
-  Editar
    
-  Excluir
    
-  Pesquisar
    
-  Filtrar
    
-  Contar
    
-  Calcular
    
-  Filtro em tempo real
    
-  Pelo menos 2 critérios simultâneos
    

## Dashboard / Relatórios

-  Dashboard funcional
    
-  Cards de métricas
    
-  Valores calculados via JavaScript
    
-  Nenhum número fixo no HTML
    
-  Pelo menos 3 indicadores dinâmicos
    
-  Total de registros
    
-  Contagem por categoria/status
    
-  Cálculo financeiro ou estatístico
    

## Regras de negócio

-  Pelo menos 7 regras de negócio
    
-  Pelo menos 5 situações de exceção
    

## Wireframes

-  Dashboard/Home
    
-  Cadastro
    
-  Consulta/Tabela
    
-  Tela adicional
    
-  Wireframes feitos antes da codificação
    

## Testes

-  15 testes documentados
    
-  5 Happy Path
    
-  5 entradas inválidas
    
-  5 regras de negócio/exceções
    

## Documentação

-  Capa
    
-  Introdução
    
-  Definição do problema
    
-  Justificativa
    
-  Público-alvo
    
-  Objetivo geral
    
-  4+ objetivos específicos
    
-  8+ requisitos funcionais
    
-  4+ requisitos não-funcionais
    
-  7+ regras de negócio
    
-  Tecnologias utilizadas
    
-  Modelagem dos dados
    
-  4 wireframes
    
-  Fluxograma
    
-  Descrição das funcionalidades
    
-  Matriz de 15 testes
    
-  Dificuldades encontradas
    
-  Soluções implementadas
    
-  Melhorias futuras
    
-  Conclusão
    

## Estrutura do repositório

-  `index.html`
    
-  `pages/cadastro.html`
    
-  `pages/consulta.html`
    
-  `pages/relatorios.html`
    
-  `css/style.css`
    
-  `js/script.js`
    
-  `README.md`
    

## Apresentação

-  10–15 minutos
    
-  Tema
    
-  Problema
    
-  Solução
    
-  Wireframes
    
-  Arquitetura
    
-  Demonstração ao vivo
    
-  Validações
    
-  Busca
    
-  Cadastro
    
-  Exclusão
    
-  Teste de estresse
    
-  Todos sabem explicar o código
    

## Prazo

> **📅 25/09/2026**