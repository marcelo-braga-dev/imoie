<?php

use App\Http\Controllers\Admin\Aulas\AulasController;
use App\Http\Controllers\Admin\Perfil\PerfilController;
use App\Http\Controllers\Admin\Professores\ProfessoresController;
use App\Http\Controllers\Admin\Turmas\TurmasController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('professores', ProfessoresController::class);
    });
