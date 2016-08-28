<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>HeuriCode</title>
    <link rel="icon" href="{{ asset('img/heuricode-small.png') }}">
    <!-- Fonts -->
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous"> --}}
    
    {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700"> --}}

    <!-- Styles -->
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous"> --}}

    
    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}
    <link rel="stylesheet" type="text/css" href="{{asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('build/css/all.css') }}">

    <style type="text/css" media="screen">
        #editor { 
            position: absolute;
            margin-top: 50px;
            margin-left: 15px;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    </style>

    <script src="{{ asset('bower_components/jquery/dist/jquery.js') }}"></script>
    <script src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.js')}}"></script>
    <script>var baseUrl = "{{ url('/') }}/";</script>
</head>
<body id="app-layout" ng-controller="globalController">
    <div ng-controller="navController">
        <nav class="navbar navbar-default navbar-fixed-top navbar-inverse" ng-show="showNav">
            <div class="container-fluid">
                <div class="navbar-header"> 

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Branding Image -->
                    <a class="navbar-brand" ui-sref="homePage">
                        <img id="logo" src="{{ asset('img/heuricode-inverse-small.png') }}" >
                        HeuriCode
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    @if(!Auth::guest())
                    <ul class="nav navbar-nav">
                        <li>
                            <a id="menu-toggle" ng-click="toggleSidebar()">  
                                <span class="glyphicon glyphicon-menu-hamburger" style="cursor: pointer;"></span>
                            </a>
                        </li>

                    </ul>
                    @endif
                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @if (Auth::guest())
                            <li><a href="{{ url('/login') }}">Login</a></li>
                            <li><a href="{{ url('/register') }}">Register</a></li>
                        @else
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Account Settings</a></li>
                                    <li><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
                                </ul>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </nav>
        
        @if(!Auth::guest())

        <div id="sidebar-wrapper" class="open">
            <ul class="sidebar-nav">
                <li><a ui-sref="problemPage">Self-Train</a></li>
                <li><a ui-sref="multiplayerPage">Find Match</a></li>
                <li><a ui-sref="statProgPage">Statistical Progress</a></li>
                <li><a ui-sref="settingPage">Settings</a></li>
                <li><a ui-sref="helpPage">Help</a></li>
            </ul>
        </div>
        @else
            <% hideSidebar() %>
        @endif
    </div>
    <div id="page-content-wrapper">
        @yield('content')
    </div>

    <!-- JavaScripts Offline -->
    <script src="{{ asset('bower_components/angular/angular.js')}}"></script>
    <script src="{{ asset('bower_components/firebase/firebase.js') }}"></script>
    <script src="{{ asset('bower_components/angularfire/dist/angularfire.js') }}"></script>
    <script src="{{ asset('bower_components/angular-sanitize/angular-sanitize.js')}}"></script>
    <script src="{{ asset('bower_components/angular-ui-router/release/angular-ui-router.js') }}"></script>
    <script src="{{ asset('bower_components/chart.js/dist/chart.js') }}"></script>
    <script src="{{ asset('bower_components/lodash/dist/lodash.js') }}"></script>
    <script src="{{ asset('js/app.js')}}"></script>
    <script src="{{ asset('js/controllers.js')}}"></script>
    <script src="{{ asset('js/models.js')}}"></script>
    <script src="{{ asset('js/services.js')}}"></script>

  
    <!-- JavaScripts Online-->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js" integrity="sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script> -->
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}
</body>
</html>



