<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        // Obtener todos los usuarios del modelo fake
        $users = User::all();

        // Buscar por email
        $user = $users->firstWhere('email', $request->email);

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Usuario no existe'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Login correcto',
            'user' => $user
        ]);
    }
}
