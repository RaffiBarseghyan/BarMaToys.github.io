<?php

namespace App\Http\Controllers;

use App\Models\CreateToy;
use App\Models\Files;
use App\Models\Raview;
use Illuminate\Http\Request;

class CreateToyController extends Controller
{
    public function createToy(Request $req)
    {

        $data = new CreateToy();
        $data->name  = $req->post('name');
        $data->color  = $req->post('color');
        $data->item  = $req->post('item');
        $data->goal1  = $req->post('goal1');
        $data->goal2  = $req->post('goal2');
        $data->goal3  = $req->post('goal3');
        $data->goal4  = $req->post('goal4');
        $data->goal5  = $req->post('goal5');
        $data->goal6  = $req->post('goal6');
        $data->goal7  = $req->post('goal7');
        $data->agemin  = $req->post('agemin');
        $data->agemax  = $req->post('agemax');
        $data->price  = $req->post('price');

        $data->description  = $req->post('description');

        $data->save();
    }

    public function getToy()
    {
        $data1 = CreateToy::where('goal1', 'true')->get();
        $data2 = CreateToy::where('goal2', 'true')->get();
        $data3 = CreateToy::where('goal3', 'true')->get();
        $data4 = CreateToy::where('goal4', 'true')->get();
        $data5 = CreateToy::where('goal5', 'true')->get();
        $data6 = CreateToy::where('goal6', 'true')->get();
        $data7 = CreateToy::where('goal7', 'true')->get();

        return response()->json(
            [
                'data1' => $data1,
                'data2' => $data2,
                'data3' => $data3,
                'data4' => $data4,
                'data5' => $data5,
                'data6' => $data6,
                'data7' => $data7,

            ]
        );
    }
    public function getAllToy()
    {
        return response()->json(
            [
                "file" => CreateToy::latest("id")->first()
            ]
        );
    }
    public function addBasket()
    {
        return response()->json(
            [
                "data" => CreateToy::all()
            ]
        );
    }
    public function confirmGet(Request $req)
    {
        return response()->json(
            [
                "data" => CreateToy::where('id', $req->post('id'))->get()
            ]
        );
    }

    public function confirmCreate()
    {
        return response()->json(
            [
                "data" => CreateToy::latest("id")->first()
            ]
        );
    }
    
    public function deleteToy(Request $req)
    {
        $id = $req->post('id');
        $prodId = $req->post('prodId');
        CreateToy::where('id', $id)->delete();
        Files::where('prodId', $id)->delete();
        Files::where('id', $prodId)->delete();
    }

    public function updateToy(Request $req)
    {

        $data = CreateToy::find($req->post('id'));
        
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

    public function createReview(Request $req){
        $data = new Raview();
        $data->stars  = $req->post('stars');
        $data->review  = $req->post('review');
        $data->userEmail  = $req->post('userEmail');
        $data->toyId  = $req->post('toyId');      

        $data->save();
    }
    
    public function reviewGet(Request $req)
    {
        return response()->json(
            [
                "data" => Raview::where('id', $req->post('id'))->get()
            ]
        );
    }
    
}
