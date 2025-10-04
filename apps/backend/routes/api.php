<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;

Route::get('/test', function () {
    return response()->json(['message' => 'Backend is working!']);
});


Route::post('/messages', MessageController::class);
