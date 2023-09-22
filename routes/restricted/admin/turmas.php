<?php

use App\Http\Controllers\Admin\Turmas\TurmasController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('turmas', TurmasController::class);

        Route::get('turmas/aulas/{id}', [TurmasController::class, 'aulas'])
            ->name('turmas.aulas');
        Route::get('turma/add-aluno/{id}', [TurmasController::class, 'addAluno'])
            ->name('turmas.add-aluno');
        Route::put('turma/add-aluno/{id}', [TurmasController::class, 'updateAluno'])
            ->name('turmas.add-aluno');
    });
