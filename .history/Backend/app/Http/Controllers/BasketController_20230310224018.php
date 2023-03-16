<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BasketController extends Controller
{
    public function basket(Request $req)
    {

        $data = new ();
        $data->name  = $req->post('name');
        $data->color  = $req->post('color');
        $data->item  = $req->post('item');
       

        $data->save();
    }
}
