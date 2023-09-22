<?php

namespace App\Http\Controllers\Alunos\Aulas;

use App\Http\Controllers\Controller;
use App\Models\Aulas;
use App\Models\Turmas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AulasController extends Controller
{
    public function index()
    {
        $turma = (new Turmas())->find(turma_aluno());
        $aulas = (new Aulas())->todasAulas();

        return Inertia::render('Alunos/Aulas/Index',
            compact('turma', 'aulas'));
    }

    public function show($id)
    {
        $dados = (new Aulas())->get($id);

        return Inertia::render('Alunos/Aulas/Show',
            compact('dados'));
    }
}
