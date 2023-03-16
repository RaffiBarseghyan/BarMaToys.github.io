<?php

namespace App\Http\Controllers;

use App\Models\Basket;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    public function basket(Request $req)
    {

        $data = new Basket();

        if ($data->userEmail  == $req->post('userEmail') && $data->toyId  == $req->post('toyId')) {
           
        }else{
            
        }
        $data->toyId  = $req->post('toyId');
        $data->userEmail  = $req->post('userEmail');
        
       
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
}
