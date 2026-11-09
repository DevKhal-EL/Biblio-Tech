# ADR-004 — Utilização de banco de dados SQL em vez de localStorage

## Status

Aceita.

## Data

05/10/2026.

## Contexto

Durante a reconstrução do JavaScript da página de cadastro, foi considerada a utilização do `localStorage` para armazenar os dados preenchidos pelo usuário.

Entretanto, o objetivo do projeto é utilizar um banco de dados SQL para realizar a persistência das informações.

A utilização de `localStorage` representaria uma solução temporária, que posteriormente precisaria ser substituída pela integração com o backend.

## Decisão

Não utilizar `localStorage` como mecanismo de armazenamento dos cadastros.

Os dados deverão ser enviados pelo frontend ao backend, que ficará responsável pela comunicação com o banco de dados MySQL/MariaDB e pela persistência das informações.

## Consequências

- O frontend não será responsável pela persistência definitiva dos cadastros.
- Será necessária uma camada backend para receber e processar os dados.
- O banco de dados SQL será utilizado como mecanismo de persistência.
- Evitaremos implementar uma solução temporária que posteriormente precisaria ser removida.

## Referência

- JavaScript da página de cadastro.
- `src/backend/connectionDB.js`