<?php

namespace App\Http\Controllers\Admin\Aulas;

use App\Http\Controllers\Controller;
use App\Models\Aulas;
use App\Models\Turmas;
use App\src\Aulas\AvancaStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AulasController extends Controller
{
    public function create(Request $request)
    {
        $turma = (new Turmas())->find($request->turma);

        return Inertia::render('Admin/Aulas/Create', compact('turma'));
    }

    public function store(Request $request)
    {
        (new Aulas())->create($request);

        modalSucesso('Aula cadastrada com sucesso!');
        return redirect()->route('admin.turmas.aulas', $request->turma_id);
    }

    public function edit($id)
    {
        $aula = (new Aulas())->find($id);

        return Inertia::render('Admin/Aulas/Edit', compact('aula'));
    }

    public function update($id, Request $request)
    {
        (new Aulas())->atualizar($id, $request);

        modalSucesso('Dados atualizado com sucesso!');
        return redirect()->route('admin.turmas.aulas', $request->turma);
    }

    public function avancaStatus($id, $status)
    {
        (new AvancaStatus())->avancarStatus($id, $status);

        modalSucesso('Status atualizado com sucesso!');
        return redirect()->back();
    }
}
