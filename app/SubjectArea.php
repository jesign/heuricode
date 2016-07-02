<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubjectArea extends Model
{
    //
	public function user()
    {
        return $this->belongsTo('App\User');
    }    

   	public function problems(){
   		return $this->hasMany('App\Problem');
   	}

}
