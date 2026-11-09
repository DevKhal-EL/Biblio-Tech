# ADR-006 — Estratégia de branches para o desenvolvimento compartilhado

## Status

Aceita. Integração e publicação da branch `dev` realizadas. Incorporação definitiva à `main` deve seguir o fluxo de integração definido.

## Data

08/11/2026.

## Contexto

Após a integração dos repositórios, foi necessário estabelecer uma organização de branches que permitisse continuar o desenvolvimento sem perder o histórico existente.

O projeto também é desenvolvido em colaboração com outro integrante, tornando necessária uma branch compartilhada para concentrar as alterações dos dois desenvolvedores.

Durante a reorganização, foi utilizada a branch `integration/biblioteca-bd` para reunir os históricos dos repositórios.

## Decisão

Adotar a seguinte organização:

- `main`: branch principal, destinada a manter uma versão estável e integrada do projeto. Deve conter o histórico de desenvolvimento incorporado a partir da `dev`, preservando a continuidade dos commits.
- `dev`: branch compartilhada pelos desenvolvedores, destinada à integração das funcionalidades antes de sua incorporação à `main`.
- `integration/biblioteca-bd`: branch utilizada para consolidar os históricos dos repositórios originais.

Branches específicas de funcionalidades poderão ser criadas a partir da `dev`, quando necessário.

## Consequências

- Os desenvolvedores poderão compartilhar as alterações por meio da `dev`.
- A `main` não será utilizada como ambiente de desenvolvimento cotidiano.
- As funcionalidades poderão ser integradas e verificadas antes de chegar à versão principal.
- A branch de integração preserva o registro da reorganização dos repositórios.
- O histórico de desenvolvimento poderá ser acompanhado por meio dos commits e merges.

## Referência

- `main`
- `dev`
- `integration/biblioteca-bd`
- Commit `9ded7c7`.