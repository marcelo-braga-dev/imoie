<?php

use App\Http\Controllers\Admin\Aulas\AulasController;
use App\Http\Controllers\Admin\Inscricoes\InscricoesController;
use App\Http\Controllers\Admin\Turmas\TurmasController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('inscricoes', InscricoesController::class);
    });

Route::name('incricoes.cadastro.')
    ->group(function () {
        Route::get('inscricao', [InscricoesController::class, 'inscricao'])
            ->name('inscricao');
        Route::post('inscricao', [InscricoesController::class, 'inscricaoCadastrar'])
            ->name('inscricao');
        Route::get('inscricao-confirmada', [InscricoesController::class, 'inscricaoConfirmada'])
            ->name('confirmado');
        Route::get('inscricao/{id}', [InscricoesController::class, 'show'])
            ->name('show');
        Route::get('inscricao-turmas/{id}', [InscricoesController::class, 'turmas'])
            ->name('inscricao-turmas');
    });
