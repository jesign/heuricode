<?php

use Illuminate\Database\Seeder;

class ErrorTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('error_types')->insert(array(
		    array('name' => 'Missing Semicolon'),
		    array('name' => 'Scoping Error'),
            array('name' => 'Parenthesis Matching'),
		    array('name' => 'Initializer Error'),
		    
		));
    }
}
