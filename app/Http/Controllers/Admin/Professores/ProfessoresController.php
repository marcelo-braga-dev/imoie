<?php

namespace App\Http\Controllers\Admin\Professores;

use App\Http\Controllers\Controller;
use App\Models\Inscricoes;
use App\Models\Turmas;
use App\Models\User;
use App\src\Usuarios\CadastrarUsuarios;
use App\src\Usuarios\Funcoes\AlunosUsuario;
use App\src\Usuarios\Funcoes\ProfUsuario;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfessoresController extends Controller
{
    public function index()
    {
        $prof = (new User())->getProfessores();

        return Inertia::render('Admin/Professores/Index', compact('prof'));
    }

    public function create()
    {
        $turmas = (new Turmas())->get();

        return Inertia::render('Admin/Professores/Create', compact('turmas'));
    }

    public function store(Request $request)
    {
        (new CadastrarUsuarios())->cadastrar($request, (new ProfUsuario()));

        modalSucesso('Usuário cadastrado com sucesso!');
        return redirect()->route('admin.professores.index');
    }

    public function show($id)
    {
        $dados = (new User())->dadosCompleto($id);

        return Inertia::render('Admin/Professores/Show',
            compact('dados'));
    }

    public function edit($id)
    {
        $turmas = (new Turmas())->get();
        $aluno = (new User())->dadosCompleto($id);

        return Inertia::render('Admin/Professores/Edit',
            compact('aluno', 'turmas'));
    }

    public function update($id, Request $request)
    {
        (new User())->atualizar($id, $request);

        modalSucesso('Dados atualizados com sucesso');
        return redirect()->route('admin.professores.show', $id);
    }
}
