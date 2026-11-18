# Regras de Negócio 

Esse documento apresenta as regras de negócio que criamos para cumprir um dos critérios de avaliação do projeto acadêmico.

Tais critérios podem ser conferidos em: 

[Projeto Bimestral — Desenvolvimento Web](./Projeto%20Bimestral%20—%20Desenvolvimento%20Web.md)   

---

**RN01 — E-mail de usuário único:** Não é permitido cadastrar dois usuários utilizando o mesmo e-mail.

**RN02 — Disponibilidade para empréstimo:** Um livro não pode ser emprestado quando sua quantidade disponível for igual a 0.

**RN03 — Redução do estoque:** Ao realizar um empréstimo, a quantidade disponível do livro deve diminuir em 1.

**RN04 — Devolução ao estoque:** Ao realizar uma devolução, a quantidade disponível do livro deve aumentar em 1.

**RN05 — Usuário cadastrado:** Somente usuários cadastrados no sistema podem realizar empréstimos.

**RN06 — Livro cadastrado:** O livro precisa existir no cadastro para que um empréstimo possa ser realizado.

**RN07 — Devolução de empréstimo ativo:** Um livro só pode ser devolvido quando existir um empréstimo correspondente com status "Ativo".

---

**EX01 — Cadastro de usuário incompleto:** Caso o usuário tente realizar um cadastro sem preencher os campos obrigatórios, o sistema deve impedir o cadastro e exibir uma mensagem de erro na interface.

**EX02 — E-mail duplicado:** Caso o usuário tente cadastrar um e-mail que já esteja cadastrado, o sistema deve impedir o cadastro e informar o problema.

**EX03 — Livro inexistente:** Caso seja informado um livro que não esteja cadastrado durante um empréstimo, o sistema deve impedir a operação e exibir uma mensagem de erro.

**EX04 — Livro indisponível:** Caso o usuário tente emprestar um livro cuja quantidade disponível seja 0, o sistema deve impedir o empréstimo e informar que o livro está indisponível.

**EX05 — Empréstimo inexistente ou já devolvido:** Caso o usuário tente realizar uma devolução sem existir um empréstimo correspondente com status "Ativo", o sistema deve impedir a operação e exibir uma mensagem de erro.
