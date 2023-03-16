<?php

namespace App\Http\Controllers;

use App\Models\Basket;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    public function basket(Request $req)
    {

        $data1 = Basket::where('userEmail', $req->post('userEmail'))::where('toyId', $req->post('toyId'));

        $data1->count =  intval($data1->count) + intval($req->post('count'));

        $data = new Basket();
$data->update();

        // if (Basket::find($req->post('userEmail'))  && Basket::find($req->post('toyId'))) {
        //     $data->toyId  = $req->post('toyId');
        //     $data->userEmail  = $req->post('userEmail');
            
        //     $data->count = intval($dataCount) + intval($req->post('count'));
            
        // } else {
        //     $data->toyId  = $req->post('toyId');
        //     $data->userEmail  = $req->post('userEmail');
        //     $data->count  = $req->post('count');
        //     $data->save();
        // }
    }

    public function getBasket(Request $req)
    {
        return response()->json(
            [
                "data" => Basket::where('userEmail', $req->post('userEmail'))->get()
            ]
        );
    }
}
