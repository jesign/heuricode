<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Problem extends Model
{
	public function subjectArea(){
		return $this->belongsTo('App\SubjectArea');
	}
    public function testCases(){
    	return $this->hasMany('App\TestCase');
    }
}
