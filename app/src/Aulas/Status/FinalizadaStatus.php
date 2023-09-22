<?php

namespace App\src\Aulas\Status;

class FinalizadaStatus implements Status
{
    private string $status = 'finalizada';

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getNome(): string
    {
        return 'Finalizada';
    }
}
