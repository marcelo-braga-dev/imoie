<?php

use App\Http\Controllers\Alunos\Aulas\AulasController;
use App\Http\Controllers\Alunos\Perfil\PerfilController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->name('alunos.')
    ->prefix('alunos')
    ->group(function () {
        Route::resource('perfil', PerfilController::class);
    });
