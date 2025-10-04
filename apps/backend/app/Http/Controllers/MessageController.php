<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMessageRequest;
use App\Http\Requests\UpdateMessageRequest;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Вернуть все сообщения
        return response()->json(Message::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        $message = Message::create($validated);

        return response()->json([
            'message' => 'Сообщение сохранено',
            'data' => $message
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        return response()->json($message, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMessageRequest $request, Message $message)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        $message->update($validated);

        return response()->json([
            'message' => 'Сообщение обновлено',
            'data' => $message
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        $message->delete();

        return response()->json([
            'message' => 'Сообщение удалено'
        ], 200);
    }
}
