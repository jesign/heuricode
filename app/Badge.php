<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Badge extends Model
{
	protected $fillable = [
        'name', 'filename', 'description', 
    ];

    public function users(){
    	return $this->belongsToMany('App\User');
    }
}
