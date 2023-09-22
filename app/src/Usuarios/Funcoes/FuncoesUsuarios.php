<?php

namespace App\src\Usuarios\Funcoes;

interface FuncoesUsuarios
{
    function getFuncao(): string;

    function cadastrar($dados);

    function atualizarDados($id, $request);
}
