<?php

namespace App\src\Aulas\Status;

interface Status
{
    public function getStatus(): string;
    public function getNome(): string;
}
