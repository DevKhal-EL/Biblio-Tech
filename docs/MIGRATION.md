# Migração e Reestruturação do Biblio-Tech

## 1. Contexto

O Biblio-Tech começou como um projeto acadêmico desenvolvido em etapas, com o objetivo de construir uma aplicação para gerenciamento de uma biblioteca.

Durante nosso desenvolvimento, foram realizadas implementações no frontend, estudos de integração com banco de dados e atividades relacionadas à organização do código.

Em determinado momento, o desenvolvimento passou a ser dividido entre dois repositórios:

- **Biblio-Tech:** repositório original, contendo a estrutura inicial e o desenvolvimento anterior da aplicação.
- **Biblioteca-BD:** repositório utilizado para desenvolver e testar a integração com o banco de dados.

Por motivos acadêmicos, foi necessário atualizar a primeira versão que utilizava o WebStorage para persistência de dados, para persistência de bancos de dados relacional, com objetivo de aplicar os conhecimentos desenvolvidos no curso de Desenvolvimento de Sistemas com relação a SQL.

## 2. Motivação Acadêmica e Técnica

O projeto está sendo utilizado como ambiente de aplicação prática dos conhecimentos desenvolvidos durante o curso de Desenvolvimento de Sistemas.

Ao longo da formação, novos conceitos de programação, banco de dados, desenvolvimento web, organização de projetos e controle de versão são apresentados. A reestruturação do Biblio-Tech permite revisitar implementações anteriores e aplicar esses conhecimentos de maneira mais consciente.

Em vez de simplesmente substituir o código antigo por uma implementação nova, a proposta é compreender como as partes existentes funcionam, identificar limitações e realizar melhorias justificadas.

Entre os objetivos acadêmicos estão:

- Consolidar os conhecimentos de programação e desenvolvimento web por meio de uma aplicação real.
- Aprofundar os estudos sobre JavaScript, Node.js e integração com bancos de dados SQL.
- Aplicar os conceitos de modelagem de dados conceitual, lógica e física.
- Compreender melhor a separação de responsabilidades entre frontend, backend e banco de dados.
- Desenvolver boas práticas de organização, reutilização e manutenção de código.
- Aprimorar o uso do Git e GitHub, incluindo branches, commits, merges e resolução de conflitos.
- Desenvolver a capacidade de analisar problemas, pesquisar soluções e justificar decisões técnicas.
- Praticar a documentação do desenvolvimento, registrando implementações, dificuldades e aprendizados.

A proposta também envolve utilizar os problemas encontrados durante a evolução do projeto como oportunidades de aprendizagem, documentando não apenas as soluções adotadas, mas também os motivos que levaram a elas.

## 3. Objetivos da Reestruturação

Centralizar o desenvolvimento no repositório Biblio-Tech, integrando o trabalho realizado no Biblioteca-BD e organizando a estrutura para dar continuidade à aplicação.

A reestruturação também tem como objetivos:

- Preservar o histórico de commits dos repositórios originais.
- Evitar a fragmentação do desenvolvimento em repositórios separados.
- Revisar implementações anteriores à luz dos conhecimentos adquiridos.
- Organizar a estrutura de diretórios e arquivos.
- Centralizar a documentação técnica e acadêmica.
- Melhorar a organização e a manutenção do código.
- Preparar o projeto para receber novas funcionalidades e melhorias.
- Manter evidências da evolução técnica e do processo de aprendizagem.

## 4. Histórico da Transição

### 4.1. Desenvolvimento em repositórios separados

Inicialmente, o desenvolvimento estava distribuído entre os repositórios Biblio-Tech e Biblioteca-BD.

O Biblio-Tech continha a estrutura original da aplicação, enquanto o Biblioteca-BD concentrava atividades relacionadas à implementação e integração com o banco de dados.

Essa separação permitiu desenvolver partes do projeto em momentos diferentes, mas tornou necessária uma reorganização para centralizar a continuidade do trabalho.

### 4.2. Integração dos repositórios

Durante a reorganização, foi realizada a integração dos históricos dos dois repositórios.

A branch `integration/biblioteca-bd` foi utilizada para reunir os desenvolvimentos, preservando a ancestralidade dos commits.

A integração foi registrada no commit:

