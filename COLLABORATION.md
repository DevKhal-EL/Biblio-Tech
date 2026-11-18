# Guia de Contribuição

Este documento reúne as instruções básicas para configurar o ambiente de desenvolvimento e contribuir com o projeto.

## 1. Preparação do banco de dados

Abra o MySQL e execute o script de criação do banco de dados.

> **Observação:** inserir aqui o caminho ou as instruções para executar o script SQL.

## 2. Clonar o repositório

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/DevKhal-EL/Biblioteca-BD.git
cd Biblioteca-BD
```

## 3. Acessar a branch de desenvolvimento

Mude para a branch `dev`:

```bash
git switch dev
```

## 4. Instalar as dependências

Instale as dependências necessárias para executar o projeto:

```bash
npm install
npm install mysql2
npm install dotenv
```

## 5. Configurar as variáveis de ambiente

Na raiz do projeto, crie um arquivo chamado `.env` e configure as credenciais de acesso ao banco de dados:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=coloca_sua_senha
DB_NAME=BIBLIOTECA_BD
```

Substitua `coloca_sua_senha` pela senha configurada no seu MySQL.

## 6. Testar a conexão com o banco de dados

Execute o arquivo responsável pela conexão:

```bash
node src/back-end/connectionDB.js
```

Se a conexão for estabelecida corretamente, a seguinte mensagem deverá aparecer no terminal:

```text
Connected!
```

Caso ocorra algum erro, verifique as configurações do banco de dados, as credenciais e as dependências instaladas.

## 7. Atualizar a branch antes de começar

Antes de realizar alterações, atualize sua branch local com as modificações mais recentes do repositório remoto:

```bash
git pull origin dev
```

Após a atualização, você poderá começar a trabalhar nas alterações.

## 8. Documentar as alterações

Ao concluir suas atividades, registre as mudanças realizadas em:

```text
/docs/STATUS.md
```

Descreva o que foi desenvolvido, corrigido ou modificado.

## 9. Enviar as alterações para o GitHub

Depois de concluir e revisar suas alterações, utilize os comandos abaixo:

```bash
git status
git add .
git commit -m "feat: descrição da alteração"
git push origin dev
```

Mude `descrição da alteração` por uma mensagem que represente o que foi feito.

---

**Importante:** antes de enviar suas alterações, confira o resultado de `git status` para garantir que só os arquivos desejados serão incluídos no commit