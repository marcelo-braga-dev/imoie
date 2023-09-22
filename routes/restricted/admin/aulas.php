<?php

use App\Http\Controllers\Admin\Aulas\AulasController;
use App\Http\Controllers\Admin\Turmas\TurmasController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('aulas', AulasController::class);
        Route::post('aula/avanca-status/{id}/{status}', [AulasController::class, 'avancaStatus'])
            ->name('aulas.avanca-status');
    });