`9ded7c7` — Merge: integração do Biblio-Tech com Biblioteca-BD.

A branch `Biblioteca-BD/tests` não foi incorporada, pois continha exercícios que não faziam parte do desenvolvimento principal da aplicação.

### 4.3. Preservação do histórico

Em vez de simplesmente copiar os arquivos de um repositório para outro, foi priorizada a preservação do histórico de desenvolvimento.

Essa escolha também possui importância acadêmica, pois permite acompanhar a evolução das implementações, identificar problemas anteriores e compreender como determinadas soluções foram construídas.

As branches de referência dos desenvolvimentos originais foram preservadas como branches de arquivo, permitindo consultar os estados anteriores sem misturá-los ao fluxo atual de desenvolvimento.

## 5. Diretrizes para a Nova Etapa de Desenvolvimento

A continuidade do Biblio-Tech será orientada por alguns princípios:

### 5.1. Compreensão antes da substituição

Implementações anteriores não deverão ser descartadas automaticamente.

Antes de modificar ou substituir um código, queremos compreender seu funcionamento, identificar suas limitações e avaliar se existe uma justificativa técnica para a mudança.

### 5.2. Aprendizagem aplicada

As tecnologias e os conceitos estudados deverão ser aplicados diretamente nas necessidades do projeto.

O objetivo não é adicionar ferramentas apenas para aumentar a quantidade de tecnologias utilizadas, mas compreender como elas resolvem problemas reais da aplicação.

### 5.3. Documentação do processo

As atividades relevantes deverão ser documentadas, incluindo problemas encontrados, soluções implementadas, decisões técnicas e resultados dos testes.

A documentação também deverá permitir que outros desenvolvedores compreendam a estrutura e a evolução do projeto.

### 5.4. Evolução gradual

As melhorias serão realizadas progressivamente, evitando alterações desnecessárias que possam comprometer funcionalidades existentes.

Cada etapa deverá ser revisada e validada antes de ser considerada concluída.

## 6. Organização do Desenvolvimento

Após a integração, foi definida uma organização de branches para dar continuidade ao projeto:

| Branch | Finalidade |
|---|---|
| `main` | Manter a versão estável e integrada do projeto. |
| `dev` | Concentrar o desenvolvimento compartilhado e a integração das funcionalidades. |
| `integration/biblioteca-bd` | Preservar o processo de integração dos históricos originais. |
| `archive/*` | Manter referências aos estados anteriores dos repositórios. |

A branch `dev` será utilizada para integrar as alterações realizadas pelos desenvolvedores antes de sua incorporação à `main`.

Branches específicas poderão ser criadas para implementar funcionalidades ou realizar alterações isoladas.

## 7. Estado da Reestruturação

A integração dos históricos dos repositórios foi realizada. Entretanto, a reorganização e a atualização da aplicação não devem ser consideradas concluídas apenas pela integração dos códigos.

Ainda existem atividades de organização, documentação, revisão e validação necessárias para estabelecer a nova estrutura como referência do desenvolvimento.

### Atividades realizadas

- Integração dos históricos do Biblio-Tech e Biblioteca-BD.
- Preservação dos commits relevantes dos dois repositórios.
- Criação da branch de integração.
- Definição da organização de branches para continuidade do desenvolvimento.

### Atividades pendentes

- Finalizar a organização dos arquivos e diretórios.
- Resolver e consolidar a documentação dos READMEs.
- Revisar a configuração de dependências e arquivos ignorados pelo Git.
- Revisar a estrutura do banco de dados e os scripts SQL.
- Revisar a conexão entre backend e banco de dados.
- Validar a estrutura reorganizada antes de incorporá-la à versão principal.

## 8. Considerações Finais

A reestruturação representa uma nova etapa no desenvolvimento do Biblio-Tech, utilizando a aplicação como ambiente de aprendizagem e aplicação prática dos conhecimentos adquiridos durante a formação técnica.

A ideia aqui é evoluir o projeto sem desconsiderar o trabalho realizado anteriormente, preservando seu histórico e utilizando as implementações existentes como referência para compreender, revisar e aprimorar o código.

Dessa forma, o Biblio-Tech também servirá como registro da evolução técnica dos desenvolvedores ao longo do processo.