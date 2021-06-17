<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class AppController extends Controller
{
    public function show()
    {
        return response()->json([
            'message' => 'Coucou Tu vas bien ?'
        ]);
    }
}
