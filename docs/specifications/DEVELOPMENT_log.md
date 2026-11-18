# Status do Desenvolvimento

Este documento registra o andamento do projeto, incluindo funcionalidades desenvolvidas, configurações realizadas, problemas encontrados e próximos passos.

O objetivo é manter um histórico do desenvolvimento e das atividades realizadas pela equipe.

---

## 1. Histórico de Desenvolvimento

### 28/09 — Estrutura Inicial

**Responsável:** Khalel

- Criação da estrutura inicial do projeto.
- Importação das imagens utilizadas no projeto.
- Criação das branches `main` e `dev`.

---

### 01/10 — Configuração da Conexão com o Banco de Dados

**Responsável:** Charlinho

- No computador da instituição de ensino, acessei o MySQL e criei o banco de dados `BIBLIOTECA_BD`.
- Instalei as dependências do projeto utilizando `npm install`.
- Instalei o driver `mysql2`, necessário para estabelecer a comunicação entre o Node.js e o MySQL:

```bash
npm install mysql2
```

- No arquivo `src/backend/connectionDB.js`, implementei a primeira conexão com o banco de dados:

```js
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "BIBLIOTECA_BD"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
```

Também verifiquei que poderia utilizar `127.0.0.1` no lugar de `localhost`, pois ambos podem apontar para a própria máquina.

**Resultado:** a conexão foi estabelecida com sucesso, retornando `Connected!` no terminal.

#### Problemas encontrados

- Inicialmente, utilizei `require('mysql')` em vez de `require('mysql2')`. O nome utilizado na importação precisa corresponder ao pacote instalado.

#### Configuração das variáveis de ambiente

Depois da primeira conexão, pesquisei maneiras de evitar que as credenciais do banco de dados ficassem diretamente no código.

A solução adotada foi utilizar um arquivo `.env`, contendo as configurações de conexão:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=BIBLIOTECA_BD
```

No `connectionDB.js`, passei a utilizar as variáveis de ambiente:

```js
require('dotenv').config();

const mysql = require('mysql2');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
```

Dessa forma, cada pessoa que clonar o projeto poderá configurar suas próprias credenciais, sem precisar modificar o código de conexão.

---

### 03/10 — Reestruturação da Conexão com o Banco de Dados

**Responsável:** Khalel

Reescrevi o `connectionDB.js` utilizando `import` e `export` (ES Modules), em vez de `require` e `module.exports` (CommonJS).

A nova implementação passou a utilizar `mysql2/promise` e `createPool`:

```js
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default pool;
```

Para habilitar o uso de ES Modules no projeto, foi necessário criar o `package.json` com:

```bash
npm init -y
```

Depois, adicionei a seguinte propriedade ao arquivo:

```json
"type": "module"
```

#### O que mudou?

- Substituí `require` por `import` e passei a utilizar `export default` para disponibilizar a conexão aos outros arquivos.
- Substituí `mysql2` por `mysql2/promise`, permitindo trabalhar com Promises e `async/await`, em vez de utilizar callbacks.
- Substituí `createConnection` por `createPool`. O pool permite reutilizar conexões, evitando a necessidade de criar uma nova conexão para cada consulta.
- Centralizei a configuração da conexão em um único arquivo, permitindo que outros módulos utilizem o mesmo pool.

#### Como utilizar em outro arquivo?

```js
import pool from './connectionDB.js';

const [livros] = await pool.query('SELECT * FROM livros');
```

#### Cuidados importantes

- Não utilizar `pool.end()` no arquivo de configuração, pois isso encerraria o pool e impediria sua reutilização.
- A criação do pool não significa que uma conexão com o banco já foi estabelecida. A conexão efetiva acontece quando uma consulta é executada.

---

### 05/10 — Reconstrução do JavaScript da Página de Cadastro

**Responsável:** Henrique

Começamos a reconstruir o JavaScript da página de cadastro do zero, descartando o código antigo para evitar código desnecessário e facilitar a organização do projeto.

#### Etapas realizadas

1. Testamos a ligação entre o HTML e o JavaScript utilizando um `alert`, confirmando que o arquivo `.js` estava sendo carregado corretamente.

2. Adicionamos um `eventListener` ao formulário para detectar o evento `submit`:

```js
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

O `event.preventDefault()` impede que o comportamento padrão do formulário aconteça, permitindo que o JavaScript controle o envio dos dados.

3. Aprendemos a buscar os campos do formulário pelo `id` e acessar os valores preenchidos pelo usuário utilizando `.value`:

```js
const nome = document.getElementById("input-nome").value;
const email = document.getElementById("input-email").value;
```

4. Testamos os valores utilizando `console.log()`, confirmando que o JavaScript conseguia receber corretamente o nome e o e-mail preenchidos no formulário.

#### Decisão durante o desenvolvimento

Inicialmente, seria utilizado `localStorage` para armazenar os dados, mas decidimos não seguir por esse caminho, pois o objetivo do projeto é utilizar um banco de dados SQL.

Assim, evitamos implementar uma solução temporária que posteriormente precisaria ser removida.

#### Próximo passo

Fazer o JavaScript do frontend enviar os dados para um backend, que ficará responsável pela comunicação com o MySQL/MariaDB e pela inserção dos usuários no banco de dados.

---

### 15/10/2026 — Modelagem e Estruturação do Banco de Dados

**Responsável:** Khalel

- Desenvolvimento da modelagem de dados conceitual, lógica e física.
- Documentação das três etapas da modelagem no diretório `docs/Modelagem_De_Dados`.
- Criação do arquivo `Schema.sql`, que contém a estrutura do banco de dados utilizada pelo backend.

#### Próximos passos

- Executar o script `Schema.sql` e verificar se a estrutura do banco de dados é criada corretamente.
- Realizar testes de integridade, inserindo registros válidos e inválidos no MySQL.
- Verificar se as restrições e relacionamentos definidos na modelagem estão funcionando conforme esperado.

---

## 2. Estado do Desenvolvimento

<text>Última atividade registrada: 15/10/2026.</text>

As atividades descritas neste documento representam o histórico registrado do desenvolvimento. Os próximos passos devem ser atualizados conforme forem concluídos.