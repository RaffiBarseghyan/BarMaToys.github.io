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
        $data->address  = $req->post('address');
        $data->country  = $req->post('country');
        $data->city  = $req->post('city');
        $data->postal  = $req->post('postal');
        $data->phone  = $req->post('phone');
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
                'user' => User::all()

            ]
        );
    }
    public function deleteUser(Request $req)
    {
        $id = $req->post('id');
        User::where('id', $id)->delete();
    }

    public function checkout(Request $req)
    {
        return response()->json(
            [
                'data' => User::where('email', $req->post('userEmail'))->get(),
            ]
        );
    }

    public function updateUser(Request $req)
    {
        $data = User::where('email', $req->post('email'))->first();
        $data->address  = $req->post('address');
        $data->country  = $req->post('country');
        $data->city  = $req->post('city');
        $data->postal  = $req->post('postal');
        $data->phone  = $req->post('phone');
        $data->update();
    }
}
