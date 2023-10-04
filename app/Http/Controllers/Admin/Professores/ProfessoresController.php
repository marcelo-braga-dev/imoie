<?php

namespace App\Http\Controllers\Admin\Professores;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfessoresController extends Controller
{
    public function index()
    {
        $prof = (new User())->getProfessores();
print_pre($prof);
        return Inertia::render('Admin/Professores/Index', compact('prof'));
    }
}
