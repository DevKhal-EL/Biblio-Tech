-- =====================================================
-- BANCO DE DADOS: BIBLIOTECA_BD
-- Modelo físico - Sistema de Biblioteca
-- Modelo Lógico: Feito na ferramenta Dia
-- Modelo Conceitual: Feito na ferramenta BrModelo
-- SGBD: MySQL
-- Ferramenta: DBeaver
-- Nome da Dupla: Benício Khalel e Henrique
-- =====================================================

CREATE DATABASE IF NOT EXISTS BIBLIOTECA_BD;

USE BIBLIOTECA_BD;

-- =====================================================
-- 1. TABELA: usuarios
-- Armazena os usuários cadastrados na biblioteca
-- =====================================================

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE

) ENGINE = InnoDB;


-- =====================================================
-- 2. TABELA: categorias
-- Armazena as categorias dos livros
-- =====================================================

CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE

) ENGINE = InnoDB;


-- =====================================================
-- 3. TABELA: livros
-- Armazena os dados bibliográficos das obras
-- =====================================================

CREATE TABLE livros (
    id_livro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    autor VARCHAR(150) NOT NULL,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    editora VARCHAR(150) NOT NULL,
    ano_publicacao YEAR,
    sinopse TEXT,
    id_categoria_fk INT NOT NULL,

    CONSTRAINT fk_livros_categorias
        FOREIGN KEY (id_categoria_fk)
        REFERENCES categorias (id_categoria)
        ON DELETE RESTRICT

) ENGINE = InnoDB;


-- =====================================================
-- 4. TABELA: acervo
-- Cada registro representa um exemplar físico
-- de uma obra cadastrada em livros
-- =====================================================

CREATE TABLE acervo (
    id_acervo INT PRIMARY KEY AUTO_INCREMENT,
    id_livro INT NOT NULL,
    localizacao VARCHAR(100) NOT NULL,
    status ENUM(
        'Disponivel',
        'Emprestado',
        'Indisponivel'
    ) NOT NULL DEFAULT 'Disponivel',

    CONSTRAINT fk_acervo_livros
        FOREIGN KEY (id_livro)
        REFERENCES livros (id_livro)
        ON DELETE RESTRICT,

    INDEX idx_acervo_livro (id_livro),
    INDEX idx_acervo_status (status)
) ENGINE = InnoDB;


-- =====================================================
-- 5. TABELA: emprestimos
-- Registra qual usuário retirou qual exemplar
-- =====================================================

CREATE TABLE emprestimos (
    id_emprestimo INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_acervo INT NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao_esperada DATE NOT NULL,
    data_devolucao_real DATE,
    status ENUM(
        'Ativo',
        'Devolvido'
    ) NOT NULL DEFAULT 'Ativo',

    CONSTRAINT fk_emprestimos_usuarios
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios (id_usuario)
        ON DELETE RESTRICT,

    CONSTRAINT fk_emprestimos_acervo
        FOREIGN KEY (id_acervo)
        REFERENCES acervo (id_acervo)
        ON DELETE RESTRICT,

    CONSTRAINT chk_emprestimos_datas
        CHECK (
            data_devolucao_esperada >= data_emprestimo
            AND (
                data_devolucao_real IS NULL
                OR data_devolucao_real >= data_emprestimo
            )
        ),

    CONSTRAINT chk_emprestimos_status
        CHECK (
            (status = 'Ativo' AND data_devolucao_real IS NULL)
            OR
            (status = 'Devolvido' AND data_devolucao_real IS NOT NULL)
        ),

    INDEX idx_emprestimos_usuario (id_usuario),
    INDEX idx_emprestimos_acervo_status (id_acervo, status)
) ENGINE = InnoDB;
