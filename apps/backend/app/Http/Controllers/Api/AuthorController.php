<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * GET /api/authors
     * * Примеры:
     * /api/authors
     * /api/authors?page=2
     * /api/authors?per_page=5
     * /api/authors?page=3&per_page=5
     */
    public function index(Request $request)
    {
        // 3. Получаем 'per_page' из query-параметров.
        // Если он не указан, по умолчанию ставим 10.
        $perPage = (int) $request->query('per_page', 10);

        // 4. Передаем $perPage в paginate()
        // Параметр 'page' Laravel подхватит автоматически
        return Author::with('books')->paginate($perPage);
    }

    // POST /api/authors (простой пример)
    public function store(Request $request)
    {
        $validated = $request->validate(['name' => 'required|string|max:255']);
        $author = Author::create($validated);
        return response()->json($author, 201);
    }

    // GET /api/authors/{author}
    public function show(Author $author)
    {
        // Загружаем книги для конкретного автора
        return $author->load('books');
    }
}
