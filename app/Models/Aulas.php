<?php

namespace App\Models;

use App\src\Aulas\Status\FechadaStatus;
use App\src\Aulas\StatusAulas;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aulas extends Model
{
    use HasFactory;

    protected $fillable = [
        'turma',
        'status',
        'modulo',
        'numero',
        'nome',
        'resumo',
        'link',
        'data',
    ];

    public function todasAulas(): array
    {
        $items = $this->newQuery()
            ->where('turma', turma_aluno())
            ->get();

        $dados = [];
        foreach ($items as $item) {
            $dados[$item->modulo][] = $this->dados($item);
        }
        $res = [];
        foreach ($dados as $item) {
            $res[] = $item;
        }
        return $res;
    }

    public function get($id)
    {
        $item = $this->newQuery()->find($id);

        return $this->dados($item);
    }

    private function dados($dados)
    {
        return [
            'id' => $dados->id,
            'modulo' => $dados->modulo,
            'numero' => $dados->numero,
            'nome' => $dados->nome,
            'resumo' => $dados->resumo,
            'link' => $dados->link,
            'data' => date('d/m/y H:i', strtotime($dados->data)),
        ];
    }

    public function getAulasTurma($id)
    {
        return $this->newQuery()
            ->where('turma', $id)
            ->orderBy('modulo')
            ->orderBy('numero')
            ->get()
            ->transform(function ($item) {
                return [
                    'id' => $item->id,
                    'turma' => $item->turma,
                    'status' => $item->status,
                    'status_nome' => (new StatusAulas())->getNome($item->status),
                    'modulo' => $item->modulo,
                    'numero' => $item->numero,
                    'nome' => $item->nome,
                    'resumo' => $item->resumo,
                    'link' => $item->link,
                    'data' => date('d/m/y H:i', strtotime($item->data)),
                ];
            });
    }

    public function create($dados)
    {
        $this->newQuery()
            ->create([
                'turma' => $dados->turma_id,
                'modulo' => $dados->modulo,
                'status' => (new FechadaStatus())->getStatus(),
                'numero' => $dados->numero,
                'nome' => $dados->nome,
                'resumo' => $dados->resumo,
                'link' => $dados->link,
                'data' => $dados->data,
            ]);
    }

    public function find($id)
    {
        $dados = $this->newQuery()
            ->find($id);

        return [
            'id' => $dados->id,
            'modulo' => $dados->modulo,
            'numero' => $dados->numero,
            'nome' => $dados->nome,
            'resumo' => $dados->resumo,
            'link' => $dados->link,
            'data' => $dados->data,
            'turma' => $dados->turma,
        ];
    }

    public function atualizar($id, $dados)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'modulo' => $dados->modulo,
                'numero' => $dados->numero,
                'nome' => $dados->nome,
                'resumo' => $dados->resumo,
                'link' => $dados->link,
                'data' => $dados->data,
            ]);
    }

    public function atualizaStatus($id, $status)
    {
        $this->newQuery()
            ->find($id)
            ->update([
                'status' => $status
            ]);
    }
}
