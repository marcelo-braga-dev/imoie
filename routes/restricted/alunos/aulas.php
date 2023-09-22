<?php

use App\Http\Controllers\Alunos\Aulas\AulasController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->name('alunos.')
    ->prefix('alunos')
    ->group(function () {
        Route::resource('aulas', AulasController::class);
    });
