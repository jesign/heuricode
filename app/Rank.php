<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rank extends Model
{
    protected $fillable = [
        'user_id', 'weakness_id', 'rank'
    ];

    public function user(){
    	return $this->belongsTo('App\User');
    }
    
}
