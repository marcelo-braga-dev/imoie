<?php

namespace App\src\Usuarios;

use App\Models\User;
use App\src\Usuarios\Funcoes\FuncoesUsuarios;

class CadastrarUsuarios
{
    public function cadastrar($dados, FuncoesUsuarios $funcao)
    {
        $dados->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'senha' => 'required|string|max:255',
        ]);

        (new User())->cadastrar($dados, $funcao);
    }
}
