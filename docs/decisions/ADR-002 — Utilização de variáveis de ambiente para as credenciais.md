# ADR-002 — Utilização de variáveis de ambiente para as credenciais

## Status

Aceita.

## Data

01/10/2026.

## Contexto

Na primeira implementação da conexão com o MySQL, as credenciais de acesso ao banco de dados estavam diretamente declaradas no arquivo `connectionDB.js`.

Isso significava que qualquer pessoa que utilizasse o projeto precisaria modificar o código para informar suas próprias credenciais.

Além disso, manter informações de acesso diretamente no código não é uma boa prática, principalmente quando o projeto é compartilhado em um repositório público.

## Decisão

Utilizar variáveis de ambiente para armazenar as configurações de conexão com o banco de dados, utilizando o pacote `dotenv` para carregá-las a partir de um arquivo `.env`.

As variáveis utilizadas são:

- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

O arquivo `.env` não deve ser versionado. Cada pessoa que clonar o projeto deverá configurar suas próprias credenciais.

## Consequências

- As credenciais deixam de ficar diretamente declaradas no código.
- O projeto pode ser utilizado com diferentes configurações de banco de dados.
- É necessário manter o `.env` fora do versionamento.
- Um arquivo `.env.example` poderá disponibilizar um modelo de configuração sem expor credenciais reais.

## Referência

- `src/backend/connectionDB.js`
- `.env`
- `.gitignore`