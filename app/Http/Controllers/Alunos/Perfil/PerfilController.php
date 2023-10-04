<?php

namespace App\Http\Controllers\Alunos\Perfil;

use App\Http\Controllers\Controller;
use App\Models\Mensalidades;
use App\Models\Turmas;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PerfilController extends Controller
{
    public function index()
    {
        $dados = (new User())->dadosUsuario(id_usuario_atual());
        $turma = (new Turmas())->find(turma_aluno());

        return Inertia::render('Alunos/Perfil/Index',
            compact('dados', 'turma'));
    }

    public function update($id, Request $request)
    {
        if ($request->senha !== $request->senha_confirmar) {
            modalErro('Senhas não coincidem.');
            return redirect()->back();
        }

        (new User())->atualizarSenha($id, $request->senha);

        modalSucesso('Senha atualizada com sucesso!');
        return redirect()->back();
    }
}
