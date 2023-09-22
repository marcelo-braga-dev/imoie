<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mensalidades extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'turma',
        'valor',
        'status',
        'link_pagamento',
        'token',
        'data_vencimento',
    ];

    public function aluno($id)
    {
        return $this->newQuery()
            ->where('users_id', $id)
            ->get()
            ->transform(function ($dados) {
                return $this->dados($dados);
            });
    }

    private function dados($dados)
    {
        return [
            'id' => $dados->id,
            'turma' => $dados->turma,
            'valor' => convert_float_money($dados->valor),
            'status' => $dados->status,
            'link_pagamento' => $dados->link_pagamento,
            'data_vencimento' => date('d/m/Y', strtotime($dados->data_vencimento)),
        ];
    }

    public function cadastrar($dados, $aluno, $turma)
    {
        $this->newQuery()
            ->create([
                'users_id' => $aluno,
                'turma' => $turma,
                'valor' => convert_money_float($dados['valor']),
                'status' => 'aberto',
                'link_pagamento' => $dados['link'],
                'token' => uniqid(),
                'data_vencimento' => $dados['data'],
            ]);
    }

    public function getAluno($aluno)
    {
        $turmas = (new Turmas())->getNomes();

        return $this->newQuery()
            ->where('users_id', $aluno)
            ->orderBy('data_vencimento')
            ->get()
            ->transform(function ($item) use ($turmas) {
                return [
                    'id' => $item->id,
                    'aluno_id' => $item->users_id,
                    'turma' => $turmas[$item->turma] ?? '',
                    'valor' => convert_float_money($item->valor),
                    'valor_float' => $item->valor,
                    'status' => $item->status,
                    'link_pagamento' => $item->link_pagamento,
                    'token' => $item->token,
                    'data_vencimento' => date('d/m/y', strtotime($item->data_vencimento)),
                ];
            });
    }

    public function get()
    {
        $turmas = (new Turmas())->getNomes();
        $nomes = (new User())->getNomes();

        return $this->newQuery()
            ->orderByDesc('data_vencimento')
            ->get()
            ->transform(function ($item) use ($turmas, $nomes) {
                return [
                    'id' => $item->id,
                    'aluno_nome' => $nomes[$item->users_id]['nome'] ?? '',
                    'aluno_id' => $item->users_id,
                    'turma' => $turmas[$item->turma] ?? '',
                    'valor' => convert_float_money($item->valor),
                    'valor_float' => $item->valor,
                    'status' => $item->status,
                    'link_pagamento' => $item->link_pagamento,
                    'token' => $item->token,
                    'data_vencimento' => date('d/m/y', strtotime($item->data_vencimento)),
                ];
            });
    }

    public function find($id)
    {
        $turmas = (new Turmas())->getNomes();
        $nomes = (new User())->getNomes();

        $item = $this->newQuery()
            ->find($id);

        return [
            'id' => $item->id,
            'aluno_nome' => $nomes[$item->users_id]['nome'] ?? '',
            'aluno_id' => $item->users_id,
            'turma' => $turmas[$item->turma] ?? '',
            'valor' => convert_float_money($item->valor),
            'valor_float' => $item->valor,
            'status' => $item->status,
            'link_pagamento' => $item->link_pagamento,
            'token' => $item->token,
            'data_vencimento' => date('d/m/y', strtotime($item->data_vencimento)),
        ];
    }

    public function atualizarStatus($id)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'status' => 'pago'
            ]);
    }
}
