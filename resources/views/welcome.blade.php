@extends('layouts.app')

@section('content')

<div class="container-fluid">
		<div class="row">
			<div class="col-lg-offset-1">
			<h1>Welcome to Heuricode!</h1>
				
			</div>
			
		</div>
        <div class="row">
        	<div class="col-lg-5 col-lg-offset-1">
        		<img width="500px" src="{{ asset('img/heuricode-logo.png') }}" class="img-responsive">
        		
        	</div>
        	<div class="col-lg-4">
		        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        		
        	</div>
        </div>
</div>
@endsection
