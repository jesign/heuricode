<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Error extends Model
{
	protected $fillable = [
        'user_id', 'type', 'count','mode', 'round_id',
    ];

    public function user(){
    	return $this->belongsTo('App\User');
    }
}
