<?php

use App\Http\Controllers\Admin\Mensalidades\MensalidadesController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('mensalidades', MensalidadesController::class);

        Route::post('mensalidade/update-status/{id}', [MensalidadesController::class, 'updateStatus'])
            ->name('mensalidades.update-status');
    });
