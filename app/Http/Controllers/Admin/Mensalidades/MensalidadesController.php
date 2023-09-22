<?php

namespace App\Http\Controllers\Admin\Mensalidades;

use App\Http\Controllers\Controller;
use App\Models\Mensalidades;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MensalidadesController extends Controller
{
    public function index()
    {
        $mensalidades = (new Mensalidades())->get();

        return Inertia::render('Admin/Mensalidades/Index',
            compact('mensalidades'));
    }

    public function show($id)
    {
        $dados = (new Mensalidades())->find($id);

        return Inertia::render('Admin/Mensalidades/Show',
            compact('dados'));
    }

    public function updateStatus($id)
    {
        (new Mensalidades())->atualizarStatus($id);

        modalSucesso('Status atualizado com sucesso!');
        return redirect()->back();
    }
}
