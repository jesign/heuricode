<<<<<<< HEAD
process.env.DISABLE_NOTIFIER = true;
=======
>>>>>>> 7e7076e8341326d27cd9fd51e65432635ae5711c
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
    	'custom.js'
    	], 'public/js/custom.js');
    mix.scripts([ 
    	'controllers/userController.js',
        'controllers/navController.js',
        'controllers/codeController.js',
        'controllers/problemController.js'
    	], 'public/js/controllers.js');
    mix.scripts([
        'models/userModel.js',
        'models/codeModel.js',
        'models/problemModel.js'

        ], 'public/js/models.js');
    mix.version([
        'js/app.js',
        'js/models.js',
        'js/controllers.js'
        ]);
});


