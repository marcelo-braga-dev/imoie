<?php

namespace App\Http\Controllers\Admin\Alunos;

use App\Http\Controllers\Controller;
use App\Models\Turmas;
use App\Models\User;
use App\src\Usuarios\CadastrarUsuarios;
use App\src\Usuarios\Funcoes\AlunosUsuario;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlunosController extends Controller
{
    public function index()
    {
        $alunos = (new User())->getAlunos();

        return Inertia::render('Admin/Alunos/Index', compact('alunos'));
    }

    public function create()
    {
        $turmas = (new Turmas())->get();

        return Inertia::render('Admin/Alunos/Create', compact('turmas'));
    }

    public function store(Request $request)
    {
        (new CadastrarUsuarios())->cadastrar($request, (new AlunosUsuario()));

        return redirect()->route('admin.alunos.index');
    }

    public function show($id)
    {
        $dados = (new User())->dadosCompleto($id);

        return Inertia::render('Admin/Alunos/Show',
            compact('dados'));
    }

    public function edit($id)
    {
        $turmas = (new Turmas())->get();
        $aluno = (new User())->dadosCompleto($id);

        return Inertia::render('Admin/Alunos/Edit',
            compact('aluno', 'turmas'));
    }

    public function update($id, Request $request)
    {
        (new User())->atualizar($id, $request);

        modalSucesso('Dados atualizados com sucesso');
        return redirect()->route('admin.alunos.show', $id);
    }
}
