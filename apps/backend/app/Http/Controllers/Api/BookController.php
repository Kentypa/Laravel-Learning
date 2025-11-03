<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request; // <-- 1. Импортируем Request

class BookController extends Controller
{
    /**
     * GET /api/books
     * * Примеры:
     * /api/books?page=3
     * /api/books?per_page=20
     */
    public function index(Request $request) // <-- 2. Внедряем Request
    {
        // 3. Устанавливаем свое значение по умолчанию, например 15
        $perPage = (int) $request->query('per_page', 15);

        // 4. Передаем в paginate()
        return Book::with('authors')->paginate($perPage);
    }

    // POST /api/books (пример)
    public function store(Request $request)
    {
        $validated = $request->validate(['title' => 'required|string|max:255']);
        $book = Book::create($validated);
        return response()->json($book, 201);
    }

    // GET /api/books/{book}
    public function show(Book $book)
    {
        // Загружаем авторов для конкретной книги
        return $book->load('authors');
    }

    // ...
}
