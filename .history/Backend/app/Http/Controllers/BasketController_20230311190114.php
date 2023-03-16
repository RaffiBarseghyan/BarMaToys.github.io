<?php

namespace App\Http\Controllers;

use App\Models\Basket;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    public function basket(Request $req)
    {

        $data = new Basket();
        $data->toyId  = $req->post('toyId');
        $data->userEmail  = $req->post('userEmail');
        $data->count  = $req->post('count');

        $data->save();
    }

    public function getBasket(Request $req)
    {
        return response()->json(
            [
                "data" => Basket::where('userEmail', $req->post('userEmail'))->get()
            ]
        );
    }
    public function basketUpdate(Request $req)
    {
        $toyId = $req->post('toyId');
        $userEmail = $req->post('userEmail');
        // $data =Basket::where('toyId', $toyId)::where('userEmail', $userEmail)->first();

        $data = Basket::select('*')
            ->where('toyId', '=', $toyId)
            ->where('userEmail', '=', $userEmail)->first();


        $data->toyId  = $req->post('toyId');
        $data->userEmail  = $req->post('userEmail');
        $dataCount = $data->count;
        $count = $req->post('count');
        $

        $data->update();
    }
}
