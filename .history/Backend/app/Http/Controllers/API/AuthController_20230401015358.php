<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    private $apiToken;
    public function __construct()
    {
        $this->apiToken = uniqid(base64_encode(Str::random(40)));
    }
    /** 
     * Register API 
     * 
     * @return \Illuminate\Http\Response 
     */
    public function register(Request $request)
    {
        $postArray = $request->all();

        
        $user = User::create($postArray);

        $success['token'] = $this->apiToken;
        $success['name'] =  $user->name;
        return response()->json([
            'status' => 'success',
            'data' => $success,
        ]);
    }
}
