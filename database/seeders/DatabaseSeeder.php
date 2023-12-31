<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\src\Usuarios\Funcoes\AdminsUsuario;
use App\src\Usuarios\Status\AtivoStatusUsuario;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'admin@teste.com',
            'password' => Hash::make('1020'),
            'funcao' => (new AdminsUsuario())->getFuncao(),
            'status' => (new AtivoStatusUsuario())->getStatus()
        ]);
        \App\Models\User::create([
            'name' => 'Aluno',
            'email' => 'aluno@teste.com',
            'password' => Hash::make('1020'),
            'funcao' => (new AdminsUsuario())->getFuncao(),
            'status' => (new AtivoStatusUsuario())->getStatus()
        ]);
    }
}
