# Documentação - Modelo Lógico do Biblioteca-BD

(A imagem png está com as linhas escuras nas cardinalidades, possível visualizar dando zoom)

## Estrutura das tabelas

usuarios: armazena os dados dos usuários cadastrados, como nome e e-mail.

categorias: organiza os livros por categoria.

livros: armazena as informações bibliográficas das obras, como título, autor, ISBN, editora, ano de publicação e sinopse.

acervo: registra os exemplares físicos de cada obra, incluindo sua localização e seu status.

emprestimos: registra os empréstimos realizados, relacionando o usuário ao exemplar retirado e armazenando as datas e o status da devolução.

Chaves primárias (PK)

Cada tabela possui uma chave primária para identificar seus registros individualmente, evitando ambiguidades e permitindo que outras tabelas façam referências a eles.

Chaves estrangeiras (FK)

As chaves estrangeiras estabelecem os relacionamentos entre as tabelas:

livros.id_categoria referencia categorias.id_categoria.

acervo.id_livro referencia livros.id_livro.

emprestimos.id_usuario referencia usuarios.id_usuario.

emprestimos.id_acervo referencia acervo.id_acervo.

A tabela acervo foi utilizada para diferenciar uma obra de seus exemplares físicos. Dessa forma, uma mesma obra pode possuir vários exemplares, e cada empréstimo fica associado a um exemplar específico, em vez de apenas ao livro de forma genérica.