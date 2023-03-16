<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CreateToyController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/create/toy', [CreateToyController::class, 'createToy']);
Route::post('/delete/toy', [CreateToyController::class, 'deleteToy']);
Route::post('/update/toy', [CreateToyController::class, 'updateToy']);
Route::get('/get/confirmcreate', [CreateToyController::class, 'confirmCreate']);
Route::post('/get/confirmget', [CreateToyController::class, 'confirmGet']);

Route::post('create/review', [CreateToyController::class, 'createReview']);
Route::post('/get/reviewget', [CreateToyController::class, 'confirmGet']);

Route::get('/get/toy', [CreateToyController::class, 'getToy']);

Route::get('/get/alltoy', [CreateToyController::class, 'getAllToy']);
Route::post('/send-files/{id}', [FileController::class, 'sendFile']);
Route::post('/send-filesUpd/{id}', [FileController::class, 'sendFileUpd']);


Route::get('/get/files', [FileController::class, 'getFile']);
Route::get('/get/addBasket', [CreateToyController::class, 'addBasket']);


Route::post('/create/user', [AuthController::class, 'register'])->name('register');
Route::get('/get/user', [UserController::class, 'getUser']);
Route::post('/delete/user', [UserController::class, 'deleteUser']);


Route::post('login', [UserController::class, 'login'])->name('login');
