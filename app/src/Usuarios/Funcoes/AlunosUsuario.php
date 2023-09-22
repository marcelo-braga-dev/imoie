<?php

namespace App\src\Usuarios\Funcoes;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;

class AlunosUsuario implements FuncoesUsuarios
{
    private string $funcao = 'aluno';

    public function getFuncao(): string
    {
        return $this->funcao;
    }

    function cadastrar($dados)
    {
        $dados->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'senha' => 'required|string|max:255',
        ]);

        (new User())->cadastrar($dados, $this->funcao);
    }

    function atualizarDados($id, $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
        ]);

        (new User())->updateAdmin($id, $request);
    }
}
