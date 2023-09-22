<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $auth = auth()->user()->funcao;
    switch ($auth) {
        case (new \App\src\Usuarios\Funcoes\AdminsUsuario())->getFuncao() :
            return redirect()->route('admin.home.index');
        case (new \App\src\Usuarios\Funcoes\AlunosUsuario())->getFuncao() :
            return redirect()->route('alunos.aulas.index');
        default :
        {
            auth()->logout();
            modalErro('Função do usuário não encontrado.');
            return redirect('/');
        }
    }
})->middleware(['auth', 'verified'])->name('home');

Route::any('dashboard', function () {
    return redirect('/');
})->name('dashboard');
