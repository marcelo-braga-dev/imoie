<?php

namespace App\Http\Controllers\Admin\Turmas;

use App\Http\Controllers\Controller;
use App\Models\Aulas;
use App\Models\Mensalidades;
use App\Models\Turmas;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TurmasController extends Controller
{
    public function index()
    {
        $turmas = (new Turmas())->get();

        return Inertia::render('Admin/Turmas/Index', compact('turmas'));
    }

    public function create()
    {
        $prof = (new User())->getProfessores();

        return Inertia::render('Admin/Turmas/Create', compact('prof'));
    }

    public function show($id)
    {
        $turma = (new Turmas())->find($id);
        $alunos = (new User())->getAlunosTurma($id);

        return Inertia::render('Admin/Turmas/Show',
            compact('turma', 'alunos'));
    }

    public function store(Request $request)
    {
        (new Turmas())->create($request);

        modalSucesso('Turma cadastrada com sucesso!');
        return redirect()->route('admin.turmas.index');
    }

    public function edit($id)
    {
        $turma = (new Turmas())->find($id);
        $prof = (new User())->getProfessores();

        return Inertia::render('Admin/Turmas/Edit',
            compact('turma', 'prof'));
    }

    public function update($id, Request $request)
    {
        (new Turmas())->atualizar($id, $request);

        modalSucesso('Dados atualizado com sucesso!');
        return redirect()->route('admin.turmas.index');
    }

    public function aulas($id)
    {
        $aulas = (new Aulas())->getAulasTurma($id);
        $turma = (new Turmas())->find($id);

        return Inertia::render('Admin/Aulas/Index',
            compact('aulas', 'turma'));
    }

    public function addAluno($id)
    {
        $turma = (new Turmas())->find($id);
        $alunos = (new User())->getAlunos();

        return Inertia::render('Admin/Turmas/AddAluno',
            compact('turma', 'alunos'));
    }

    public function storeAluno($id, Request $request)
    {
        (new User)->atualizarTurma($request->aluno, $request->turma);

        foreach ($request->parcelas as $item) {
            (new Mensalidades())->cadastrar($item, $request->aluno, $request->turma);
        }

        modalSucesso('Atualização realizada com sucesso!');
        return redirect()->route('admin.turmas.show', $id);
    }
}
