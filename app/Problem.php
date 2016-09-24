<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Problem extends Model
{
    public function round(){
    	return $this->belongsTo('App\Round');
    }
    public function feedback(){
    	return $this->belongsTo('App\Feedback');
    }
    
}
