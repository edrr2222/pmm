<?php

namespace App\Models;

class User
{
    public static function all()
    {
        return collect([
            [
                'id' => 1,
                'name' => 'Elian Ramirez',
                'email' => 'elian@pmm.com',
            ],
            [
                'id' => 3,
                'name' => 'Camila Marinez',
                'email' => 'camila@pmm.com',
            ],
        ]);
    }

    public static function create($data)
    {
        return [
            'id' => rand(100, 999),
            'name' => $data['name'] ?? 'Sin nombre',
            'email' => $data['email'] ?? 'Sin email',
        ];
    }
}
