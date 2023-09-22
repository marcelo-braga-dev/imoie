<?php

namespace App\src\Aulas\Status;

class FechadaStatus implements Status
{
    private string $status = 'fechada';

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getNome(): string
    {
        return 'Fechada';
    }
}
