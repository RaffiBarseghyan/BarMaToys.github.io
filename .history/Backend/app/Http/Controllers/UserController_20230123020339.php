<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function createUser(Request $req)
    {
        $data = new User();
        $data->name  = $req->post('name');
        $data->email  = $req->post('email');
        $data->password  = $req->post('password');
        $data->remember_token  = $req->post('change');
        $data->save();
    }

    ///////////////////////////
    private $apiToken;
    public function __construct()
    {
        $this->apiToken = uniqid(base64_encode(Str::random(40)));
    }
    /** 
     * 
     * @return \Illuminate\Http\Response 
     */

    public function login(Request $request)
    {
        
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $success['token'] = $this->apiToken;
            $success['name'] =  $user->name;
            return response()->json([
                'status' => 'success',
                'data' => $success
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => 'Unauthorized Access'
            ]);
        }
    }
    ///////////////////
    public function getUser()
    {
        return response()->json(
            [
                "user" => User::all()

            ]
        );
    }
}
