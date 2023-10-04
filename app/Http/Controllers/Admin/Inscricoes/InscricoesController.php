<?php

namespace App\Http\Controllers\Admin\Inscricoes;

use App\Http\Controllers\Controller;
use App\Models\Inscricoes;
use App\Models\Turmas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InscricoesController extends Controller
{
    public function index()
    {
        $turmas = (new Inscricoes())->getPorTurmas();

        return Inertia::render('Admin/Inscricoes/Index',
            compact('turmas'));
    }

    public function show($id)
    {
        $dados = (new Inscricoes())->find($id);

        return Inertia::render('Admin/Inscricoes/Show', compact('dados'));
    }

    public function turmas($id)
    {
        $inscricoes = (new Inscricoes())->getTurmas($id);
        $turmas = (new Turmas())->get();

        return Inertia::render('Admin/Inscricoes/Turmas',
            compact('turmas', 'inscricoes'));
    }

    public function inscricao()
    {
        $turmas = (new Turmas())->get();

        return Inertia::render('Admin/Inscricoes/Create',
            compact('turmas'));
    }

    public function inscricaoCadastrar(Request $request)
    {
        (new Inscricoes())->create($request);

        return redirect()->route('incricoes.cadastro.confirmado');
    }

    public function inscricaoConfirmada()
    {
        return Inertia::render('Admin/Inscricoes/Confirmado');
    }
}
