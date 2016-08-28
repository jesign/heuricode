process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    
    mix.scripts([
    	'app.js'
    	], 'public/js/app.js');
	mix.scripts([
        'services/rankService.js',
        'services/codingService.js',
        'services/errorService.js'
        ], 'public/js/services.js');
	mix.scripts([
    	'angular-beforeunload.js'
    	], 'public/js/angular-beforeunload.js');
    mix.scripts([ 
        'controllers/multiplayerController.js',
        'controllers/globalController.js',
    	'controllers/userController.js',
        'controllers/navController.js',
        'controllers/codeController.js',
        'controllers/problemController.js',
        'controllers/resultController.js'
    	], 'public/js/controllers.js');
    mix.scripts([
        'models/userModel.js',
        'models/codeModel.js',
        'models/problemModel.js'

        ], 'public/js/models.js');

    mix.styles([
        "MyStyle.css",
        "loading.css"
    ], 'public/build/css/all.css');

    mix.version([
        'js/app.js',
        'js/models.js',
        'js/controllers.js'
        ]);
});


