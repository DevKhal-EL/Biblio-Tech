# Alterações

---

Feat Charlinho 28/09:

Estrutura Inicial do Projeto
Importação imagens
Criação branch main e dev

---

## Feat Charlinho 01/10:

- No computador na escola abri e me loguei no mysql e criei um database "BIBLIOTECA_BD".
- Instalei o node com ``npm install``
- Instalei o driver mysql para tornar possível a conexão com o servidor mysql:
``npm install mysql2`` (Rodar no terminal)
- 
- No caminho src/backend/connectionDB.js digitei e executei:

```js 
let mysql = require('mysql2'); 

let con = mysql.createConnection({
  host: "localhost",         // Endereço (máquina local)  
  user: "root",              // Usuário padrão
  password: "",              // Deixei vazio já que não tem senha
  database: "BIBLIOTECA_BD"  // O nome do banco entra aqui separadamente
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); 

```
Ali em vez de 'localhost' poderia deixar apenas o ip também da máquina local, que é sempre 127.0.0.1
Vai funcionar do mesmo jeito

- Executei com `node connectionDB.js` na pasta do arquivo. Resultado:

``Connected!``

**Erros:**

Antes de ter dado certo, teve alguns erros:

Na linha ``let mysql = require('mysql2');`` eu tinha deixado apenas ``let mysql = require('mysql');``. Tomar cuidado porque o nome do driver que tem que instalar é mysql2.

### Depois disso:

Pesquisando na net a IA disse que era preciso criar um arquivo .env porque é nesse arquivo que vai ficar as credenciais de login como senha e usuário que usamos quando abrimos o mysql.

```env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=minha_senha
DB_NAME=BIBLIOTECA_BD

```

E no connectionDB.js:

```js
require('dotenv').config({ path: '../../.env' });
let mysql = require('mysql2');

let con = mysql.createConnection({
  host: process.env.DB_HOST,         // Apenas o endereço, sem "mysql://"
  user: process.env.DB_USER,              // Usuário padrão
  password: process.env.DB_PASSWORD,              // Deixe vazio já que não tem senha
  database: process.env.DB_NAME  // O nome do banco entra aqui separadamente
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
```

Agora qualquer um que importar o projeto do github pode usar o próprio banco de dados colocando suas próprias credenciais.

---
## Feat Charlinho 03/10:

- Reescrevi o `connectionDB.js` usando `import` em vez de `require` (ES Modules):

```js
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

let connect = await mysql.createPool({
  host: process.env.DB_HOST,         // Apenas o endereço, sem "mysql://"
  user: process.env.DB_USER,              // Usuário padrão
  password: process.env.DB_PASSWORD,              // Deixe vazio já que não tem senha
  database: process.env.DB_NAME  // O nome do banco entra aqui separadamente
})

console.log("Connected!");

export default connect;
```
A IA me recomendou fazer iss porque é mais moderno do que usar o require.

E para que isso funcionasse, foi necessário dar um ``npm init -y` para criar um package.json, e escrever em baixo de description: 

```json
"type": "module",

```

**O que mudou:**

- `require('dotenv').config({ path: '../../.env' })` virou `import dotenv from 'dotenv'` + `dotenv.config()`.
- `require('mysql2')` virou `import mysql from 'mysql2/promise'`. Com a versão `/promise` dá pra usar `await` em vez de callback, então não precisei mais do `con.connect(function(err) {...})`.
- Troquei `createConnection` por `createPool`. Deu certo com os dois, mas o pool é melhor porque guarda um conjunto de conexões que podem ser reaproveitadas, em vez de ficar só em uma.
- Adicionei `export default connect;` para qualquer outro arquivo `.js` do projeto importar a conexão sem criar outra a cada consulta.
- Escrevi comentários no código para quem clonar o projeto entender o que cada parte faz.

**Como usar em outro arquivo:**

```js
import pool from './connectionDB.js';

const [livros] = await pool.query('SELECT * FROM livros');
```

**Atenção:**

- Não usar `pool.end()` dentro do `connectionDB.js`, senão o pool fecha logo depois de ser criado.
- O `console.log("Connected!")` aparece mesmo se o banco não conectar, porque o pool só abre a conexão de verdade quando faz a primeira consulta.

---

## Feat Henrique 05/10:**

- Começamos a reconstruir o JavaScript da página de cadastro do zero, descartando o JS antigo para evitar código desnecessário e facilitar a organização do projeto.

- Primeiro, testamos a ligação entre o HTML e o JavaScript usando um `alert`, confirmando que o arquivo `.js` estava sendo carregado corretamente.

- Depois, adicionamos um `eventListener` no formulário para detectar o evento `submit`:

```js
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

O `event.preventDefault()` impede que o comportamento padrão do formulário aconteça, permitindo que o JavaScript controle o envio dos dados.

- Em seguida, aprendemos a buscar os campos do formulário pelo `id` e acessar o conteúdo digitado pelo usuário através de `.value`:

```js
const nome = document.getElementById("input-nome").value;
const email = document.getElementById("input-email").value;
```

- Testamos os valores usando `console.log()`, confirmando que o JavaScript consegue receber corretamente o nome e o e-mail preenchidos no formulário.

- Inicialmente seria utilizado `localStorage` para armazenar os dados, mas decidimos não seguir por esse caminho, pois o objetivo do projeto é utilizar o banco de dados SQL. Assim, evitamos implementar uma solução temporária que posteriormente precisaria ser removida.

- O próximo passo será fazer o JavaScript do frontend enviar os dados para um backend, que ficará responsável por realizar a comunicação com o MySQL/MariaDB e inserir os usuários no banco de dados.

---
## Feat Charlinho: 15/10/2026

- Modelagem de Dados Conceitual, Lógica e Física
- Documentação da Modelagem de Dados Conceitual, Lógica e Física em ../docs/Modelagem_De_Dados
- Criação do Schema.sql que será o banco de dados para o backend no projeto.

Próximos passos:

- Testar a integridade do banco de dados fazendo registros válidos e inválidos no mysql, pra ver se está funcionando.









