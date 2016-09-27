<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Round extends Model
{
	protected $fillable = [
        'user_id', 'problem_id', 'is_solved'
    ];

    public function user(){
    	return $this->belongsTo('App\User');
    }
    public function problems(){
    	return $this->hasMany('App\Problem');
    }
    public function solvedEasyProblems(){
    	return $this->problems()->where('difficulty', 'easy')->get();
    }
}
