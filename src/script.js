(function () {
    "use strict";

    var usuarios = [];
    var livros = [];
    var emprestimos = [];
    var atrasosRegistrados = 0;
    var paginaLivros = 1;
    var paginaUsuarios = 1;
    var itensPorPagina = 5;
    var categoriaSelecionada = "todas";
    var disponibilidadeSelecionada = "todas";
    var chaveArmazenamento = "biblioTechDados";

    function obterDadosSalvos() {
        var texto = "";
        try {
            texto = localStorage.getItem(chaveArmazenamento) || "";
        } catch (erroLocal) {
            texto = "";
        }
        if (!texto) {
            try {
                texto = sessionStorage.getItem(chaveArmazenamento) || "";
            } catch (erroSessao) {
                texto = "";
            }
        }
        if (!texto && window.name.indexOf(chaveArmazenamento + "=") === 0) {
            texto = decodeURIComponent(window.name.substring(chaveArmazenamento.length + 1));
        }
        return texto;
    }

    function carregarDados() {
        try {
            var dadosSalvos = JSON.parse(obterDadosSalvos() || "null");
            if (!dadosSalvos) return;
            usuarios = Array.isArray(dadosSalvos.usuarios) ? dadosSalvos.usuarios : [];
            livros = Array.isArray(dadosSalvos.livros) ? dadosSalvos.livros : [];
            emprestimos = Array.isArray(dadosSalvos.emprestimos) ? dadosSalvos.emprestimos : [];
            atrasosRegistrados = Number(dadosSalvos.atrasosRegistrados) || 0;
        } catch (erro) {
            usuarios = [];
            livros = [];
            emprestimos = [];
            atrasosRegistrados = 0;
        }
    }

    function salvarDados() {
        var dados = JSON.stringify({
            usuarios: usuarios,
            livros: livros,
            emprestimos: emprestimos,
            atrasosRegistrados: atrasosRegistrados
        });
        try {
            localStorage.setItem(chaveArmazenamento, dados);
        } catch (erroLocal) {
            // O armazenamento da página pode estar bloqueado pelo navegador.
        }
        try {
            sessionStorage.setItem(chaveArmazenamento, dados);
        } catch (erroSessao) {
            // O armazenamento de sessão pode estar bloqueado pelo navegador.
        }
        window.name = chaveArmazenamento + "=" + encodeURIComponent(dados);
    }

    function elemento(id) {
        return document.getElementById(id);
    }

    function valor(id) {
        var campo = elemento(id);
        return campo ? campo.value.trim() : "";
    }

    function mostrarMensagem(mensagem, sucesso) {
        var mensagens = document.querySelectorAll("#mensagem-feedback");
        mensagens.forEach(function (caixa) {
            caixa.textContent = mensagem;
            caixa.style.display = "block";
            caixa.style.color = sucesso ? "#2e7d32" : "#c62828";
        });
    }

    function limparFormulario(formulario) {
        if (formulario) {
            formulario.reset();
        }
    }

    function todosPreenchidos(ids) {
        return ids.every(function (id) {
            return valor(id) !== "";
        });
    }

    function dataValida(texto) {
        var partes = texto.split(/[\/-]/);
        if (partes.length !== 3) {
            return null;
        }

        var dia = Number(partes[0]);
        var mes = Number(partes[1]);
        var ano = Number(partes[2]);
        if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano) || ano < 1) {
            return null;
        }

        var data = new Date(ano, mes - 1, dia);
        if (data.getFullYear() !== ano || data.getMonth() !== mes - 1 || data.getDate() !== dia) {
            return null;
        }
        return data;
    }

    function formatarData(data) {
        var dia = String(data.getDate()).padStart(2, "0");
        var mes = String(data.getMonth() + 1).padStart(2, "0");
        return dia + "/" + mes + "/" + data.getFullYear();
    }

    function hojeSemHora() {
        var hoje = new Date();
        return new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    }

    function livroDisponivel(livro) {
        return livro.quantidade > 0;
    }

    function semAcentos(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function atualizarDashboard() {
        var totalLivros = elemento("total-livros");
        var ativos = elemento("emprestimos-ativos");
        var totalUsuarios = elemento("total-usuarios");

        if (totalLivros) totalLivros.textContent = livros.length;
        if (ativos) ativos.textContent = emprestimos.filter(function (item) { return item.status === "Ativo"; }).length;
        if (totalUsuarios) totalUsuarios.textContent = usuarios.length;
        renderizarEmprestimosRecentes();
    }

    function renderizarEmprestimosRecentes() {
        var corpo = elemento("corpo-tabela-emprestimos");
        if (!corpo) return;

        corpo.innerHTML = "";
        emprestimos.slice().reverse().forEach(function (item) {
            var linha = document.createElement("tr");
            [item.livro, item.usuario, item.dataEmprestimo, item.dataDevolucaoReal || item.dataDevolucaoEsperada, item.status].forEach(function (texto) {
                var celula = document.createElement("td");
                celula.textContent = texto;
                linha.appendChild(celula);
            });
            corpo.appendChild(linha);
        });
    }

    function cadastrarUsuario(evento) {
        evento.preventDefault();
        var nome = valor("input-nome");
        var email = valor("input-email");
        var formulario = elemento("formulario-cadastro-usuarios");

        if (!nome || !email) {
            mostrarMensagem("Preencha todos os campos obrigatórios.", false);
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            mostrarMensagem("Digite um e-mail válido.", false);
            return;
        }
        if (usuarios.some(function (usuario) { return usuario.email === email; })) {
            mostrarMensagem("Este e-mail já está cadastrado.", false);
            return;
        }

        usuarios.push({ nome: nome, email: email });
        salvarDados();
        limparFormulario(formulario);
        mostrarMensagem("Usuário cadastrado com sucesso.", true);
        atualizarDashboard();
    }

    function cadastrarLivro(evento) {
        evento.preventDefault();
        var ids = ["input-titulo", "input-autor", "input-isbn", "input-editora", "input-ano", "input-categoria", "input-sinopse", "input-quantidade", "input-localizacao"];
        var formulario = elemento("formulario-cadastro-livro");
        if (!todosPreenchidos(ids)) {
            mostrarMensagem("Preencha todos os campos obrigatórios.", false);
            return;
        }

        var quantidade = Number(valor("input-quantidade"));
        var ano = Number(valor("input-ano"));
        if (!Number.isInteger(quantidade) || quantidade <= 0 || !Number.isInteger(ano) || ano <= 0) {
            mostrarMensagem("Quantidade e ano devem ser números válidos. A quantidade deve ser maior que 0.", false);
            return;
        }

        livros.push({
            titulo: valor("input-titulo"),
            autor: valor("input-autor"),
            isbn: valor("input-isbn"),
            editora: valor("input-editora"),
            ano: ano,
            categoria: valor("input-categoria"),
            sinopse: valor("input-sinopse"),
            quantidade: quantidade,
            localizacao: valor("input-localizacao")
        });

        salvarDados();
        limparFormulario(formulario);
        mostrarMensagem("Livro cadastrado com sucesso.", true);
        atualizarDashboard();
    }

    function realizarEmprestimo(evento) {
        evento.preventDefault();
        var ids = ["input-titulo", "input-autor", "input-isbn", "input-editora", "input-ano", "input-categoria", "input-data-emprestimo", "input-nome-usuario", "input-email-usuario", "input-localizacao", "input-data-devolucao"];
        var formulario = elemento("formulario-emprestar-livro");
        if (!todosPreenchidos(ids)) {
            mostrarMensagem("Preencha todos os campos obrigatórios.", false);
            return;
        }

        var dataEmprestimo = dataValida(valor("input-data-emprestimo"));
        var dataDevolucao = dataValida(valor("input-data-devolucao"));
        if (!dataEmprestimo || !dataDevolucao || dataDevolucao < dataEmprestimo) {
            mostrarMensagem("Informe datas válidas. A devolução deve ser posterior ou igual à data do empréstimo.", false);
            return;
        }

        var livro = livros.find(function (item) {
            return item.titulo === valor("input-titulo") &&
                item.autor === valor("input-autor") &&
                item.isbn === valor("input-isbn") &&
                item.editora === valor("input-editora") &&
                String(item.ano) === valor("input-ano") &&
                item.categoria === valor("input-categoria") &&
                item.localizacao === valor("input-localizacao");
        });
        if (!livro) {
            mostrarMensagem("O livro informado não está cadastrado.", false);
            return;
        }
        if (!livroDisponivel(livro)) {
            mostrarMensagem("O livro está indisponível.", false);
            return;
        }

        var usuario = usuarios.find(function (item) {
            return item.email === valor("input-email-usuario") && item.nome === valor("input-nome-usuario");
        });
        if (!usuario) {
            mostrarMensagem("O usuário informado não está cadastrado.", false);
            return;
        }

        livro.quantidade -= 1;
        emprestimos.push({
            livro: livro.titulo,
            usuario: usuario.nome,
            email: usuario.email,
            dataEmprestimo: formatarData(dataEmprestimo),
            dataDevolucaoEsperada: formatarData(dataDevolucao),
            dataDevolucaoReal: null,
            status: "Ativo"
        });

        salvarDados();
        limparFormulario(formulario);
        mostrarMensagem("Livro emprestado com sucesso.", true);
        atualizarDashboard();
    }

    function devolverLivro(evento) {
        evento.preventDefault();
        var ids = ["input-livro", "input-email", "input-data-devolucao", "input-usuario"];
        var formulario = elemento("formulario-devolucao");
        if (!todosPreenchidos(ids)) {
            mostrarMensagem("Preencha todos os campos obrigatórios.", false);
            return;
        }

        var dataReal = dataValida(valor("input-data-devolucao"));
        if (!dataReal || dataReal < hojeSemHora()) {
            mostrarMensagem("A data de devolução deve ser válida e não pode ser anterior à data de hoje.", false);
            return;
        }

        var emprestimo = emprestimos.find(function (item) {
            return item.status === "Ativo" && item.livro === valor("input-livro") && item.email === valor("input-email") && item.usuario === valor("input-usuario");
        });
        if (!emprestimo) {
            mostrarMensagem("Não existe empréstimo ativo correspondente.", false);
            return;
        }

        var livro = livros.find(function (item) { return item.titulo === emprestimo.livro; });
        if (livro) livro.quantidade += 1;
        emprestimo.status = "Devolvido";
        emprestimo.dataDevolucaoReal = formatarData(dataReal);
        if (dataReal > dataValida(emprestimo.dataDevolucaoEsperada)) {
            atrasosRegistrados += 1;
        }

        salvarDados();
        limparFormulario(formulario);
        mostrarMensagem("Livro devolvido com sucesso.", true);
        atualizarDashboard();
        atualizarRelatorio();
    }

    function atualizarRelatorio() {
        var cards = document.querySelectorAll(".relatorio-secao .card-numero");
        if (cards.length < 3) return;
        cards[0].textContent = emprestimos.length;
        cards[1].textContent = usuarios.filter(function (usuario) {
            return emprestimos.some(function (item) { return item.email === usuario.email && item.status === "Ativo"; });
        }).length;
        cards[2].textContent = atrasosRegistrados;
    }

    function renderizarLivros(lista) {
        var corpo = elemento("corpo-tabela-livros");
        if (!corpo) return;
        corpo.innerHTML = "";
        lista.forEach(function (livro) {
            var linha = document.createElement("tr");
            [livro.titulo, livro.autor, livro.categoria, livro.ano].forEach(function (texto) {
                var celula = document.createElement("td");
                celula.textContent = texto;
                linha.appendChild(celula);
            });
            var disponibilidade = document.createElement("td");
            disponibilidade.textContent = livroDisponivel(livro) ? "Disponível" : "Indisponível";
            disponibilidade.className = livroDisponivel(livro) ? "disponivel" : "indisponivel";
            linha.appendChild(disponibilidade);
            corpo.appendChild(linha);
        });
        renderizarPaginacao("numeros-pagina", lista.length, paginaLivros, function (pagina) { paginaLivros = pagina; buscarLivros(); });
    }

    function buscarLivros() {
        var pesquisa = elemento("input-busca");
        var texto = pesquisa ? pesquisa.value : "";
        var encontrados = livros.filter(function (livro) {
            var combinaTexto = !texto || livro.titulo === texto || livro.autor === texto || livro.isbn === texto;
            var combinaCategoria = categoriaSelecionada === "todas" || semAcentos(livro.categoria.toLowerCase()) === categoriaSelecionada;
            var disponivel = livroDisponivel(livro);
            var combinaDisponibilidade = disponibilidadeSelecionada === "todas" || (disponibilidadeSelecionada === "disponivel" && disponivel) || (disponibilidadeSelecionada === "indisponivel" && !disponivel);
            return combinaTexto && combinaCategoria && combinaDisponibilidade;
        });
        if (!encontrados.length && livros.length) {
            var corpo = elemento("corpo-tabela-livros");
            if (corpo) corpo.innerHTML = "<tr><td colspan=\"5\">Nenhum livro encontrado.</td></tr>";
            return;
        }
        var inicio = (paginaLivros - 1) * itensPorPagina;
        renderizarLivros(encontrados.slice(inicio, inicio + itensPorPagina));
    }

    function renderizarUsuarios(lista) {
        var corpo = elemento("corpo-tabela-usuarios");
        if (!corpo) return;
        corpo.innerHTML = "";
        lista.forEach(function (usuario) {
            var linha = document.createElement("tr");
            [usuario.nome, usuario.email].forEach(function (texto) {
                var celula = document.createElement("td");
                celula.textContent = texto;
                linha.appendChild(celula);
            });
            corpo.appendChild(linha);
        });
        renderizarPaginacao("numeros-pagina-usuarios", lista.length, paginaUsuarios, function (pagina) { paginaUsuarios = pagina; buscarUsuarios(); });
    }

    function buscarUsuarios() {
        var campo = elemento("input-pesquisa-usuarios");
        var texto = campo ? campo.value : "";
        var encontrados = usuarios.filter(function (usuario) { return !texto || usuario.nome.includes(texto); });
        var inicio = (paginaUsuarios - 1) * itensPorPagina;
        renderizarUsuarios(encontrados.slice(inicio, inicio + itensPorPagina));
    }

    function renderizarPaginacao(id, total, pagina, aoMudar) {
        var container = elemento(id);
        if (!container) return;
        container.innerHTML = "";
        var totalPaginas = Math.ceil(total / itensPorPagina);
        for (var i = 1; i <= totalPaginas; i += 1) {
            var botao = document.createElement("button");
            botao.textContent = i;
            botao.className = i === pagina ? "pagina-ativa" : "";
            botao.addEventListener("click", (function (numero) {
                return function () { aoMudar(numero); };
            })(i));
            container.appendChild(botao);
        }
    }

    function configurarCatalogo() {
        var busca = document.querySelector(".btn-buscar");
        if (busca) busca.addEventListener("click", function () { paginaLivros = 1; buscarLivros(); });
        document.querySelectorAll("[data-categoria]").forEach(function (item) {
            item.addEventListener("click", function (evento) {
                evento.preventDefault();
                categoriaSelecionada = item.dataset.categoria;
                elemento("btn-categoria").firstChild.textContent = item.textContent + " ";
                buscarLivros();
            });
        });
        document.querySelectorAll("[data-disponibilidade]").forEach(function (item) {
            item.addEventListener("click", function (evento) {
                evento.preventDefault();
                disponibilidadeSelecionada = item.dataset.disponibilidade;
                elemento("btn-disponibilidade").firstChild.textContent = item.textContent + " ";
                buscarLivros();
            });
        });
        var anterior = elemento("btn-anterior");
        var proxima = elemento("btn-proxima");
        if (anterior) anterior.addEventListener("click", function () { if (paginaLivros > 1) { paginaLivros -= 1; buscarLivros(); } });
        if (proxima) proxima.addEventListener("click", function () { paginaLivros += 1; buscarLivros(); });
        buscarLivros();
    }

    function configurarUsuarios() {
        var busca = document.querySelector(".btn-buscar-usuarios");
        if (busca) busca.addEventListener("click", function () { paginaUsuarios = 1; buscarUsuarios(); });
        var anterior = elemento("btn-anterior-usuarios");
        var proxima = elemento("btn-proxima-usuarios");
        if (anterior) anterior.addEventListener("click", function () { if (paginaUsuarios > 1) { paginaUsuarios -= 1; buscarUsuarios(); } });
        if (proxima) proxima.addEventListener("click", function () { paginaUsuarios += 1; buscarUsuarios(); });
        buscarUsuarios();
    }

    document.addEventListener("DOMContentLoaded", function () {
        carregarDados();
        var cadastroUsuario = elemento("formulario-cadastro-usuarios");
        var cadastroLivro = elemento("formulario-cadastro-livro");
        var emprestar = elemento("formulario-emprestar-livro");
        var devolver = elemento("formulario-devolucao");
        if (cadastroUsuario) cadastroUsuario.addEventListener("submit", cadastrarUsuario);
        if (cadastroLivro) cadastroLivro.addEventListener("submit", cadastrarLivro);
        if (emprestar) emprestar.addEventListener("submit", realizarEmprestimo);
        if (devolver) devolver.addEventListener("submit", devolverLivro);
        configurarCatalogo();
        configurarUsuarios();
        atualizarDashboard();
        atualizarRelatorio();
    });
})();
