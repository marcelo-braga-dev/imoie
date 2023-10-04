<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Inscricoes extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'nome_social',
        'cpf',
        'telefone',
        'whatsapp',
        'contato',
        'email',
        'turma',
        'forma_pagamento',
        'qtd_parcelas',
        'matriculado',
        'novo'
    ];

    public function create($dados)
    {
        $this->newQuery()
            ->create([
                'nome' => $dados->nome,
                'nome_social' => $dados->nome_social,
                'cpf' => $dados->cpf,
                'telefone' => $dados->telefone,
                'whatsapp' => $dados->whatsapp,
                'contato' => $dados->contato,
                'email' => $dados->email,
                'turma' => $dados->turma,
                'forma_pagamento' => $dados->forma_pagamento,
                'qtd_parcelas' => $dados->qtd_parcelas,
            ]);
    }

    public function get()
    {
        $turmas = (new Turmas())->getNomes();

        return $this->newQuery()
            ->orderByDesc('id')
            ->get()
            ->transform(function ($dados) use ($turmas) {
                return [
                    'id' => $dados->id,
                    'nome' => $dados->nome,
                    'nome_social' => $dados->nome_social,
                    'cpf' => $dados->cpf,
                    'telefone' => $dados->telefone,
                    'whatsapp' => $dados->whatsapp,
                    'contato' => $dados->contato,
                    'email' => $dados->email,
                    'turma' => $turmas[$dados->turma] ?? '',
                    'forma_pagamento' => $dados->forma_pagamento,
                    'qtd_parcelas' => $dados->qtd_parcelas,
                    'matriculado' => $dados->matriculado ? 'Sim' : 'Não',
                    'data' => date('d/m/y H:i', strtotime($dados->created_at))
                ];
            });
    }

    public function find($id)
    {
        $dados = $this->newQuery()
            ->find($id);

        $turmas = (new Turmas())->getNomes();

        return [
            'id' => $dados->id,
            'nome' => $dados->nome,
            'nome_social' => $dados->nome_social,
            'cpf' => $dados->cpf,
            'telefone' => $dados->telefone,
            'whatsapp' => $dados->whatsapp,
            'contato' => $dados->contato,
            'email' => $dados->email,
            'turma_id' => $dados->turma,
            'turma' => $turmas[$dados->turma] ?? '',
            'forma_pagamento' => $dados->forma_pagamento,
            'qtd_parcelas' => $dados->qtd_parcelas,
            'matriculado' => $dados->matriculado ? 'Sim' : 'Não',
            'data' => date('d/m/y H:i', strtotime($dados->created_at))
        ];
    }

    public function setMatriculado($id)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'matriculado' => true
            ]);
    }

    public function getTurmas($id)
    {
        $turmas = (new Turmas())->getNomes();

        return $this->newQuery()
            ->where('turma', $id)
            ->get()
            ->transform(function ($dados) use ($turmas) {
                return [
                    'id' => $dados->id,
                    'nome' => $dados->nome,
                    'nome_social' => $dados->nome_social,
                    'cpf' => $dados->cpf,
                    'telefone' => $dados->telefone,
                    'whatsapp' => $dados->whatsapp,
                    'contato' => $dados->contato,
                    'email' => $dados->email,
                    'turma' => $turmas[$dados->turma] ?? '',
                    'forma_pagamento' => $dados->forma_pagamento,
                    'qtd_parcelas' => $dados->qtd_parcelas,
                    'matriculado' => $dados->matriculado ? 'Sim' : 'Não',
                    'data' => date('d/m/y H:i', strtotime($dados->created_at))
                ];
            });
    }

    public function getPorTurmas()
    {
        $turmas = (new Turmas())->getNomes();

        return $this->newQuery()
            ->select(
                DB::raw('COUNT(turma) as qtd, turma as id, COUNT(novo) as novo')
            )
            ->groupBy(DB::raw('turma'))
            ->get()
            ->transform(function ($item) use ($turmas) {
                return [
                    'id' => $item->id,
                    'nome' => $turmas[$item->id] ?? '',
                    'total' => $item->qtd,
                    'novos' => $item->novo
                ];
            });
    }
}
