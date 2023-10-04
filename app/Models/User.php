<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\src\Usuarios\Funcoes\AdminsUsuario;
use App\src\Usuarios\Funcoes\AlunosUsuario;
use App\src\Usuarios\Funcoes\FuncoesUsuarios;
use App\src\Usuarios\Funcoes\ProfUsuario;
use App\src\Usuarios\Status\AtivoStatusUsuario;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'turma',
        'funcao',
        'status',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getUser(int $id) //possui Service
    {
        return $this->newQuery()->find($id);
    }

    public function getNomes()
    {
        $dados = $this->newQuery()->get();
        $items = [];
        foreach ($dados as $dado) {
            $items[$dado->id] = [
                'id' => $dado->id,
                'codigo' => $dado->codigo,
                'nome' => $dado->name
            ];
        }
        return $items;
    }

    public function cadastrar($request, FuncoesUsuarios $funcao)
    {
        $this->newQuery()
            ->create([
                'name' => $request->nome,
                'email' => $request->email,
                'turma' => $request->turma,
                'funcao' => $funcao->getFuncao(),
                'status' => (new AtivoStatusUsuario())->getStatus(),
                'password' => Hash::make($request->senha),
            ]);
    }

    public function atualizar($id, $dados)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'name' => $dados->nome,
                'email' => $dados->email,
                'turma' => $dados->turma,
            ]);

        if ($dados->senha) $this->atualizarSenha($id, $dados->senha);
    }

    public function get()
    {
        return $this->newQuery()->get();
    }

    public function dadosUsuario($id)
    {
        $dados = $this->newQuery()
            ->find($id);
        return [
            'id' => $dados->id,
            'nome' => $dados->name,
            'email' => $dados->email,
        ];
    }

    public function atualizarSenha($id, $senha)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'password' => Hash::make($senha)
            ]);
    }

    public function getAlunosTurma($id)
    {
        return $this->newQuery()
            ->where('turma', $id)
            ->get()
            ->transform(function ($item) {
                return [
                    'id' => $item->id,
                    'nome' => $item->name,
                ];
            });
    }

    public function getProfessores()
    {
        $turmas = (new Turmas())->getNomes();

        return $this->newQuery()
            ->where('funcao', (new ProfUsuario())->getFuncao())
            ->get()
            ->transform(function ($item) use ($turmas) {
                return [
                    'id' => $item->id,
                    'nome' => $item->name,
                    'turma_id' => $item->turma,
                    'turma' => $turmas[$item->turma] ?? 'Não inserida',
                ];
            });
    }

    public function find($id)
    {
        $dados = $this->newQuery()
            ->find($id);

        return [
            'id' => $dados->id,
            'nome' => $dados->name,
        ];
    }

    public function dadosCompleto($id)
    {
        $dados = $this->newQuery()
            ->find($id);

        $turmas = (new Turmas())->getNomes();

        return [
            'id' => $dados->id,
            'nome' => $dados->name,
            'email' => $dados->email,
            'turma' => $dados->turma,
            'turma_nome' => $turmas[$dados->turma] ?? '',
        ];
    }

    public function getAlunos()
    {
        $turmas = (new Turmas())->getNomes();

        return $this->newQuery()
            ->where('funcao', (new AlunosUsuario())->getFuncao())
            ->orderBy('turma')
            ->get()
            ->transform(function ($item) use ($turmas) {
                return [
                    'id' => $item->id,
                    'nome' => $item->name,
                    'turma_id' => $item->turma,
                    'turma' => $turmas[$item->turma] ?? '',
                ];
            });
    }

    public function atualizarTurma($id, $turma)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'turma' => $turma
            ]);
    }
}
