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
		    array('name' => 'Spelling Error'),
		    array('name' => 'Parenthesis Matching'),
		    array('name' => 'Regular Expression Error'),
		    array('name' => 'Runtime Error'),
		));
    }
}
