<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turmas extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'professor',
        'data'
    ];

    public function find($id)
    {
        $dados = $this->newQuery()
            ->find($id);
        if (!$dados) return [];

        $nomes = (new User())->getNomes();

        return [
            'id' => $dados->id,
            'nome' => $dados->nome,
            'id_professor' => $dados->professor,
            'professor' => $nomes[$dados->professor]['nome'] ?? '',
            'data' => $dados->data,
        ];
    }

    public function get()
    {
        $nomes = (new User())->getNomes();

        return $this->newQuery()
            ->orderByDesc('id')
            ->get()
            ->transform(function ($item) use ($nomes) {
                return [
                    'id' => $item->id,
                    'nome' => $item->nome,
                    'professor' => $nomes[$item->professor]['nome'] ?? '',
                    'data' => $item->data,
                ];
            });
    }

    public function create($request)
    {
        $this->newQuery()
            ->create([
                'nome' => $request->nome,
                'professor' => $request->professor,
                'data' => $request->data,
            ]);
    }

    public function atualizar($id, $request)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'nome' => $request->nome,
                'professor' => $request->professor,
                'data' => $request->data,
            ]);
    }

    public function getNomes(): array
    {
        $dados = $this->newQuery()->get(['id', 'nome']);

        $res = [];
        foreach ($dados as $item) {
            $res[$item->id] = $item->nome;
        }
        return $res;
    }
}
