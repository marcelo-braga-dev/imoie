<?php

namespace App\src\Aulas;

use App\Models\Aulas;
use App\src\Aulas\Status\AbertaStatus;
use App\src\Aulas\Status\FechadaStatus;
use App\src\Aulas\Status\FinalizadaStatus;

class AvancaStatus
{
    public function avancarStatus($id, $status)
    {
        $aula = (new Aulas());
        $fechada = (new FechadaStatus());
        $aberta = (new AbertaStatus());
        $finalizada = (new FinalizadaStatus());

        switch ($status) {
            case $fechada->getStatus():
                $aula->atualizaStatus($id, $aberta->getStatus());
                return;
            case $aberta->getStatus():
                $aula->atualizaStatus($id, $finalizada->getStatus());
                return;
        }
    }
}
