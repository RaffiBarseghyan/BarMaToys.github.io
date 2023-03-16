<?php

namespace App\Http\Controllers;

use App\Models\Basket;
use App\Models\CreateToy;
use App\Models\Files;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    public function addbasket(Request $req)
    {

        $data = new Basket();
        $data->toyId  = $req->post('toyId');
        $data->userEmail  = $req->post('userEmail');
        $data->count  = $req->post('count');

        $data->save();
    }

    public function basketUpdate(Request $req)
    {
        $toyId = $req->post('toyId');
        $userEmail = $req->post('userEmail');
        $data = Basket::select('*')
            ->where('toyId', '=', $toyId)
            ->where('userEmail', '=', $userEmail)->first();


        $data->toyId  = $req->post('toyId');
        $data->userEmail  = $req->post('userEmail');
        $dataCount = $data->count;
        $count = $req->post('count');
        $countSum =  intval($dataCount) + intval($count);
        $data->count = $countSum;
        $data->update();
    }

    public function getBasketfirst(Request $req)
    {
        return response()->json(
            [
                "data" => Basket::all()
            ]
        );
    }

    public function getBasket(Request $req)
    {
        return response()->json(
            [
                "basket" => Basket::where('userEmail', $req->post('userEmail'))->get(),
                "file" => Files::all(),
                "data" => CreateToy::all()
            ]
        );
    }
    public function deleteBasket(Request $req)
    {
        $id = $req->post('id');
        Basket::where('id', $id)->delete();

    }
    
}
