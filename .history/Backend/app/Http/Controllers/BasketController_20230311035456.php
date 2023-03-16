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
        $data = Basket::find($req->post('id'));
        
        $data->name = $req->post('name');
        $data->color = $req->post('color');
        $data->item = $req->post('item');
        $data->goal1 = $req->post('goal1');
        $data->goal2 = $req->post('goal2');
        $data->goal3 = $req->post('goal3');
        $data->goal4 = $req->post('goal4');
        $data->goal5 = $req->post('goal5');
        $data->goal6 = $req->post('goal6');
        $data->goal7 = $req->post('goal7');
        $data->agemin = $req->post('agemin');
        $data->agemax = $req->post('agemax');
        $data->price = $req->post('price');
        $data->description = $req->post('description');
        $data->update();

    }
    
}
