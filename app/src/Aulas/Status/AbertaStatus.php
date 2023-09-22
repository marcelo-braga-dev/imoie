<?php

namespace App\src\Aulas\Status;

class AbertaStatus implements Status
{
    private string $status = 'aberta';

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getNome(): string
    {
        return 'Aberta';
    }
}
