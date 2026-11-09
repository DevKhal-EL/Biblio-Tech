# ADR-005 — Integração dos repositórios Biblio-Tech e Biblioteca-BD

## Status

Aceita e implementada.

## Data

08/11/2026.

## Contexto

Durante o desenvolvimento, o projeto passou a possuir dois repositórios relacionados:

- `Biblio-Tech`: repositório original, que contém a estrutura inicial e o desenvolvimento anterior do projeto.
- `Biblioteca-BD`: repositório utilizado para desenvolver e integrar a parte relacionada ao banco de dados.

A existência de dois repositórios separados dificultava a centralização do desenvolvimento e a organização do histórico do projeto.

Entretanto, os dois repositórios possuíam commits e alterações que deveriam ser preservados.

Também existiam branches com conteúdos diferentes, incluindo uma branch de exercícios que não fazia parte do desenvolvimento principal da aplicação.

## Decisão

Manter o `Biblio-Tech` como repositório principal e integrar o conteúdo relevante do `Biblioteca-BD`, preservando os históricos de commits dos dois projetos.

A integração foi realizada na branch `integration/biblioteca-bd`, por meio de um merge que gerou o commit:

`9ded7c7` — Merge: integração do Biblio-Tech com Biblioteca-BD.

A branch `Biblioteca-BD/tests` não foi incorporada ao histórico integrado, pois continha apenas exercícios e não fazia parte da aplicação principal.

## Consequências

- O `Biblio-Tech` passa a centralizar o desenvolvimento.
- Os históricos relevantes dos dois repositórios são preservados.
- A integração fica registrada em um commit de merge com as duas linhagens de histórico.
- O desenvolvimento não precisa continuar dividido entre dois repositórios.
- A branch de exercícios permanece separada do histórico principal integrado.

## Referência

- Branch `integration/biblioteca-bd`.
- Commit `9ded7c7`.
- Histórico de commits do `Biblio-Tech` e do `Biblioteca-BD`.