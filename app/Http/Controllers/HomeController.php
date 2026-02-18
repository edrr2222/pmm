<?php
namespace App\Http\Controllers;

class HomeController extends Controller
{

    
    public function __construct( )
    {
        
    }

    public function index() {
       
        return view('home.index');
    }
    public function template($name_template) 
    {
        
        
        return view('home.index', compact('name_template'));
    }
    
    
    
  
}
