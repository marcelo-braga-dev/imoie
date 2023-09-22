<?php

namespace App\src\Aulas;

use App\src\Aulas\Status\AbertaStatus;
use App\src\Aulas\Status\FechadaStatus;
use App\src\Aulas\Status\FinalizadaStatus;

class StatusAulas
{
    public function getNome($nome): string
    {
        $fechada = (new FechadaStatus());
        $aberta = (new AbertaStatus());
        $finalizada = (new FinalizadaStatus());

        $dados = [
            $fechada->getStatus() => $fechada->getNome(),
            $aberta->getStatus() => $aberta->getNome(),
            $finalizada->getStatus() => $finalizada->getNome(),
        ];

        return $dados[$nome] ?? '';
    }
}
