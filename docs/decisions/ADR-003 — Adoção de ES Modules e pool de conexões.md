# ADR-003 — Adoção de ES Modules e pool de conexões

## Status

Aceita.

## Data

03/10/2026.

## Contexto

A primeira implementação da conexão com o banco de dados utilizava CommonJS, por meio de `require`, e criava uma conexão individual com `createConnection`.

Durante a evolução do projeto, foi realizada uma reestruturação do arquivo `connectionDB.js`.

A mudança teve como objetivo utilizar a sintaxe de módulos `import` e `export`, trabalhar com operações assíncronas por meio de Promises e permitir o reaproveitamento das conexões com o banco de dados.

## Decisão

Adotar ES Modules como sistema de módulos do projeto, utilizando `mysql2/promise` e `createPool` para gerenciar as conexões com o banco de dados.

A configuração foi habilitada no `package.json` por meio da propriedade:

```json
"type": "module"
```

O pool será centralizado em `connectionDB.js` e disponibilizado aos demais módulos por meio de `export default`.

## Consequências

- Os módulos JavaScript passam a utilizar `import` e `export`.
- O projeto pode utilizar `async/await` nas operações assíncronas com o banco.
- O pool permite reaproveitar conexões, em vez de criar uma conexão individual para cada operação.
- Os módulos que precisam acessar o banco devem importar o pool já configurado.
- O encerramento do pool deve ser controlado pela aplicação, e não pelo arquivo responsável por sua criação.

## Referência

- `package.json`
- `src/backend/connectionDB.js`