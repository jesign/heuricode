@extends('layouts.app')
@section('content')
    <div class="row">
        <div class="col s4 offset-s4">
            <div class="card grey lighten-5">
                <div class="card-content">
                    <span class="card-title">Login</span>
                    <div class="card-action">
                        <form method="POST" action="{{ url('/login') }}">
                        {{ csrf_field() }}
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input type="email" class="validate {{ $errors->has('email') ? 'invalid' : '' }}" name="email">
                                        <label data-error="{{ $errors->first('email') }}">Email</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input class=" validate {{ $errors->has('password') ? 'invalid' : '' }}" name="password" type="password">
                                        <label data-error="{{ $errors->first('password') }}">Password</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <button class="btn waves-effect right btn-large waves-light" type="submit" name="action">Login
                                        <i class="material-icons right">send</i>
                                        </button>
                                        {{-- <a href="{{ url('/password/reset') }}">Forgot Your Password?</a> --}}
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection