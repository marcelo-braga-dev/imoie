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
        Schema::create('turmas', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->integer('professor')->nullable();
            $table->boolean('status')->default(true);
            $table->string('data');
            $table->integer('max_alunos')->nullable();
            $table->float('valor');
            $table->integer('qtd_parcelas');
            $table->float('desconto_vista');
            $table->date('inicio');
            $table->date('fim');
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
        Schema::dropIfExists('turmas');
    }
};
