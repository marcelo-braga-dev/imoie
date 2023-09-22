<?php

namespace App\Http\Controllers\Alunos\Avaliacoes;

use App\Http\Controllers\Controller;
use App\Models\Turmas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AvaliacoesController extends Controller
{
    public function index()
    {
        $turma = (new Turmas())->find(turma_aluno());

        return Inertia::render('Alunos/Avaliacoes/Index', compact('turma'));
    }
}
