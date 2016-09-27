<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'weakness',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    
    public function ranks()
    {
        return $this->hasMany('App\Rank');
    }
    public function rounds(){
        return $this->hasMany('App\Round');
    }
    public function errors(){
        return $this->hasMany('App\Error');
    }
    public function battles(){
        return $this->hasMany('App\Battle');
    }
    public function badges(){
        return $this->belongsToMany('App\Badge');
    }
    
}
