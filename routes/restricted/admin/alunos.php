<?php

use App\Http\Controllers\Admin\Alunos\AlunosController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('alunos', AlunosController::class);
    });
