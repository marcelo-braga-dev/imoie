<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mensalidades', function (Blueprint $table) {
            $table->id();
            $table->integer('users_id');
            $table->integer('turma');
            $table->float('valor');
            $table->integer('parcela');
            $table->integer('total_parcelas');
            $table->string('status');
            $table->string('link_pagamento')->nullable();
            $table->string('token')->nullable();
            $table->date('data_vencimento');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mensalidades');
    }
};
