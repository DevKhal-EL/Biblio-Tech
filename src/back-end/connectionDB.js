import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

/*
Aqui debaixo carrega as variáveis definidas no arquivo .env para process.env.

O arquivo .env deve ficar na raiz do projeto e não deve ser enviado ao Git.
Exemplo:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=BIBLIOTECA_BD
*/

dotenv.config();

/*
Aqui abaixo criamos um pool de conexões com o MySQL. Esse pool é = conexão basicamente.

Deu certo também com createConnection, ainda não entendi a diferença dos dois

As credenciais são lidas do arquivo .env por segurança, evitando deixar
usuário, senha e nome do banco expostos diretamente no código.

*/

let con = await mysql.createPool({
  host: process.env.DB_HOST,         // Apenas o endereço, sem "mysql://"
  user: process.env.DB_USER,              // Usuário padrão
  password: process.env.DB_PASSWORD,              // Deixe vazio já que não tem senha
  database: process.env.DB_NAME  // O nome do banco entra aqui separadamente
})

con.getConnection(); /* O createPool é 'preguiçoso', só faz a conexão depois que ele é chamado de alguma 
forma fazendo alguma operação, como getConnection, ou uma query etc.
*/

console.log("Connected!");

export default con; /* Deixando a variável con exportável, em qualquer outro 
                        outro arquivo.js que criarmos podermos usar ela usando import. 
                        Não necessitando criar uma nova conexão sempre que for fazer uma consulta 
                        ou outra operação.

                        Exemplo de uso em outro arquivo:

                        import con from './connectionDB.js';

                        const [livros] = await pool.query('SELECT * FROM livros');

                        Não use con.end() neste arquivo, pois isso fecharia o pool logo após ele
                        ser criado. Em uma aplicação que permanece rodando, o pool deve continuar
                        disponível para as rotas e operações do sistema.

*/





