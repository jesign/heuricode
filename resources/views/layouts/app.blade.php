<!DOCTYPE html>
<html lang="en" ng-app="myApp" >
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
    <link rel="icon" href="{{ asset('img/heuricode-small.png') }}">
    <title>HeuriCode</title>
    
    <!-- Styles -->
    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}
    <link rel="stylesheet" type="text/css" href="{{ asset('build/css/all.css') }}"  media="screen,projection">
    <link rel="stylesheet" href="{{ asset('codemirror-5.19.0/lib/codemirror.css') }}">
    <link rel="stylesheet" href="{{ asset('codemirror-5.19.0/theme/material.css') }}">
            <!-- Materializecss -->
      <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
    
    <link type="text/css" rel="stylesheet" href="{{ asset('bower_components/materialize/dist/css/materialize.min.css') }}"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    {{-- <style type="text/css" media="screen">
        #editor { 
            position: absolute;
            margin-top: 50px;
            margin-left: 15px;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    </style> --}}
    {{-- CDNs styles --}}
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css"> --}}    

    <script>var baseUrl = "{{ url('/') }}/";</script>
</head>
<body id="app-layout" ng-controller="globalController" class="teal lighten-5" ng-cloak>
    <div ng-controller="navController">
        <!--  put toolbar here... -->
        <div class="navbar-fixed ">
            <nav class="teal lighten-1">
              <div class="nav-wrapper">
                <img id="logo" src="{{ asset('img/heuricode-small.png') }}" >
                <a class="brand-logo" style="cursor: pointer;" ng-click="toggleSidebar()">
                    HeuriCode
                </a>
                <ul class="right hide-on-med-and-down">
                    @if (Auth::guest())
                        <li><a href="{{ url('/login') }}">Login</a></li>
                        <li><a href="{{ url('/register') }}">Register</a></li>
                    @endif
                    <li>
                    </li>
                </ul>
              </div>
            </nav>
        </div>
        @if(!Auth::guest())
            <a href="#" data-activates="slide-out" class="btn-floating right btn-large button-collapse" style="right: 10px; margin: 10px; position: fixed;">
                <i class="material-icons">menu</i>
            </a>
            <ul id="slide-out" class="side-nav teal lighten-3">
                <li>
                    <div class="userView " style="height: 200px; background-color: #b2dfdb; padding: 10px">
                        <center>
                            <img style="height: 180px;" src="{{ asset('img/HeuricodeLogo-250.png') }}">
                        </center>
                    </div>
                </li>
                <li><strong><a class="white-text">{{ Auth::user()->name }}</a></strong></li>
                <li><div class="divider"></div></li>
                <li>
                    <a ui-sref="problemPage"><i class="material-icons">perm_identity</i>Self-Train</a>
                </li>
                <li>
                    <a ng-show="competent" ui-sref="multiplayerPage">
                        <i class="material-icons">supervisor_account</i>Find Match
                    </a>
                    <a title="will be unlocked at level 11 in all subject area." ng-hide="competent" class="red lighten-3">
                        <i class="material-icons">supervisor_account</i>Find Match(Locked)
                    </a>
                </li>
                <li><a ui-sref="statProgPage"><i class="material-icons">trending_up</i>Statistical Progress</a></li>
                <li><a ui-sref="errorHistoryPage"><i class="material-icons">trending_up</i>Error History</a></li>
                <li><a ui-sref="badgesPage"><i class="material-icons">stars</i>Badges</a></li>
                <li><a href="{{ url('/logout') }}"><i class="material-icons">power_settings_new</i>Logout</a></li>
            </ul>
        @endif
    </div>
    <div>
        @yield('content')
    </div>

    
    <!-- JavaScripts Offline -->
     <script src="{{ asset('bower_components/jquery/dist/jquery.js')}}"></script>
     <script src="{{ asset('bower_components/angular/angular.js')}}"></script>
    <script src="{{ asset('bower_components/firebase/firebase.js') }}"></script>
    <script src="{{ asset('bower_components/angularfire/dist/angularfire.js') }}"></script>
    <script src="{{ asset('bower_components/angular-sanitize/angular-sanitize.js')}}"></script>
    <script src="{{ asset('bower_components/angular-ui-router/release/angular-ui-router.js') }}"></script>
    <script src="{{ asset('bower_components/chart.js/dist/Chart.js') }}"></script>
    <script src="{{ asset('bower_components/lodash/dist/lodash.js') }}"></script>
    
    <script type="text/javascript" src="{{ asset('bower_components/materialize/dist/js/materialize.min.js') }}"></script>

    <!--Import jQuery before materialize.js-->
    <!-- CDNs -->
    {{-- <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
    <!-- AngularJS -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>

    <!-- Firebase -->
    <script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>

    <!-- AngularFire -->
    <script src="https://cdn.firebase.com/libs/angularfire/2.0.2/angularfire.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.5.8/angular-sanitize.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/lodash/4.16.4/lodash.min.js"></script>
 --}}
    {{-- local js --}}
    <script src="{{ asset('js/app.js')}}"></script>
    <script src="{{ asset('js/controllers.js')}}"></script>
    <script src="{{ asset('js/models.js')}}"></script>
    <script src="{{ asset('js/services.js')}}"></script>
    <script src="{{ asset('codemirror-5.19.0/lib/codemirror.js') }}"></script>
    <script src="{{ asset('codemirror-5.19.0/mode/javascript/javascript.js') }}"></script> 
    
    
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}
</body>
</html>
