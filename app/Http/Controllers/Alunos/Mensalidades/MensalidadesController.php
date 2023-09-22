<?php

namespace App\Http\Controllers\Alunos\Mensalidades;

use App\Http\Controllers\Controller;
use App\Models\Mensalidades;
use App\Models\Turmas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MensalidadesController extends Controller
{
    public function index()
    {
        $dados = (new Mensalidades())->aluno(2);
        $turma = (new Turmas())->find(turma_aluno());

        return Inertia::render('Alunos/Mensalidades/Index',
            compact('dados', 'turma'));
    }
}
