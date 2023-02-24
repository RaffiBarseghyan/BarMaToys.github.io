<?php

namespace App\Http\Controllers;

use App\Models\CreateToy;
use Illuminate\Http\Request;
use App\Models\Files;
use Mockery\Undefined;

class FileController extends Controller
{
    public function sendFile(Request $req, $id)
    {

        $data = new Files();

        $name = $req->file('files')->getClientOriginalName();
        $req->file('files')->storeAs('uploads', $name, 'public');
        $destinationPath =  'storage/uploads';
        $req->file('files')->move($destinationPath, $name);
        $data->image = $name;
        if ($id == 0) {
            $data->prodId = $id + 1;
            $data->save();
        } else {
            $data->prodId = $id + 1;
            $data->save();
        }

    }

    public function getFile()
    {
        return response()->json(
            [
                "file" => Files::all()
            ]
        );
    }
}
