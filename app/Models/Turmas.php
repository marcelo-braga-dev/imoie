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
        'data',
        'status',
        'max_alunos',
        'valor',
        'qtd_parcelas',
        'desconto_vista',
        'inicio',
        'fim',
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
            'status' => $dados->status,
            'max_alunos' => $dados->max_alunos,
            'valor' => convert_float_money($dados->valor),
            'valor_str' => $dados->valor,
            'qtd_parcelas' => $dados->qtd_parcelas,
            'desconto_vista' => $dados->desconto_vista,
            'inicio' => date('d/m/Y', strtotime($dados->inicio)),
            'inicio_str' => $dados->inicio,
            'fim' => date('d/m/Y', strtotime($dados->fim)),
            'fim_str' => $dados->fim,
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
                    'id_professor' => $item->professor,
                    'status' => $item->status,
                    'max_alunos' => $item->max_alunos,
                    'valor' => convert_float_money($item->valor),
                    'valor_str' => $item->valor,
                    'qtd_parcelas' => $item->qtd_parcelas,
                    'desconto_vista' => $item->desconto_vista,
                    'inicio' => date('d/m/Y', strtotime($item->inicio)),
                    'inicio_str' => $item->inicio,
                    'fim' => date('d/m/Y', strtotime($item->fim)),
                    'fim_str' => $item->fim,
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
                'max_alunos' => $request->max_alunos,
                'valor' => $request->valor,
                'qtd_parcelas' => $request->qtd_parcelas,
                'desconto_vista' => $request->desconto_vista,
                'inicio' => $request->inicio,
                'fim' => $request->fim,
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
                'max_alunos' => $request->max_alunos,
                'valor' => convert_money_float($request->valor),
                'qtd_parcelas' => $request->qtd_parcelas,
                'desconto_vista' => $request->desconto_vista,
                'inicio' => $request->inicio,
                'fim' => $request->fim,
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
