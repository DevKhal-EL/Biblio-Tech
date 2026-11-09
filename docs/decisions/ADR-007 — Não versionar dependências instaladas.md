# ADR-007 — Não versionar dependências instaladas

## Status

Aceita e implementada.

## Data

08/11/2026.

## Contexto

Durante a reorganização do repositório, foi identificado que a pasta `node_modules/` estava sendo rastreada pelo Git.

Essa pasta contém as dependências instaladas pelo npm e pode ocupar bastante espaço no repositório.

Também foi identificado um problema na configuração do `.gitignore`: a regra utilizada anteriormente era `.node_modules`, quando o correto seria `node_modules/`.

Além disso, a intenção era corrigir o versionamento sem apagar as dependências que já estavam instaladas localmente.

## Decisão

Não versionar a pasta `node_modules/`, mantendo-a no ambiente local de desenvolvimento.

Corrigir o `.gitignore` e remover os arquivos da área de versionamento do Git, sem excluí-los do computador.

Para isso, foi utilizado:

```bash
git rm -r --cached node_modules/
```

Também foi adicionada a regra:

```gitignore
node_modules/
```

O arquivo `.env` também passou a ser ignorado pelo Git.

## Consequências

- As dependências instaladas deixam de fazer parte dos commits.
- Cada desenvolvedor deverá instalar as dependências localmente utilizando `npm install`.
- O repositório fica mais leve e organizado.
- Os arquivos locais de `node_modules/` são preservados durante a remoção do versionamento.
- O `.gitignore` passa a impedir que essas dependências sejam adicionadas novamente por engano.

## Referência

- `.gitignore`
- `package.json`
- `package-lock.json`
- Commit `fa5b2c8`.