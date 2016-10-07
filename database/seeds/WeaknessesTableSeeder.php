<?php

use Illuminate\Database\Seeder;

class WeaknessesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('weaknesses')->insert(array(
		    array('name' => 'Selection Control Structure'),
		    array('name' => 'Repetition Control Structure'),
		    array('name' => 'Arrays'),
		));
    }
}