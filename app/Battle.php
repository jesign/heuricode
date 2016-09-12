<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Battle extends Model
{
    protected $fillable = [
        'user_id', 'opponent_id', 'problem_id', 'is_solved', 'is_winner'
    ];

    public function user(){
    	return $this->belongsTo('App\User');
    }    
}
